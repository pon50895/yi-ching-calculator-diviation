webpackJsonp([0],{"1Cd6":function(e,t){},"2OfE":function(e,t){},BtCh:function(e,t){},JzeS:function(e,t){},LajW:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={};a.d(r,"hour_diviation",function(){return L}),a.d(r,"spad_diviation",function(){return Z}),a.d(r,"dream_diviation",function(){return J}),a.d(r,"roc_diviation",function(){return O}),a.d(r,"lunar_diviation",function(){return W});var n=a("7+uW"),o={name:"App",data:function(){return{routerUrls:[{title:"首頁",url:"/"},{title:"小時",url:"/now_cul"},{title:"時刻",url:"/dream_cul"},{title:"指定",url:"/sp_cul"},{title:"民國生日",url:"/roc_cul"},{title:"西元生日",url:"/ad_cul"},{title:"西元靈數",url:"/spad_cul"},{title:"農曆生日",url:"/lunar_cul"}]}},mounted:function(){console.log(this.routerUrls)}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid",attrs:{id:"app"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-2"},[a("div",{staticClass:"list-group"},e._l(e.routerUrls,function(t){return a("li",{staticClass:"list-group-item"},[a("router-link",{attrs:{to:t.url}},[e._v(e._s(t.title))])],1)}))]),e._v(" "),a("div",{staticClass:"col-10"},[a("router-view")],1)])])},staticRenderFns:[]};var i=a("VU/8")(o,s,!1,function(e){a("BtCh")},null,null).exports,l=a("/ocq"),u={props:{},name:"now_cul",data:function(){return{result:"",timestring:""}},methods:{now_cul:function(){var e=this.yijing.hour_diviation(Date.now()),t=e[0];this.result=t[0]+"之"+t[1]+"掛";var a=e[1];this.timestring=a.getFullYear()+" "+(a.getMonth()+1)+" "+a.getDate()+" "+a.getHours()+" "+a.getMinutes()}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"now_cul"},[a("h1",[e._v("此刻(小時占)")]),e._v("\n  結果 : "),a("p",[e._v(e._s(e.result))]),e._v(" "),a("button",{on:{click:e.now_cul}},[e._v("計算")]),e._v(" "),a("p",{model:{value:e.timestring,callback:function(t){e.timestring=t},expression:"timestring"}},[e._v(e._s(e.timestring))])])},staticRenderFns:[]};var v=a("VU/8")(u,c,!1,function(e){a("1Cd6")},"data-v-8cf04df0",null).exports,_={name:"lunar_cul",data:function(){return{result:"",year:0,month:0,day:0,hour:0}},methods:{Lunar_cul:function(){if(0!==this.year&&0!==this.month&&0!==this.day&&void 0!==this.hour){var e=this.solar2Lunar();this.result=this.yijing.lunar_diviation(e)}else alert("請輸入數值")},solar2Lunar:function(){return console.log(this.year,this.month,this.day,this.hour),this.lunar.solarToLunar(new Date(this.year,this.month-1,this.day-1,this.hour))},range:function(e,t){for(var a=[],r=0,n=e;n<=t;n++)a[r]=n,r++;return a}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lunar_cul"},[a("h1",[e._v("農曆生日")]),e._v("\n  西元年:\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],staticClass:"custom-select",attrs:{id:"Year"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.year=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(e.range(1900,2100),function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n  月\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.month,expression:"month"}],staticClass:"custom-select",attrs:{id:"Month"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.month=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(12,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("    \n  日\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.day,expression:"day"}],staticClass:"custom-select",attrs:{id:"Day"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.day=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(31,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n  小時\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.hour,expression:"hour"}],staticClass:"custom-select",attrs:{id:"hour"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.hour=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(24,function(t){return a("option",{domProps:{value:t-1}},[e._v(e._s(t-1))])})],2),e._v("\n  結果 : "),a("p",[e._v(e._s(e.result))]),e._v(" "),a("button",{on:{click:e.Lunar_cul}},[e._v("計算")])])},staticRenderFns:[]};var m=a("VU/8")(_,d,!1,function(e){a("ZrbG")},"data-v-6b0bd5f5",null).exports,p={props:{},name:"now_cul",data:function(){return{result:"",year:0,month:0,day:0,hour:0}},methods:{roc_cul:function(){if(0!==this.year&&0!==this.month&&0!==this.day&&void 0!==this.hour){new Date;this.result=this.yijing.roc_diviation(new Date(this.year,this.month,this.day,this.hour))}else alert("請輸入數值")},range:function(e,t){for(var a=[],r=0,n=e;n<=t;n++)a[r]=n,r++;return a}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v("民國生日")]),e._v("\n   西元年:\n"),a("select",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],staticClass:"custom-select",attrs:{id:"Year"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.year=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(e.range(1911,2100),function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n   月\n   "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.month,expression:"month"}],staticClass:"custom-select",attrs:{id:"rocMonth"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.month=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(12,function(t){return a("option",{domProps:{value:t-1}},[e._v(e._s(t))])})],2),e._v("    \n   日\n   "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.day,expression:"day"}],staticClass:"custom-select",attrs:{id:"rocDay"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.day=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(31,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n   小時\n   "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.hour,expression:"hour"}],staticClass:"custom-select",attrs:{id:"hour"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.hour=t.target.multiple?a:a[0]}}},[a("option",{attrs:{selected:""}},[e._v("Choose...")]),e._v(" "),e._l(24,function(t){return a("option",{domProps:{value:t-1}},[e._v(e._s(t-1))])})],2),e._v("\n   結果 : "),a("p",[e._v(e._s(e.result))]),e._v(" "),a("button",{on:{click:e.roc_cul}},[e._v("計算")])])},staticRenderFns:[]};var f=a("VU/8")(p,h,!1,function(e){a("LajW")},"data-v-8764502a",null).exports,y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"welcome"},[a("h1",[e._v("易經")]),e._v(" "),a("br"),e._v(" "),a("h3",[e._v("時間占禁忌")]),e._v(" "),a("ul",[a("li",[e._v("不怪不占")]),e._v(" "),a("li",[e._v("不事不占")]),e._v(" "),a("li",[e._v("不動不占")])]),e._v(" "),a("br"),e._v(" "),a("h1",[e._v("用途：")]),e._v(" "),a("ul",[a("li",[e._v("小時：用按鈕時間，以小時為單位起卦。")]),e._v(" "),a("li",[e._v("時刻：作夢占，用按鈕時間，以分為單位起卦。")]),e._v(" "),a("li",[e._v("指定：指定時間起卦，以小時為單位。")]),e._v(" "),a("li",[e._v("生日起卦：西元/西元靈數/民國/農曆生日起卦。")]),e._v(" "),a("li",[e._v("代表各對你有意義的生日與對應運勢")])])])}]};var g=a("VU/8")({props:{},name:"welcome",data:function(){return{}},methods:{}},y,!1,function(e){a("2OfE")},"data-v-017a0e8e",null).exports,b={name:"sp_cul",data:function(){return{result:"",year:0,month:0,day:0,hour:0}},methods:{sp_cul:function(){if(0!==this.year&&0!==this.month&&0!==this.day&&void 0!==this.hour){new Date;var e=this.yijing.hour_diviation(new Date(this.year,this.month,this.day,this.hour))[0];this.result=e[0]+"之"+e[1]+"掛"}else alert("請輸入數值")},range:function(e,t){for(var a=[],r=0,n=e;n<=t;n++)a[r]=n,r++;return a}}},k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sp_cul"},[a("h1",[e._v("指定時間")]),e._v("\n  西元年:\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],staticClass:"custom-select",attrs:{id:"Year"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.year=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(e.range(1900,2100),function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n  月\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.month,expression:"month"}],staticClass:"custom-select",attrs:{id:"Month"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.month=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(12,function(t){return a("option",{domProps:{value:t-1}},[e._v(e._s(t))])})],2),e._v("    \n  日\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.day,expression:"day"}],staticClass:"custom-select",attrs:{id:"Day"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.day=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(31,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n  小時\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.hour,expression:"hour"}],staticClass:"custom-select",attrs:{id:"hour"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.hour=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(24,function(t){return a("option",{domProps:{value:t-1}},[e._v(e._s(t-1))])})],2),e._v("\n  結果 : "),a("p",[e._v(e._s(e.result))]),e._v(" "),a("button",{on:{click:e.sp_cul}},[e._v("計算")])])},staticRenderFns:[]};var w=a("VU/8")(b,k,!1,function(e){a("u70d")},"data-v-cd71ccb2",null).exports,C={name:"sp_cul",data:function(){return{result:"",year:0,month:0,day:0,hour:0}},methods:{sp_cul:function(){if(0!==this.year&&0!==this.month&&0!==this.day&&void 0!==this.hour){new Date;this.result=this.yijing.hour_diviation(new Date(this.year,this.month,this.day,this.hour))}},range:function(e,t){for(var a=[],r=0,n=e;n<=t;n++)a[r]=n,r++;return a}}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sp_cul"},[a("h1",[e._v("西元生日")]),e._v("\n  西元年:\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],staticClass:"custom-select",attrs:{id:"Year"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.year=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(e.range(1900,2100),function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n  月\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.month,expression:"month"}],staticClass:"custom-select",attrs:{id:"Month"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.month=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(12,function(t){return a("option",{domProps:{value:t-1}},[e._v(e._s(t))])})],2),e._v("    \n  日\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.day,expression:"day"}],staticClass:"custom-select",attrs:{id:"Day"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.day=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(31,function(t){return a("option",{domProps:{value:t-1}},[e._v(e._s(t))])})],2),e._v("\n  小時\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.hour,expression:"hour"}],staticClass:"custom-select",attrs:{id:"hour"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.hour=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(24,function(t){return a("option",{domProps:{value:t-1}},[e._v(e._s(t-1))])})],2),e._v("\n  結果 : "),a("p",[e._v(e._s(e.result))]),e._v(" "),a("button",{on:{click:e.sp_cul}},[e._v("計算")])])},staticRenderFns:[]};var D=a("VU/8")(C,x,!1,function(e){a("nMpZ")},"data-v-087df074",null).exports,A={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dream_cul"},[a("h1",[e._v("作夢用時刻占")]),e._v("\n  結果 : "),a("p",[e._v(e._s(e.result))]),e._v(" "),a("button",{on:{click:e.dream_cul}},[e._v("計算")]),e._v(" "),a("p",{model:{value:e.timestring,callback:function(t){e.timestring=t},expression:"timestring"}},[e._v(e._s(e.timestring))])])},staticRenderFns:[]};var N=a("VU/8")({name:"dream_cul",data:function(){return{result:"",timestring:""}},methods:{dream_cul:function(){var e=this.yijing.dream_diviation(),t=e[0];this.result=t[0]+"之"+t[1];var a=e[1];this.timestring=a.getFullYear()+" "+(a.getMonth()+1)+" "+a.getDate()+" "+a.getHours()+" "+a.getMinutes()}}},A,!1,function(e){a("tUn+")},"data-v-14aa3d43",null).exports,P={name:"spad_cul",data:function(){return{result:"",year:0,month:0,day:0,hour:0}},methods:{sp_cul:function(){if(0!==this.year&&0!==this.month&&0!==this.day&&void 0!==this.hour){new Date;this.result=this.yijing.spad_diviation(new Date(this.year,this.month,this.day,this.hour))}else alert("請輸入數值")},range:function(e,t){for(var a=[],r=0,n=e;n<=t;n++)a[r]=n,r++;return a}}},M={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"spad_cul"},[a("h1",[e._v("西元靈數生日")]),e._v("\n  西元年:\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],staticClass:"custom-select",attrs:{id:"Year"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.year=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(e.range(1900,2100),function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n  月\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.month,expression:"month"}],staticClass:"custom-select",attrs:{id:"Month"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.month=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(12,function(t){return a("option",{domProps:{value:t-1}},[e._v(e._s(t))])})],2),e._v("    \n  日\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.day,expression:"day"}],staticClass:"custom-select",attrs:{id:"Day"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.day=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(31,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])})],2),e._v("\n  小時\n  "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.hour,expression:"hour"}],staticClass:"custom-select",attrs:{id:"hour"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.hour=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:""}},[e._v("Choose...")]),e._v(" "),e._l(24,function(t){return a("option",{domProps:{value:t-1}},[e._v(e._s(t-1))])})],2),e._v("\n  結果 : "),a("p",[e._v(e._s(e.result))]),e._v(" "),a("button",{on:{click:e.sp_cul}},[e._v("計算")])])},staticRenderFns:[]};var F=a("VU/8")(P,M,!1,function(e){a("JzeS")},"data-v-a211f51e",null).exports;n.a.use(l.a);var U=new l.a({routes:[{path:"/now_cul",name:"now_cul",component:v},{path:"/sp_cul",name:"sp_cul",component:w},{path:"/roc_cul",name:"roc_cul",component:f},{path:"/",name:"welcome",component:g},{path:"/lunar_cul",name:"lunar_cul",component:m},{path:"/dream_cul",name:"dream_cul",component:N},{path:"/ad_cul",name:"ad_cul",component:D},{path:"/spad_cul",name:"spad_cul",component:F}]}),E=a("v/tk"),j=a.n(E);function Y(e,t,a,r){var n=0,o=0,s=0;o=(e+t+a+r)%8,s=(e+t+a+r)%6,0==(n=(e+t+a)%8)&&(n=8),0==o&&(o=8),0==s&&(s=6);var i={above:n,below:o,dynamic_line:s};return console.log(n,o,s),i}function $(e){var t=e[6],a=e[0],r=e[1],n=e[2],o=e[3],s=e[4],i=e[5];switch(t){case 0:i=(i+1)%2;break;case 1:a=(a+1)%2;break;case 2:r=(r+1)%2;break;case 3:n=(n+1)%2;break;case 4:o=(o+1)%2;break;case 5:s=(s+1)%2}var l=[a,r,n,o,s,i,t];return console.log("dynamic lines",l),l}function H(e,t,a){var r=0,n=0,o=0,s=0,i=0,l=0;switch(console.log("get six lines",e,t,a),t){case 1:r=1,n=1,o=1;break;case 2:r=1,n=1,o=2;break;case 3:r=1,n=2,o=1;break;case 4:r=1,n=2,o=2;break;case 5:r=2,n=1,o=1;break;case 6:r=2,n=1,o=2;break;case 7:r=2,n=2,o=1;break;case 8:r=2,n=2,o=2}switch(e){case 1:s=1,i=1,l=1;break;case 2:s=1,i=1,l=2;break;case 3:s=1,i=2,l=1;break;case 4:s=1,i=2,l=2;break;case 5:s=2,i=1,l=1;break;case 6:s=2,i=1,l=2;break;case 7:s=2,i=2,l=1;break;case 8:s=2,i=2,l=2}var u=[r,n,o,s,i,l,a];return console.log(u),u}function R(e){var t="";switch(32*(e[0]%2)+16*(e[1]%2)+8*(e[2]%2)+4*(e[3]%2)+2*(e[4]%2)+1*(e[5]%2)){case 0:t="坤";break;case 1:t="剝";break;case 2:t="比";break;case 3:t="觀";break;case 4:t="豫";break;case 5:t="晉";break;case 6:t="萃";break;case 7:t="否";break;case 8:t="謙";break;case 9:t="艮";break;case 10:t="蹇";break;case 11:t="漸";break;case 12:t="小過";break;case 13:t="旅";break;case 14:t="咸";break;case 15:t="遯";break;case 16:t="師";break;case 17:t="蒙";break;case 18:t="坎";break;case 19:t="渙";break;case 20:t="解";break;case 21:t="未濟";break;case 22:t="困";break;case 23:t="訟";break;case 24:t="升";break;case 25:t="蠱";break;case 26:t="井";break;case 27:t="巽";break;case 28:t="恆";break;case 29:t="鼎";break;case 30:t="大過";break;case 31:t="姤";break;case 32:t="復";break;case 33:t="頤";break;case 34:t="屯";break;case 35:t="益";break;case 36:t="震";break;case 37:t="噬嗑";break;case 38:t="隨";break;case 39:t="无妄";break;case 40:t="明夷";break;case 41:t="賁";break;case 42:t="既濟";break;case 43:t="家人";break;case 44:t="豐";break;case 45:t="離";break;case 46:t="革";break;case 47:t="同人";break;case 48:t="臨";break;case 49:t="損";break;case 50:t="節";break;case 51:t="中孚";break;case 52:t="歸妹";break;case 53:t="睽";break;case 54:t="兌";break;case 55:t="履";break;case 56:t="泰";break;case 57:t="大畜";break;case 58:t="需";break;case 59:t="小畜";break;case 60:t="大壯";break;case 61:t="大有";break;case 62:t="夬";break;case 63:t="乾"}return t}function V(e){for(var t=0;e>9;)t+=e%10,e=(e-e%10)/10;return t+=e}function L(e){var t,a=[],r=new Date(e);year=r.getFullYear(),month=r.getMonth()+1,day=r.getDate(),hour=r.getHours(),console.log(year,month,day,hour);var n=Y(year,month,day,hour);t=H(n.above,n.below,n.dynamic_line),a.push(R(t));var o=$(t);return a.push(R(o)),[a,r]}function Z(e){var t,a,r,n,o,s,i=[],l=new Date(e);t=V(l.getFullYear()),a=V(l.getMonth()+1),r=V(l.getDate()),n=V(l.getHours()),console.log(t,a,r,n),s=H((o=Y(t,a,r,n)).above,o.below,o.dynamic_line),i.push(R(s));var u=$(s);return i.push(R(u)),i[0]+"之"+i[1]+"卦"}function J(){var e,t,a=[],r=new Date,n=r.getHours(),o=r.getMinutes(),s=z(n);console.log(n,o,s),t=H((e=function(e,t,a){var r=e%8,n=(e+t)%8,o=(e+t+a)%6;return 0===r&&(r=8),0===n&&(n=8),0===o&&(o=6),{above:r,below:n,dynamic_line:o}}(n,o,s)).above,e.below,e.dynamic_line),a.push(R(t));var i=$(t);return a.push(R(i)),[a,r]}function O(e){var t,a,r,n,o,s,i=[],l=new Date(e);t=l.getFullYear()-1911,a=l.getMonth()+1,r=l.getDate(),n=l.getHours(),console.log(t,a,r,n),s=H((o=Y(t,a,r,n)).above,o.below,o.dynamic_line),i.push(R(s));var u=$(s);return i.push(R(u)),i[0]+"之"+i[1]+"卦"}function W(e){var t=[],a=new Date,r=e.year+9,n=e.month,o=e.day,s=z(a.getHours());console.log("農曆日",r,n,o,s);var i=Y(r,n,o,s);console.log("農曆日",i);var l=H(i.above,i.below,i.dynamic_line);t.push(R(l));var u=$(l);return t.push(R(u)),t[0]+"之"+t[1]+"卦"}function z(e){var t=0;switch(e){case 1:case 2:t=2;break;case 3:case 4:t=3;break;case 5:case 6:t=4;break;case 7:case 8:t=5;break;case 9:case 10:t=6;break;case 11:case 12:t=7;break;case 13:case 14:t=8;break;case 15:case 16:t=9;break;case 17:case 18:t=10;break;case 19:case 20:t=11;break;case 21:case 22:t=12;break;case 23:case 0:t=1}return t}n.a.prototype.lunar=j.a,n.a.prototype.yijing=r,n.a.config.productionTip=!1,new n.a({el:"#app",data:{},router:U,components:{App:i},template:"<App/>"})},ZrbG:function(e,t){},nMpZ:function(e,t){},"tUn+":function(e,t){},u70d:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.ec38ce4c3b482050ba95.js.map