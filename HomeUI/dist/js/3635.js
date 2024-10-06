"use strict";(self["webpackChunkflux"]=self["webpackChunkflux"]||[]).push([[3635],{22039:(t,e,a)=>{a.r(e),a.d(e,{default:()=>X});var s=function(){var t=this,e=t._self._c;return e("div",[t.managedApplication?t._e():e("b-tabs",{attrs:{pills:""},on:{"activate-tab":t.tabChanged}},[e("my-apps-tab",{ref:"activeApps",attrs:{apps:t.activeApps,loading:t.loading.active,"logged-in":t.loggedIn,"current-block-height":t.daemonBlockCount},on:{"open-app-management":t.openAppManagement}}),e("my-apps-tab",{ref:"expiredApps",attrs:{apps:t.expiredApps,loading:t.loading.expired,"logged-in":t.loggedIn,"current-block-height":t.daemonBlockCount,"active-apps-tab":!1}})],1),t.managedApplication?e("management",{attrs:{"app-name":t.managedApplication,global:!0,"installed-apps":[]},on:{back:t.clearManagedApplication}}):t._e()],1)},i=[],n=(a(70560),a(6501)),o=function(){var t=this,e=t._self._c;return e("b-tab",{attrs:{active:t.activeAppsTab,title:t.activeAppsTab?"My Active Apps":"My Expired Apps"}},[e("b-overlay",{attrs:{show:t.loading,variant:"transparent",blur:"5px"}},[e("b-card",[e("b-row",[e("b-col",{staticClass:"my-1",attrs:{md:"4",sm:"4"}},[e("b-form-group",{staticClass:"mb-0",attrs:{label:"Per Page","label-cols-sm":"auto","label-align-sm":"left"}},[e("b-form-select",{staticClass:"w-50",attrs:{size:"sm",options:t.tableOptions.pageOptions},model:{value:t.tableOptions.perPage,callback:function(e){t.$set(t.tableOptions,"perPage",e)},expression:"tableOptions.perPage"}})],1)],1),e("b-col",{staticClass:"my-1",attrs:{md:"8"}},[e("b-form-group",{staticClass:"mb-0 mt-0",attrs:{label:"Filter","label-cols-sm":"1","label-align-sm":"right"}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-input",{attrs:{type:"search",placeholder:"Type to Search"},model:{value:t.tableOptions.filter,callback:function(e){t.$set(t.tableOptions,"filter",e)},expression:"tableOptions.filter"}}),e("b-input-group-append",[e("b-button",{attrs:{disabled:!t.tableOptions.filter},on:{click:function(e){t.tableOptions.filter=""}}},[t._v(" Clear ")])],1)],1)],1)],1)],1),e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("b-table",{staticClass:"myapps-table",attrs:{striped:"",outlined:"",responsive:"",items:t.apps,fields:t.mergedFields,"sort-by":t.tableOptions.sortBy,"sort-desc":t.tableOptions.sortDesc,"sort-direction":t.tableOptions.sortDirection,filter:t.tableOptions.filter,"per-page":t.tableOptions.perPage,"current-page":t.tableOptions.currentPage,"show-empty":"","sort-icon-left":"","empty-text":t.emptyText},on:{"update:sortBy":function(e){return t.$set(t.tableOptions,"sortBy",e)},"update:sort-by":function(e){return t.$set(t.tableOptions,"sortBy",e)},"update:sortDesc":function(e){return t.$set(t.tableOptions,"sortDesc",e)},"update:sort-desc":function(e){return t.$set(t.tableOptions,"sortDesc",e)}},scopedSlots:t._u([{key:"cell(description)",fn:function(a){return[e("kbd",{staticClass:"text-secondary textarea text",staticStyle:{float:"left","text-align":"left"}},[t._v(t._s(a.item.description))])]}},{key:"cell(name)",fn:function(a){return[e("div",{staticClass:"text-left"},[e("kbd",{staticClass:"alert-info no-wrap",staticStyle:{"border-radius":"15px","font-weight":"700 !important"}},[e("b-icon",{attrs:{scale:"1.2",icon:"app-indicator"}}),t._v("  "+t._s(a.item.name)+"  ")],1),e("br"),e("small",{staticStyle:{"font-size":"11px"}},[e("div",{staticClass:"d-flex align-items-center",staticStyle:{"margin-top":"3px"}},[t._v("   "),e("b-icon",{attrs:{scale:"1.4",icon:"speedometer2"}}),t._v("  "),e("kbd",{staticClass:"alert-success",staticStyle:{"border-radius":"15px"}},[t._v(" "),e("b",[t._v(t._s(t.getServiceUsageValue(1,a.item.name,a.item)))]),t._v(" ")]),t._v("   "),e("b-icon",{attrs:{scale:"1.4",icon:"cpu"}}),t._v("  "),e("kbd",{staticClass:"alert-success",staticStyle:{"border-radius":"15px"}},[t._v(" "),e("b",[t._v(t._s(t.getServiceUsageValue(0,a.item.name,a.item)))]),t._v(" ")]),t._v("   "),e("b-icon",{attrs:{scale:"1.4",icon:"hdd"}}),t._v("  "),e("kbd",{staticClass:"alert-success",staticStyle:{"border-radius":"15px"}},[t._v(" "),e("b",[t._v(t._s(t.getServiceUsageValue(2,a.item.name,a.item)))]),t._v(" ")]),t._v("  "),e("b-icon",{attrs:{scale:"1.2",icon:"geo-alt"}}),t._v(" "),e("kbd",{staticClass:"alert-warning",staticStyle:{"border-radius":"15px"}},[t._v(" "),e("b",[t._v(t._s(a.item.instances))]),t._v(" ")])],1),t.activeAppsTab?e("expiry-label",{attrs:{"expire-time":t.labelForExpire(a.item.expire,a.item.height)}}):t._e()],1)])]}},{key:"cell(show_details)",fn:function(a){return[e("a",{on:{click:function(e){return t.showLocations(a,t.apps)}}},[e("v-icon",{staticClass:"ml-1",attrs:{name:a.detailsShowing?"chevron-up":"chevron-down"}})],1)]}},{key:"row-details",fn:function(a){return[e("b-card",{staticClass:"mx-2"},[e("h3",{staticClass:"no-wrap"},[e("kbd",{staticClass:"alert-info d-flex",staticStyle:{"border-radius":"15px","font-family":"monospace","padding-right":"100%"}},[e("b-icon",{staticClass:"ml-1",attrs:{scale:"1",icon:"info-square"}}),t._v("  Application Information ")],1)]),e("div",{staticClass:"ml-1"},[a.item.owner?e("list-entry",{attrs:{title:"Owner",data:a.item.owner}}):t._e(),a.item.hash?e("list-entry",{attrs:{title:"Hash",data:a.item.hash}}):t._e(),a.item.version>=5?e("div",[a.item.contacts.length>0?e("list-entry",{attrs:{title:"Contacts",data:JSON.stringify(a.item.contacts)}}):t._e(),a.item.geolocation.length?e("div",t._l(a.item.geolocation,(function(a){return e("div",{key:a},[e("list-entry",{attrs:{title:"Geolocation",data:t.getGeolocation(a)}})],1)})),0):e("div",[e("list-entry",{attrs:{title:"Continent",data:"All"}}),e("list-entry",{attrs:{title:"Country",data:"All"}}),e("list-entry",{attrs:{title:"Region",data:"All"}})],1)],1):t._e(),a.item.instances?e("list-entry",{attrs:{title:"Instances",data:a.item.instances.toString()}}):t._e(),e("list-entry",{attrs:{title:"Expires in",data:t.labelForExpire(a.item.expire,a.item.height)}}),a.item?.nodes?.length>0?e("list-entry",{attrs:{title:"Enterprise Nodes",data:a.item.nodes?a.item.nodes.toString():"Not scoped"}}):t._e(),e("list-entry",{attrs:{title:"Static IP",data:a.item.staticip?"Yes, Running only on Static IP nodes":"No, Running on all nodes"}})],1),a.item.version<=3?e("div",[e("b-card",[e("list-entry",{attrs:{title:"Repository",data:a.item.repotag}}),e("list-entry",{attrs:{title:"Custom Domains",data:a.item.domains.toString()||"none"}}),e("list-entry",{attrs:{title:"Automatic Domains",data:t.constructAutomaticDomains(a.item.ports,a.item.name).toString()}}),e("list-entry",{attrs:{title:"Ports",data:a.item.ports.toString()}}),e("list-entry",{attrs:{title:"Container Ports",data:a.item.containerPorts.toString()}}),e("list-entry",{attrs:{title:"Container Data",data:a.item.containerData}}),e("list-entry",{attrs:{title:"Enviroment Parameters",data:a.item.enviromentParameters.length>0?a.item.enviromentParameters.toString():"none"}}),e("list-entry",{attrs:{title:"Commands",data:a.item.commands.length>0?a.item.commands.toString():"none"}}),a.item.tiered?e("div",[e("list-entry",{attrs:{title:"CPU Cumulus",data:`${a.item.cpubasic} vCore`}}),e("list-entry",{attrs:{title:"CPU Nimbus",data:`${a.item.cpusuper} vCore`}}),e("list-entry",{attrs:{title:"CPU Stratus",data:`${a.item.cpubamf} vCore`}}),e("list-entry",{attrs:{title:"RAM Cumulus",data:`${a.item.rambasic} MB`}}),e("list-entry",{attrs:{title:"RAM Nimbus",data:`${a.item.ramsuper} MB`}}),e("list-entry",{attrs:{title:"RAM Stratus",data:`${a.item.rambamf} MB`}}),e("list-entry",{attrs:{title:"SSD Cumulus",data:`${a.item.hddbasic} GB`}}),e("list-entry",{attrs:{title:"SSD Nimbus",data:`${a.item.hddsuper} GB`}}),e("list-entry",{attrs:{title:"SSD Stratus",data:`${a.item.hddbamf} GB`}})],1):e("div",[e("list-entry",{attrs:{title:"CPU",data:`${a.item.cpu} vCore`}}),e("list-entry",{attrs:{title:"RAM",data:`${a.item.ram} MB`}}),e("list-entry",{attrs:{title:"SSD",data:`${a.item.hdd} GB`}})],1)],1)],1):e("div",[e("h3",{staticClass:"no-wrap"},[e("kbd",{staticClass:"alert-info d-flex",staticStyle:{"border-radius":"15px","font-family":"monospace","padding-right":"100%"}},[e("b-icon",{staticClass:"ml-1",attrs:{scale:"1",icon:"box"}}),t._v("  Composition ")],1)]),t._l(a.item.compose,(function(s,i){return e("b-card",{key:i,staticClass:"mb-0"},[e("h3",{staticClass:"no-wrap"},[e("kbd",{staticClass:"alert-success d-flex",staticStyle:{"border-radius":"15px","font-family":"monospace","max-width":"500px"}},[e("b-icon",{staticClass:"ml-1",attrs:{scale:"1",icon:"menu-app-fill"}}),t._v("  "+t._s(s.name)+" ")],1)]),e("div",{staticClass:"ml-1"},[e("list-entry",{attrs:{title:"Name",data:s.name}}),e("list-entry",{attrs:{title:"Description",data:s.description}}),e("list-entry",{attrs:{title:"Repository",data:s.repotag}}),e("list-entry",{attrs:{title:"Repository Authentication",data:s.repoauth?"Content Encrypted":"Public"}}),e("list-entry",{attrs:{title:"Custom Domains",data:s.domains.toString()||"none"}}),e("list-entry",{attrs:{title:"Automatic Domains",data:t.constructAutomaticDomains(s.ports,a.item.name,{componentName:s.name,index:i}).toString()}}),e("list-entry",{attrs:{title:"Ports",data:s.ports.toString()}}),e("list-entry",{attrs:{title:"Container Ports",data:s.containerPorts.toString()}}),e("list-entry",{attrs:{title:"Container Data",data:s.containerData}}),e("list-entry",{attrs:{title:"Environment Parameters",data:s.environmentParameters.length>0?s.environmentParameters.toString():"none"}}),e("list-entry",{attrs:{title:"Commands",data:s.commands.length>0?s.commands.toString():"none"}}),e("list-entry",{attrs:{title:"Secret Environment Parameters",data:s.secrets?"Content Encrypted":"none"}}),s.tiered?e("div",[e("list-entry",{attrs:{title:"CPU Cumulus",data:`${s.cpubasic} vCore`}}),e("list-entry",{attrs:{title:"CPU Nimbus",data:`${s.cpusuper} vCore`}}),e("list-entry",{attrs:{title:"CPU Stratus",data:`${s.cpubamf} vCore`}}),e("list-entry",{attrs:{title:"RAM Cumulus",data:`${s.rambasic} MB`}}),e("list-entry",{attrs:{title:"RAM Nimbus",data:`${s.ramsuper} MB`}}),e("list-entry",{attrs:{title:"RAM Stratus",data:`${s.rambamf} MB`}}),e("list-entry",{attrs:{title:"SSD Cumulus",data:`${s.hddbasic} GB`}}),e("list-entry",{attrs:{title:"SSD Nimbus",data:`${s.hddsuper} GB`}}),e("list-entry",{attrs:{title:"SSD Stratus",data:`${s.hddbamf} GB`}})],1):e("div",[e("list-entry",{attrs:{title:"CPU",data:`${s.cpu} vCore`}}),e("list-entry",{attrs:{title:"RAM",data:`${s.ram} MB`}}),e("list-entry",{attrs:{title:"SSD",data:`${s.hdd} GB`}})],1)],1)])}))],2),t.activeAppsTab?e("locations",{attrs:{"app-locations":t.appLocations}}):t._e()],1)]}},{key:"cell(actions)",fn:function(a){return[t.activeAppsTab?e("manage",{attrs:{row:a},on:{"open-app-management":t.openAppManagement}}):e("redeploy",{attrs:{row:a}})]}}])})],1)],1),e("b-col",{attrs:{cols:"12"}},[e("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.apps.length,"per-page":t.tableOptions.perPage,align:"center",size:"sm"},model:{value:t.tableOptions.currentPage,callback:function(e){t.$set(t.tableOptions,"currentPage",e)},expression:"tableOptions.currentPage"}})],1),e("b-icon",{staticClass:"ml-1",attrs:{scale:"1.4",icon:"layers"}}),t._v("  "),e("b",[t._v(" "),e("kbd",{staticClass:"alert-success",staticStyle:{"border-radius":"15px"}},[t._v(" "+t._s(t.apps.length||0)+" ")])])],1)],1)],1)},r=[],l=a(43672),p=a(34547),c=a(51748),d=function(){var t=this,e=t._self._c;return e("div",[e("h3",[e("kbd",{staticClass:"alert-info d-flex",staticStyle:{"border-radius":"15px","font-family":"monospace","padding-right":"100%"}},[e("b-icon",{attrs:{scale:"1",icon:"globe"}}),t._v("  Locations ")],1)]),e("b-row",[e("b-col",{staticClass:"p-0 m-0"},[e("flux-map",{staticClass:"mb-0",attrs:{"show-all":!1,nodes:t.allNodesLocations,"filter-nodes":t.mapLocations},on:{"nodes-updated":t.nodesUpdated}})],1)],1),e("b-row",[e("b-col",{staticClass:"my-1",attrs:{md:"4",sm:"4"}},[e("b-form-group",{staticClass:"mb-0"},[e("label",{staticClass:"d-inline-block text-left mr-50"},[t._v("Per page")]),e("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:t.appLocationOptions.pageOptions},model:{value:t.appLocationOptions.perPage,callback:function(e){t.$set(t.appLocationOptions,"perPage",e)},expression:"appLocationOptions.perPage"}})],1)],1),e("b-col",{staticClass:"my-1",attrs:{md:"8"}},[e("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-cols-sm":"1","label-align-sm":"right","label-for":"filterInput"}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-input",{attrs:{id:"filterInput",type:"search",placeholder:"Type to Search"},model:{value:t.appLocationOptions.filter,callback:function(e){t.$set(t.appLocationOptions,"filter",e)},expression:"appLocationOptions.filter"}}),e("b-input-group-append",[e("b-button",{attrs:{disabled:!t.appLocationOptions.filter},on:{click:function(e){t.appLocationOptions.filter=""}}},[t._v(" Clear ")])],1)],1)],1)],1),e("b-col",{attrs:{cols:"12"}},[e("b-table",{staticClass:"locations-table",attrs:{borderless:"","per-page":t.appLocationOptions.perPage,"current-page":t.appLocationOptions.currentPage,items:t.appLocations,fields:t.appLocationFields,filter:t.appLocationOptions.filter,"thead-class":"d-none","show-empty":"","sort-icon-left":"","empty-text":"No instances found..."},scopedSlots:t._u([{key:"cell(ip)",fn:function(a){return[e("div",{staticClass:"no-wrap"},[e("kbd",{staticClass:"alert-info",staticStyle:{"border-radius":"15px"}},[e("b-icon",{attrs:{scale:"1.1",icon:"hdd-network-fill"}})],1),t._v("  "),e("kbd",{staticClass:"alert-success no-wrap",staticStyle:{"border-radius":"15px"}},[e("b",[t._v("  "+t._s(a.item.ip)+"  ")])])])]}},{key:"cell(visit)",fn:function(a){return[e("div",{staticClass:"d-flex justify-content-end"},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Visit App",expression:"'Visit App'",modifiers:{hover:!0,top:!0}}],staticClass:"mr-1",attrs:{size:"sm",pill:"",variant:"dark"},on:{click:function(e){t.openApp(t.row.item.name,a.item.ip.split(":")[0],t.getProperPort(t.row.item))}}},[e("b-icon",{attrs:{scale:"1",icon:"door-open"}}),t._v(" App ")],1),e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Visit FluxNode",expression:"'Visit FluxNode'",modifiers:{hover:!0,top:!0}}],staticClass:"mr-0",attrs:{size:"sm",pill:"",variant:"outline-dark"},on:{click:function(e){t.openNodeFluxOS(a.item.ip.split(":")[0],a.item.ip.split(":")[1]?+a.item.ip.split(":")[1]-1:16126)}}},[e("b-icon",{attrs:{scale:"1",icon:"house-door-fill"}}),t._v(" FluxNode ")],1),t._v("   ")],1)]}}])})],1),e("b-col",{attrs:{cols:"12"}},[e("b-pagination",{staticClass:"my-0 mt-1",attrs:{"total-rows":t.appLocationOptions.totalRows,"per-page":t.appLocationOptions.perPage,align:"center",size:"sm"},model:{value:t.appLocationOptions.currentPage,callback:function(e){t.$set(t.appLocationOptions,"currentPage",e)},expression:"appLocationOptions.currentPage"}})],1)],1)],1)},m=[],u=a(57071);const g={components:{FluxMap:u.Z},props:{appLocations:{type:Array,default(){return[]}}},data(){return{allNodesLocations:[],appLocationFields:[{key:"ip",label:"IP Address"},{key:"visit",label:""}],appLocationOptions:{perPage:25,pageOptions:[5,10,25,50,100],currentPage:1,totalRows:1,filterOn:[],filter:""}}},computed:{mapLocations(){return this.appLocations.map((t=>t.ip))}},methods:{nodesUpdated(t){this.$set(this.allNodesLocations,t)},getProperPort(t){if(t.port)return t.port;if(t.ports)return t.ports[0];for(let e=0;e<t.compose.length;e+=1)for(let a=0;a<t.compose[e].ports.length;a+=1)if(t.compose[e].ports[a])return t.compose[e].ports[a];return null},openSite(t){const e=window.open(t,"_blank");e.focus()},openApp(t,e,a){if(console.log(t,e,a),a&&e){const t=e,s=a,i=`http://${t}:${s}`;this.openSite(i)}else this.showToast("danger","Unable to open App :(, App does not have a port.")},openNodeFluxOS(t,e){if(console.log(t,e),e&&t){const a=t,s=e,i=`http://${a}:${s}`;this.opensSite(i)}else this.showToast("danger","Unable to open FluxOS :(")}}},b=g;var h=a(1001),f=(0,h.Z)(b,d,m,!1,null,null,null);const y=f.exports;var v=function(){var t=this,e=t._self._c;return e("div",[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Redeploy App",expression:"'Redeploy App'",modifiers:{hover:!0,top:!0}}],staticClass:"mr-0 no-wrap",attrs:{id:`redeploy-installed-app-${t.row.item.name}`,size:"sm",variant:"outline-dark",pill:""}},[e("b-icon",{attrs:{scale:"1",icon:"building"}}),t._v(" Redeploy ")],1),e("confirm-dialog",{attrs:{target:`redeploy-installed-app-${t.row.item.name}`,"confirm-button":"Redeploy App"},on:{confirm:function(e){return t.redeployApp(t.row.item)}}})],1)},C=[],A=a(87156);const x=a(80129),w={components:{ConfirmDialog:A.Z},props:{row:{type:Object,required:!0}},methods:{redeployApp(t,e=!1){const a=t;e&&(a.name+="XXX",a.name+=Date.now().toString().slice(-5));const s=localStorage.getItem("zelidauth"),i=x.parse(s);i?a.owner=i.zelid:e&&(a.owner=""),this.$router.replace({name:"apps-registerapp",params:{appspecs:JSON.stringify(t)}})}}},S=w;var _=(0,h.Z)(S,v,C,!1,null,null,null);const $=_.exports;var k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex no-wrap"},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Manage Installed App",expression:"'Manage Installed App'",modifiers:{hover:!0,top:!0}}],staticClass:"mr-0",attrs:{id:`manage-installed-app-${t.row.item.name}`,size:"sm",variant:"outline-dark"}},[e("b-icon",{attrs:{scale:"1",icon:"gear"}}),t._v(" Manage ")],1),e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Visit App",expression:"'Visit App'",modifiers:{hover:!0,top:!0}}],staticClass:"mr-0 no-wrap hover-underline",attrs:{size:"sm",variant:"link"},on:{click:function(e){return t.openGlobalApp(t.row.item.name)}}},[e("b-icon",{attrs:{scale:"1",icon:"front"}}),t._v(" Visit ")],1),e("confirm-dialog",{attrs:{target:`manage-installed-app-${t.row.item.name}`,"confirm-button":"Manage App"},on:{confirm:function(e){return t.openAppManagement(t.row.item.name)}}})],1)},L=[];const O={components:{ConfirmDialog:A.Z},props:{row:{type:Object,required:!0}},methods:{openAppManagement(t){this.$emit("open-app-management",t)},async openGlobalApp(t){const e=await l.Z.getAppLocation(t).catch((t=>{this.showToast("danger",t.message||t)}));if(console.log(e),"success"===e.data.status){const a=e.data.data,s=a[0];if(s){const e=`https://${t}.app.runonflux.io`;this.openSite(e)}else this.showToast("danger","Application is awaiting launching...")}else this.showToast("danger",e.data.data.message||e.data.data)},openSite(t){const e=window.open(t,"_blank");e.focus()}}},P=O;var D=(0,h.Z)(P,k,L,!1,null,null,null);const M=D.exports;var B=function(){var t=this,e=t._self._c;return e("span",{class:t.spanClasses},[t._v("   "),e("b-icon",{attrs:{scale:"1.2",icon:"hourglass-split"}}),t._v(" "+t._s(t.expireTime)+"   ")],1)},T=[];const N={components:{},props:{expireTime:{type:String,required:!0}},data(){return{}},computed:{spanClasses(){return{"red-text":this.isLessThanTwoDays(this.expireTime),"no-wrap":!0}}},methods:{isLessThanTwoDays(t){if(!t)return!0;const e=t.split(",").map((t=>t.trim()));let a=0,s=0,i=0;e.forEach((t=>{t.includes("days")?a=parseInt(t,10):t.includes("hours")?s=parseInt(t,10):t.includes("minutes")&&(i=parseInt(t,10))}));const n=24*a*60+60*s+i;return n<2880}}},E=N;var I=(0,h.Z)(E,B,T,!1,null,null,null);const R=I.exports,z=a(57306),U={expose:["hideTabs"],components:{Locations:y,Redeploy:$,Manage:M,ExpiryLabel:R,ListEntry:c.Z},props:{apps:{type:Array,required:!0},currentBlockHeight:{type:Number,required:!0},activeAppsTab:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},fields:{type:Array,default(){return[]}},loggedIn:{type:Boolean,default:!1}},data(){return{appLocations:[],defaultFields:[{key:"show_details",label:""},{key:"name",label:"Name",sortable:!0,thStyle:{width:"5%"}},{key:"description",label:"Description",thStyle:{width:"75%"}},{key:"actions",label:"",class:"text-center",thStyle:{width:"8%"}}],tableOptions:{perPage:25,pageOptions:[5,10,25,50,100],currentPage:1,totalRows:1,sortBy:"",sortDesc:!1,sortDirection:"asc",filter:""}}},computed:{emptyText(){return this.loggedIn?this.activeAppsTab?"No Global Apps are owned.":"No owned Apps are expired.":"You must log in to see your applications."},mergedFields(){const t=this.fields.map((t=>({...t})));return this.defaultFields.forEach((e=>{t.find((t=>t.key===e.key))||t.push(e)})),t}},methods:{hideTabs(){this.apps.forEach((t=>{this.$set(t,"_showDetails",!1)}))},openAppManagement(t){this.$emit("open-app-management",t)},getGeolocation(t){if(t.startsWith("a")&&!t.startsWith("ac")&&!t.startsWith("a!c")){const e=t.slice(1),a=z.continents.find((t=>t.code===e))||{name:"ALL"};return`Continent: ${a.name||"Unkown"}`}if(t.startsWith("b")){const e=t.slice(1),a=z.countries.find((t=>t.code===e))||{name:"ALL"};return`Country: ${a.name||"Unkown"}`}if(t.startsWith("ac")){const e=t.slice(2),a=e.split("_"),s=a[0],i=a[1],n=a[2],o=z.continents.find((t=>t.code===s))||{name:"ALL"},r=z.countries.find((t=>t.code===i))||{name:"ALL"};let l=`Allowed location: Continent: ${o.name}`;return i&&(l+=`, Country: ${r.name}`),n&&(l+=`, Region: ${n}`),l}if(t.startsWith("a!c")){const e=t.slice(3),a=e.split("_"),s=a[0],i=a[1],n=a[2],o=z.continents.find((t=>t.code===s))||{name:"ALL"},r=z.countries.find((t=>t.code===i))||{name:"ALL"};let l=`Forbidden location: Continent: ${o.name}`;return i&&(l+=`, Country: ${r.name}`),n&&(l+=`, Region: ${n}`),l}return"All locations allowed"},constructAutomaticDomains(t,e,a={}){const{componentName:s="",index:i=0}=a,n=e.toLowerCase(),o=s.toLowerCase();if(!o){const e=[];0===i&&e.push(`${n}.app.runonflux.io`);for(let a=0;a<t.length;a+=1){const s=`${n}_${t[a]}.app.runonflux.io`;e.push(s)}return e}const r=[];0===i&&r.push(`${n}.app.runonflux.io`);for(let l=0;l<t.length;l+=1){const e=`${n}_${t[l]}.app.runonflux.io`;r.push(e)}return r},minutesToString(t){let e=60*t;const a={day:86400,hour:3600,minute:60,second:1},s=[];return Object.keys(a).forEach((t=>{const i=Math.floor(e/a[t]);1===i&&s.push(` ${i} ${t}`),i>=2&&s.push(` ${i} ${t}s`),e%=a[t]})),s},labelForExpire(t,e){if(!e)return"Application Expired";if(-1===this.currentBlockHeight)return"Not possible to calculate expiration";const a=t||22e3,s=e+a-this.currentBlockHeight;if(s<1)return"Application Expired";const i=2*s,n=this.minutesToString(i);return n.length>2?`${n[0]}, ${n[1]}, ${n[2]}`:n.length>1?`${n[0]}, ${n[1]}`:`${n[0]}`},getServiceUsageValue(t,e,a){if("undefined"===typeof a?.compose)return this.usage=[+a.ram,+a.cpu,+a.hdd],this.usage[t];const s=this.getServiceUsage(e,a.compose);return s[t]},getServiceUsage(t,e){let a=0,s=0,i=0;return e.forEach((t=>{a+=t.ram,s+=t.cpu,i+=t.hdd})),[a,s,i]},showToast(t,e,a="InfoIcon"){this.$toast({component:p.Z,props:{title:e,icon:a,variant:t}})},showLocations(t,e){t.detailsShowing?t.toggleDetails():(e.forEach((t=>{this.$set(t,"_showDetails",!1)})),this.$nextTick((()=>{t.toggleDetails(),this.activeAppsTab&&this.loadLocations(t)})))},async loadLocations(t){const e=await l.Z.getAppLocation(t.item.name).catch((t=>(this.showToast("danger",t.message||t),{data:{status:"fail"}})));if("success"===e.data.status){const{data:{data:t}}=e;this.appLocations=t}}}},F=U;var Z=(0,h.Z)(F,o,r,!1,null,null,null);const G=Z.exports;var V=a(27616);const q=a(80129),W={components:{Management:n.Z,MyAppsTab:G},data(){return{allApps:[],activeApps:[],expiredApps:[],managedApplication:"",daemonBlockCount:-1,loading:{active:!0,expired:!0},loggedIn:!1}},created(){this.setLoginStatus(),this.getApps(),this.getDaemonBlockCount()},methods:{async getDaemonBlockCount(){const t=await V.Z.getBlockCount().catch((()=>({data:{status:"fail"}})));"success"===t.data.status&&(this.daemonBlockCount=t.data.data)},openAppManagement(t){this.managedApplication=t},clearManagedApplication(){this.managedApplication="",this.$nextTick((()=>{this.tabChanged()}))},async getActiveApps(){this.loading.active=!0;const t=await l.Z.globalAppSpecifications().catch((()=>({data:{data:[]}})));this.allApps=t.data.data;const e=localStorage.getItem("zelidauth"),a=q.parse(e);a?(this.activeApps=this.allApps.filter((t=>t.owner===a.zelid)),this.loading.active=!1):this.$set(this.activeApps,[])},async getExpiredApps(){try{const t=localStorage.getItem("zelidauth"),e=q.parse(t);if(!e.zelid)return void this.$set(this.expiredApps,[]);const a=await l.Z.permanentMessagesOwner(e.zelid).catch((()=>({data:{data:[]}}))),s=[],{data:{data:i}}=a;i.forEach((t=>{const e=s.find((e=>e.appSpecifications.name===t.appSpecifications.name));if(e){if(t.height>e.height){const e=s.findIndex((e=>e.appSpecifications.name===t.appSpecifications.name));e>-1&&(s.splice(e,1),s.push(t))}}else s.push(t)}));const n=[];s.forEach((t=>{const e=this.allApps.find((e=>e.name.toLowerCase()===t.appSpecifications.name.toLowerCase()));if(!e){const e=t.appSpecifications;n.push(e)}})),this.expiredApps=n}catch(t){console.log(t)}finally{this.loading.expired=!1}},async getApps(){await this.getActiveApps(),await this.getExpiredApps()},tabChanged(){this.$refs.activeApps.hideTabs(),this.$refs.expiredApps.hideTabs(),this.setLoginStatus()},setLoginStatus(){const t=localStorage.getItem("zelidauth"),e=q.parse(t);this.loggedIn=Boolean(e.zelid)}}},j=W;var H=(0,h.Z)(j,s,i,!1,null,null,null);const X=H.exports}}]);