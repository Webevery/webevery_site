"use strict";(self.webpackChunkwebevery_site=self.webpackChunkwebevery_site||[]).push([[355],{6355:function(e,n,r){r.r(n),r.d(n,{default:function(){return E}});var a=r(2791),t=r(3433),i=r(9439),l="OurTeamPage_wrapper__7VDMK",s="OurTeamPage_mapGeneral__b9N0Z",c="OurTeamPage_countriesWrapper__-Po7j",o="OurTeamPage_countryOnGeneralMap__4skcr",u=r(7609),d=r(5919),_="SliderMax_sliderInfoWrapper__gjreT",x="SliderMax_coworker__+nDlS",h="SliderMax_hidden__X6SlQ",m="SliderMax_photo__Cp4GH",p="SliderMax_informationWrapper__THBbO",j="SliderMax_name__-0eVq",f="SliderMax_profession__osPLe",S="SliderMax_quote__RPBk2",v="SliderMax_humor__rf1Vz",M="SliderMax_city__ICKf5",N="SliderMax_country__oiyrs",g="SliderMax_map__l0EJ-",b="SliderMax_sliderNavWrapper__q6ZjA",y="SliderMax_photosWrapper__TdBAU",C="SliderMax_photoSmall__TqbtB",T="SliderMax_activePhotoSmall__x4b9V",k="SliderMax_dotsWrapper__-qbN5",w="SliderMax_dot__U75bi",I="SliderMax_activeDot__56Q2M",Z="BtnSliderMax_btnSlidePrev__thKRs",P="BtnSliderMax_btnSlideNext__3Red4",W=r(184),q=function(e){var n=e.moveSlide,r=e.direction;return(0,W.jsx)(W.Fragment,{children:(0,W.jsx)("button",{onClick:n,className:"next"===r?P:Z,children:"next"===r?(0,W.jsx)("svg",{width:"100%",height:"100%",children:(0,W.jsx)("use",{href:u.Z+"#icon-arrow_right"})}):(0,W.jsx)("svg",{width:"100%",height:"100%",children:(0,W.jsx)("use",{href:u.Z+"#icon-arrow_left"})})})})},B=function(e){var n=e.array,r=e.currentIndex,t=e.setCurrentIndex,l=(0,a.useState)(null),s=(0,i.Z)(l,2),c=s[0],o=s[1];return(0,W.jsx)(W.Fragment,{children:(0,W.jsx)("div",{className:_,onTouchStart:function(e){var n=e.touches[0].clientX;o(n)},onTouchMove:function(e){if(null!==c){var a=c-e.touches[0].clientX;a>5&&(null!==r&&r!==n.length-1?t(r+1):t(0)),a<5&&t(null!==r&&0!==r?r-1:n.length-1),o(null)}},children:n.map((function(e,n){return(0,W.jsxs)("div",{className:r===n?x:h,children:[(0,W.jsx)("img",{className:m,src:e.photo,alt:e.name}),(0,W.jsxs)("div",{className:p,children:[(0,W.jsx)("p",{className:j,children:e.name}),(0,W.jsx)("p",{className:f,children:e.profession}),(0,W.jsx)("p",{className:S,children:e.quote}),(0,W.jsx)("p",{className:v,children:e.humor}),(0,W.jsxs)("p",{className:M,children:[e.city,",",(0,W.jsxs)("span",{className:N,children:[" ",e.country]})]}),(0,W.jsx)("svg",{className:g,children:(0,W.jsx)("use",{href:"".concat(u.Z,"#icon-map").concat(e.location)})})]})]},e.id)}))})})},O=function(e){var n=e.array,r=e.currentIndex,t=e.setCurrentIndex,l=(0,a.useState)(null),s=(0,i.Z)(l,2),c=s[0],o=s[1],u=function(){t(null!==r&&0!==r?r-1:n.length-1)},d=function(){null!==r&&r!==n.length-1?t(r+1):t(0)},_=function(e){return t(e)};return(0,W.jsx)(W.Fragment,{children:(0,W.jsxs)("div",{className:b,onTouchStart:function(e){var n=e.touches[0].clientX;o(n)},onTouchMove:function(e){if(null!==c){var n=c-e.touches[0].clientX;n>5&&d(),n<5&&u(),o(null)}},children:[(0,W.jsx)(q,{moveSlide:u,direction:"prev"}),(0,W.jsx)("div",{className:y,children:n.map((function(e,n){return(0,W.jsx)("img",{className:r===n?T:C,src:e.photoSmall,alt:e.name,onClick:function(){return _(n)}},e.id)}))}),(0,W.jsx)(q,{moveSlide:d,direction:"next"}),(0,W.jsx)("div",{className:k,children:n.map((function(e,n){return(0,W.jsx)("div",{className:r===n?I:w,onClick:function(){return _(n)}},n)}))})]})})},X=function(){var e=(0,a.useState)(null),n=(0,i.Z)(e,2),r=n[0],_=n[1],x=d.Ec.map((function(e){return e.country})).reduce((function(e,n){return e.includes(n)?e:[].concat((0,t.Z)(e),[n])}),[]);return(0,W.jsxs)("section",{className:l,children:[null===r?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)("svg",{className:s,children:(0,W.jsx)("use",{href:u.Z+"#icon-mapGeneralWithoutCountries"})}),(0,W.jsx)("ul",{className:c,children:x.map((function(e,n){return(0,W.jsx)("li",{className:o,children:e},n)}))})]}):(0,W.jsx)(B,{array:d.Ec,currentIndex:r,setCurrentIndex:_}),(0,W.jsx)(O,{array:d.Ec,currentIndex:r,setCurrentIndex:_})]})},E=function(){return(0,W.jsx)(X,{})}}}]);
//# sourceMappingURL=355.8dfbb2d5.chunk.js.map