(function(t){function e(e){for(var o,i,s=e[0],c=e[1],u=e[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(d.length)d.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],o=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(o=!1)}o&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var o={},a={app:0},n=[];function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=o,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"1b06":function(t,e,r){},"27f2":function(t,e,r){"use strict";var o=r("54a1"),a=r.n(o);a.a},"54a1":function(t,e,r){},"5c0b":function(t,e,r){"use strict";var o=r("9c0c"),a=r.n(o);a.a},"9c0c":function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("b-navbar",{attrs:{fixed:"top"}},[r("b-navbar-brand",[t._v("VUE CRUD")])],1),r("router-view")],1)},n=[],i=(r("5c0b"),r("2877")),s={},c=Object(i["a"])(s,a,n,!1,null,null,null),u=c.exports,l=r("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var f=r("8c4f"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("b-container",[r("b-tabs",{attrs:{small:""}},[r("b-tab",{attrs:{title:"TABLE"}},[r("Crud",{attrs:{apidata:t.apiData,form:t.form},on:{deletedata:t.deleteData,updatedata:t.updateFormData,formdata:t.submitEditData}})],1),r("b-tab",{attrs:{title:"INSERT NEW"}},[r("Insert",{attrs:{form:t.form},on:{formdata:t.submitFormData,resetdata:t.resetFromData}})],1)],1)],1)],1)},p=[],m=(r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"crud"},[r("table",[t._m(0),t._l(t.apidata,(function(e,o){return r("tr",{key:o},[r("td",[t._v(t._s(e.userId))]),r("td",[t._v(t._s(e.id))]),r("td",[t._v(t._s(e.title))]),r("td",[t._v(t._s(e.completed))]),r("td",{on:{click:function(r){return t.updateData(e)}}},[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.edit",modifiers:{edit:!0}}],attrs:{size:"sm",variant:"dark",block:""}},[t._v("EDIT")])],1),r("td",[r("b-button",{attrs:{size:"sm",variant:"danger",block:""},on:{click:function(e){return t.deleteApiData(o)}}},[t._v("DELETE")])],1)])}))],2),r("b-modal",{attrs:{id:"edit",title:"EDIT","hide-footer":""}},[r("b-form",{on:{submit:t.onSubmit}},[r("b-form-group",{attrs:{label:"USER ID:","label-for":"input-1"}},[r("b-form-input",{attrs:{id:"input-1",required:""},model:{value:t.form.userId,callback:function(e){t.$set(t.form,"userId",e)},expression:"form.userId"}})],1),r("b-form-group",{attrs:{label:"ID:","label-for":"input-2"}},[r("b-form-input",{attrs:{type:"number",id:"input-2",required:""},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),r("b-form-group",{attrs:{label:"TITLE:","label-for":"input-3"}},[r("b-form-input",{attrs:{id:"input-3",required:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),r("b-form-group",{attrs:{label:"COMPLETED:","label-for":"input-4"}},[r("b-form-select",{attrs:{id:"input-4",options:t.form.options,required:""},model:{value:t.form.completed,callback:function(e){t.$set(t.form,"completed",e)},expression:"form.completed"}})],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("UPDATE")])],1)],1)],1)},v=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",[t._v("USER ID")]),r("th",[t._v("ID")]),r("th",[t._v("TITLE")]),r("th",[t._v("COMPLETED")]),r("th",{attrs:{colspan:"2"}},[t._v("ACTIONS")])])}],h=r("d4ec"),D=r("bee2"),g=r("99de"),y=r("7e84"),O=r("262e"),j=r("9ab4"),E=r("60a3"),_=function(t){function e(){return Object(h["a"])(this,e),Object(g["a"])(this,Object(y["a"])(e).apply(this,arguments))}return Object(O["a"])(e,t),Object(D["a"])(e,[{key:"deleteApiData",value:function(t){this.$emit("deletedata",t)}},{key:"updateData",value:function(t){this.$emit("updatedata",t)}},{key:"onSubmit",value:function(t){t.preventDefault(),this.$emit("formdata",this.form)}}]),e}(E["c"]);j["a"]([Object(E["b"])()],_.prototype,"apidata",void 0),j["a"]([Object(E["b"])()],_.prototype,"form",void 0),_=j["a"]([E["a"]],_);var w=_,I=w,k=(r("e21b"),Object(i["a"])(I,b,v,!1,null,"2982844e",null)),S=k.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"insert"},[r("b-row",[r("b-col",{attrs:{"offset-lg":"3",lg:"6","offset-md":"3",md:"6",sm:"12"}},[r("div",{attrs:{id:"newDataInsertForm"}},[r("div",{staticClass:"title"},[t._v("Insert new")]),r("div",{staticClass:"form-main-body"},[r("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[r("b-form-group",{attrs:{label:"USER ID:","label-for":"input-1"}},[r("b-form-input",{attrs:{id:"input-1",required:""},model:{value:t.form.userId,callback:function(e){t.$set(t.form,"userId",e)},expression:"form.userId"}})],1),r("b-form-group",{attrs:{label:"ID:","label-for":"input-2"}},[r("b-form-input",{attrs:{type:"number",id:"input-2",required:""},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),r("b-form-group",{attrs:{label:"TITLE:","label-for":"input-3"}},[r("b-form-input",{attrs:{id:"input-3",required:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),r("b-form-group",{attrs:{label:"COMPLETED:","label-for":"input-4"}},[r("b-form-select",{attrs:{id:"input-4",options:t.form.options,required:""},model:{value:t.form.completed,callback:function(e){t.$set(t.form,"completed",e)},expression:"form.completed"}})],1),r("b-row",[r("b-col",{attrs:{cols:"6"}},[r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("SUBMIT")])],1),r("b-col",{staticClass:"text-right",attrs:{cols:"6"}},[r("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("RESET")])],1)],1)],1)],1)])])],1)],1)},T=[],x=function(t){function e(){return Object(h["a"])(this,e),Object(g["a"])(this,Object(y["a"])(e).apply(this,arguments))}return Object(O["a"])(e,t),Object(D["a"])(e,[{key:"onSubmit",value:function(t){t.preventDefault(),this.$emit("formdata",this.form)}},{key:"onReset",value:function(t){t.preventDefault(),this.$emit("resetdata",!0)}}]),e}(E["c"]);j["a"]([Object(E["b"])()],x.prototype,"form",void 0),x=j["a"]([E["a"]],x);var P=x,$=P,C=(r("fceb"),Object(i["a"])($,A,T,!1,null,"ad9d4706",null)),N=C.exports,U=r("2f62");function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function R(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(Object(r),!0).forEach((function(e){Object(m["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var q={name:"home",components:{Crud:S,Insert:N},data:function(){return{form:{userId:"",id:"",title:"",completed:"",options:[{value:!0,text:"TRUE"},{value:!1,text:"FALSE"}]}}},computed:{apiData:function(){return this.$store.state.apiData}},methods:R({},Object(U["b"])(["getApiData","insertNewData","deleteApiData","updateApiData"]),{submitFormData:function(t){this.form=t,this.insertNewData(t)},resetFromData:function(t){this.form.userId="",this.form.id="",this.form.title="",this.form.completed="",this.getApiData()},deleteData:function(t){this.deleteApiData(t)},submitEditData:function(t){this.updateApiData(t)},updateFormData:function(t){this.form.userId=t.userId,this.form.id=t.id,this.form.title=t.title,this.form.completed=t.completed}}),mounted:function(){this.getApiData()}},L=q,M=(r("27f2"),Object(i["a"])(L,d,p,!1,null,"b720f220",null)),B=M.exports;o["default"].use(f["a"]);var z=[{path:"/",name:"home",component:B}],J=new f["a"]({routes:z}),V=J,W=(r("a434"),r("bc3a")),G=r.n(W);o["default"].use(U["a"],G.a);var H=new U["a"].Store({state:{apiData:[]},mutations:{setApiData:function(t,e){t.apiData=e},spliceApiData:function(t,e){t.apiData.splice(e,1)}},actions:{getApiData:function(t){G.a.get("https://jsonplaceholder.typicode.com/todos").then((function(e){t.commit("setApiData",e.data)})).catch((function(t){console.log(t)}))},insertNewData:function(t,e){G.a.post("https://jsonplaceholder.typicode.com/todos",{userId:e.userId,id:e.id,title:e.title,completed:e.completed}).then((function(t){alert("INSERT SUCCESS")})).catch((function(t){console.log(t)}))},deleteApiData:function(t,e){G.a.delete("https://jsonplaceholder.typicode.com/todos"+e).then((function(r){t.commit("spliceApiData",e)})).catch((function(t){console.log(t)})),t.commit("spliceApiData",e)},updateApiData:function(t,e){G.a.put("https://jsonplaceholder.typicode.com/todos/"+e.id,{userId:e.userId,id:e.id,title:e.title,completed:e.completed}).then((function(t){alert("UPDATE SUCCESS")})).catch((function(t){console.log(t)}))}},modules:{}}),K=r("5f5b");r("f9e3"),r("2dd8");o["default"].use(K["a"]),o["default"].config.productionTip=!1,new o["default"]({router:V,store:H,render:function(t){return t(u)}}).$mount("#app")},e21b:function(t,e,r){"use strict";var o=r("1b06"),a=r.n(o);a.a},e949:function(t,e,r){},fceb:function(t,e,r){"use strict";var o=r("e949"),a=r.n(o);a.a}});
//# sourceMappingURL=app.9a3aeec8.js.map