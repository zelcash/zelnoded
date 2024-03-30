"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[6262],{34547:(t,e,a)=>{a.d(e,{Z:()=>d});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${t.variant}`,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},n=[],s=a(47389);const i={components:{BAvatar:s.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},o=i;var l=a(1001),c=(0,l.Z)(o,r,n,!1,null,"22d964ca",null);const d=c.exports},16262:(t,e,a)=>{a.r(e),a.d(e,{default:()=>f});var r=function(){var t=this,e=t._self._c;return""!==t.getInfoResponse.data?e("b-card",{attrs:{title:"Get Info"}},[e("list-entry",{attrs:{title:"Benchmark Version",data:t.getInfoResponse.data.version}}),e("list-entry",{attrs:{title:"RPC Port",number:t.getInfoResponse.data.rpcport}}),t.getInfoResponse.data.errors?e("list-entry",{attrs:{title:"Error",data:t.getInfoResponse.data.errors,variant:"danger"}}):t._e()],1):t._e()},n=[],s=a(86855),i=a(34547),o=a(51748),l=a(39569);const c=a(63005),d={components:{ListEntry:o.Z,BCard:s._,ToastificationContent:i.Z},data(){return{timeoptions:c,getInfoResponse:{status:"",data:""}}},mounted(){this.benchmarkGetInfo()},methods:{async benchmarkGetInfo(){const t=await l.Z.getInfo();"error"===t.data.status?this.$toast({component:i.Z,props:{title:t.data.data.message||t.data.data,icon:"InfoIcon",variant:"danger"}}):(this.getInfoResponse.status=t.data.status,this.getInfoResponse.data=t.data.data)}}},u=d;var h=a(1001),m=(0,h.Z)(u,r,n,!1,null,null,null);const f=m.exports},51748:(t,e,a)=>{a.d(e,{Z:()=>d});var r=function(){var t=this,e=t._self._c;return e("dl",{staticClass:"row",class:t.classes},[e("dt",{staticClass:"col-sm-3"},[t._v(" "+t._s(t.title)+" ")]),t.href.length>0?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t.href.length>0?e("b-link",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")]):t._e()],1):t.click?e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`,on:{click:function(e){return t.$emit("click")}}},[e("b-link",[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])],1):e("dd",{staticClass:"col-sm-9 mb-0",class:`text-${t.variant}`},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])])},n=[],s=a(67347);const i={components:{BLink:s.we},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},o=i;var l=a(1001),c=(0,l.Z)(o,r,n,!1,null,null,null);const d=c.exports},63005:(t,e,a)=>{a.r(e),a.d(e,{default:()=>s});const r={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},n={year:"numeric",month:"short",day:"numeric"},s={shortDate:r,date:n}},39569:(t,e,a)=>{a.d(e,{Z:()=>n});var r=a(80914);const n={start(t){return(0,r.Z)().get("/benchmark/start",{headers:{zelidauth:t}})},restart(t){return(0,r.Z)().get("/benchmark/restart",{headers:{zelidauth:t}})},getStatus(){return(0,r.Z)().get("/benchmark/getstatus")},restartNodeBenchmarks(t){return(0,r.Z)().get("/benchmark/restartnodebenchmarks",{headers:{zelidauth:t}})},signFluxTransaction(t,e){return(0,r.Z)().get(`/benchmark/signzelnodetransaction/${e}`,{headers:{zelidauth:t}})},helpSpecific(t){return(0,r.Z)().get(`/benchmark/help/${t}`)},help(){return(0,r.Z)().get("/benchmark/help")},stop(t){return(0,r.Z)().get("/benchmark/stop",{headers:{zelidauth:t}})},getBenchmarks(){return(0,r.Z)().get("/benchmark/getbenchmarks")},getInfo(){return(0,r.Z)().get("/benchmark/getinfo")},tailBenchmarkDebug(t){return(0,r.Z)().get("/flux/tailbenchmarkdebug",{headers:{zelidauth:t}})},justAPI(){return(0,r.Z)()},cancelToken(){return r.S}}}}]);