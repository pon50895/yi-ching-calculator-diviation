webpackJsonp([0],{"2kYR":function(e,t){},"4Dql":function(e,t){},"8Xvk":function(e,t){},DdHN:function(e,t){},"HX+j":function(e,t){},KCQg:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={};a.d(n,"hour_diviation",function(){return q}),a.d(n,"spad_diviation",function(){return L}),a.d(n,"dream_diviation",function(){return O}),a.d(n,"roc_diviation",function(){return T}),a.d(n,"lunar_diviation",function(){return X});var r=a("7+uW"),o={name:"App",data:function(){return{routerUrls:[{title:"首頁",url:"/"},{title:"此刻",url:"/now_cul"},{title:"作夢",url:"/dream_cul"},{title:"指定",url:"/sp_cul"},{title:"民國生日",url:"/roc_cul"},{title:"西元生日",url:"/ad_cul"},{title:"西元靈數",url:"/spad_cul"},{title:"農曆生日",url:"/lunar_cul"}]}},mounted:function(){console.log(this.routerUrls)}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid",attrs:{id:"app"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-2"},[a("div",{staticClass:"list-group"},e._l(e.routerUrls,function(t){return a("li",{staticClass:"list-group-item"},[a("router-link",{attrs:{to:t.url}},[e._v(e._s(t.title))])],1)}))]),e._v(" "),a("div",{staticClass:"col-10"},[a("router-view")],1)])])},staticRenderFns:[]};var l=a("VU/8")(o,s,!1,function(e){a("fwjU")},null,null).exports,u=a("/ocq"),c={props:{},name:"now_cul",data:function(){return{result:""}},methods:{now_cul:function(){this.result=this.yijing.hour_diviation(Date.now())}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"now_cul"},[a("h1",[e._v("此刻(小時占)")]),e._v("\n  結果 : "),a("p",[e._v(e._s(e.result))]),e._v(" "),a("button",{on:{"~click":function(t){return e.now_cul(t)}}},[e._v("計算")])])},staticRenderFns:[]};var v=a("VU/8")(c,i,!1,function(e){a("2kYR")},"data-v-6231269e",null).exports,_={name:"lunar_cul",data:function(){return{result:"",year:0,month:0,day:0,hour:0}},methods:{Lunar_cul:function(){if(0!==this.year&&0!==this.month&&0!==this.day&&0!==this.hour){var e=this.solar2Lunar();this.result=this.yijing.lunar_diviation(e)}else alert("請輸入數值")},solar2Lunar:function(){return console.log(this.year,this.month,this.day,this.hour),this.lunar.solarToLunar(new Date(this.year,this.month-1,this.day-1,this.hour))},range:function(e,t){for(var a=[],n=0,r=e;r<=t;r++)a[n]=r,n++;return a}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lunar_cul"},[a("h1",[e._v("農曆生日")]),e._v("\n  西元年:\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],staticClass:"custom-select",attrs:{id:"Year"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.year=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(e.range(1900,2100),function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n  月\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.month,expression:"month"}],staticClass:"custom-select",attrs:{id:"Month"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.month=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(12,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("    \n  日\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.day,expression:"day"}],staticClass:"custom-select",attrs:{id:"Day"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.day=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(31,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n  小時\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.hour,expression:"hour"}],staticClass:"custom-select",attrs:{id:"hour"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.hour=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(24,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n  結果 : "),a("p",[e._v(e._s(e.result))]),e._v(" "),a("button",{on:{"~click":function(t){return e.Lunar_cul(t)}}},[e._v("計算")])])},staticRenderFns:[]};var p=a("VU/8")(_,d,!1,function(e){a("8Xvk")},"data-v-22168ffd",null).exports,m={props:{},name:"now_cul",data:function(){return{result:"",year:0,month:0,day:0,hour:0}},methods:{roc_cul:function(){if(0!==this.year&&0!==this.month&&0!==this.day&&0!==this.hour){new Date;this.result=this.yijing.roc_diviation(new Date(this.year,this.month,this.day,this.hour))}else alert("請輸入數值")}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v("民國生日")]),e._v("\n  民國年:\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],staticClass:"custom-select",attrs:{id:"rocYear"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.year=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(189,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n  月\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.month,expression:"month"}],staticClass:"custom-select",attrs:{id:"rocMonth"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.month=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(12,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("    \n  日\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.day,expression:"day"}],staticClass:"custom-select",attrs:{id:"rocDay"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.day=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(31,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n  小時\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.hour,expression:"hour"}],staticClass:"custom-select",attrs:{id:"hour"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.hour=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(24,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n  結果 : "),a("p",[e._v(e._s(e.result))]),e._v(" "),a("button",{on:{"~click":function(t){return e.roc_cul(t)}}},[e._v("計算")])])},staticRenderFns:[]};var f=a("VU/8")(m,h,!1,function(e){a("KCQg")},"data-v-6ca8f258",null).exports,y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"welcome"},[a("h1",[e._v("易經")]),e._v(" "),a("br"),e._v(" "),a("h3",[e._v("時間占禁忌")]),e._v(" "),a("ul",[a("li",[e._v("不怪不占")]),e._v(" "),a("li",[e._v("不事不占")]),e._v(" "),a("li",[e._v("不動不占")])])])}]};var b=a("VU/8")({props:{},name:"welcome",data:function(){return{}},methods:{}},y,!1,function(e){a("DdHN")},"data-v-074cfeea",null).exports,g={name:"sp_cul",data:function(){return{result:"",year:0,month:0,day:0,hour:0}},methods:{sp_cul:function(){if(0!==this.year&&0!==this.month&&0!==this.day&&0!==this.hour){new Date;this.result=this.yijing.hour_diviation(new Date(this.year,this.month,this.day,this.hour))}else alert("請輸入數值")},range:function(e,t){for(var a=[],n=0,r=e;r<=t;r++)a[n]=r,n++;return a}}},k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sp_cul"},[a("h1",[e._v("指定時間")]),e._v("\n  西元年:\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],staticClass:"custom-select",attrs:{id:"Year"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.year=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(e.range(1900,2100),function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n  月\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.month,expression:"month"}],staticClass:"custom-select",attrs:{id:"Month"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.month=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(12,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("    \n  日\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.day,expression:"day"}],staticClass:"custom-select",attrs:{id:"Day"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.day=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(31,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n  小時\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.hour,expression:"hour"}],staticClass:"custom-select",attrs:{id:"hour"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.hour=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(24,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n  結果 : "),a("p",[e._v(e._s(e.result))]),e._v(" "),a("button",{on:{"~click":function(t){return e.sp_cul(t)}}},[e._v("計算")])])},staticRenderFns:[]};var w=a("VU/8")(g,k,!1,function(e){a("qCPO")},"data-v-32351a74",null).exports,C={name:"sp_cul",data:function(){return{result:"",year:0,month:0,day:0,hour:0}},methods:{sp_cul:function(){if(0!==this.year&&0!==this.month&&0!==this.day&&0!==this.hour){new Date;this.result=this.yijing.hour_diviation(new Date(this.year,this.month,this.day,this.hour))}},range:function(e,t){for(var a=[],n=0,r=e;r<=t;r++)a[n]=r,n++;return a}}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sp_cul"},[a("h1",[e._v("西元生日")]),e._v("\n  西元年:\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],staticClass:"custom-select",attrs:{id:"Year"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.year=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(e.range(1900,2100),function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n  月\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.month,expression:"month"}],staticClass:"custom-select",attrs:{id:"Month"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.month=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(12,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("    \n  日\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.day,expression:"day"}],staticClass:"custom-select",attrs:{id:"Day"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.day=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(31,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n  小時\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.hour,expression:"hour"}],staticClass:"custom-select",attrs:{id:"hour"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.hour=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(24,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n  結果 : "),a("p",[e._v(e._s(e.result))]),e._v(" "),a("button",{on:{"~click":function(t){return e.sp_cul(t)}}},[e._v("計算")])])},staticRenderFns:[]};var D=a("VU/8")(C,x,!1,function(e){a("HX+j")},"data-v-07a4148c",null).exports,N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dream_cul"},[a("h1",[e._v("作夢")]),e._v("\n  結果 : "),a("p",[e._v(e._s(e.result))]),e._v(" "),a("button",{on:{"~click":function(t){return e.dream_cul(t)}}},[e._v("計算")])])},staticRenderFns:[]};var A=a("VU/8")({props:{},name:"dream_cul",data:function(){return{result:""}},methods:{dream_cul:function(){this.result=this.yijing.dream_diviation()}}},N,!1,function(e){a("OT3I")},"data-v-28065517",null).exports,P={name:"spad_cul",data:function(){return{result:"",year:0,month:0,day:0,hour:0}},methods:{sp_cul:function(){if(0!==this.year&&0!==this.month&&0!==this.day&&0!==this.hour){new Date;this.result=this.yijing.spad_diviation(new Date(this.year,this.month,this.day,this.hour))}else alert("請輸入數值")},range:function(e,t){for(var a=[],n=0,r=e;r<=t;r++)a[n]=r,n++;return a}}},U={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"spad_cul"},[a("h1",[e._v("西元靈數生日")]),e._v("\n  西元年:\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],staticClass:"custom-select",attrs:{id:"Year"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.year=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(e.range(1900,2100),function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n  月\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.month,expression:"month"}],staticClass:"custom-select",attrs:{id:"Month"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.month=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(12,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("    \n  日\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.day,expression:"day"}],staticClass:"custom-select",attrs:{id:"Day"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.day=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(31,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n  小時\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.hour,expression:"hour"}],staticClass:"custom-select",attrs:{id:"hour"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.hour=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(24,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n  結果 : "),a("p",[e._v(e._s(e.result))]),e._v(" "),a("button",{on:{"~click":function(t){return e.sp_cul(t)}}},[e._v("計算")])])},staticRenderFns:[]};var j=a("VU/8")(P,U,!1,function(e){a("4Dql")},"data-v-42eb847f",null).exports;r.a.use(u.a);var F=new u.a({mode:"history",routes:[{path:"/now_cul",name:"now_cul",component:v},{path:"/sp_cul",name:"sp_cul",component:w},{path:"/roc_cul",name:"roc_cul",component:f},{path:"/",name:"welcome",component:b},{path:"/lunar_cul",name:"lunar_cul",component:p},{path:"/dream_cul",name:"dream_cul",component:A},{path:"/ad_cul",name:"ad_cul",component:D},{path:"/spad_cul",name:"spad_cul",component:j}]}),H=a("v/tk"),R=a.n(H);function E(e,t,a,n){var r=0,o=0,s=0;o=(e+t+a+n)%8,s=(e+t+a+n)%6,0==(r=(e+t+a)%8)&&(r=8),0==o&&(o=8),0==s&&(s=6);var l={above:r,below:o,dynamic_line:s};return console.log(r,o,s),l}function M(e){var t=e[6],a=e[0],n=e[1],r=e[2],o=e[3],s=e[4],l=e[5];switch(t){case 0:l=(l+1)%2;break;case 1:a=(a+1)%2;break;case 2:n=(n+1)%2;break;case 3:r=(r+1)%2;break;case 4:o=(o+1)%2;break;case 5:s=(s+1)%2}var u=[a,n,r,o,s,l,t];return console.log("dynamic lines",u),u}function Y(e,t,a){var n=0,r=0,o=0,s=0,l=0,u=0;switch(console.log("get six lines",e,t,a),t){case 1:n=1,r=1,o=1;break;case 2:n=1,r=1,o=2;break;case 3:n=1,r=2,o=1;break;case 4:n=1,r=2,o=2;break;case 5:n=2,r=1,o=1;break;case 6:n=2,r=1,o=2;break;case 7:n=2,r=2,o=1;break;case 8:n=2,r=2,o=2}switch(e){case 1:s=1,l=1,u=1;break;case 2:s=1,l=1,u=2;break;case 3:s=1,l=2,u=1;break;case 4:s=1,l=2,u=2;break;case 5:s=2,l=1,u=1;break;case 6:s=2,l=1,u=2;break;case 7:s=2,l=2,u=1;break;case 8:s=2,l=2,u=2}var c=[n,r,o,s,l,u,a];return console.log(c),c}function $(e){var t="";switch(32*(e[0]%2)+16*(e[1]%2)+8*(e[2]%2)+4*(e[3]%2)+2*(e[4]%2)+1*(e[5]%2)){case 0:t="坤";break;case 1:t="剝";break;case 2:t="比";break;case 3:t="觀";break;case 4:t="豫";break;case 5:t="晉";break;case 6:t="萃";break;case 7:t="否";break;case 8:t="謙";break;case 9:t="艮";break;case 10:t="蹇";break;case 11:t="漸";break;case 12:t="小過";break;case 13:t="旅";break;case 14:t="咸";break;case 15:t="遯";break;case 16:t="師";break;case 17:t="蒙";break;case 18:t="坎";break;case 19:t="渙";break;case 20:t="解";break;case 21:t="未濟";break;case 22:t="困";break;case 23:t="訟";break;case 24:t="升";break;case 25:t="蠱";break;case 26:t="井";break;case 27:t="巽";break;case 28:t="恆";break;case 29:t="鼎";break;case 30:t="大過";break;case 31:t="姤";break;case 32:t="復";break;case 33:t="頤";break;case 34:t="屯";break;case 35:t="益";break;case 36:t="震";break;case 37:t="噬嗑";break;case 38:t="隨";break;case 39:t="无妄";break;case 40:t="明夷";break;case 41:t="賁";break;case 42:t="既濟";break;case 43:t="家人";break;case 44:t="豐";break;case 45:t="離";break;case 46:t="革";break;case 47:t="同人";break;case 48:t="臨";break;case 49:t="損";break;case 50:t="節";break;case 51:t="中孚";break;case 52:t="歸妹";break;case 53:t="睽";break;case 54:t="兌";break;case 55:t="履";break;case 56:t="泰";break;case 57:t="大畜";break;case 58:t="需";break;case 59:t="小畜";break;case 60:t="大壯";break;case 61:t="大有";break;case 62:t="夬";break;case 63:t="乾"}return t}function V(e){for(var t=0;e>9;)t+=e%10,e=(e-e%10)/10;return t+=e}function q(e){var t,a,n,r,o,s,l=[],u=new Date(e);t=u.getFullYear(),a=u.getMonth()+1,n=u.getDate(),r=u.getHours(),console.log(t,a,n,r),s=Y((o=E(t,a,n,r)).above,o.below,o.dynamic_line),l.push($(s));var c=M(s);return l.push($(c)),l[0]+"之"+l[1]+"卦"}function L(e){var t,a,n,r,o,s,l=[],u=new Date(e);t=V(u.getFullYear()),a=V(u.getMonth()+1),n=V(u.getDate()),r=V(u.getHours()),console.log(t,a,n,r),s=Y((o=E(t,a,n,r)).above,o.below,o.dynamic_line),l.push($(s));var c=M(s);return l.push($(c)),l[0]+"之"+l[1]+"卦"}function O(){var e,t,a=[],n=new Date,r=n.getHours(),o=n.getMinutes();console.log(r,o),t=Y((e=function(e,t){var a=e%8,n=(e+t)%8,r=(e+t)%6;return 0===a&&(a=8),0===n&&(n=8),0===r&&(r=6),{above:a,below:n,dynamic_line:r}}(r,o)).above,e.below,e.dynamic_line),a.push($(t));var s=M(t);return a.push($(s)),a[0]+"之"+a[1]+"卦"}function T(e){var t,a,n,r,o,s,l=[],u=new Date(e);t=u.getFullYear()-1911,a=u.getMonth()+1,n=u.getDate(),r=u.getHours(),console.log(t,a,n,r),s=Y((o=E(t,a,n,r)).above,o.below,o.dynamic_line),l.push($(s));var c=M(s);return l.push($(c)),l[0]+"之"+l[1]+"卦"}function X(e){var t=[],a=new Date,n=e.year,r=e.month,o=e.day,s=function(e){var t=0;switch(e){case 1:case 2:t=2;break;case 3:case 4:t=3;break;case 5:case 6:t=4;break;case 7:case 8:t=5;break;case 9:case 10:t=6;break;case 11:case 12:t=7;break;case 13:case 14:t=8;break;case 15:case 16:t=9;break;case 17:case 18:t=10;break;case 19:case 20:t=11;break;case 21:case 22:t=12;break;case 23:case 0:t=1}return t}(a.getHours());console.log("農曆日",n,r,o,s);var l=E(n,r,o,s);console.log("農曆日",l);var u=Y(l.above,l.below,l.dynamic_line);t.push($(u));var c=M(u);return t.push($(c)),t[0]+"之"+t[1]+"卦"}r.a.prototype.lunar=R.a,r.a.prototype.yijing=n,r.a.config.productionTip=!1,new r.a({el:"#app",data:{},router:F,components:{App:l},template:"<App/>"})},OT3I:function(e,t){},fwjU:function(e,t){},qCPO:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.c613f871fa126488e205.js.map