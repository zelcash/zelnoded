import Vue from 'vue';
import {
  BVConfigPlugin,
  LayoutPlugin,
  ToastPlugin,
  ModalPlugin,
} from 'bootstrap-vue';

import router from './router';
import store from './store';
import App from './App.vue';

// Global Components
import './global-components';

// 3rd party plugins
import '@axios';
import '@/libs/portal-vue';
import '@/libs/toastification';

// BSV Plugin Registration
// Supply complete config to the BVConfig helper plugin
Vue.use(BVConfigPlugin, {
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
});
Vue.use(LayoutPlugin);
Vue.use(ToastPlugin);
Vue.use(ModalPlugin);

// Composition API
// Vue.use(VueCompositionAPI);

// import core styles
import '@core/scss/core.scss';

// import assets styles
import '@/assets/scss/style.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
