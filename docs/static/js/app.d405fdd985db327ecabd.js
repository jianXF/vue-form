webpackJsonp([1],{"+cgv":function(e,t){},"3f40":function(e,t){},"4qOc":function(e,t){},"7OFq":function(e,t){},"8GMH":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("woOf"),i=n.n(o),s=n("fZjL"),l=n.n(s),a={props:{options:{default:Object,required:!0},value:{required:!0}},computed:{val:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{_blur:function(e){this.$emit("blur",e)},_focus:function(e){this.$emit("focus",e)},_change:function(e){this.$emit("change",e)},focus:function(){this.$refs.input.focus()}}},r={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-input",{ref:"input",attrs:{type:e.options.type,maxlength:e.options.maxlength,minlength:e.options.minlength,placeholder:e.options.placeholder,disabled:e.options.disabled,size:e.options.size,"prefix-icon":e.options["prefix-icon"],"suffix-icon":e.options["suffix-icon"],rows:e.options.rows,autosize:e.options.autosize,"auto-complete":e.options["auto-complete"],name:e.options.name,readonly:e.options.readonly,max:e.options.max,min:e.options.min,step:e.options.step,resize:e.options.resize,autofocus:e.options.autofocus,form:e.options.form,label:e.options.label},on:{blur:e._blur,focus:e._focus,change:e._change},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}},[e._t("prefix",null,{slot:"prefix"}),e._v(" "),e._t("suffix",null,{slot:"suffix"}),e._v(" "),e._t("prepend",null,{slot:"prepend"}),e._v(" "),e._t("append",null,{slot:"append"})],2)},staticRenderFns:[]},u=n("VU/8")(a,r,!1,null,null,null).exports,c={components:{BaseInput:u},props:{options:{default:Object,required:!0},value:{required:!0}},computed:{val:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},p={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("base-input",{attrs:{options:e.options},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}})},staticRenderFns:[]},d=n("VU/8")(c,p,!1,null,null,null).exports,h={props:{options:{default:Object,required:!0},value:{required:!0}},computed:{val:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},data:function(){return{}},methods:{_change:function(e){this.$emit("change",e)},"_visible-change":function(e){this.$emit("visible-change",e)},"_remove-tag":function(e){this.$emit("remove-tag",e)},_clear:function(){this.$emit("clear")},_blur:function(e){this.$emit("blur",e)},_focus:function(e){this.$emit("focus",e)},focus:function(){this.$refs.input.focus()}}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-select",{ref:"select",attrs:{multiple:e.options.multiple,disabled:e.options.disabled,"value-key":e.options["value-key"],size:e.options.size,clearable:e.options.clearable,"collapse-tags":e.options["collapse-tags"],"multiple-limit":e.options["multiple-limit"],name:e.options.name,placeholder:e.options.placeholder,filterable:e.options.filterable,"allow-create":e.options["allow-create"],"filter-method":e.options["filter-method"],remote:e.options.remote,"remote-method":e.options["remote-method"],loading:e.options.loading,"loading-text":e.options["loading-text"],"no-match-text":e.options["no-match-text"],"no-data-text":e.options["no-data-text"],"popper-class":e.options["popper-class"],"reserve-keyword":e.options["reserve-keyword"],"default-first-option":e.options["default-first-option"]},on:{change:e._change,"visible-change":this["_visible-change"],"remove-tag":this["_remove-tag"],clear:e._clear,blur:e._blur},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}},[e.options.options?e._l(e.options.options,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}):e._l(e.options["options-group"],function(t){return e.options["options-group"]?n("el-option-group",{key:t.label,attrs:{label:t.label,disabled:t.disabled}},e._l(t.options,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})):e._e()})],2)},staticRenderFns:[]},v={components:{BaseSelect:n("VU/8")(h,f,!1,null,null,null).exports},props:{options:{default:Object,required:!0},value:{required:!0}},created:function(){this.setValues()},watch:{"options.options":function(){this.setValues()}},computed:{multiple:function(){return this.options.multiple},val:{get:function(){return!0===this.multiple?this.value?this.value.toString().split(","):[]:this.value},set:function(e){!0===this.multiple?this.$emit("input",e.toString()):this.$emit("input",e)}}},methods:{setValues:function(){this.options.options&&!0===this.multiple&&this.options.options.forEach(function(e){e.value=e.value.toString()})}}},m={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("base-select",{attrs:{options:e.options},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}})},staticRenderFns:[]},b=n("VU/8")(v,m,!1,null,null,null).exports,g={props:{options:{default:Object,required:!0},value:{required:!0}},computed:{val:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{_change:function(e){this.$emit("change",e)}}},_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-radio-group",{ref:"radio",attrs:{size:e.options.size,disabled:e.options.disabled,"text-color":e.options["text-color"],fill:e.options.fill},on:{change:e._change},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}},[e.options.radios?e._l(e.options.radios,function(t){return n("el-radio",{key:t.label,attrs:{label:t.label,disabled:t.disabled,border:t.border,size:t.size,name:t.name}},[e._v(e._s(t.text))])}):e._l(e.options["radio-buttons"],function(t){return e.options["radio-buttons"]?n("el-radio-button",{key:t.label,attrs:{label:t.label,disabled:t.disabled,name:t.name}},[e._v(e._s(t.text))]):e._e()})],2)},staticRenderFns:[]},x={components:{BaseRadio:n("VU/8")(g,_,!1,null,null,null).exports},props:{options:{default:Object,required:!0},value:{required:!0}},computed:{val:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},y={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("base-radio",{attrs:{options:e.options},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}})},staticRenderFns:[]},$=n("VU/8")(x,y,!1,null,null,null).exports,k={props:{options:{default:Object,required:!0},value:{required:!0}},computed:{val:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{_change:function(e){this.$emit("change",e)}}},w={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-switch",{attrs:{disabled:e.options.disabled,width:e.options.width,"active-icon-class":e.options["active-icon-class"],"inactive-icon-class":e.options["inactive-icon-class"],"active-text":e.options["active-text"],"inactive-text":e.options["inactive-text"],"active-value":e.options["active-value"],"inactive-value":e.options["inactive-value"],"active-color":e.options["active-color"],"inactive-color":e.options["inactive-color"],name:e.options.name},on:{change:e._change},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}})},staticRenderFns:[]},C={components:{BaseSwitch:n("VU/8")(k,w,!1,null,null,null).exports},props:{options:{default:Object,required:!0},value:{required:!0}},computed:{val:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},E={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("base-switch",{attrs:{options:e.options},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}})},staticRenderFns:[]},q=n("VU/8")(C,E,!1,null,null,null).exports,j={props:{options:{default:Object,required:!0},value:{required:!0}},computed:{val:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{_change:function(e){this.$emit("change",e)}}},F={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-checkbox-group",{ref:"checkbox",attrs:{size:e.options.size,disabled:e.options.disabled,min:e.options.min,max:e.options.max,"text-color":e.options["text-color"],fill:e.options.fill},on:{change:e._change},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}},[e.options.checkboxs?e._l(e.options.checkboxs,function(t){return n("el-checkbox",{key:t.label,attrs:{label:t.label,"true-label":t["true-label"],"false-label":t["false-label"],disabled:t.disabled,border:t.border,size:t.size,name:t.name,checked:t.checked,indeterminate:t.indeterminate}},[e._v(e._s(t.text))])}):e._l(e.options["checkbox-buttons"],function(t){return n("el-checkbox-button",{key:t.label,attrs:{label:t.label,"true-label":t["true-label"],"false-label":t["false-label"],disabled:t.disabled,name:t.name,checked:t.checked}},[e._v(e._s(t.text))])})],2)},staticRenderFns:[]},V={components:{BaseCheckbox:n("VU/8")(j,F,!1,null,null,null).exports},props:{options:{default:Object,required:!0},value:{required:!0}},created:function(){this.setValues()},watch:{"options.checkboxs":function(){this.setValues()}},computed:{val:{get:function(){return this.value?this.value.toString().split(","):[]},set:function(e){this.$emit("input",e.toString())}}},methods:{setValues:function(){this.options.options&&!0===this.multiple&&this.options.options.forEach(function(e){e.value=e.value.toString()})}}},S={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("base-checkbox",{attrs:{options:e.options},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}})},staticRenderFns:[]},z=n("VU/8")(V,S,!1,null,null,null).exports,R={props:{options:{default:Object,required:!0},value:{required:!0,default:""}},computed:{val:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{_change:function(e){this.$emit("change",e)},_blur:function(e){this.$emit("change",e)},_focus:function(e){this.$emit("change",e)},focus:function(){this.$refs.input.focus()}}},N={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-date-picker",{ref:"date",attrs:{readonly:e.options.readonly,disabled:e.options.disabled,editable:e.options.editable,clearable:e.options.clearable,size:e.options.size,placeholder:e.options.placeholder,"start-placeholder":e.options["start-placeholder"],"end-placeholder":e.options["end-placeholder"],type:e.options.type,format:e.options.format,align:e.options.align,"popper-class":e.options["popper-class"],"picker-options":e.options["picker-options"],"range-separator":e.options["range-separator"],"default-value":e.options["default-value"],"value-format":e.options["value-format"],name:e.options.name,"unlink-panels":e.options["unlink-panels"]},on:{change:e._change,blur:e._blur,focus:e._focus},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}})},staticRenderFns:[]},O={components:{BaseDate:n("VU/8")(R,N,!1,null,null,null).exports},props:{options:{default:Object,required:!0},value:{required:!0,default:""}},computed:{val:{get:function(){return new Date(this.value)},set:function(e){var t="";if(e){var n=e.getFullYear(),o=e.getMonth()+1,i=e.getDate(),s=e.getHours(),l=e.getMinutes(),a=e.getSeconds(),r=function(e){return e>=10?e.toString():"0"+e};t=[n,"-",r(o),"-",r(i),"T",r(s),":",r(l),":",r(a)].join("")}this.$emit("input",t)}}}},H={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("base-date",{attrs:{options:e.options},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}})},staticRenderFns:[]},U=n("VU/8")(O,H,!1,null,null,null).exports,B=n("mtWM"),T=n.n(B),D={props:{options:{default:Object,required:!0},value:{required:!0}},methods:{"_node-click":function(e,t,n){this.$emit("node-click",e,t,n)},"_check-change":function(e,t,n){var o=this.getValue(this.options["node-key"]);this.$emit("input",o),this.$emit("check-change",e,t,n)},"_current-change":function(e,t){this.$emit("current-change",e,t)},"_node-expand":function(e,t,n){this.$emit("node-expand",e,t,n)},"_node-collapse":function(e,t,n){this.$emit("node-collapse",e,t,n)},getValue:function(e){return this.$refs.tree.getCheckedNodes().filter(function(e){return!1!==e.isLeaf}).map(function(t){return t[e]}).toString()},filter:function(){return this.$refs.tree.filter()},updateKeyChildren:function(e,t){return this.$refs.tree.updateKeyChildren(e,t)},getCheckedNodes:function(e){return this.$refs.tree.getCheckedNodes(e)},setCheckedNodes:function(e){return this.$refs.tree.setCheckedNodes(e)},getCheckedKeys:function(e){return this.$refs.tree.getCheckedKeys(e)},setCheckedKeys:function(e,t){return this.$refs.tree.setCheckedKeys(e,t)},setChecked:function(e,t,n){return this.$refs.tree.setChecked(e,t,n)},getCurrentKey:function(){return this.$refs.tree.getCurrentKey()},getCurrentNode:function(){return this.$refs.tree.getCurrentNode()},setCurrentKey:function(e){return this.$refs.tree.setCurrentKey(e)},setCurrentNode:function(e){return this.$refs.tree.setCurrentNode(e)}}},K={render:function(){var e=this.$createElement;return(this._self._c||e)("el-tree",{ref:"tree",attrs:{data:this.options.data||[],"empty-text":this.options["empty-text"],"node-key":this.options["node-key"],props:this.options.props,load:this.options.load,"render-content":this.options["render-content"],"highlight-current":this.options["highlight-current"],"default-expand-all":this.options["default-expand-all"],"expand-on-click-node":this.options["expand-on-click-node"],"auto-expand-parent":this.options["auto-expand-parent"],"default-expanded-keys":this.options["default-expanded-keys"],"show-checkbox":this.options["show-checkbox"],"check-strictly":this.options["check-strictly"],"filter-node-method":this.options["filter-node-method"],accordion:this.options.accordion,indent:this.options.indent,"default-checked-keys":this.value},on:{"node-click":this["_node-click"],"check-change":this["_check-change"],"current-change":this["_current-change"],"node-expand":this["_node-expand"],"node-collapse":this["_node-collapse"]}})},staticRenderFns:[]},M={components:{BaseInput:u,BaseTree:n("VU/8")(D,K,!1,null,null,null).exports},props:{options:{default:Object,required:!0},value:{required:!0}},data:function(){return{popWidth:0,showValue:""}},mounted:function(){this.popWidth=this.$refs.input.$el.getBoundingClientRect().width-24,this.setShowValue(),this.getData()},watch:{value:function(e){e||this.$refs.tree.setCheckedNodes([])}},computed:{val:{get:function(){return this.value?this.value.split(","):[]},set:function(e){this.$emit("input",e.toString()),this.setShowValue()}},popoverStyle:function(){return{"max-height":this.options["max-height"],"overflow-y":"auto"}},inputOptions:function(){return{readonly:!1}}},methods:{setShowValue:function(){this.showValue=this.$refs.tree.getValue("label")},getData:function(){var e=this,t=this.options.api;t&&T.a.get(t.url,{params:t.params}).then(function(n){var o=e.initData(n.data.data,t.type,t.transform);e.$set(e.options,"data",o),e.$nextTick(function(){e.setShowValue()})})},initData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"flat",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(n=i()({tree_id:"tree_id",tree_pid:"tree_pid",tree_label:"tree_label"},n),"flat"===t){e.forEach(function(e){e.label=e[n.tree_label],e._id=e[n.tree_id],e._pid=e[n.tree_pid],e.isLeaf=!!e.is_leaf||void 0===e.is_leaf});return function e(t,n){var o=[],i=t.length;if(n)for(var s=0;s<i;s++){var l=t[s];l._pid===n&&(o.push(l),t.splice(s--,1),i--)}else{var a={};t.forEach(function(e){a[e.tree_id]=!0});for(var r=0;r<i;r++){var u=t[r];a[u._pid]||(o.push(u),t.splice(r--,1),i--)}}return o.forEach(function(n){n.children=e(t,n.tree_id)}),o.length>0?o:null}(e)||[]}return e}}},L={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field-tree"},[n("el-popover",{ref:"popover",attrs:{width:e.popWidth,transition:"el-zoom-in-top"}},[n("base-tree",{ref:"tree",style:e.popoverStyle,attrs:{options:e.options},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}})],1),e._v(" "),n("base-input",{directives:[{name:"popover",rawName:"v-popover:popover",arg:"popover"}],ref:"input",attrs:{options:e.inputOptions,value:e.showValue}})],1)},staticRenderFns:[]},P=n("VU/8")(M,L,!1,null,null,null).exports,A={props:{options:{default:Object,required:!0},value:{required:!0}},methods:{"_before-upload":function(e){this.$emit("before-upload",e)},"_on-preview":function(e){this.$emit("on-preview",e)},"_on-remove":function(e,t){this.$emit("input",t),this.$emit("on-remove",e,t)},"_on-success":function(e,t,n){this.$emit("input",n),this.$emit("on-success",e,t,n)},"_on-error":function(e,t,n){this.$emit("on-error",e,t,n)},"_on-progress":function(e,t,n){this.$emit("on-progress",e,t,n)},"_on-change":function(e,t){this.$emit("on-change",e,t)},"_on-exceed":function(e,t){this.$emit("on-exceed",e,t)},clearFiles:function(){this.$refs("upload").clearFiles()},abort:function(){this.$refs("upload").abort()}}},I={render:function(){var e=this.$createElement;return(this._self._c||e)("el-upload",{ref:"upload",attrs:{action:this.options.action,headers:this.options.headers,multiple:this.options.multiple,data:this.options.data,name:this.options.name,"with-credentials":this.options["with-credentials"],"show-file-list":this.options["show-file-list"],drag:this.options.drag,accept:this.options.accept,"list-type":this.options["list-type"],"auto-upload":this.options["auto-upload"],"http-request":this.options["http-request"],disabled:this.options.disabled,limit:this.options.limit,"before-upload":this["_before-upload"],"on-preview":this["_on-preview"],"on-remove":this["_on-remove"],"on-success":this["_on-success"],"on-error":this["_on-error"],"on-progress":this["_on-progress"],"on-change":this["_on-change"],"on-exceed":this["_on-exceed"],"file-list":this.value}},[this._t("tip",null,{slot:"tip"}),this._v(" "),this._t("button")],2)},staticRenderFns:[]},W={components:{BaseUpload:n("VU/8")(A,I,!1,null,null,null).exports},props:{options:{default:Object,required:!0},value:{required:!0}},data:function(){return{cache:{}}},computed:{val:{get:function(){var e=this.cache,t=[];return this.value&&this.value.split(",").forEach(function(n){var o=e[n];o&&t.push(o)}),t},set:function(e){var t=[],n=this.cache;e.forEach(function(e){var o=e.name;e.response.forEach(function(e){n[e.id]={name:o,url:e.url,response:[e]},t.push(e.id)})}),this.$emit("input",t.join())}},button:function(){return i()({size:"small",type:"primary",text:"上传",icon:"el-icon-upload"},this.options.button||{})}}},J={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-upload",{attrs:{options:e.options},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}},["picture-card"===e.options["list-type"]?n("i",{staticClass:"el-icon-plus",attrs:{slot:"button"},slot:"button"}):n("el-button",{staticClass:"upload-button",attrs:{slot:"button",size:e.button.size,type:e.button.type,icon:e.button.icon},slot:"button"},[e._v(e._s(e.button.text))]),e._v(" "),e.options.tip?n("span",{staticClass:"upload-tip el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(e._s(e.options.tip))]):e._e()],1)},staticRenderFns:[]},Q=n("VU/8")(W,J,!1,function(e){n("NBj3")},"data-v-dbae15f4",null).exports,G=(n("3f40"),n("4qOc"),n("+cgv"),n("G0J2")),Z={components:{quillEditor:G.quillEditor},props:{options:{default:Object,required:!0},value:{required:!0}},computed:{val:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{_blur:function(e){this.$emit("blur",e)},_focus:function(e){this.$emit("focus",e)},_ready:function(e){this.$emit("ready",e)}}},Y={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("quill-editor",{ref:"richtext",attrs:{options:e.options,blur:e._blur,focus:e._focus,ready:e._ready},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}})},staticRenderFns:[]},X={components:{BaseRichtext:n("VU/8")(Z,Y,!1,function(e){n("xmDI")},null,null).exports},props:{options:{default:Object,required:!0},value:{required:!0}},computed:{val:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},ee={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("base-richtext",{attrs:{options:e.options},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}})},staticRenderFns:[]},te=n("VU/8")(X,ee,!1,null,null,null).exports,ne=n("5ntE"),oe=n("7+uW"),ie=n("zL8q"),se=n.n(ie);n("tvR6");oe.default.use(se.a);var le={components:{FieldInput:d,FieldSelect:b,FieldRadio:$,FieldSwitch:q,FieldCheckbox:z,FieldDate:U,FieldTree:P,FieldUpload:Q,FieldRichtext:te},props:["config"],data:function(){return{values:{}}},created:function(){var e=this.config.values||{},t={},n=ne.a;this.config.fields.forEach(function(e,n){if(!e.prop&&!e.type)throw Error("field name || type 是必填的");if(t[e.prop])throw Error("field.prop: "+e.prop+" 重复");t[e.prop]=""}),l()(e).forEach(function(t){var o=e[t];if("#"===o[0]){var i=o.substring(1).split("."),s=n;i.some(function(e){if(!s[e])return s="",!0;s=s[e]}),e[t]=s}}),this.values=i()(t,e)},computed:{form:function(){return this.$refs.form},fields:function(){var e=this.config.cols;return this.config.fields.map(function(t){return t.col=t.col>e?e:t.col||1,t})},buttons:function(){return this.config.buttons||[{text:"提交",event:"submit",type:"primary"},{text:"重置",event:"resetFields",type:"danger"}]},btnsStyle:function(){return{width:this.config["btns-width"]}},layout:function(){var e=this.config.cols||2,t=this.fields,n=t.length-1,o=[],i=function(e,t){return e.concat(new Array(t).fill(0))};return t.reduce(function(t,s,l){var a=s.col,r=t.reduce(function(e,t){return e+t.col},0),u=e-r-a;if(u>=0){if(t.push(s),l!==n)return t;o.push(i(t,u))}else{if(o.push(i(t,e-r)),l!==n)return[s];o.push(i([s],e-a))}},[]),o}},methods:{span:function(e){return e.col/this.config.cols*24},events:function(e){e&&("@"===e[0]?this.$emit(e.substring(1),this.values):this[e]())},fieldStyle:function(e){return{width:e.width||"100%","text-align":"left"}},submit:function(){var e=this;this.validate(function(t){if(!0===t){var n=e.values;e.$emit("submit",n)}})},validate:function(e){return this.$refs.form.validate(e)},validateField:function(e,t){this.$refs.form.validateField(e,t)},resetFields:function(){this.$refs.form.resetFields()},clearFields:function(){for(var e in this.values)this.values[e]=""},clearValidate:function(){this.$refs.form.clearValidate()}}},ae={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-form",class:e.config["btns-position"],attrs:{vm:""}},[n("el-form",{ref:"form",staticClass:"form-body",attrs:{rules:e.config.rules,"label-position":e.config["label-position"],"label-width":e.config["label-width"],"label-suffix":e.config["label-suffix"],"show-message":e.config["show-message"],"inline-message":e.config["inline-message"],"status-icon":e.config["status-icon"],size:e.config.size,model:e.values}},e._l(e.layout,function(t,o){return n("el-row",{key:o},e._l(t,function(t,o){return n("el-col",{key:o,attrs:{span:e.span(t)}},[t?n("el-form-item",{attrs:{prop:t.prop,label:t.label,"label-width":t["label-width"],required:t.required,rules:t.rules,error:t.error,"show-message":t["show-message"],"inline-message":t["inline-message"],size:t.size}},["input"===t.type?n("field-input",{style:e.fieldStyle(t),attrs:{options:t.options},model:{value:e.values[t.prop],callback:function(n){e.$set(e.values,t.prop,n)},expression:"values[field.prop]"}}):e._e(),e._v(" "),"select"===t.type?n("field-select",{style:e.fieldStyle(t),attrs:{options:t.options},model:{value:e.values[t.prop],callback:function(n){e.$set(e.values,t.prop,n)},expression:"values[field.prop]"}}):e._e(),e._v(" "),"radio"===t.type?n("field-radio",{style:e.fieldStyle(t),attrs:{options:t.options},model:{value:e.values[t.prop],callback:function(n){e.$set(e.values,t.prop,n)},expression:"values[field.prop]"}}):e._e(),e._v(" "),"switch"===t.type?n("field-switch",{style:e.fieldStyle(t),attrs:{options:t.options},model:{value:e.values[t.prop],callback:function(n){e.$set(e.values,t.prop,n)},expression:"values[field.prop]"}}):e._e(),e._v(" "),"checkbox"===t.type?n("field-checkbox",{style:e.fieldStyle(t),attrs:{options:t.options},model:{value:e.values[t.prop],callback:function(n){e.$set(e.values,t.prop,n)},expression:"values[field.prop]"}}):e._e(),e._v(" "),"date"===t.type?n("field-date",{style:e.fieldStyle(t),attrs:{options:t.options},model:{value:e.values[t.prop],callback:function(n){e.$set(e.values,t.prop,n)},expression:"values[field.prop]"}}):e._e(),e._v(" "),"tree"===t.type?n("field-tree",{style:e.fieldStyle(t),attrs:{options:t.options},model:{value:e.values[t.prop],callback:function(n){e.$set(e.values,t.prop,n)},expression:"values[field.prop]"}}):e._e(),e._v(" "),"upload"===t.type?n("field-upload",{style:e.fieldStyle(t),attrs:{options:t.options},model:{value:e.values[t.prop],callback:function(n){e.$set(e.values,t.prop,n)},expression:"values[field.prop]"}}):e._e(),e._v(" "),"richtext"===t.type?n("field-richtext",{style:e.fieldStyle(t),attrs:{options:t.options},model:{value:e.values[t.prop],callback:function(n){e.$set(e.values,t.prop,n)},expression:"values[field.prop]"}}):e._e()],1):e._e()],1)}))})),e._v(" "),n("div",{staticClass:"form-btns",style:e.btnsStyle},e._l(e.buttons,function(t){return n("el-button",{key:t.text,attrs:{size:t.size,type:t.type,plain:t.plain,round:t.round,loading:t.loading,disabled:t.disabled,icon:t.icon,autofocus:t.autofocus,"native-type":t["native-type"]},on:{click:function(n){e.events(t.event)}}},[e._v(e._s(t.text))])}))],1)},staticRenderFns:[]},re={components:{VueForm:n("VU/8")(le,ae,!1,function(e){n("7OFq")},null,null).exports},data:function(){return{config:{cols:2,"label-width":"100px",fields:[{required:!0,type:"input",prop:"name",label:"文本框",options:{placeholder:"input your name"}},{type:"radio",prop:"sex",label:"单选框",options:{radios:[{text:"男",label:"man"},{text:"女",label:"woman"}]}},{type:"checkbox",prop:"like",label:"复选框",options:{checkboxs:[{text:"苹果",label:"apple"},{text:"橙子",label:"orange"}]}},{type:"switch",prop:"status",label:"开关",options:{"active-text":"开","active-value":1,"inactive-value":0}},{type:"select",prop:"company",label:"下拉框",options:{options:[{label:"阿里",value:1},{label:"腾讯",value:2},{label:"百度",value:3}]}},{type:"tree",prop:"areacode",label:"树形下拉框",options:{"node-key":"id","show-checkbox":!0,"value-type":"leaf",data:[{id:1,label:"福建",children:[{id:2,label:"福州"},{id:3,label:"厦门"}]}]}},{type:"date",prop:"day",label:"日期",options:{}},{type:"date",prop:"time",label:"时间",options:{type:"datetime"}},{type:"upload",prop:"attach",label:"附件",col:2,options:{action:"your action",tip:"只能上传jpg/png文件","list-type":"text"}},{type:"richtext",prop:"article",col:2}]}}}},ue={render:function(){var e=this.$createElement,t=this._self._c||e;return t("section",[this._m(0),this._v(" "),t("demo-block",{staticClass:"demo-box",attrs:{jsfiddle:{html:'<html><head></head><body><vue-form :config="config"></vue-form>\n\n</body></html>',script:null,style:null}}},[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[t("html",[t("head"),t("body",[t("vue-form",{attrs:{config:this.config}})],1)])]),this._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("vue-form")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":config")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"config"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("vue-form")]),this._v(">")]),this._v("\n\n")])])])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"quan-bu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quan-bu","aria-hidden":"true"}},[this._v("¶")]),this._v(" 全部")])}]},ce=n("VU/8")(re,ue,!1,null,null,null);t.default=ce.exports},DHbQ:function(e,t,n){e.exports=n("8GMH")},ETNL:function(e,t){},NBj3:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),i=n("DHbQ"),s=n.n(i),l=(n("sphj"),n("ETNL"),{name:"app",components:{doc:s.a},data:function(){return{}}}),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("doc")],1)},staticRenderFns:[]},r=n("VU/8")(l,a,!1,function(e){n("wTjH")},null,null).exports,u={data:function(){return{hovering:!1,isExpanded:!1,fixedControl:!1,scrollParent:null}},props:{jsfiddle:Object,default:function(){return{}}},methods:{goJsfiddle:function(){var e=this.jsfiddle,t=e.script,n=e.html,o=e.style,i=(t||"").replace(/export default/,"var Main =").trim(),s='<script src="//unpkg.com/vue/dist/vue.js"><\/script>\n<script src="//unpkg.com/element-ui@2.2.0/lib/index.js"><\/script>\n<div id="app">\n'+n.trim()+"\n</div>",l='@import url("//unpkg.com/element-ui@2.2.0/lib/theme-chalk/index.css");\n'+(o||"").trim()+"\n",a={js:i=i?i+"\nvar Ctor = Vue.extend(Main)\nnew Ctor().$mount('#app')":"new Vue().$mount('#app')",css:l,html:s,panel_js:3,panel_css:1},r=document.getElementById("fiddle-form")||document.createElement("form");r.innerHTML="";var u=document.createElement("textarea");r.method="post",r.action="https://jsfiddle.net/api/post/library/pure/",r.target="_blank";for(var c in a)u.name=c,u.value=a[c].toString(),r.appendChild(u.cloneNode());r.setAttribute("id","fiddle-form"),r.style.display="none",document.body.appendChild(r),r.submit()},scrollHandler:function(){var e=this.$refs.meta.getBoundingClientRect(),t=e.top,n=e.bottom,o=e.left;this.fixedControl=n>document.documentElement.clientHeight&&t+44<=document.documentElement.clientHeight,this.$refs.control.style.left=this.fixedControl?o+"px":"0"},removeScrollHandler:function(){this.scrollParent&&this.scrollParent.removeEventListener("scroll",this.scrollHandler)}},computed:{lang:function(){return"zh-CN"},langConfig:function(){return{"hide-text":"隐藏代码","show-text":"显示代码","button-text":"在线运行","tooltip-text":"前往 jsfiddle.net 运行此示例"}},blockClass:function(){return"demo-zh-CN demo-input"},iconClass:function(){return this.isExpanded?"el-icon-caret-top":"el-icon-caret-bottom"},controlText:function(){return this.isExpanded?this.langConfig["hide-text"]:this.langConfig["show-text"]},codeArea:function(){return this.$el.getElementsByClassName("meta")[0]},codeAreaHeight:function(){return this.$el.getElementsByClassName("description").length>0?this.$el.getElementsByClassName("description")[0].clientHeight+this.$el.getElementsByClassName("highlight")[0].clientHeight+20:this.$el.getElementsByClassName("highlight")[0].clientHeight}},watch:{isExpanded:function(e){var t=this;if(this.codeArea.style.height=e?this.codeAreaHeight+1+"px":"0",!e)return this.fixedControl=!1,this.$refs.control.style.left="0",void this.removeScrollHandler();setTimeout(function(){t.scrollParent=document.querySelector(".page-component__scroll > .el-scrollbar__wrap"),t.scrollParent&&t.scrollParent.addEventListener("scroll",t.scrollHandler),t.scrollHandler()},200)}},mounted:function(){var e=this;this.$nextTick(function(){var t=e.$el.getElementsByClassName("highlight")[0];0===e.$el.getElementsByClassName("description").length&&(t.style.width="100%",t.borderRight="none")})},beforeDestroy:function(){this.removeScrollHandler()}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-block",class:[e.blockClass,{hover:e.hovering}],on:{mouseenter:function(t){e.hovering=!0},mouseleave:function(t){e.hovering=!1}}},[e._t("source"),e._v(" "),n("div",{ref:"meta",staticClass:"meta"},[e.$slots.default?n("div",{staticClass:"description"},[e._t("default")],2):e._e(),e._v(" "),e._t("highlight")],2),e._v(" "),n("div",{ref:"control",staticClass:"demo-block-control",class:{"is-fixed":e.fixedControl},on:{click:function(t){e.isExpanded=!e.isExpanded}}},[n("transition",{attrs:{name:"arrow-slide"}},[n("i",{class:[e.iconClass,{hovering:e.hovering}]})]),e._v(" "),n("transition",{attrs:{name:"text-slide"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.hovering,expression:"hovering"}]},[e._v(e._s(e.controlText))])]),e._v(" "),n("el-tooltip",{attrs:{effect:"dark",content:e.langConfig["tooltip-text"],placement:"right"}},[n("transition",{attrs:{name:"text-slide"}},[n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.hovering||e.isExpanded,expression:"hovering || isExpanded"}],staticClass:"control-button",attrs:{size:"small",type:"text"},on:{click:function(t){t.stopPropagation(),e.goJsfiddle(t)}}},[e._v("\n          "+e._s(e.langConfig["button-text"])+"\n        ")])],1)],1)],1)],2)},staticRenderFns:[]},p=n("VU/8")(u,c,!1,function(e){n("QtZo")},null,null).exports;o.default.component("demo-block",p),o.default.config.productionTip=!1,new o.default({el:"#app",template:"<App/>",components:{App:r}})},QtZo:function(e,t){},sphj:function(e,t){},tvR6:function(e,t){},wTjH:function(e,t){},xmDI:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d405fdd985db327ecabd.js.map