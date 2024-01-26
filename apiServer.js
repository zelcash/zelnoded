global.userconfig = require('./config/userconfig');

process.env.NODE_CONFIG_DIR = `${__dirname}/ZelBack/config/`;
// Flux configuration
const config = require('config');
const fs = require('fs');
const https = require('https');
const path = require('path');
const util = require('util');
const nodecmd = require('node-cmd');
const app = require('./ZelBack/src/lib/server');
const log = require('./ZelBack/src/lib/log');
const socket = require('./ZelBack/src/lib/socket');
const serviceManager = require('./ZelBack/src/services/serviceManager');
const upnpService = require('./ZelBack/src/services/upnpService');
const fpcService = require('./ZelBack/src/services/fluxportControllerService');

const hash = require('object-hash');
const { watch } = require('fs/promises');

const cmdAsync = util.promisify(nodecmd.get);

let initialHash = hash(fs.readFileSync(path.join(__dirname, '/config/userconfig.js')));

function validIpv4Address(ip) {
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  if (ipv4Regex.test(ip)) {
    const parts = ip.split('.');
    // eslint-disable-next-line no-restricted-syntax
    for (const part of parts) {
      if (parseInt(part, 10) > 255) {
        return false;
      }
    }
    return true;
  }
  return false;
}

function validateTags() {
  const tags = userconfig.initial.tags || {};

  if (tags && tags.constructor !== Object) {
    log.error('Error tags must be a mapping with string keys and values as string, number or boolean.');
    return {}
  }

  for (const [key, value] of Object.entries(tags)) {
    const valuePassed = typeof value === 'string' || value instanceof String
      || typeof value === 'number' || value instanceof Number
      || typeof value === 'boolean' || value instanceof Boolean;

    if (!(typeof key === 'string' || key instanceof String) || !valuePassed) {
      log.error('Tag must be a string and value must be a boolean, string or number, Skipping.');
      delete tags[key];
    }
  };

  return tags;
}

async function waitForApiPortAndRouterIp(autoUpnp) {
  if (!autoUpnp) {
    // if initial is undefined or empty string, user server.apiport
    const apiPort = +userconfig.initial.apiport || +config.server.apiport;
    const routerIp = userconfig.initial.routerIP;
    if (routerIp && !validIpv4Address(routerIp)) {
      log.error(`Router IP: ${routerIp} must be a valid ipv4 address.`);
      process.exit();
    }
    return [apiPort, routerIp];
  }

  if (await fpcService.startGossipServer()) {
    const apiPort = fpcService.getApiPort();
    const routerIp = fpcService.getRouterIp();
    return Promise.all([apiPort, routerIp]);
  }

  log.error('Error starting GossipServer for autoUPnP. Unable to get collateral '
    + 'information, or unable to adjust firewall. Shutting down');
  return process.exit();
}

async function loadUpnpIfSupported(autoUpnp) {
  let upnpSupported = false;
  let upnpSetupComplete = false;

  const upnpRequested = Boolean(
    autoUpnp
    || userconfig.initial.routerIP
    || (userconfig.initial.apiport && userconfig.initial.apiport !== config.server.apiport)
  );

  // Prior, this would run if `apiport` was set in config file. However, even if this
  // wasn't set, after flux uppdated pgp or something, it would write the server default of 16127 to
  // the config file, effectively making this always run as apiport was always true. So lets just
  // run it by default
  upnpSupported = await upnpService.verifyUPNPsupport();

  if (upnpSupported) {
    upnpSetupComplete = await upnpService.setupUPNP();
  }

  if (upnpSetupComplete || !upnpRequested) return;

  if (!upnpSupported) {
    log.error(`Flux port ${userconfig.computed.apiPort} specified but UPnP failed to verify support. Shutting down.`);
  }
  else if (!upnpSetupComplete) {
    log.error(`Flux port ${userconfig.computed.apiPort} specified but UPnP failed to map to api or home port. Shutting down.`);
  }

  process.exit();
}

