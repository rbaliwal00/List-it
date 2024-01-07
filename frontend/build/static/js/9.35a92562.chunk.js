(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[9],{341:function(e,t,a){"use strict";a.r(t);var n=a(60),l=a(8),r=a.n(l),i=a(12),c=a(6),o=a(0),s=a.n(o),u=a(4),d=a(18),p=a(66),v=a(61),m=(a(87),a(64)),y=a(14),b=a(10),f=(a(70),a(17)),g=a(15),x=a(356);a(80);t.default=function(){var e=Object(o.useContext)(b.a),t=Object(y.a)(),a=t.isLoading,l=t.error,E=t.sendRequest,h=t.clearError,k=Object(o.useState)("-"),O=Object(c.a)(k,2),j=O[0],N=O[1],V=Object(o.useState)("-"),T=Object(c.a)(V,2),I=T[0],w=T[1],C=Object(o.useState)("-"),A=Object(c.a)(C,2),z=A[0],P=A[1],S=Object(o.useState)("-"),H=Object(c.a)(S,2),R=H[0],G=H[1],q=Object(o.useState)("-"),M=Object(c.a)(q,2),D=M[0],L=M[1],U=Object(m.a)({title:{value:"",isValid:!1},city:{value:"",isValid:!1},pincode:{value:"",isValid:!1},description:{value:"",isValid:!1},formemail:{value:"",isValid:!1},phone:{value:"",isValid:!1},contactname:{value:"",isValid:!1},extension:{value:"",isValid:!1},street:{value:"",isValid:!1},crossstreet:{value:"",isValid:!1},cityy:{value:"",isValid:!1},address:{value:"",isValid:!0},rent:{value:"",isValid:!0},sqft:{value:"",isValid:!0},availableon:{value:"",isValid:!0}},!1),B=Object(c.a)(U,2),_=B[0],F=B[1],J=Object(u.g)(),Q=Object(u.h)(),X=Q.location,Y=Q.categoryType,$=Q.form,K=function(){var t=Object(i.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,(n=new FormData).append("title",_.inputs.title.value),n.append("city",_.inputs.city.value),n.append("pincode",_.inputs.pincode.value),n.append("description",_.inputs.description.value),n.append("formemail",_.inputs.formemail.value),n.append("phone",_.inputs.phone.value),n.append("extension",_.inputs.extension.value),n.append("contactname",_.inputs.contactname.value),n.append("street",_.inputs.street.value),n.append("crossstreet",_.inputs.crossstreet.value),n.append("cityy",_.inputs.cityy.value),n.append("rent",_.inputs.rent.value),n.append("sqft",_.inputs.sqft.value),n.append("privateroom",j),n.append("privatebath",I),n.append("housingtype",z),n.append("laundry",R),n.append("parking",D),n.append("availableon",_.inputs.availableon.value),n.append("address","".concat(_.inputs.street.value).concat(_.inputs.city.value).concat(_.inputs.pincode.value)),n.append("creator",e.userId),n.append("postcity","".concat(X)),n.append("posttype","".concat(Y)),n.append("postform","".concat($)),t.next=29,E("https://list-it-mern.herokuapp.com/api/posts","POST",n,{Authorization:"Bearer "+e.token});case 29:J.push("/".concat(X,"/").concat(Y,"/").concat($,"/editimage")),t.next=34;break;case 32:t.prev=32,t.t0=t.catch(1);case 34:case"end":return t.stop()}}),t,null,[[1,32]])})));return function(e){return t.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,{error:l,onClear:h}),s.a.createElement(d.a,{style:{textAlign:"left"}},"India > ",X," > ",Y," > ",$),s.a.createElement("div",{className:"job-form"},s.a.createElement("main",null,s.a.createElement("form",{onSubmit:K,style:{marginRight:"10px"}},a&&s.a.createElement(g.a,{asOverlay:!0}),s.a.createElement("div",{className:"center first"},s.a.createElement(p.a,{id:"title",element:"input",type:"text",label:"posting title",size:"40",color:"black",bordercolor:"black",validators:[Object(v.c)()],onInput:F,errorText:"Please enter a valid title"}),s.a.createElement(p.a,{id:"city",element:"input",type:"text",label:"city or neighbourhood",size:"40",validators:[Object(v.c)()],onInput:F,errorText:"Please enter a valid city or neighbourhood"}),s.a.createElement(p.a,{id:"pincode",element:"input",type:"text",label:"pin code",size:"20",color:"black",bordercolor:"black",validators:[Object(v.c)()],onInput:F,errorText:"Please enter a valid pincode"})),s.a.createElement("div",{style:{marginBottom:"200px"}},s.a.createElement(p.a,{id:"description",rows:"10",type:"textarea",label:"description",size:"120",color:"green",bordercolor:"green",validators:[Object(v.c)(),Object(v.b)(6)],onInput:F,errorText:"Please enter a valid description"})),s.a.createElement("div",Object(n.a)({className:"row",style:{margin:"0px -10px 10px 0"}},"className","col-12"),s.a.createElement("fieldset",null,s.a.createElement("legend",{style:{textAlign:"left"}},"posting details"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-3"},s.a.createElement("div",{style:{marginRight:"10px"}},s.a.createElement(p.a,{id:"rent",element:"input",type:"number",label:"rent(in rupees)",placeholder:"rent",size:"70",validators:[Object(v.c)()],onInput:F,errorText:"Please enter a valid rent"})),s.a.createElement("div",{style:{marginRight:"10px"}},s.a.createElement(p.a,{id:"sqft",element:"input",type:"number",label:"sqft",placeholder:"sqft",size:"70",validators:[Object(v.c)()],onInput:F,errorText:"Please enter a valid sqft"}))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("label",{style:{margin:"0"}},"private room"),s.a.createElement(x.a,{placeholder:"-",fluid:!0,selection:!0,options:[{key:"-",text:"-",value:"-"},{key:"not-private-room",text:"room not private",value:"room not private"},{key:"private-room",text:"private room",value:"private room"}],onChange:function(e,t){var a=t.value;N(a)}}),s.a.createElement("label",{style:{margin:"0"}},"private bath"),s.a.createElement(x.a,{placeholder:"-",fluid:!0,selection:!0,options:[{key:"-",text:"-",value:"-"},{key:"not-private-bath",text:"no private bath",value:"no private bath"},{key:"private-bath",text:"private bath",value:"private bath"}],onChange:function(e,t){var a=t.value;w(a)}}),s.a.createElement("label",{style:{margin:"0"}},"housing type"),s.a.createElement(x.a,{placeholder:"-",fluid:!0,selection:!0,options:[{key:"-",text:"-",value:"-"},{key:"apartment",text:"apartment",value:"apartment"},{key:"condo",text:"condo",value:"condo"},{key:"cottage/cabin",text:"cottage/cabin",value:"cottage/cabin"},{key:"duplex",text:"duplex",value:"duplex"},{key:"flat",text:"flat",value:"flat"},{key:"house",text:"house",value:"house"},{key:"in-law",text:"in-law",value:"in-law"},{key:"loft",text:"loft",value:"loft"},{key:"townhouse",text:"townhouse",value:"townhouse"},{key:"manufactured",text:"manufactured",value:"manufactured"},{key:"assisted living",text:"assisted living",value:"assisted living"},{key:"land",text:"land",value:"land"}],onChange:function(e,t){var a=t.value;P(a)}}),s.a.createElement("label",{style:{margin:"0"}},"laundry"),s.a.createElement(x.a,{placeholder:"-",fluid:!0,selection:!0,options:[{key:"-",text:"-",value:"-"},{key:"w/d unit",text:"w/d unit",value:"w/d unit"},{key:"w/d hookups",text:"w/d hookups",value:"w/d hookups"},{key:"laundry in bldg",text:"laundry in bldg",value:"laundry in bldg"},{key:"laundry on site",text:"laundry on site",value:"laundry on site"},{key:"no laundry on site",text:"no laundry on site",value:"no laundry on site"}],onChange:function(e,t){var a=t.value;G(a)}}),s.a.createElement("label",{style:{margin:"0"}},"parking"),s.a.createElement(x.a,{placeholder:"-",fluid:!0,selection:!0,options:[{key:"-",text:"-",value:"-"},{key:"carport",text:"carport",value:"carport"},{key:"attached garage",text:"attached garage",value:"attached garage"},{key:"detached garage",text:"detached garage",value:"detached garage"},{key:"off-street parking",text:"off-street parking",value:"off-street parking"},{key:"street parking",text:"street parking",value:"street parking"},{key:"valet parking",text:"valet parking",value:"valet parking"},{key:"no parking",text:"no parking",value:"no parking"}],onChange:function(e,t){var a=t.value;L(a)}})),s.a.createElement("div",{className:"col-lg-5"},s.a.createElement(p.a,{id:"availableon",element:"input",type:"date",label:"avialable on",size:"70",validators:function(){},onInput:F}))))),s.a.createElement("div",{className:"row",style:{margin:"0px 10px"}},s.a.createElement("fieldset",null,s.a.createElement("legend",{style:{textAlign:"left"}},"contact info"),s.a.createElement("div",{className:"row",style:{marginRight:"10px"}},s.a.createElement("div",{className:"col-md-5"},s.a.createElement(p.a,{id:"formemail",element:"input",type:"text",label:"email",placeholder:"Your email address",size:"70",validators:[Object(v.c)()],onInput:F,errorText:"Please enter a valid email address"})),s.a.createElement("div",{className:"col-md-5"},s.a.createElement("fieldset",null,s.a.createElement("legend",{style:{textAlign:"left"}},"phone/ text"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-7"},s.a.createElement(p.a,{id:"phone",element:"input",type:"text",label:"phone number",size:"50",validators:[Object(v.c)()],onInput:F,errorText:"Please enter a valid phone number"}),s.a.createElement(p.a,{id:"contactname",element:"input",type:"text",label:"contact name",size:"50",validators:[Object(v.c)()],onInput:F,errorText:"Please enter a valid contact name"})),s.a.createElement("div",{className:"col-md-5 col-sm-3 col-xs-3"},s.a.createElement(p.a,{id:"extension",element:"input",type:"text",label:"extension",size:"50",validators:[Object(v.c)()],onInput:F,errorText:"Please enter a valid extension"})))))))),s.a.createElement("fieldset",{style:{marginTop:"10px"}},s.a.createElement("legend",{style:{textAlign:"left"}},"location info"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4"},s.a.createElement(p.a,{id:"street",element:"input",type:"text",label:"street",size:"50",validators:[Object(v.c)()],onInput:F,errorText:"Please enter a valid street"})),s.a.createElement("div",{className:"col-md-4"},s.a.createElement(p.a,{id:"crossstreet",element:"input",type:"text",label:"cross street",size:"50",validators:[Object(v.c)()],onInput:F,errorText:"Please enter a valid cross street"})),s.a.createElement("div",{className:"col-md-3"},s.a.createElement(p.a,{id:"cityy",element:"input",type:"text",label:"city",size:"50",validators:[Object(v.c)()],onInput:F,errorText:"Please enter a valid city"})))),s.a.createElement("div",{className:"center"},s.a.createElement("button",{type:"submit",onClick:K,disabled:!_.isValid},"continue"))))))}},61:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return c}));var n=a(77),l=function(){return{type:"REQUIRE"}},r=function(e){return{type:"MINLENGTH",val:e}},i=function(){return{type:"EMAIL"}},c=function(e,t){var a=!0;if(null===t||void 0===t||0===t.length)return!0;var l,r=Object(n.a)(t);try{for(r.s();!(l=r.n()).done;){var i=l.value;"REQUIRE"===i.type&&(a=a&&e.trim().length>0),"MINLENGTH"===i.type&&(a=a&&e.trim().length>=i.val),"MAXLENGTH"===i.type&&(a=a&&e.trim().length<=i.val),"MIN"===i.type&&(a=a&&+e>=i.val),"MAX"===i.type&&(a=a&&+e<=i.val),"EMAIL"===i.type&&(a=a&&/^\S+@\S+\.\S+$/.test(e))}}catch(c){r.e(c)}finally{r.f()}return a}},64:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(6),l=a(60),r=a(62),i=a(0),c=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid;return Object(r.a)(Object(r.a)({},e),{},{inputs:Object(r.a)(Object(r.a)({},e.inputs),{},Object(l.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},o=function(e,t){var a=Object(i.useReducer)(c,{inputs:e,isValid:t}),l=Object(n.a)(a,2),r=l[0],o=l[1];return[r,Object(i.useCallback)((function(e,t,a){o({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(i.useCallback)((function(e,t){o({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},66:function(e,t,a){"use strict";var n=a(60),l=a(6),r=a(62),i=a(0),c=a.n(i),o=a(61),s=(a(67),function(e,t){switch(t.type){case"CHANGE":return Object(r.a)(Object(r.a)({},e),{},{value:t.val,isValid:Object(o.d)(t.val,t.validators)});case"CHANGED":return Object(r.a)(Object(r.a)({},e),{},{value:t.val});case"TOUCH":return Object(r.a)(Object(r.a)({},e),{},{isTouched:!0});default:return e}});t.a=function(e){var t=Object(i.useReducer)(s,{value:e.initialValue||"",isValid:e.initialValid||!1,isTouched:!1}),a=Object(l.a)(t,2),r=a[0],o=a[1],u=e.id,d=e.onInput,p=r.value,v=r.isValid;Object(i.useEffect)((function(){d(u,p,v)}),[u,p,v,d]);var m,y=function(t){"checkbox"===e.type&&(!0===t.target.checked?console.log(Object(n.a)({},t.target.id,t.target.checked)):console.log(Object(n.a)({},t.target.id,t.target.value)),o({type:"CHANGED",val:t.target.checked})),o({type:"CHANGE",val:t.target.value,validators:e.validators})},b=function(){o({type:"TOUCH"})},f="input"===e.element?c.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,size:e.size,style:{borderColor:e.bordercolor},onChange:y,onBlur:b,value:r.value}):c.a.createElement("textarea",{id:e.id,rows:e.rows||3,cols:e.size,style:{borderColor:e.bordercolor},onChange:y,onBlur:b,value:r.value});return m="checkbox"===e.type||"radio"===e.type?c.a.createElement("div",{className:"form-control checkbox ".concat(!r.isValid&&r.isTouched&&"form-control--invalid"),style:e.style},f,c.a.createElement("label",null,e.label)):c.a.createElement("div",{className:"form-control form-group ".concat(!r.isValid&&r.isTouched&&"form-control--invalid"),style:{margin:"10px"}},c.a.createElement("label",{style:{color:e.color}}," ",e.label),f,!r.isValid&&r.isTouched&&c.a.createElement("p",null,e.errorText)),c.a.createElement("div",null,m)}},67:function(e,t,a){},70:function(e,t,a){"use strict";a(6),a(0),a(71)},71:function(e,t,a){},80:function(e,t,a){}}]);
//# sourceMappingURL=9.35a92562.chunk.js.map