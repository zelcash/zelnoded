"use strict";(self["webpackChunkflux"]=self["webpackChunkflux"]||[]).push([[9389],{34547:(e,t,a)=>{a.d(t,{Z:()=>c});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"toastification"},[t("div",{staticClass:"d-flex align-items-start"},[t("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:e.variant,size:"1.8rem"}},[t("feather-icon",{attrs:{icon:e.icon,size:"15"}})],1),t("div",{staticClass:"d-flex flex-grow-1"},[t("div",[e.title?t("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${e.variant}`,domProps:{textContent:e._s(e.title)}}):e._e(),e.text?t("small",{staticClass:"d-inline-block text-body",domProps:{textContent:e._s(e.text)}}):e._e()]),t("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(t){return e.$emit("close-toast")}}},[e.hideClose?e._e():t("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},r=[],o=a(47389);const s={components:{BAvatar:o.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},i=s;var l=a(1001),d=(0,l.Z)(i,n,r,!1,null,"22d964ca",null);const c=d.exports},39389:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=function(){var e=this,t=e._self._c;return t("b-card",[t("div",[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"ml-1",attrs:{id:"restart-daemon",variant:"outline-primary",size:"md"}},[e._v(" Restart Daemon ")]),t("b-popover",{ref:"popover",attrs:{target:"restart-daemon",triggers:"click",show:e.popoverShow,placement:"auto",container:"my-container"},on:{"update:show":function(t){e.popoverShow=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("div",{staticClass:"d-flex justify-content-between align-items-center"},[t("span",[e._v("Are You Sure?")]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:e.onClose}},[t("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[e._v("×")])])],1)]},proxy:!0}])},[t("div",[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:e.onClose}},[e._v(" Cancel ")]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:e.onOk}},[e._v(" Restart Daemon ")])],1)]),t("b-modal",{attrs:{id:"modal-center",centered:"",title:"Daemon Restart","ok-only":"","ok-title":"OK"},model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[t("b-card-text",[e._v(" The daemon will now be restarted. ")])],1)],1)])},r=[],o=a(86855),s=a(15193),i=a(53862),l=a(31220),d=a(64206),c=a(34547),u=a(20266),m=a(27616);const g={components:{BCard:o._,BButton:s.T,BPopover:i.x,BModal:l.N,BCardText:d.j,ToastificationContent:c.Z},directives:{Ripple:u.Z},data(){return{popoverShow:!1,modalShow:!1}},methods:{onClose(){this.popoverShow=!1},onOk(){this.popoverShow=!1,this.modalShow=!0;const e=localStorage.getItem("zelidauth");m.Z.restart(e).then((e=>{this.$toast({component:c.Z,props:{title:e.data.data.message||e.data.data,icon:"InfoIcon",variant:"success"}})})).catch((()=>{this.$toast({component:c.Z,props:{title:"Error while trying to restart Daemon",icon:"InfoIcon",variant:"danger"}})}))}}},p=g;var h=a(1001),v=(0,h.Z)(p,n,r,!1,null,null,null);const f=v.exports},27616:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(80914);const r={help(){return(0,n.Z)().get("/daemon/help")},helpSpecific(e){return(0,n.Z)().get(`/daemon/help/${e}`)},getInfo(){return(0,n.Z)().get("/daemon/getinfo")},getFluxNodeStatus(){return(0,n.Z)().get("/daemon/getzelnodestatus")},getRawTransaction(e,t){return(0,n.Z)().get(`/daemon/getrawtransaction/${e}/${t}`)},listFluxNodes(){return(0,n.Z)().get("/daemon/listzelnodes")},viewDeterministicFluxNodeList(){return(0,n.Z)().get("/daemon/viewdeterministiczelnodelist")},getFluxNodeCount(){return(0,n.Z)().get("/daemon/getzelnodecount")},getStartList(){return(0,n.Z)().get("/daemon/getstartlist")},getDOSList(){return(0,n.Z)().get("/daemon/getdoslist")},fluxCurrentWinner(){return(0,n.Z)().get("/daemon/fluxcurrentwinner")},getBenchmarks(){return(0,n.Z)().get("/daemon/getbenchmarks")},getBenchStatus(){return(0,n.Z)().get("/daemon/getbenchstatus")},startBenchmark(e){return(0,n.Z)().get("/daemon/startbenchmark",{headers:{zelidauth:e}})},stopBenchmark(e){return(0,n.Z)().get("/daemon/stopbenchmark",{headers:{zelidauth:e}})},getBlockCount(){return(0,n.Z)().get("/daemon/getBlockCount")},getBlockchainInfo(){return(0,n.Z)().get("/daemon/getblockchaininfo")},getMiningInfo(){return(0,n.Z)().get("/daemon/getmininginfo")},getNetworkInfo(){return(0,n.Z)().get("/daemon/getnetworkinfo")},validateAddress(e,t){return(0,n.Z)().get(`/daemon/validateaddress/${t}`,{headers:{zelidauth:e}})},getWalletInfo(e){return(0,n.Z)().get("/daemon/getwalletinfo",{headers:{zelidauth:e}})},listFluxNodeConf(e){return(0,n.Z)().get("/daemon/listzelnodeconf",{headers:{zelidauth:e}})},start(e){return(0,n.Z)().get("/daemon/start",{headers:{zelidauth:e}})},restart(e){return(0,n.Z)().get("/daemon/restart",{headers:{zelidauth:e}})},stopDaemon(e){return(0,n.Z)().get("/daemon/stop",{headers:{zelidauth:e}})},rescanDaemon(e,t){return(0,n.Z)().get(`/daemon/rescanblockchain/${t}`,{headers:{zelidauth:e}})},getBlock(e,t){return(0,n.Z)().get(`/daemon/getblock/${e}/${t}`)},tailDaemonDebug(e){return(0,n.Z)().get("/flux/taildaemondebug",{headers:{zelidauth:e}})},justAPI(){return(0,n.Z)()},cancelToken(){return n.S}}}}]);