async function SetupPortsUpnpAndComputed() {
  userconfig.computed = {};
  userconfig.computed.development = userconfig.initial.development || false;

  const tags = validateTags();
  const autoUpnp = userconfig.initial.upnp || false;

  const homeDirPath = path.join(__dirname, '../');
  const newBenchmarkPath = path.join(homeDirPath, '.fluxbenchmark');
  const oldBenchmarkPath = path.join(homeDirPath, '.zelbenchmark');
  const isNewBenchPath = fs.existsSync(newBenchmarkPath);
  const benchmarkPath = isNewBenchPath ? newBenchmarkPath : oldBenchmarkPath;
  const benchmarkFile = isNewBenchPath ? 'fluxbench.conf' : 'zelbench.conf';
  const benchmarkConfigFilePath = path.join(benchmarkPath, benchmarkFile);

  userconfig.computed.benchmarkConfigFilePath = benchmarkConfigFilePath;
  userconfig.computed.benchmarkPath = benchmarkPath;
  userconfig.computed.isNewBenchPath = isNewBenchPath;

  userconfig.computed.homeDirPath = homeDirPath;
  userconfig.computed.appRootPath = __dirname;

  userconfig.computed.tags = tags;

  const [apiPort, routerIp] = await waitForApiPortAndRouterIp(autoUpnp);

  if (!config.server.allowedPorts.includes(apiPort)) {
    log.error(`Flux port ${apiPort} is not supported. Shutting down.`);
    process.exit();
  }

  userconfig.computed.homePort = apiPort - 1;
  userconfig.computed.apiPort = apiPort;
  userconfig.computed.apiPortSsl = apiPort + 1;
  userconfig.computed.syncthingPort = apiPort + 2;

  userconfig.computed.routerIp = routerIp;

  await loadUpnpIfSupported(autoUpnp);
}

async function configReload() {
  try {
    const watcher = watch(path.join(__dirname, '/config'));
    // eslint-disable-next-line
    for await (const event of watcher) {
      if (event.eventType === 'change' && event.filename === 'userconfig.js') {
        const hashCurrent = hash(fs.readFileSync(path.join(__dirname, '/config/userconfig.js')));
        if (hashCurrent === initialHash) {
          return;
        }
        initialHash = hashCurrent;
        log.info(`Config file changed, reloading ${event.filename}...`);
        delete require.cache[require.resolve('./config/userconfig')];
        // eslint-disable-next-line
        userconfig = require('./config/userconfig');
        await SetupPortsUpnpAndComputed();
      }
    }
  } catch (error) {
    log.error(`Error watching files: ${error}`);
  }
}

/**
 *
 * @returns {Promise<void>}
 */
async function initiate() {
  await SetupPortsUpnpAndComputed();

  setInterval(async () => {
    configReload();
  }, 2 * 1000);

  const { apiPort } = userconfig.computed;
  const server = app.listen(apiPort, () => {
    log.info(`Flux listening on port ${apiPort}!`);
    serviceManager.startFluxFunctions();
  });

  socket.initIO(server);

  try {
    const certExists = fs.existsSync(path.join(__dirname, './certs/v1.key'));
    if (!certExists) {
      const nodedpath = path.join(__dirname, './helpers');
      const exec = `cd ${nodedpath} && bash createSSLcert.sh`;
      await cmdAsync(exec);
    }
    const key = fs.readFileSync(path.join(__dirname, './certs/v1.key'), 'utf8');
    const cert = fs.readFileSync(path.join(__dirname, './certs/v1.crt'), 'utf8');
    const credentials = { key, cert };
    const httpsServer = https.createServer(credentials, app);
    const { apiPortSsl } = userconfig.computed;
    httpsServer.listen(apiPortSsl, () => {
      log.info(`Flux https listening on port ${apiPortSsl}!`);
    });
  } catch (error) {
    log.error(error);
  }
}

module.exports = {
  initiate,
  validIpv4Address,
  validateTags,
  waitForApiPortAndRouterIp,
  loadUpnpIfSupported,
};
