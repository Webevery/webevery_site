"use strict";(self.webpackChunkwebevery_site=self.webpackChunkwebevery_site||[]).push([[314],{6360:function(e,t,n){n.d(t,{Z:function(){return s}});n(2791);var a="Button_button__DeFIc",r=n(184),s=function(e){var t=e.onClick,n=e.title,s=e.type,c=e.className,o=e.id,i=e.ariaLabel,l=e.disabled;return(0,r.jsx)("button",{onClick:t,type:s,className:"".concat(c," ").concat(a," "),id:o,"aria-label":i,disabled:l,children:n})}},6998:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(9439),r=n(2791),s={_origin:"https://api.emailjs.com"},c=function(e,t,n){if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0},o=n(3144),i=n(5671),l=(0,o.Z)((function e(t){(0,i.Z)(this,e),this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"})),u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(a,r){var c=new XMLHttpRequest;c.addEventListener("load",(function(e){var t=e.target,n=new l(t);200===n.status||"OK"===n.text?a(n):r(n)})),c.addEventListener("error",(function(e){var t=e.target;r(new l(t))})),c.open("POST",s._origin+e,!0),Object.keys(n).forEach((function(e){c.setRequestHeader(e,n[e])})),c.send(t)}))},d=function(e,t,n,a){var r=a||s._userID,o=function(e){var t;if(!(t="string"===typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(n);c(r,e,t);var i=new FormData(o);return i.append("lib_version","3.11.0"),i.append("service_id",e),i.append("template_id",t),i.append("user_id",r),u("/api/v1.0/email/send-form",i)},m=n(7596),h="Input_input__wNb-H",_="Input_inputWrapper__cxW-3",p="Input_textareaWrapper__Rm-0n",v="Input_labelTextarea__Brti5",x=n(184),f=function(e){var t=e.type,n=void 0===t?"text":t,a=e.name,r=e.id,s=e.label,c=e.className,o=e.placeholder,i=e.value,l=e.onChange,u=e.onBlur;return(0,x.jsxs)("div",{className:_,children:[(0,x.jsx)("input",{className:"".concat(h," ").concat(c),type:n,id:r,name:a,placeholder:o,onChange:l,onBlur:u,value:i}),(0,x.jsx)("label",{htmlFor:r,children:s})]})},j=function(e){var t=e.type,n=void 0===t?"text":t,a=e.name,r=e.id,s=e.label,c=e.customStyle,o=e.placeholder,i=e.value,l=e.onChange,u=e.onBlur;return(0,x.jsxs)("div",{className:_+" "+p,children:[(0,x.jsx)("textarea",{className:"".concat(h," ").concat(c),type:n,id:r,name:a,placeholder:o,onChange:l,onBlur:u,value:i,children:i}),(0,x.jsx)("label",{className:v,htmlFor:r,children:s})]})},b={container:"Form_container__nyc9B",closeBtn:"Form_closeBtn__g-LOf",iconClose:"Form_iconClose__Y9JuY",wrapGroup:"Form_wrapGroup__CqDS+",active:"Form_active__LKjsC",wrapError:"Form_wrapError__09fMt",inputError:"Form_inputError__DhXIk",error:"Form_error__J09l8",errorField:"Form_errorField__MvNo2",textarea:"Form_textarea__eKTds",btnSubmit:"Form_btnSubmit__GhgKa",btnActiv:"Form_btnActiv__PKSrJ",contactsWrap:"Form_contactsWrap__foyHY",contactsList:"Form_contactsList__wTuYa",contactsItem:"Form_contactsItem__cMZI7",iconItem:"Form_iconItem__2j6mV"},g=n(7609),N=function(){return(0,x.jsxs)("div",{className:b.contactsWrap,children:[(0,x.jsx)("hr",{}),(0,x.jsxs)("ul",{className:b.contactsList,children:[(0,x.jsx)("li",{className:b.contactsItem,children:"\u0430\u0431\u043e \u0437\u0432\u2019\u044f\u0436\u0456\u0442\u044c\u0441\u044f \u0437 \u043d\u0430\u043c\u0438"}),(0,x.jsxs)("li",{className:b.contactsItem,children:[(0,x.jsx)("svg",{className:b.iconItem,children:(0,x.jsx)("use",{href:g.Z+"#icon-telephone"})}),"+380 50 373 8465"]}),(0,x.jsxs)("li",{className:b.contactsItem,children:[(0,x.jsx)("svg",{className:b.iconItem,children:(0,x.jsx)("use",{href:g.Z+"#envelope"})}),"inbox.webevery@gmail.com"]})]})]})},w=function(e){var t=e.closeModal,n=e.className;return(0,x.jsx)("button",{type:"button",className:"".concat(b.closeBtn," ").concat(n),onClick:t,children:(0,x.jsx)("svg",{className:b.iconClose,children:(0,x.jsx)("use",{href:g.Z+"#icon-close"})})})},C=function(e){var t=e.validForm;return(0,x.jsx)("div",{children:(0,x.jsx)("button",{className:t?b.btnSubmit+" "+b.btnActiv:b.btnSubmit,disabled:!t,children:"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438"})})};var y=function(e){var t=e.isOpen,n=e.closeModal,s=e.className,c=(0,r.useState)(""),o=(0,a.Z)(c,2),i=o[0],l=o[1],u=(0,r.useState)(""),h=(0,a.Z)(u,2),_=h[0],p=h[1],v=(0,r.useState)(""),g=(0,a.Z)(v,2),y=g[0],Z=g[1],S=(0,r.useState)(""),F=(0,a.Z)(S,2),k=F[0],I=F[1],E=(0,r.useState)(!1),M=(0,a.Z)(E,2),B=M[0],T=M[1],L=(0,r.useState)(!1),O=(0,a.Z)(L,2),q=O[0],P=O[1],W=(0,r.useState)(!1),D=(0,a.Z)(W,2),R=D[0],H=D[1],K=(0,r.useState)("\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u0446\u0435 \u043f\u043e\u043b\u0435"),A=(0,a.Z)(K,2),G=A[0],V=A[1],Y=(0,r.useState)("\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u0446\u0435 \u043f\u043e\u043b\u0435"),J=(0,a.Z)(Y,2),X=J[0],z=J[1],$=(0,r.useState)("\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u0446\u0435 \u043f\u043e\u043b\u0435"),Q=(0,a.Z)($,2),U=Q[0],ee=Q[1],te=(0,r.useState)(""),ne=(0,a.Z)(te,2),ae=ne[0],re=ne[1],se=(0,r.useState)(!1),ce=(0,a.Z)(se,2),oe=ce[0],ie=ce[1],le=(0,r.useRef)();(0,r.useEffect)((function(){ie(!(G||X||U||ae))}),[G,X,U,ae]);var ue=function(){l(""),I(""),p(""),Z(""),T(!1),H(!1),P(!1),V("\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u0446\u0435 \u043f\u043e\u043b\u0435"),z("\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u0446\u0435 \u043f\u043e\u043b\u0435"),ee("\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u0446\u0435 \u043f\u043e\u043b\u0435"),re("")},de=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":if(e.target.value.length>30)return;!function(e){e.length<2?(V("\u0406\u043c\u2019\u044f \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0434\u043e\u0432\u0448\u0438\u043c"),0===e.length&&V("\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u0446\u0435 \u043f\u043e\u043b\u0435")):e.length>30?V("\u0406\u043c\u2019\u044f \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043a\u043e\u0440\u043e\u0442\u0448\u0438\u043c"):V("")}(a),l(a);break;case"comments":if(e.target.value.length>301)return;!function(e){e.length>300?re("\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043a\u043e\u0440\u043e\u0442\u0448\u0438\u043c"):re("")}(a),I(a);break;case"phone":if(e.target.value.length>13)return;!function(e){/^\+\d{12}$/.test(e)?z(""):z("\u041d\u0435 \u0432\u0456\u0440\u043d\u0438\u0439 \u0444\u043e\u0440\u043c\u0430\u0442")}(a),p(a);break;case"mail":if(e.target.value.length>40)return;/\S+@\S+\.\S+/.test(a)?ee(""):ee("\u041d\u0435 \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0438\u0439 email"),Z(a);break;default:return}},me=function(e){switch(e.target.name){case"name":T(!0);break;case"mail":H(!0);break;case"phone":P(!0);break;default:return}};return(0,x.jsxs)("div",{className:"".concat(b.container," ").concat(s),children:[(0,x.jsx)(w,{closeModal:n,className:s}),(0,x.jsxs)("form",{ref:le,onSubmit:function(e){e.preventDefault(),d("service_ev052ym","template_8yoqdiq",le.current,"zclTBta73h84T_Mq5").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),ue(),m.Am.success("\u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u043e!"),n()},className:t?b.form:b.moveWrap+" "+b.active,children:[(0,x.jsxs)("div",{className:b.wrapGroup,children:[(0,x.jsxs)("div",{className:b.wrapError,children:[B&&G&&(0,x.jsx)("div",{className:b.error,children:G}),(0,x.jsx)(f,{type:"text",id:"nameId",name:"name",value:i,className:G&&B?b.inputError:" ",label:"\u0406\u043c\u2019\u044f, \u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435",placeholder:" ",onChange:de,onBlur:me})]}),(0,x.jsxs)("div",{className:b.wrapError,children:[q&&X&&(0,x.jsx)("div",{className:b.error,children:X}),(0,x.jsx)(f,{type:"tel",id:"phoneId",name:"phone",value:_,className:X&&q?b.inputError:" ",label:"+380123456789",placeholder:" ",onChange:de,onBlur:me})]}),(0,x.jsxs)("div",{className:b.wrapError,children:[R&&U&&(0,x.jsx)("div",{className:b.error,children:U}),(0,x.jsx)(f,{type:"email",id:"emailId",name:"mail",value:y,className:U&&R?b.inputError:" ",label:"google@gmail.com",placeholder:" ",onChange:de,onBlur:me})]})]}),(0,x.jsxs)("div",{className:b.wrapError,children:[ae&&(0,x.jsx)("div",{className:b.error+" "+b.errorField,children:ae}),(0,x.jsx)(j,{customStyle:ae?b.textarea+" "+b.inputError:b.textarea,type:"text",id:"commentsId",name:"comments",value:k,label:"\u041e\u043f\u0438\u0448\u0456\u0442\u044c \u0412\u0430\u0448\u0443 \u0406\u0434\u0435\u044e",placeholder:" ",onChange:de,onBlur:me})]}),(0,x.jsx)(C,{validForm:oe})]}),(0,x.jsx)(N,{})]})}},4977:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(2791),r=n(4164);var s=function(e){var t=e.children,n=document.getElementById("modal");return(0,r.createPortal)(t,n)},c="Modal_backdrop__xhst9",o="Modal_modalContent__HRO1S",i="Modal_activeContent__XnwNK",l="Modal_active__T5k2E",u=n(184);var d=function(e){var t=e.isModalOpen,n=e.onClose,a=e.children;return(0,u.jsx)(s,{children:(0,u.jsx)("div",{className:t?c+" "+l:c,onClick:n,children:a})})};var m=function(e){var t=e.isModalOpen,n=e.onClose,r=e.children;return(0,a.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[n]),(0,u.jsx)(s,{children:(0,u.jsx)(d,{isModalOpen:t,onClose:function(e){e.currentTarget===e.target&&n()},children:(0,u.jsx)("div",{className:t?o+" "+i:o,children:r})})})}},6314:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(2791),r=n(9439),s="ContactsPage_contactsSection__Rvbux",c="ContactsPage_contactsForm__Njwh-",o="ContactsPage_contactsWrapper__sr4kd",i="ContactsPage_contactsBtn__TNZMm",l="ContactsPage_contactsList__W81B3",u="ContactsPage_email__CjB5v",d=n(6360),m=n(9),h=n(7609),_=n(184),p=function(){return(0,_.jsx)("ul",{className:l,children:m.sC.map((function(e){var t=e.id,n=e.country,a=e.tel,r=e.location;return(0,_.jsxs)("li",{children:[(0,_.jsx)("h2",{children:n}),(0,_.jsxs)("a",{href:"tel:"+a,children:[(0,_.jsx)("svg",{children:(0,_.jsx)("use",{href:h.Z+"#icon-contactsTel"})}),(0,_.jsxs)("p",{children:[" ",a]})]}),(0,_.jsxs)("p",{children:[(0,_.jsx)("svg",{children:(0,_.jsx)("use",{href:h.Z+"#icon-contactsLocation"})}),r]})]},t)}))})},v=function(){return(0,_.jsxs)("a",{href:"mailto:natalabojko@gmail.com",className:u,children:[(0,_.jsx)("svg",{children:(0,_.jsx)("use",{href:h.Z+"#icon-contactsMail"})}),(0,_.jsx)("p",{children:" webforevery@gmail.com"})]})},x=n(4977),f=n(6998),j=function(){var e=(0,a.useState)(!1),t=(0,r.Z)(e,2),n=t[0],l=t[1],u=function(){l(!n)};return(0,_.jsxs)("section",{className:s,children:[(0,_.jsxs)("div",{className:o,children:[(0,_.jsx)(p,{}),(0,_.jsx)(v,{}),(0,_.jsx)(d.Z,{title:"\u0417\u0430\u043c\u043e\u0432\u0438\u0442\u0438 \u0434\u0437\u0432\u0456\u043d\u043e\u043a",className:i,onClick:u}),(0,_.jsx)(f.Z,{className:c})]}),n&&(0,_.jsx)(x.Z,{onClose:u,isModalOpen:n,children:(0,_.jsx)(f.Z,{isOpen:n,closeModal:u})})]})},b=n(6907),g=function(){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(b.ql,{children:[(0,_.jsx)("title",{children:"\u0420\u043e\u0437\u0440\u043e\u0431\u043a\u0430 \u0441\u0430\u0439\u0442\u0456\u0432. \u041d\u0430\u0448\u0456 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"}),(0,_.jsx)("meta",{name:"description",content:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438 \u043d\u0430\u0448\u0438\u0445 \u0440\u043e\u0437\u0440\u043e\u0431\u043d\u0438\u043a\u0456\u0432 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432 \u0432 \u0423\u043a\u0440\u0430\u0457\u043d\u0456 \u0442\u0430 \u0456\u043d\u0448\u0438\u0445 \u043a\u0440\u0430\u0457\u043d\u0430\u0445 \u0404\u0432\u0440\u043e\u043f\u0438."}),(0,_.jsx)("link",{rel:"canonical",href:"contacts"})]}),(0,_.jsx)("h1",{className:"seoTitle",children:"\u0420\u043e\u0437\u0440\u043e\u0431\u043a\u0430 \u0441\u0430\u0439\u0442\u0456\u0432. \u041d\u0430\u0448\u0456 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"}),(0,_.jsx)(j,{})]})}}}]);
//# sourceMappingURL=314.1cdb0a05.chunk.js.map