(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[13],{327:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),i=n(12),c=n(21);var o=n(26);function u(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=n(6),l=n(0),p=n.n(l),f=n(4),m=n(14),b=n(17),d=n(15),O=n(18),j=(n(64),n(10));n(327),t.default=function(e){var t=Object(l.useContext)(j.a),n=Object(l.useState)([]),a=Object(s.a)(n,2),c=a[0],o=a[1],v=[],y=Object(l.useState)(),h=Object(s.a)(y,2),g=h[0],E=h[1],w=Object(l.useState)(),k=Object(s.a)(w,2),S=(k[0],k[1],Object(m.a)()),A=S.isLoading,P=S.error,I=S.sendRequest,V=S.clearError,C=Object(l.useRef)(),D=Object(f.h)(),T=D.location,N=D.categoryType,x=D.form,R=Object(f.g)();Object(l.useEffect)((function(){}),[I]);var _=function(){var e=Object(i.a)(r.a.mark((function e(n){var a,i,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n.preventDefault(),e.prev=1,g.length<=0&&R.push("/".concat(T,"/").concat(N,"/").concat(x,"/preview")),a=new FormData,i=0;i<g.length;i++)a.append("images",g[i]);return e.next=7,I("https://list-it-mern.herokuapp.com/api/posts/lastpost");case 7:return c=e.sent,e.next=10,I("https://list-it-mern.herokuapp.com/api"+"/posts/".concat(c.post._id,"/images"),"POST",a,{Authorization:"Bearer "+t.token});case 10:R.push("/"),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(1);case 15:case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return p.a.createElement(p.a.Fragment,null,p.a.createElement(b.a,{error:P,onClear:V}),p.a.createElement(O.a,null,p.a.createElement("nav",null,p.a.createElement("p",null,"India > ",T," > ",N," > ",x))),p.a.createElement("main",null,p.a.createElement("form",{onSubmit:_},A&&p.a.createElement(d.a,{asOverlay:!0}),p.a.createElement("input",{type:"file",name:"file",id:"images",multiple:!0,onChange:function(e){var t,n=e.target.files;v.push(n),E(e.target.files);for(var a=0;a<v[0].length;a++)(t=new FileReader).readAsDataURL(v[0][a]),t.onload=function(e){c.push(e.target.result),o(u(new Set(c)))}},ref:C,style:{display:"none"}}),p.a.createElement("div",{className:"first-container"},p.a.createElement("p",null,"this posting has 0 images, of a maximum 6")),p.a.createElement("div",{className:"second-container"},p.a.createElement("button",{onClick:function(){C.current.click()}},"Add Images")),p.a.createElement("div",{className:"multi-preview"},p.a.createElement("div",null,(c||[]).map((function(e,t){return p.a.createElement("img",{src:e,alt:"images",id:"image",key:t})})))),p.a.createElement("div",{className:"button-container"},p.a.createElement("button",{type:"submit",onClick:_},"done with images")))))}},60:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(60);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(6),r=n(60),i=n(62),c=n(0),o=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var a in e.inputs)n=a===t.inputId?n&&t.isValid:n&&e.inputs[a].isValid;return Object(i.a)(Object(i.a)({},e),{},{inputs:Object(i.a)(Object(i.a)({},e.inputs),{},Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},u=function(e,t){var n=Object(c.useReducer)(o,{inputs:e,isValid:t}),r=Object(a.a)(n,2),i=r[0],u=r[1];return[i,Object(c.useCallback)((function(e,t,n){u({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),Object(c.useCallback)((function(e,t){u({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}}}]);
//# sourceMappingURL=13.eef8b84d.chunk.js.map