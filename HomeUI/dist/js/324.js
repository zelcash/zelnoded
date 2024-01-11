"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[324],{87156:(e,t,a)=>{a.d(t,{Z:()=>m});var r=function(){var e=this,t=e._self._c;return t("b-popover",{ref:"popover",attrs:{target:`${e.target}`,triggers:"click blur",show:e.show,placement:"auto",container:"my-container","custom-class":`confirm-dialog-${e.width}`},on:{"update:show":function(t){e.show=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("div",{staticClass:"d-flex justify-content-between align-items-center"},[t("span",[e._v(e._s(e.title))]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:function(t){e.show=!1}}},[t("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[e._v("×")])])],1)]},proxy:!0}])},[t("div",{staticClass:"text-center"},[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:function(t){e.show=!1}}},[e._v(" "+e._s(e.cancelButton)+" ")]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:function(t){return e.confirm()}}},[e._v(" "+e._s(e.confirmButton)+" ")])],1)])},n=[],s=a(15193),o=a(72417),i=a(20266);const d={components:{BButton:s.T,BPopover:o.x},directives:{Ripple:i.Z},props:{target:{type:String,required:!0},title:{type:String,required:!1,default:"Are You Sure?"},cancelButton:{type:String,required:!1,default:"Cancel"},confirmButton:{type:String,required:!0},width:{type:Number,required:!1,default:300}},data(){return{show:!1}},methods:{confirm(){this.show=!1,this.$emit("confirm")}}},l=d;var u=a(1001),c=(0,u.Z)(l,r,n,!1,null,null,null);const m=c.exports},90410:(e,t,a)=>{a.d(t,{Z:()=>f});var r=function(){var e=this,t=e._self._c;return t("b-input-group",[t("b-input-group-prepend",[t("b-button",{staticClass:"py-0",attrs:{variant:"outline-dark",size:"sm"},on:{click:function(t){return e.valueChange(e.value-1)}}},[t("b-icon",{attrs:{icon:"dash","font-scale":"1.6"}})],1)],1),t("b-form-input",{staticClass:"border-secondary text-center",attrs:{id:e.id,size:e.size,value:e.value,type:"number",min:"0",number:""},on:{update:e.valueChange}}),t("b-input-group-append",[t("b-button",{staticClass:"py-0",attrs:{variant:"outline-dark",size:"sm"},on:{click:function(t){return e.valueChange(e.value+1)}}},[t("b-icon",{attrs:{icon:"plus","font-scale":"1.6"}})],1)],1)],1)},n=[],s=a(43022),o=a(15193),i=a(22183),d=a(72466),l=a(4060),u=a(27754),c=a(22418);const m={name:"InputSpinButton",components:{BIcon:s.H,BButton:o.T,BFormInput:i.e,BIconDash:d.Loc,BIconPlus:d.s3j,BInputGroup:l.w,BInputGroupPrepend:u.P,BInputGroupAppend:c.B},props:{id:{type:String,required:!0},size:{type:String,required:!1,default:"md",validator(e){return["sm","md","lg"].includes(e)}},value:{type:Number,required:!0}},methods:{valueChange(e){e<=0?this.$emit("input",0):this.$emit("input",e)}}},g=m;var h=a(1001),p=(0,h.Z)(g,r,n,!1,null,"2f5aba03",null);const f=p.exports},56481:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var r=function(){var e=this,t=e._self._c;return t("div",[t("b-row",{staticClass:"match-height"},[t("b-col",{attrs:{sm:"12",lg:"6"}},[t("b-card",{attrs:{title:"Daemon"}},[t("b-card-text",{staticClass:"mb-3"},[e._v(" An easy way to update your Flux daemon to the latest version. Flux will be automatically started once update is done. ")]),t("div",{staticClass:"text-center"},[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:"update-daemon",variant:"success","aria-label":"Update Daemon"}},[e._v(" Update Daemon ")]),t("confirm-dialog",{attrs:{target:"update-daemon","confirm-button":"Update Daemon"},on:{confirm:function(t){return e.updateDaemon()}}})],1)],1)],1),t("b-col",{attrs:{sm:"12",lg:"6"}},[t("b-card",{attrs:{title:"Manage Process"}},[t("b-card-text",{staticClass:"mb-3"},[e._v(" Here you can manage your Flux daemon process. ")]),t("div",{staticClass:"text-center"},[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mx-1 mb-1",attrs:{id:"start-daemon",variant:"success","aria-label":"Start Daemon"}},[e._v(" Start Daemon ")]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mx-1 mb-1",attrs:{id:"stop-daemon",variant:"success","aria-label":"Stop Daemon"}},[e._v(" Stop Daemon ")]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mx-1 mb-1",attrs:{id:"restart-daemon",variant:"success","aria-label":"Restart Daemon"}},[e._v(" Restart Daemon ")]),t("confirm-dialog",{attrs:{target:"start-daemon","confirm-button":"Start Daemon"},on:{confirm:function(t){return e.startDaemon()}}}),t("confirm-dialog",{attrs:{target:"stop-daemon","confirm-button":"Stop Daemon"},on:{confirm:function(t){return e.stopDaemon()}}}),t("confirm-dialog",{attrs:{target:"restart-daemon","confirm-button":"Restart Daemon"},on:{confirm:function(t){return e.restartDaemon()}}})],1)],1)],1)],1),t("b-row",{staticClass:"match-height"},[t("b-col",{attrs:{sm:"12",lg:"8"}},[t("b-card",{attrs:{title:"Rescan"}},[t("b-card-text",{staticClass:"mb-2"},[e._v(" Choose a blockheight to rescan Daemon from and click on Rescan Daemon to begin rescanning. ")]),t("div",{staticClass:"mb-1",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[t("b-card-text",{staticClass:"mr-1 mb-0"},[e._v(" Block Height ")]),t("input-spin-button",{staticStyle:{width:"250px"},attrs:{id:"sb-vertical"},model:{value:e.rescanDaemonHeight,callback:function(t){e.rescanDaemonHeight=t},expression:"rescanDaemonHeight"}}),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mx-1",staticStyle:{width:"250px"},attrs:{id:"rescan-daemon",variant:"success","aria-label":"Rescan Daemon"}},[e._v(" Rescan Daemon ")]),t("confirm-dialog",{attrs:{target:"rescan-daemon","confirm-button":"Rescan Daemon"},on:{confirm:function(t){return e.rescanDaemon()}}})],1)],1)],1),t("b-col",{attrs:{sm:"12",lg:"4"}},[t("b-card",{attrs:{title:"Reindex"}},[t("b-card-text",{staticClass:"mb-2"},[e._v(" This option reindexes Flux blockchain data. It will take several hours to finish the operation. ")]),t("div",{staticClass:"text-center"},[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:"reindex-daemon",variant:"success","aria-label":"Reindex Daemon"}},[e._v(" Reindex Daemon ")]),t("confirm-dialog",{attrs:{target:"reindex-daemon","confirm-button":"Reindex Daemon"},on:{confirm:function(t){return e.reindexDaemon()}}})],1)],1)],1)],1)],1)},n=[],s=a(23215),o=a(26253),i=a(50725),d=a(64206),l=a(15193),u=a(34547),c=a(20266),m=a(9669),g=a.n(m),h=a(87156),p=a(90410),f=a(27616),b=a(39055);const x=a(80129),v={components:{BCard:s._,BRow:o.T,BCol:i.l,BCardText:d.j,BButton:l.T,InputSpinButton:p.Z,ConfirmDialog:h.Z,ToastificationContent:u.Z},directives:{Ripple:c.Z},data(){return{rescanDaemonHeight:0}},mounted(){this.checkDaemonVersion()},methods:{checkDaemonVersion(){f.Z.getInfo().then((e=>{console.log(e);const t=e.data.data.version;g().get("https://raw.githubusercontent.com/runonflux/flux/master/helpers/daemoninfo.json").then((e=>{console.log(e),e.data.version!==t?this.showToast("warning","Daemon requires an update!"):this.showToast("success","Daemon is up to date.")})).catch((e=>{console.log(e),this.showToast("danger","Error verifying recent version")}))})).catch((e=>{console.log(e),this.showToast("danger","Error connecting to Daemon")}))},updateDaemon(){f.Z.getInfo().then((e=>{console.log(e);const t=e.data.data.version;g().get("https://raw.githubusercontent.com/runonflux/flux/master/helpers/daemoninfo.json").then((e=>{if(console.log(e),e.data.version!==t){const e=localStorage.getItem("zelidauth"),t=x.parse(e);console.log(t),this.showToast("warning","Daemon is now updating in the background"),b.Z.updateDaemon(e).then((e=>{console.log(e),"error"===e.data.status&&this.showToast("danger",e.data.data.message||e.data.data)})).catch((e=>{console.log(e),console.log(e.code),this.showToast("danger",e.toString())}))}else this.showToast("success","Daemon is already up to date")})).catch((e=>{console.log(e),this.showToast("danger","Error verifying recent version")}))})).catch((e=>{console.log(e),this.showToast("danger","Error connecting to Daemon")}))},startDaemon(){this.showToast("warning","Daemon will start");const e=localStorage.getItem("zelidauth");f.Z.start(e).then((e=>{"error"===e.data.status?this.showToast("danger",e.data.data.message||e.data.data):this.showToast("success",e.data.data.message||e.data.data)})).catch((e=>{console.log(e),this.showToast("danger","Error while trying to start Daemon")}))},stopDaemon(){this.showToast("warning","Daemon will be stopped");const e=localStorage.getItem("zelidauth");f.Z.stopDaemon(e).then((e=>{"error"===e.data.status?this.showToast("danger",e.data.data.message||e.data.data):this.showToast("success",e.data.data.message||e.data.data)})).catch((e=>{console.log(e),this.showToast("danger","Error while trying to stop Daemon")}))},restartDaemon(){this.showToast("warning","Daemon will now restart");const e=localStorage.getItem("zelidauth");f.Z.restart(e).then((e=>{"error"===e.data.status?this.showToast("danger",e.data.data.message||e.data.data):this.showToast("success",e.data.data.message||e.data.data)})).catch((e=>{console.log(e),this.showToast("danger","Error while trying to restart Daemon")}))},rescanDaemon(){this.showToast("warning","Daemon will now rescan. This will take up to an hour.");const e=localStorage.getItem("zelidauth"),t=this.rescanDaemonHeight>0?this.rescanDaemonHeight:0;f.Z.rescanDaemon(e,t).then((e=>{"error"===e.data.status?this.showToast("danger",e.data.data.message||e.data.data):this.showToast("success",e.data.data.message||e.data.data)})).catch((e=>{console.log(e),this.showToast("danger","Error while trying to rescan Daemon")}))},reindexDaemon(){this.showToast("warning","Daemon will now reindex. This will take several hours.");const e=localStorage.getItem("zelidauth");b.Z.reindexDaemon(e).then((e=>{"error"===e.data.status?this.showToast("danger",e.data.data.message||e.data.data):this.showToast("success",e.data.data.message||e.data.data)})).catch((e=>{console.log(e),this.showToast("danger","Error while trying to reindex Daemon")}))},showToast(e,t,a="InfoIcon"){this.$toast({component:u.Z,props:{title:t,icon:a,variant:e}})}}},w=v;var Z=a(1001),D=(0,Z.Z)(w,r,n,!1,null,null,null);const k=D.exports},27616:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(80914);const n={help(){return(0,r.Z)().get("/daemon/help")},helpSpecific(e){return(0,r.Z)().get(`/daemon/help/${e}`)},getInfo(){return(0,r.Z)().get("/daemon/getinfo")},getFluxNodeStatus(){return(0,r.Z)().get("/daemon/getzelnodestatus")},getRawTransaction(e,t){return(0,r.Z)().get(`/daemon/getrawtransaction/${e}/${t}`)},listFluxNodes(){return(0,r.Z)().get("/daemon/listzelnodes")},viewDeterministicFluxNodeList(){return(0,r.Z)().get("/daemon/viewdeterministiczelnodelist")},getFluxNodeCount(){return(0,r.Z)().get("/daemon/getzelnodecount")},getStartList(){return(0,r.Z)().get("/daemon/getstartlist")},getDOSList(){return(0,r.Z)().get("/daemon/getdoslist")},fluxCurrentWinner(){return(0,r.Z)().get("/daemon/fluxcurrentwinner")},getBenchmarks(){return(0,r.Z)().get("/daemon/getbenchmarks")},getBenchStatus(){return(0,r.Z)().get("/daemon/getbenchstatus")},startBenchmark(e){return(0,r.Z)().get("/daemon/startbenchmark",{headers:{zelidauth:e}})},stopBenchmark(e){return(0,r.Z)().get("/daemon/stopbenchmark",{headers:{zelidauth:e}})},getBlockchainInfo(){return(0,r.Z)().get("/daemon/getblockchaininfo")},getMiningInfo(){return(0,r.Z)().get("/daemon/getmininginfo")},getNetworkInfo(){return(0,r.Z)().get("/daemon/getnetworkinfo")},validateAddress(e,t){return(0,r.Z)().get(`/daemon/validateaddress/${t}`,{headers:{zelidauth:e}})},getWalletInfo(e){return(0,r.Z)().get("/daemon/getwalletinfo",{headers:{zelidauth:e}})},listFluxNodeConf(e){return(0,r.Z)().get("/daemon/listzelnodeconf",{headers:{zelidauth:e}})},start(e){return(0,r.Z)().get("/daemon/start",{headers:{zelidauth:e}})},restart(e){return(0,r.Z)().get("/daemon/restart",{headers:{zelidauth:e}})},stopDaemon(e){return(0,r.Z)().get("/daemon/stop",{headers:{zelidauth:e}})},rescanDaemon(e,t){return(0,r.Z)().get(`/daemon/rescanblockchain/${t}`,{headers:{zelidauth:e}})},getBlock(e,t){return(0,r.Z)().get(`/daemon/getblock/${e}/${t}`)},tailDaemonDebug(e){return(0,r.Z)().get("/flux/taildaemondebug",{headers:{zelidauth:e}})},justAPI(){return(0,r.Z)()},cancelToken(){return r.S}}},39055:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(80914);const n={softUpdateFlux(e){return(0,r.Z)().get("/flux/softupdateflux",{headers:{zelidauth:e}})},softUpdateInstallFlux(e){return(0,r.Z)().get("/flux/softupdatefluxinstall",{headers:{zelidauth:e}})},updateFlux(e){return(0,r.Z)().get("/flux/updateflux",{headers:{zelidauth:e}})},hardUpdateFlux(e){return(0,r.Z)().get("/flux/hardupdateflux",{headers:{zelidauth:e}})},rebuildHome(e){return(0,r.Z)().get("/flux/rebuildhome",{headers:{zelidauth:e}})},updateDaemon(e){return(0,r.Z)().get("/flux/updatedaemon",{headers:{zelidauth:e}})},reindexDaemon(e){return(0,r.Z)().get("/flux/reindexdaemon",{headers:{zelidauth:e}})},updateBenchmark(e){return(0,r.Z)().get("/flux/updatebenchmark",{headers:{zelidauth:e}})},getFluxVersion(){return(0,r.Z)().get("/flux/version")},broadcastMessage(e,t){const a=t,n={headers:{zelidauth:e}};return(0,r.Z)().post("/flux/broadcastmessage",JSON.stringify(a),n)},connectedPeers(){return(0,r.Z)().get(`/flux/connectedpeers?timestamp=${(new Date).getTime()}`)},connectedPeersInfo(){return(0,r.Z)().get(`/flux/connectedpeersinfo?timestamp=${(new Date).getTime()}`)},incomingConnections(){return(0,r.Z)().get(`/flux/incomingconnections?timestamp=${(new Date).getTime()}`)},incomingConnectionsInfo(){return(0,r.Z)().get(`/flux/incomingconnectionsinfo?timestamp=${(new Date).getTime()}`)},addPeer(e,t){return(0,r.Z)().get(`/flux/addpeer/${t}`,{headers:{zelidauth:e}})},removePeer(e,t){return(0,r.Z)().get(`/flux/removepeer/${t}`,{headers:{zelidauth:e}})},removeIncomingPeer(e,t){return(0,r.Z)().get(`/flux/removeincomingpeer/${t}`,{headers:{zelidauth:e}})},adjustCruxID(e,t){return(0,r.Z)().get(`/flux/adjustcruxid/${t}`,{headers:{zelidauth:e}})},adjustKadena(e,t,a){return(0,r.Z)().get(`/flux/adjustkadena/${t}/${a}`,{headers:{zelidauth:e}})},adjustRouterIP(e,t){return(0,r.Z)().get(`/flux/adjustrouterip/${t}`,{headers:{zelidauth:e}})},adjustBlockedPorts(e,t){const a={blockedPorts:t},n={headers:{zelidauth:e}};return(0,r.Z)().post("/flux/adjustblockedports",JSON.stringify(a),n)},adjustAPIPort(e,t){return(0,r.Z)().get(`/flux/adjustapiport/${t}`,{headers:{zelidauth:e}})},adjustBlockedRepositories(e,t){const a={blockedRepositories:t},n={headers:{zelidauth:e}};return(0,r.Z)().post("/flux/adjustblockedrepositories",JSON.stringify(a),n)},getCruxID(){const e={headers:{"x-apicache-bypass":!0}};return(0,r.Z)().get("/flux/cruxid",e)},getKadenaAccount(){const e={headers:{"x-apicache-bypass":!0}};return(0,r.Z)().get("/flux/kadena",e)},getRouterIP(){const e={headers:{"x-apicache-bypass":!0}};return(0,r.Z)().get("/flux/routerip",e)},getBlockedPorts(){const e={headers:{"x-apicache-bypass":!0}};return(0,r.Z)().get("/flux/blockedports",e)},getAPIPort(){const e={headers:{"x-apicache-bypass":!0}};return(0,r.Z)().get("/flux/apiport",e)},getBlockedRepositories(){const e={headers:{"x-apicache-bypass":!0}};return(0,r.Z)().get("/flux/blockedrepositories",e)},getMarketPlaceURL(){return(0,r.Z)().get("/flux/marketplaceurl")},getZelid(){const e={headers:{"x-apicache-bypass":!0}};return(0,r.Z)().get("/flux/zelid",e)},getStaticIpInfo(){return(0,r.Z)().get("/flux/staticip")},restartFluxOS(e){const t={headers:{zelidauth:e,"x-apicache-bypass":!0}};return(0,r.Z)().get("/flux/restart",t)},tailFluxLog(e,t){return(0,r.Z)().get(`/flux/tail${e}log`,{headers:{zelidauth:t}})},justAPI(){return(0,r.Z)()},cancelToken(){return r.S}}}}]);