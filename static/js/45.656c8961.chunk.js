"use strict";(self.webpackChunkwebevery_site=self.webpackChunkwebevery_site||[]).push([[45],{6360:function(e,r,n){n.d(r,{Z:function(){return s}});n(2791);var a="Button_button__DeFIc",t=n(184),s=function(e){var r=e.onClick,n=e.title,s=e.type,c=e.className,i=e.id,o=e.ariaLabel,l=e.disabled;return(0,t.jsx)("button",{onClick:r,type:s,className:"".concat(c," ").concat(a," "),id:i,"aria-label":o,disabled:l,children:n})}},1362:function(e,r,n){n.d(r,{Z:function(){return a.Z}});var a=n(6360)},9307:function(e,r,n){n.d(r,{Z:function(){return j}});var a=n(2791),t=n(8622),s="Input_input__wNb-H",c="Input_inputWrapper__cxW-3",i="Input_textareaWrapper__Rm-0n",o="Input_labelTextarea__Brti5",l=n(184),d=function(e){var r=e.type,n=void 0===r?"text":r,a=e.name,t=e.id,i=e.label,o=e.className,d=e.placeholder,u=e.value,m=e.onChange,_=e.onBlur;return(0,l.jsxs)("div",{className:c,children:[(0,l.jsx)("input",{className:"".concat(s," ").concat(o),type:n,id:t,name:a,placeholder:d,onChange:m,onBlur:_,value:u}),(0,l.jsx)("label",{htmlFor:t,children:i})]})},u=function(e){var r=e.type,n=void 0===r?"text":r,a=e.name,t=e.id,d=e.label,u=e.customStyle,m=e.placeholder,_=e.value,v=e.onChange,h=e.onBlur;return(0,l.jsxs)("div",{className:c+" "+i,children:[(0,l.jsx)("textarea",{className:"".concat(s," ").concat(u),type:n,id:t,name:a,placeholder:m,onChange:v,onBlur:h,value:_,children:_}),(0,l.jsx)("label",{className:o,htmlFor:t,children:d})]})},m={container:"Form_container__nyc9B",closeBtn:"Form_closeBtn__g-LOf",iconClose:"Form_iconClose__Y9JuY",wrapGroup:"Form_wrapGroup__CqDS+",active:"Form_active__LKjsC",wrapError:"Form_wrapError__09fMt",inputError:"Form_inputError__DhXIk",error:"Form_error__J09l8",errorField:"Form_errorField__MvNo2",textarea:"Form_textarea__eKTds",btnSubmit:"Form_btnSubmit__GhgKa",btnActiv:"Form_btnActiv__PKSrJ",contactsWrap:"Form_contactsWrap__foyHY",contactsList:"Form_contactsList__wTuYa",contactsItem:"Form_contactsItem__cMZI7",iconItem:"Form_iconItem__2j6mV"},_=n(7609),v=n(9230),h=function(){var e=(0,v.$G)().t;return(0,l.jsxs)("div",{className:m.contactsWrap,children:[(0,l.jsx)("hr",{}),(0,l.jsxs)("ul",{className:m.contactsList,children:[(0,l.jsx)("li",{className:m.contactsItem,children:e("form.contactUs")}),(0,l.jsx)("li",{className:m.contactsItem,children:(0,l.jsxs)("a",{href:"tel:+380503738465",children:[(0,l.jsx)("svg",{className:m.iconItem,children:(0,l.jsx)("use",{href:_.Z+"#icon-telephone"})}),"+380 50 373 8465"]})}),(0,l.jsx)("li",{className:m.contactsItem,children:(0,l.jsxs)("a",{href:"mailto:inbox.webevery@gmail.com",children:[(0,l.jsx)("svg",{className:m.iconItem,children:(0,l.jsx)("use",{href:_.Z+"#envelope"})}),"inbox.webevery@gmail.com"]})})]})]})},p=function(e){var r=e.closeModal,n=e.className;return(0,l.jsx)("button",{type:"button",className:"".concat(m.closeBtn," ").concat(n),onClick:r,children:(0,l.jsx)("svg",{className:m.iconClose,children:(0,l.jsx)("use",{href:_.Z+"#close"})})})},x=function(e){var r=e.validForm,n=(0,v.$G)().t;return(0,l.jsx)("div",{children:(0,l.jsx)("button",{className:r?m.btnSubmit+" "+m.btnActiv:m.btnSubmit,disabled:!r,children:n("form.buttonSubmit")})})};var j=function(e){var r=e.isOpen,n=e.closeModal,s=e.className,c=(0,v.$G)().t,i=(0,t.V$)(),o=i.userName,_=i.phone,j=i.mail,f=i.comments,N=i.dirtyUserName,b=i.dirtyPhone,y=i.dirtyMail,g=i.validForm,I=i.formRef,C=i.formSubmit,S=i.handleChange,w=i.handleBlur,F=i.errorUserName,k=i.errorPhone,E=i.errorMail,O=i.errorComments;return(0,a.useEffect)((function(){return r&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow="unset"}}),[r]),(0,l.jsxs)("div",{className:"".concat(m.container," ").concat(s),children:[(0,l.jsx)(p,{closeModal:n,className:s}),(0,l.jsxs)("form",{ref:I,onSubmit:C,className:r?m.form:m.moveWrap+" "+m.active,children:[(0,l.jsxs)("div",{className:m.wrapGroup,children:[(0,l.jsxs)("div",{className:m.wrapError,children:[N&&F&&(0,l.jsx)("div",{className:m.error,children:F}),(0,l.jsx)(d,{type:"text",id:"nameId",name:"name",value:o,className:F&&N?m.inputError:" ",label:c("form.name"),placeholder:" ",onChange:S,onBlur:w})]}),(0,l.jsxs)("div",{className:m.wrapError,children:[b&&k&&(0,l.jsx)("div",{className:m.error,children:k}),(0,l.jsx)(d,{type:"tel",id:"phoneId",name:"phone",value:_,className:k&&b?m.inputError:" ",label:"+380123456789",placeholder:" ",onChange:S,onBlur:w})]}),(0,l.jsxs)("div",{className:m.wrapError,children:[y&&E&&(0,l.jsx)("div",{className:m.error,children:E}),(0,l.jsx)(d,{type:"email",id:"emailId",name:"mail",value:j,className:E&&y?m.inputError:" ",label:"google@gmail.com",placeholder:" ",onChange:S,onBlur:w})]})]}),(0,l.jsxs)("div",{className:m.wrapError,children:[O&&(0,l.jsx)("div",{className:m.error+" "+m.errorField,children:O}),(0,l.jsx)(u,{customStyle:O?m.textarea+" "+m.inputError:m.textarea,type:"text",id:"commentsId",name:"comments",value:f,label:c("form.idea"),placeholder:" ",onChange:S,onBlur:w})]}),(0,l.jsx)(x,{validForm:g})]}),(0,l.jsx)(h,{})]})}},4977:function(e,r,n){n.d(r,{Z:function(){return m}});var a=n(2791),t=n(4164);var s=function(e){var r=e.children,n=document.getElementById("modal");return(0,t.createPortal)(r,n)},c="Modal_backdrop__xhst9",i="Modal_active__T5k2E",o="Modal_modalContent__HRO1S",l="Modal_activeContent__XnwNK",d=n(184);var u=function(e){var r=e.active,n=e.closeModal,a=e.children;return(0,d.jsx)(s,{children:(0,d.jsx)("div",{className:r?c+" "+i:c,onClick:n,children:a})})};var m=function(e){var r=e.active,n=e.closeModal,t=e.children;return(0,a.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[n]),(0,d.jsx)(s,{children:(0,d.jsx)(u,{active:r,closeModal:n,children:(0,d.jsx)("div",{onClick:function(e){return e.stopPropagation()},className:r?o+" "+l:o,children:t})})})}},4045:function(e,r,n){n.r(r),n.d(r,{default:function(){return B}});var a=n(8622),t=n(9439),s=n(8305),c=n(2791),i="OurServices_OurServices__Aaifi",o="OurServices_servicesWrapper__N3NRe",l="OurServices_title__WBd2-",d="OurServices_whatIsItBtn__N+Acz",u="OurServices_toBottom__tZUE3",m="OurServices_invisible__fB2P4",_="OurServices_allDescrWrapper__gMAJl",v="OurServices_servicesList__Pz2iq",h="OurServices_servicesList__item__WaP2e",p="OurServices_servicesListHidden__wevar",x="OurServices_servicesDescription__IfQ2K",j="OurServices_servicesDescriptionHidden__cmdvM",f="OurServices_serviceImage__lFQd9",N="OurServices_btnWrapper__rEzpj",b="OurServices_mainBtn__kpMbe",y="OurServices_priceWrapper__toz-x",g=n(184),I=function(e){var r=e.className,n=e.item;return(0,g.jsx)("li",{className:r,children:n})},C=n(1362),S=n(9230),w=function(e){var r=e.id,n=e.details,a=e.title,s=e.daysCount,i=e.price,w=e.description,F=e.image,k=e.onClick,E=e.activeId,O=e.setActiveId,M=(0,c.useState)(!1),B=(0,t.Z)(M,2),Z=B[0],W=B[1],L=(0,S.$G)().t,A=function(){return r===E?W(!Z):null};return(0,c.useEffect)((function(){A()}),[E]),(0,g.jsxs)("section",{className:o,children:[(0,g.jsx)("h2",{className:w?l:"".concat(l," ").concat(u),children:a}),(0,g.jsx)("button",{className:w?d:"".concat(d," ").concat(m),"aria-controls":r,onClick:function(){return O(r),A()},children:L(Z?"servicesItem.understand":"servicesItem.whatItIs")}),(0,g.jsxs)("div",{className:_,children:[(0,g.jsx)("ul",{className:Z?p:v,children:n.map((function(e){return(0,g.jsx)(I,{className:h,item:e},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,r){return e+((r&=63)<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r>62?"-":"_")}),"")}())}))}),(0,g.jsx)("p",{className:Z?x:j,children:w})]}),F&&(0,g.jsx)("img",{src:F,alt:a,className:f,width:192,height:204}),(0,g.jsxs)("div",{className:N,children:[(0,g.jsxs)("div",{className:y,children:[(0,g.jsxs)("p",{children:[s,L("servicesItem.days")]}),(0,g.jsxs)("p",{children:[L("servicesItem.price")," ",i," $"]})]}),(0,g.jsx)(C.Z,{type:"button",title:"\u0417\u0430\u043c\u043e\u0432\u0438\u0442\u0438",className:b,onClick:k,ariaLabel:"Order"})]})]},r)},F=function(e){var r=e.onClick,n=(0,c.useState)(0),a=(0,t.Z)(n,2),i=a[0],o=a[1];return((0,S.$G)().i18n.language===s.ku.UA?s.ub:s.zJ).map((function(e){var n=e.id,a=e.details,t=e.title,s=e.daysCount,c=e.price,l=e.description,d=e.image;return(0,g.jsx)(w,{id:n,details:a,title:t,daysCount:s,price:c,description:l,image:d,onClick:r,activeId:i,setActiveId:o},n)}))},k=n(4977),E=n(9307),O=function(){var e=(0,a.dd)(),r=e.modalActive,n=e.shouldRender,t=e.openModal,s=e.closeModal;return(0,g.jsxs)("article",{className:i,children:[(0,g.jsx)(F,{onClick:t}),n&&(0,g.jsx)(k.Z,{closeModal:s,active:r,children:(0,g.jsx)(E.Z,{isOpen:r,closeModal:s})})]})},M=n(6907),B=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(M.ql,{children:[(0,g.jsx)("title",{children:"\u0420\u043e\u0437\u0440\u043e\u0431\u043a\u0430 \u0441\u0430\u0439\u0442\u0456\u0432 \u0437 \u0456\u043d\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043b\u044c\u043d\u0438\u043c \u0434\u0438\u0437\u0430\u0439\u043d\u043e\u043c. "}),(0,g.jsx)("meta",{name:"description",content:"\u0420\u043e\u0437\u0440\u043e\u0431\u043a\u0430 \u0441\u0430\u0439\u0442\u0456\u0432 \u0437 \u0456\u043d\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043b\u044c\u043d\u0438\u043c \u0434\u0438\u0437\u0430\u0439\u043d\u043e\u043c. \u0421\u0430\u0439\u0442-\u0432\u0456\u0437\u0438\u0442\u043a\u0430, \u0456\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d, \u043b\u0435\u043d\u0434\u0456\u043d\u0433, \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u0438\u0439 \u0441\u0430\u0439\u0442. "}),(0,g.jsx)("meta",{name:"keywords",content:"\u0432\u0435\u0431-\u0441\u0430\u0439\u0442, \u0441\u0430\u0439\u0442, \u0432\u0435\u0431-\u0440\u043e\u0437\u0440\u043e\u0431\u043a\u0430, \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432, \u0434\u0438\u0437\u0430\u0439\u043d \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432, \u0440\u043e\u0437\u0440\u043e\u0431\u043a\u0430 \u0456\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0443, \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0443\u0432\u0430\u043d\u043d\u044f, \u0432\u0435\u0431-\u0434\u043e\u0434\u0430\u0442\u043e\u043a, SEO \u043e\u043f\u0442\u0438\u043c\u0456\u0437\u0430\u0446\u0456\u044f, \u043c\u043e\u0431\u0456\u043b\u044c\u043d\u0430 \u0440\u043e\u0437\u0440\u043e\u0431\u043a\u0430,  \u0434\u0438\u0437\u0430\u0439\u043d, \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f, \u043f\u0440\u043e\u0435\u043a\u0442\u0443\u0432\u0430\u043d\u043d\u044f"}),(0,g.jsx)("link",{rel:"canonical",href:"services"})]}),(0,g.jsx)("h1",{className:"seoTitle",children:"\u0420\u043e\u0437\u0440\u043e\u0431\u043a\u0430 \u0441\u0430\u0439\u0442\u0456\u0432 \u0437 \u0456\u043d\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043b\u044c\u043d\u0438\u043c \u0434\u0438\u0437\u0430\u0439\u043d\u043e\u043c "}),(0,g.jsx)(O,{})]})}}}]);
//# sourceMappingURL=45.656c8961.chunk.js.map