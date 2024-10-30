"use strict";(self["webpackChunkflux"]=self["webpackChunkflux"]||[]).push([[5],{34547:(e,t,a)=>{a.d(t,{Z:()=>p});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"toastification"},[t("div",{staticClass:"d-flex align-items-start"},[t("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:e.variant,size:"1.8rem"}},[t("feather-icon",{attrs:{icon:e.icon,size:"15"}})],1),t("div",{staticClass:"d-flex flex-grow-1"},[t("div",[e.title?t("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${e.variant}`,domProps:{textContent:e._s(e.title)}}):e._e(),e.text?t("small",{staticClass:"d-inline-block text-body",domProps:{textContent:e._s(e.text)}}):e._e()]),t("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(t){return e.$emit("close-toast")}}},[e.hideClose?e._e():t("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},s=[],o=a(47389);const i={components:{BAvatar:o.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},n=i;var l=a(1001),d=(0,l.Z)(n,r,s,!1,null,"22d964ca",null);const p=d.exports},10005:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var r=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"mb-2"},[t("h6",{staticClass:"progress-label"},[e._v(" "+e._s(`${e.storage.used.toFixed(2)} / ${e.storage.total.toFixed(2)}`)+" GB ")]),t("b-progress",{attrs:{value:e.percentage,max:"100",striped:"",height:"2rem"}})],1),t("b-button-toolbar",{attrs:{justify:""}},[t("b-button-group",{attrs:{size:"sm"}}),t("b-button-group",{attrs:{size:"sm"}},[t("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){e.uploadFilesDialog=!0}}},[t("v-icon",{attrs:{name:"cloud-upload-alt"}})],1),t("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){e.createDirectoryDialogVisible=!0}}},[t("v-icon",{attrs:{name:"folder-plus"}})],1),t("b-modal",{attrs:{title:"Create Folder",size:"lg",centered:"","ok-only":"","ok-title":"Create Folder","header-bg-variant":"primary"},on:{ok:function(t){return e.createFolder(e.newDirName)}},model:{value:e.createDirectoryDialogVisible,callback:function(t){e.createDirectoryDialogVisible=t},expression:"createDirectoryDialogVisible"}},[t("b-form-group",{attrs:{label:"Folder Name","label-for":"folderNameInput"}},[t("b-form-input",{attrs:{id:"folderNameInput",size:"lg",placeholder:"New Folder Name"},model:{value:e.newDirName,callback:function(t){e.newDirName=t},expression:"newDirName"}})],1)],1),t("b-modal",{attrs:{title:"Upload Files",size:"lg",centered:"","hide-footer":"","header-bg-variant":"primary"},on:{close:function(t){return e.refreshFolder()}},model:{value:e.uploadFilesDialog,callback:function(t){e.uploadFilesDialog=t},expression:"uploadFilesDialog"}},[t("file-upload",{attrs:{"upload-folder":e.getUploadFolder,headers:e.zelidHeader},on:{complete:e.refreshFolder}})],1)],1)],1),t("b-table",{staticClass:"fluxshare-table mt-1",attrs:{hover:"",responsive:"",outlined:"",small:"",items:e.folderContentFilter,fields:e.fields,busy:e.loadingFolder,"sort-by":"name","sort-icon-left":"","show-empty":"","empty-text":"Directory is empty."},scopedSlots:e._u([{key:"table-busy",fn:function(){return[t("div",{staticClass:"text-center text-danger my-2"},[t("b-spinner",{staticClass:"align-middle mx-2"}),t("strong",[e._v("Loading...")])],1)]},proxy:!0},{key:"head(name)",fn:function(a){return[e.currentFolder?t("b-button",{staticClass:"btn up-button",attrs:{"aria-label":"Up",variant:"flat-secondary"},on:{click:function(t){return e.upFolder()}}},[t("span",{staticClass:"d-inline-block",attrs:{"aria-hidden":"true"}},[t("v-icon",{attrs:{name:"arrow-alt-circle-up"}})],1)]):e._e(),e._v(" "+e._s(a.label.toUpperCase())+" ")]}},{key:"cell(name)",fn:function(a){return[a.item.isDirectory?t("div",[t("b-link",{on:{click:function(t){return e.changeFolder(a.item.name)}}},[e._v(" "+e._s(a.item.name)+" ")])],1):t("div",[e._v(" "+e._s(a.item.name)+" ")])]}},{key:"cell(modifiedAt)",fn:function(t){return[e._v(" "+e._s(new Date(t.item.modifiedAt).toLocaleString("en-GB",e.timeoptions))+" ")]}},{key:"cell(type)",fn:function(a){return[a.item.isDirectory?t("div",[e._v(" Folder ")]):a.item.isFile||a.item.isSymbolicLink?t("div",[e._v(" File ")]):t("div",[e._v(" Other ")])]}},{key:"cell(size)",fn:function(a){return[a.item.size>0?t("div",[e._v(" "+e._s(e.beautifyValue((a.item.size/1e3).toFixed(0)))+" KB ")]):e._e()]}},{key:"cell(actions)",fn:function(a){return[t("b-button-group",{attrs:{size:"sm"}},[t("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",value:a.item.isFile?"Download":"Download zip of folder",expression:"data.item.isFile ? 'Download' : 'Download zip of folder'",modifiers:{hover:!0,bottom:!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:`download-${a.item.name}`,variant:"outline-secondary"}},[t("v-icon",{attrs:{name:a.item.isFile?"file-download":"file-archive"}})],1),t("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",value:"Rename",expression:"'Rename'",modifiers:{hover:!0,bottom:!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:`rename-${a.item.name}`,variant:"outline-secondary"},on:{click:function(t){return e.rename(a.item.name)}}},[t("v-icon",{attrs:{name:"edit"}})],1),t("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",value:a.item.shareToken?"Unshare file":"Share file",expression:"data.item.shareToken ? 'Unshare file' : 'Share file'",modifiers:{hover:!0,bottom:!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:`share-${a.item.name}`,variant:a.item.shareToken?"gradient-primary":"outline-secondary"},on:{click:function(t){a.item.shareToken?e.unshareFile(a.item.name):e.shareFile(a.item.name)}}},[t("v-icon",{attrs:{name:"share-alt"}})],1),a.item.shareToken?t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:`sharelink-${a.item.name}`,variant:"outline-secondary"}},[t("v-icon",{attrs:{name:"envelope"}})],1):e._e(),t("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:"Delete",expression:"'Delete'",modifiers:{hover:!0,left:!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:`delete-${a.item.name}`,variant:"outline-secondary"}},[t("v-icon",{attrs:{name:"trash-alt"}})],1),t("confirm-dialog",{attrs:{target:`delete-${a.item.name}`,"confirm-button":a.item.isFile?"Delete File":"Delete Folder"},on:{confirm:function(t){a.item.isFile?e.deleteFile(a.item.name):e.deleteFolder(a.item.name)}}})],1),t("confirm-dialog",{attrs:{target:`download-${a.item.name}`,"confirm-button":a.item.isFile?"Download File":"Download Folder"},on:{confirm:function(t){a.item.isFile?e.download(a.item.name):e.download(a.item.name,!0,a.item.size)}}}),a.item.shareToken?t("b-popover",{attrs:{target:`sharelink-${a.item.name}`,placement:"bottom",triggers:"hover focus"},scopedSlots:e._u([{key:"title",fn:function(){return[t("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy to Clipboard",expression:"'Copy to Clipboard'",modifiers:{hover:!0,top:!0}}],staticClass:"btn copy-button",attrs:{"aria-label":"Copy to Clipboard",variant:"flat-warning"},on:{click:function(t){e.copyLinkToClipboard(e.createfluxshareLink(a.item.shareFile,a.item.shareToken))}}},[t("span",{staticClass:"d-inline-block",attrs:{"aria-hidden":"true"}},[t("v-icon",{attrs:{name:"clipboard"}})],1)]),e._v(" Share Link ")]},proxy:!0}],null,!0)},[t("div",[t("b-link",{attrs:{href:e.createfluxshareLink(a.item.shareFile,a.item.shareToken)}},[e._v(" "+e._s(e.createfluxshareLink(a.item.shareFile,a.item.shareToken))+" ")])],1)]):e._e(),t("b-modal",{attrs:{title:"Rename",size:"lg",centered:"","ok-only":"","ok-title":"Rename"},on:{ok:function(t){return e.confirmRename()}},model:{value:e.renameDialogVisible,callback:function(t){e.renameDialogVisible=t},expression:"renameDialogVisible"}},[t("b-form-group",{attrs:{label:"Name","label-for":"nameInput"}},[t("b-form-input",{attrs:{id:"nameInput",size:"lg",placeholder:"Name"},model:{value:e.newName,callback:function(t){e.newName=t},expression:"newName"}})],1)],1)]}}])})],1)},s=[],o=a(45752),i=a(16521),n=a(1759),l=a(15193),d=a(31220),p=a(46709),c=a(22183),u=a(53862),h=a(67347),m=a(41984),g=a(45969),f=a(5870),b=a(20629),v=a(20266),y=a(87066),F=a(34547),w=a(87156),$=a(2272),x=a(43672);const k=a(58971),z={components:{BProgress:o.D,BTable:i.h,BSpinner:n.X,BButton:l.T,BModal:d.N,BFormGroup:p.x,BFormInput:c.e,BPopover:u.x,BLink:h.we,BButtonToolbar:m.r,BButtonGroup:g.a,ConfirmDialog:w.Z,FileUpload:$.Z,ToastificationContent:F.Z},directives:{"b-tooltip":f.o,Ripple:v.Z},data(){return{fields:[{key:"name",label:" Name",sortable:!0},{key:"modifiedAt",label:" Modified",sortable:!0},{key:"type",label:" Type",sortable:!0},{key:"size",label:" Size",sortable:!0},{key:"actions",label:"",sortable:!1}],timeoptions:{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},loadingFolder:!1,folderView:[],currentFolder:"",uploadFilesDialog:!1,filterFolder:"",createDirectoryDialogVisible:!1,renameDialogVisible:!1,newName:"",fileRenaming:"",newDirName:"",abortToken:{},downloaded:{},total:{},timeStamp:{},working:!1,storage:{used:0,total:2,available:2},customColors:[{color:"#6f7ad3",percentage:20},{color:"#1989fa",percentage:40},{color:"#5cb87a",percentage:60},{color:"#e6a23c",percentage:80},{color:"#f56c6c",percentage:100}],uploadTotal:"",uploadUploaded:"",uploadTimeStart:"",currentUploadTime:"",uploadFiles:[]}},computed:{...(0,b.rn)("flux",["userconfig","config"]),percentage(){const e=this.storage.used/this.storage.total*100;return Number(e.toFixed(2))},zelidHeader(){const e=localStorage.getItem("zelidauth"),t={zelidauth:e};return t},ipAddress(){const e=k.get("backendURL");if(e)return`${k.get("backendURL").split(":")[0]}:${k.get("backendURL").split(":")[1]}`;const{hostname:t}=window.location;return`http://${t}`},folderContentFilter(){const e=this.folderView.filter((e=>JSON.stringify(e.name).toLowerCase().includes(this.filterFolder.toLowerCase())));return e.filter((e=>".gitkeep"!==e.name))},getUploadFolder(){const e=this.config.apiPort;if(this.currentFolder){const t=encodeURIComponent(this.currentFolder);return`${this.ipAddress}:${e}/apps/fluxshare/uploadfile/${t}`}return`${this.ipAddress}:${e}/apps/fluxshare/uploadfile`}},mounted(){this.loadingFolder=!0,this.loadFolder(this.currentFolder),this.storageStats()},methods:{sortNameFolder(e,t){return(e.isDirectory?`..${e.name}`:e.name).localeCompare(t.isDirectory?`..${t.name}`:t.name)},sortTypeFolder(e,t){return e.isDirectory&&t.isFile?-1:e.isFile&&t.isDirectory?1:0},sort(e,t,a,r){return"name"===a?this.sortNameFolder(e,t,r):"type"===a?this.sortTypeFolder(e,t,r):"modifiedAt"===a?e.modifiedAt>t.modifiedAt?-1:e.modifiedAt<t.modifiedAt?1:0:"size"===a?e.size>t.size?-1:e.size<t.size?1:0:0},async storageStats(){try{const e=await x.Z.storageStats(this.zelidHeader.zelidauth);console.log(e),"success"===e.data.status?(this.storage.total=e.data.data.total,this.storage.used=e.data.data.used,this.storage.available=e.data.data.available):this.showToast("danger",e.data.data.message||e.data.data)}catch(e){this.showToast("danger",e.message||e)}},changeFolder(e){if(".."===e){const e=this.currentFolder.split("/");e.pop(),this.currentFolder=e.join("/")}else""===this.currentFolder?this.currentFolder=e:this.currentFolder=`${this.currentFolder}/${e}`;this.loadFolder(this.currentFolder)},async loadFolder(e,t=!1){try{this.filterFolder="",t||(this.folderView=[]),this.loadingFolder=!0;const a=await x.Z.getFolder(this.zelidHeader.zelidauth,encodeURIComponent(e));this.loadingFolder=!1,"success"===a.data.status?(this.folderView=a.data.data,console.log(this.folderView)):this.showToast("danger",a.data.data.message||a.data.data)}catch(a){this.loadingFolder=!1,console.log(a.message),this.showToast("danger",a.message||a)}},async createFolder(e){try{let t=e;""!==this.currentFolder&&(t=`${this.currentFolder}/${e}`);const a=await x.Z.createFolder(this.zelidHeader.zelidauth,encodeURIComponent(t));"error"===a.data.status?"EEXIST"===a.data.data.code?this.showToast("danger",`Folder ${e} already exists`):this.showToast("danger",a.data.data.message||a.data.data):(this.loadFolder(this.currentFolder,!0),this.createDirectoryDialogVisible=!1)}catch(t){this.loadingFolder=!1,console.log(t.message),this.showToast("danger",t.message||t)}},cancelDownload(e){this.abortToken[e].cancel(`Download of ${e} cancelled`),this.downloaded[e]="",this.total[e]=""},async download(e,t=!1,a=0){try{const r=this;r.abortToken[e]&&r.abortToken[e].cancel();const s=y["default"].CancelToken,o=s.source();this.$set(this.abortToken,e,o);const i=this.currentFolder,n=i?`${i}/${e}`:e;let l;const d={headers:this.zelidHeader,responseType:"blob",onDownloadProgress(t){l||(l=t.timeStamp),r.$set(r.downloaded,e,t.loaded),t.total?r.$set(r.total,e,t.total):t.target&&t.event.target.response&&t.event.target.response.size?r.$set(r.total,e,t.event.target.response.size):r.$set(r.total,e,a),r.$set(r.timeStamp,e,t.timeStamp-l)},cancelToken:r.abortToken[e].token};let p;if(p=t?await x.Z.justAPI().get(`/apps/fluxshare/downloadfolder/${encodeURIComponent(n)}`,d):await x.Z.justAPI().get(`/apps/fluxshare/getfile/${encodeURIComponent(n)}`,d),console.log(p),"error"===p.data.status)this.showToast("danger",p.data.data.message||p.data.data);else{const a=window.URL.createObjectURL(new Blob([p.data])),r=document.createElement("a");r.href=a,t?r.setAttribute("download",`${e}.zip`):r.setAttribute("download",e),document.body.appendChild(r),r.click()}}catch(r){console.log(r.message),r.message?r.message.startsWith("Download")||this.showToast("danger",r.message):this.showToast("danger",r)}},beautifyValue(e){const t=e.split(".");return t[0].length>=4&&(t[0]=t[0].replace(/(\d)(?=(\d{3})+$)/g,"$1,")),t.join(".")},refreshFolder(){this.loadFolder(this.currentFolder,!0),this.storageStats()},async deleteFile(e){try{const t=this.currentFolder,a=t?`${t}/${e}`:e,r=await x.Z.removeFile(this.zelidHeader.zelidauth,encodeURIComponent(a));"error"===r.data.status?this.showToast("danger",r.data.data.message||r.data.data):(this.refreshFolder(),this.showToast("success",`${e} deleted`))}catch(t){this.showToast("danger",t.message||t)}},async shareFile(e){try{const t=this.currentFolder,a=t?`${t}/${e}`:e,r=await x.Z.shareFile(this.zelidHeader.zelidauth,encodeURIComponent(a));"error"===r.data.status?this.showToast("danger",r.data.data.message||r.data.data):(this.loadFolder(this.currentFolder,!0),this.showToast("success",`${e} shared`))}catch(t){this.showToast("danger",t.message||t)}},async unshareFile(e){try{const t=this.currentFolder,a=t?`${t}/${e}`:e,r=await x.Z.unshareFile(this.zelidHeader.zelidauth,encodeURIComponent(a));"error"===r.data.status?this.showToast("danger",r.data.data.message||r.data.data):(this.loadFolder(this.currentFolder,!0),this.showToast("success",`${e} unshared`))}catch(t){this.showToast("danger",t.message||t)}},async deleteFolder(e){try{let t=e;""!==this.currentFolder&&(t=`${this.currentFolder}/${e}`);const a=await x.Z.removeFolder(this.zelidHeader.zelidauth,encodeURIComponent(t));console.log(a.data),"error"===a.data.status?"ENOTEMPTY"===a.data.data.code?this.showToast("danger",`Directory ${e} is not empty!`):this.showToast("danger",a.data.data.message||a.data.data):(this.loadFolder(this.currentFolder,!0),this.showToast("success",`${e} deleted`))}catch(t){this.showToast("danger",t.message||t)}},beforeUpload(e){if(this.storage.available<=0)return this.showToast("danger","Storage space is full"),!1;const t=this.folderView.find((t=>t.name===e.name));return!t||(this.showToast("info",`File ${e.name} already exists`),!1)},createfluxshareLink(e,t){const a=this.config.apiPort;return`${this.ipAddress}:${a}/apps/fluxshare/getfile/${e}?token=${t}`},copyLinkToClipboard(e){const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.showToast("success","Link copied to Clipboard")},rename(e){this.renameDialogVisible=!0;let t=e;""!==this.currentFolder&&(t=`${this.currentFolder}/${e}`),this.fileRenaming=t,this.newName=e},async confirmRename(){this.renameDialogVisible=!1;try{const e=this.fileRenaming,t=this.newName,a=await x.Z.renameFileFolder(this.zelidHeader.zelidauth,encodeURIComponent(e),t);console.log(a),"error"===a.data.status?this.showToast("danger",a.data.data.message||a.data.data):(e.includes("/")?this.showToast("success",`${e.split("/").pop()} renamed to ${t}`):this.showToast("success",`${e} renamed to ${t}`),this.loadFolder(this.currentFolder,!0))}catch(e){this.showToast("danger",e.message||e)}},upFolder(){this.changeFolder("..")},showToast(e,t,a="InfoIcon"){this.$toast({component:F.Z,props:{title:t,icon:a,variant:e}})}}},C=z;var T=a(1001),Z=(0,T.Z)(C,r,s,!1,null,null,null);const D=Z.exports},87156:(e,t,a)=>{a.d(t,{Z:()=>u});var r=function(){var e=this,t=e._self._c;return t("b-popover",{ref:"popover",attrs:{target:`${e.target}`,triggers:"click blur",show:e.show,placement:"auto",container:"my-container","custom-class":`confirm-dialog-${e.width}`},on:{"update:show":function(t){e.show=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("div",{staticClass:"d-flex justify-content-between align-items-center"},[t("span",[e._v(e._s(e.title))]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:function(t){e.show=!1}}},[t("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[e._v("×")])])],1)]},proxy:!0}])},[t("div",{staticClass:"text-center"},[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:function(t){e.show=!1}}},[e._v(" "+e._s(e.cancelButton)+" ")]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:function(t){return e.confirm()}}},[e._v(" "+e._s(e.confirmButton)+" ")])],1)])},s=[],o=a(15193),i=a(53862),n=a(20266);const l={components:{BButton:o.T,BPopover:i.x},directives:{Ripple:n.Z},props:{target:{type:String,required:!0},title:{type:String,required:!1,default:"Are You Sure?"},cancelButton:{type:String,required:!1,default:"Cancel"},confirmButton:{type:String,required:!0},width:{type:Number,required:!1,default:300}},data(){return{show:!1}},methods:{confirm(){this.show=!1,this.$emit("confirm")}}},d=l;var p=a(1001),c=(0,p.Z)(d,r,s,!1,null,null,null);const u=c.exports},2272:(e,t,a)=>{a.d(t,{Z:()=>g});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"flux-share-upload",style:e.cssProps},[t("b-row",[t("div",{staticClass:"flux-share-upload-drop text-center",attrs:{id:"dropTarget"},on:{drop:function(t){return t.preventDefault(),e.addFile.apply(null,arguments)},dragover:function(e){e.preventDefault()},click:e.selectFiles}},[t("v-icon",{attrs:{name:"cloud-upload-alt"}}),t("p",[e._v("Drop files here or "),t("em",[e._v("click to upload")])]),t("p",{staticClass:"upload-footer"},[e._v(" (File size is limited to 5GB) ")])],1),t("input",{ref:"fileselector",staticClass:"flux-share-upload-input",attrs:{id:"file-selector",type:"file",multiple:""},on:{change:e.handleFiles}}),t("b-col",{staticClass:"upload-column"},e._l(e.files,(function(a){return t("div",{key:a.file.name,staticClass:"upload-item",staticStyle:{"margin-bottom":"3px"}},[e._v(" "+e._s(a.file.name)+" ("+e._s(e.addAndConvertFileSizes(a.file.size))+") "),t("span",{staticClass:"delete text-white",attrs:{"aria-hidden":"true"}},[a.uploading?e._e():t("v-icon",{style:{color:e.determineColor(a.file.name)},attrs:{name:"trash-alt",disabled:a.uploading},on:{mouseenter:function(t){return e.handleHover(a.file.name,!0)},mouseleave:function(t){return e.handleHover(a.file.name,!1)},focusin:function(t){return e.handleHover(a.file.name,!0)},focusout:function(t){return e.handleHover(a.file.name,!1)},click:function(t){return e.removeFile(a)}}})],1),t("b-progress",{class:a.uploading||a.uploaded?"":"hidden",attrs:{value:a.progress,max:"100",striped:"",height:"5px"}})],1)})),0)],1),t("b-row",[t("b-col",{staticClass:"text-center",attrs:{xs:"12"}},[t("b-button",{staticClass:"delete mt-1",attrs:{variant:"primary",disabled:!e.filesToUpload,size:"sm","aria-label":"Close"},on:{click:function(t){return e.startUpload()}}},[e._v(" Upload Files ")])],1)],1)],1)},s=[],o=(a(70560),a(26253)),i=a(50725),n=a(45752),l=a(15193),d=a(68934),p=a(34547);const c={components:{BRow:o.T,BCol:i.l,BProgress:n.D,BButton:l.T,ToastificationContent:p.Z},props:{uploadFolder:{type:String,required:!0},headers:{type:Object,required:!0}},data(){return{isHovered:!1,hoverStates:{},files:[],primaryColor:d.j.primary,secondaryColor:d.j.secondary}},computed:{cssProps(){return{"--primary-color":this.primaryColor,"--secondary-color":this.secondaryColor}},filesToUpload(){return this.files.length>0&&this.files.some((e=>!e.uploading&&!e.uploaded&&0===e.progress))}},methods:{addAndConvertFileSizes(e,t="auto",a=2){const r={B:1,KB:1024,MB:1048576,GB:1073741824},s=(e,t)=>e/r[t.toUpperCase()],o=(e,t)=>{const r="B"===t?e.toFixed(0):e.toFixed(a);return`${r} ${t}`};let i;if(Array.isArray(e)&&e.length>0)i=+e.reduce(((e,t)=>e+(t.file_size||0)),0);else{if("number"!==typeof+e)return console.error("Invalid sizes parameter"),"N/A";i=+e}if(isNaN(i))return console.error("Total size is not a valid number"),"N/A";if("auto"===t){let e,t=i;return Object.keys(r).forEach((a=>{const r=s(i,a);r>=1&&(void 0===t||r<t)&&(t=r,e=a)})),e=e||"B",o(t,e)}{const e=s(i,t);return o(e,t)}},handleHover(e,t){this.$set(this.hoverStates,e,t)},determineColor(e){return this.hoverStates[e]?"red":"white"},selectFiles(){console.log("select files"),this.$refs.fileselector.click()},handleFiles(e){const{files:t}=e.target;t&&(console.log(t),this.addFiles([...t]))},addFile(e){const t=e.dataTransfer.files;t&&this.addFiles([...t])},addFiles(e){e.forEach((e=>{const t=this.files.some((t=>t.file.name===e.name));console.log(t),t?this.showToast("warning",`'${e.name}' is already in the upload queue`):this.files.push({file:e,uploading:!1,uploaded:!1,progress:0})}))},removeFile(e){this.files=this.files.filter((t=>t.file.name!==e.file.name))},startUpload(){console.log(this.uploadFolder),console.log(this.files),this.files.forEach((e=>{console.log(e),e.uploaded||e.uploading||this.upload(e)}))},upload(e){const t=this;if("undefined"===typeof XMLHttpRequest)return;const a=new XMLHttpRequest,r=this.uploadFolder;a.upload&&(a.upload.onprogress=function(t){console.log(t),t.total>0&&(t.percent=t.loaded/t.total*100),e.progress=t.percent});const s=new FormData;s.append(e.file.name,e.file),e.uploading=!0,a.onerror=function(a){console.log(a),t.showToast("danger",`An error occurred while uploading '${e.file.name}' - ${a}`),t.removeFile(e)},a.onload=function(){if(a.status<200||a.status>=300)return console.log("error"),console.log(a.status),t.showToast("danger",`An error occurred while uploading '${e.file.name}' - Status code: ${a.status}`),void t.removeFile(e);e.uploaded=!0,e.uploading=!1,t.$emit("complete"),t.removeFile(e),t.showToast("success",`'${e.file.name}' has been uploaded`)},a.open("post",r,!0);const o=this.headers||{},i=Object.keys(o);for(let n=0;n<i.length;n+=1){const e=i[n];Object.prototype.hasOwnProperty.call(o,e)&&null!==o[e]&&a.setRequestHeader(e,o[e])}a.send(s)},showToast(e,t,a="InfoIcon"){this.$toast({component:p.Z,props:{title:t,icon:a,variant:e}})}}},u=c;var h=a(1001),m=(0,h.Z)(u,r,s,!1,null,"8e3a5248",null);const g=m.exports},43672:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(80914);const s={listRunningApps(){const e={headers:{"x-apicache-bypass":!0}};return(0,r.Z)().get("/apps/listrunningapps",e)},listAllApps(){const e={headers:{"x-apicache-bypass":!0}};return(0,r.Z)().get("/apps/listallapps",e)},installedApps(){const e={headers:{"x-apicache-bypass":!0}};return(0,r.Z)().get("/apps/installedapps",e)},availableApps(){return(0,r.Z)().get("/apps/availableapps")},getEnterpriseNodes(){return(0,r.Z)().get("/apps/enterprisenodes")},stopApp(e,t){const a={headers:{zelidauth:e,"x-apicache-bypass":!0}};return(0,r.Z)().get(`/apps/appstop/${t}`,a)},startApp(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().get(`/apps/appstart/${t}`,a)},pauseApp(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().get(`/apps/apppause/${t}`,a)},unpauseApp(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().get(`/apps/appunpause/${t}`,a)},restartApp(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().get(`/apps/apprestart/${t}`,a)},removeApp(e,t){const a={headers:{zelidauth:e},onDownloadProgress(e){console.log(e)}};return(0,r.Z)().get(`/apps/appremove/${t}`,a)},registerApp(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().post("/apps/appregister",JSON.stringify(t),a)},updateApp(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().post("/apps/appupdate",JSON.stringify(t),a)},checkCommunication(){return(0,r.Z)().get("/flux/checkcommunication")},checkDockerExistance(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().post("/apps/checkdockerexistance",JSON.stringify(t),a)},appsRegInformation(){return(0,r.Z)().get("/apps/registrationinformation")},appsDeploymentInformation(){return(0,r.Z)().get("/apps/deploymentinformation")},getAppLocation(e){return(0,r.Z)().get(`/apps/location/${e}`)},globalAppSpecifications(){return(0,r.Z)().get("/apps/globalappsspecifications")},permanentMessagesOwner(e){return(0,r.Z)().get(`/apps/permanentmessages?owner=${e}`)},getInstalledAppSpecifics(e){return(0,r.Z)().get(`/apps/installedapps/${e}`)},getAppSpecifics(e){return(0,r.Z)().get(`/apps/appspecifications/${e}`)},getAppOwner(e){return(0,r.Z)().get(`/apps/appowner/${e}`)},getAppLogsTail(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().get(`/apps/applog/${t}/100`,a)},getAppTop(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().get(`/apps/apptop/${t}`,a)},getAppInspect(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().get(`/apps/appinspect/${t}`,a)},getAppStats(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().get(`/apps/appstats/${t}`,a)},getAppChanges(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().get(`/apps/appchanges/${t}`,a)},getAppExec(e,t,a,s){const o={headers:{zelidauth:e}},i={appname:t,cmd:a,env:JSON.parse(s)};return(0,r.Z)().post("/apps/appexec",JSON.stringify(i),o)},reindexGlobalApps(e){return(0,r.Z)().get("/apps/reindexglobalappsinformation",{headers:{zelidauth:e}})},reindexLocations(e){return(0,r.Z)().get("/apps/reindexglobalappslocation",{headers:{zelidauth:e}})},rescanGlobalApps(e,t,a){return(0,r.Z)().get(`/apps/rescanglobalappsinformation/${t}/${a}`,{headers:{zelidauth:e}})},getFolder(e,t){return(0,r.Z)().get(`/apps/fluxshare/getfolder/${t}`,{headers:{zelidauth:e}})},createFolder(e,t){return(0,r.Z)().get(`/apps/fluxshare/createfolder/${t}`,{headers:{zelidauth:e}})},getFile(e,t){return(0,r.Z)().get(`/apps/fluxshare/getfile/${t}`,{headers:{zelidauth:e}})},removeFile(e,t){return(0,r.Z)().get(`/apps/fluxshare/removefile/${t}`,{headers:{zelidauth:e}})},shareFile(e,t){return(0,r.Z)().get(`/apps/fluxshare/sharefile/${t}`,{headers:{zelidauth:e}})},unshareFile(e,t){return(0,r.Z)().get(`/apps/fluxshare/unsharefile/${t}`,{headers:{zelidauth:e}})},removeFolder(e,t){return(0,r.Z)().get(`/apps/fluxshare/removefolder/${t}`,{headers:{zelidauth:e}})},fileExists(e,t){return(0,r.Z)().get(`/apps/fluxshare/fileexists/${t}`,{headers:{zelidauth:e}})},storageStats(e){return(0,r.Z)().get("/apps/fluxshare/stats",{headers:{zelidauth:e}})},renameFileFolder(e,t,a){return(0,r.Z)().get(`/apps/fluxshare/rename/${t}/${a}`,{headers:{zelidauth:e}})},appPrice(e){return(0,r.Z)().post("/apps/calculateprice",JSON.stringify(e))},appPriceUSDandFlux(e){return(0,r.Z)().post("/apps/calculatefiatandfluxprice",JSON.stringify(e))},appRegistrationVerificaiton(e){return(0,r.Z)().post("/apps/verifyappregistrationspecifications",JSON.stringify(e))},appUpdateVerification(e){return(0,r.Z)().post("/apps/verifyappupdatespecifications",JSON.stringify(e))},getAppMonitoring(e,t){const a={headers:{zelidauth:e}};return(0,r.Z)().get(`/apps/appmonitor/${t}`,a)},startAppMonitoring(e,t){const a={headers:{zelidauth:e}};return t?(0,r.Z)().get(`/apps/startmonitoring/${t}`,a):(0,r.Z)().get("/apps/startmonitoring",a)},stopAppMonitoring(e,t,a){const s={headers:{zelidauth:e}};return t&&a?(0,r.Z)().get(`/apps/stopmonitoring/${t}/${a}`,s):t?(0,r.Z)().get(`/apps/stopmonitoring/${t}`,s):a?(0,r.Z)().get(`/apps/stopmonitoring?deletedata=${a}`,s):(0,r.Z)().get("/apps/stopmonitoring",s)},justAPI(){return(0,r.Z)()}}}}]);