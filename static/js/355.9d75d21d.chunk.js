"use strict";(self.webpackChunkwebevery_site=self.webpackChunkwebevery_site||[]).push([[355],{6355:function(e,n,r){r.r(n),r.d(n,{default:function(){return X}});var a=r(2791),l=r(3433),i=r(9439),t="OurTeamPage_wrapper__7VDMK",s="OurTeamPage_mapGeneral__b9N0Z",c="OurTeamPage_countriesWrapper__-Po7j",o="OurTeamPage_countryOnGeneralMap__4skcr",u=r(7609),d=r(9),_="SliderMax_sliderInfoWrapper__gjreT",x="SliderMax_coworker__+nDlS",h="SliderMax_hidden__X6SlQ",m="SliderMax_photo__Cp4GH",j="SliderMax_informationWrapper__THBbO",p="SliderMax_name__-0eVq",f="SliderMax_profession__osPLe",S="SliderMax_quote__RPBk2",v="SliderMax_humor__rf1Vz",g="SliderMax_city__ICKf5",M="SliderMax_country__oiyrs",N="SliderMax_map__l0EJ-",y="SliderMax_sliderNavWrapper__q6ZjA",b="SliderMax_photosWrapper__TdBAU",T="SliderMax_photoSmall__TqbtB",w="SliderMax_activePhotoSmall__x4b9V",k="SliderMax_dotsWrapper__-qbN5",C="SliderMax_dot__U75bi",I="SliderMax_activeDot__56Q2M",Z="BtnSliderMax_btnSlidePrev__thKRs",P="BtnSliderMax_btnSlideNext__3Red4",q=r(184),W=function(e){var n=e.moveSlide,r=e.direction;return(0,q.jsx)(q.Fragment,{children:(0,q.jsx)("button",{onClick:n,className:"next"===r?P:Z,children:"next"===r?(0,q.jsx)("svg",{width:"100%",height:"100%",children:(0,q.jsx)("use",{href:u.Z+"#icon-arrow_right"})}):(0,q.jsx)("svg",{width:"100%",height:"100%",children:(0,q.jsx)("use",{href:u.Z+"#icon-arrow_left"})})})})},B=function(e){var n=e.array,r=e.currentIndex,l=e.setCurrentIndex,t=(0,a.useState)(null),s=(0,i.Z)(t,2),c=s[0],o=s[1];return(0,q.jsx)(q.Fragment,{children:(0,q.jsx)("div",{className:_,onTouchStart:function(e){var n=e.touches[0].clientX;o(n)},onTouchMove:function(e){if(null!==c){var a=c-e.touches[0].clientX;a>5&&(null!==r&&r!==n.length-1?l(r+1):l(0)),a<5&&l(null!==r&&0!==r?r-1:n.length-1),o(null)}},children:n.map((function(e,n){return(0,q.jsxs)("div",{className:r===n?x:h,children:[(0,q.jsx)("img",{className:m,src:e.photo,alt:e.name,width:146,height:171,loading:"lazy"}),(0,q.jsxs)("div",{className:j,children:[(0,q.jsx)("p",{className:p,children:e.name}),(0,q.jsx)("p",{className:f,children:e.profession}),(0,q.jsx)("p",{className:S,children:e.quote}),(0,q.jsx)("p",{className:v,children:e.humor}),(0,q.jsxs)("p",{className:g,children:[e.city,",",(0,q.jsxs)("span",{className:M,children:[" ",e.country]})]}),(0,q.jsx)("svg",{className:N,children:(0,q.jsx)("use",{href:"".concat(u.Z,"#icon-map").concat(e.location)})})]})]},e.id)}))})})},O=function(e){var n=e.array,r=e.currentIndex,l=e.setCurrentIndex,t=(0,a.useState)(null),s=(0,i.Z)(t,2),c=s[0],o=s[1],u=(0,a.useRef)(null);function d(e){var n=u.current;console.log("list",n),n.querySelectorAll("img")[e].scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}var _=function(){l(null!==r&&0!==r?r-1:n.length-1),d(r)},x=function(){null!==r&&r!==n.length-1?l(r+1):l(0),d(r)},h=function(e){return l(e)};return(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)("div",{className:y,onTouchStart:function(e){var n=e.touches[0].clientX;o(n)},onTouchMove:function(e){if(null!==c){var n=c-e.touches[0].clientX;n>5&&x(),n<5&&_(),o(null)}},children:[(0,q.jsx)(W,{moveSlide:_,direction:"prev"}),(0,q.jsx)("div",{className:b,ref:u,children:n.map((function(e,n){return(0,q.jsx)("img",{className:r===n?w:T,src:e.photoSmall,alt:e.name,onClick:function(){return h(n)},width:37,height:37,loading:"lazy"},e.id)}))}),(0,q.jsx)(W,{moveSlide:x,direction:"next"}),(0,q.jsx)("div",{className:k,children:n.map((function(e,n){return(0,q.jsx)("div",{className:r!==n?C:"".concat(C," ").concat(I),onClick:function(){h(n),d(r)}},n)}))})]})})},F=function(){var e=(0,a.useState)(null),n=(0,i.Z)(e,2),r=n[0],_=n[1],x=d.Ec.map((function(e){return e.country})).reduce((function(e,n){return e.includes(n)?e:[].concat((0,l.Z)(e),[n])}),[]);return(0,q.jsxs)("section",{className:t,children:[null===r?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)("svg",{className:s,children:(0,q.jsx)("use",{href:u.Z+"#icon-mapGeneralWithoutCountries"})}),(0,q.jsx)("ul",{className:c,children:x.map((function(e,n){return(0,q.jsx)("li",{className:o,children:e},n)}))})]}):(0,q.jsx)(B,{array:d.Ec,currentIndex:r,setCurrentIndex:_}),(0,q.jsx)(O,{array:d.Ec,currentIndex:r,setCurrentIndex:_})]})},V=r(6907),X=function(){return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(V.ql,{children:[(0,q.jsx)("title",{children:"\u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0440\u043e\u0437\u0440\u043e\u0431\u043d\u0438\u043a\u0456\u0432 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432!"}),(0,q.jsx)("meta",{name:"description",content:"\u0420\u043e\u0437\u0440\u043e\u0431\u043a\u0430 \u0441\u0430\u0439\u0442\u0456\u0432 \u0437 \u0456\u043d\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043b\u044c\u043d\u0438\u043c \u0434\u0438\u0437\u0430\u0439\u043d\u043e\u043c. \u0421\u0430\u0439\u0442-\u0432\u0456\u0437\u0438\u0442\u043a\u0430, \u0456\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d, \u043b\u0435\u043d\u0434\u0456\u043d\u0433, \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u0438\u0439 \u0441\u0430\u0439\u0442."}),(0,q.jsx)("link",{rel:"canonical",href:"ourTeam"})]}),(0,q.jsx)("h1",{className:"seoTitle",children:"\u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0440\u043e\u0437\u0440\u043e\u0431\u043d\u0438\u043a\u0456\u0432 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432"}),(0,q.jsx)(F,{})]})}}}]);
//# sourceMappingURL=355.9d75d21d.chunk.js.map