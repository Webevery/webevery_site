"use strict";(self.webpackChunkwebevery_site=self.webpackChunkwebevery_site||[]).push([[355],{6355:function(e,r,n){n.r(r),n.d(r,{default:function(){return H}});var a=n(2791),l=n(3433),s=n(9439),i="OurTeamPage_wrapper__7VDMK",t="OurTeamPage_mapAndCountriesWrapper__z9Yep",c="OurTeamPage_mapGeneralWrapper__7+8jk",o="OurTeamPage_mapGeneral__b9N0Z",d="OurTeamPage_countriesWrapper__-Po7j",u="OurTeamPage_countryOnGeneralMap__4skcr",x=n(7609),_=n(4117),h="SliderMax_sliderInfoWrapper__gjreT",m="SliderMax_coworker__+nDlS",p="SliderMax_hidden__X6SlQ",j="SliderMax_photoWrapper__1as0j",f="SliderMax_photo__Cp4GH",S="SliderMax_informationWrapper__THBbO",g="SliderMax_name__-0eVq",v="SliderMax_profession__osPLe",N="SliderMax_quote__RPBk2",M="SliderMax_quoteIcon__lyOHZ",T="SliderMax_humor__rf1Vz",w="SliderMax_humorIcon__7wWTh",y="SliderMax_city__ICKf5",I="SliderMax_country__oiyrs",b="SliderMax_mapWrapper__u+CGm",k="SliderMax_map__l0EJ-",C="SliderMax_sliderNavWrapper__q6ZjA",W="SliderMax_photosWrapper__TdBAU",Z="SliderMax_photoSmall__TqbtB",P="SliderMax_activePhotoSmall__x4b9V",q="SliderMax_dotsWrapper__-qbN5",O="SliderMax_dot__U75bi",B="SliderMax_activeDot__56Q2M",G="BtnSliderMax_btnSlidePrev__thKRs",R="BtnSliderMax_btnSlideNext__3Red4",E=n(184),V=function(e){var r=e.moveSlide,n=e.direction;return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)("button",{onClick:r,className:"next"===n?R:G,children:"next"===n?(0,E.jsx)("svg",{width:"100%",height:"100%",children:(0,E.jsx)("use",{href:x.Z+"#icon-arrow_right"})}):(0,E.jsx)("svg",{width:"100%",height:"100%",children:(0,E.jsx)("use",{href:x.Z+"#icon-arrow_left"})})})})},z=function(e){var r=e.array,n=e.currentIndex,l=e.setCurrentIndex,i=e.scrollToIndex,t=(0,a.useState)(null),c=(0,s.Z)(t,2),o=c[0],d=c[1];return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)("div",{className:h,onTouchStart:function(e){var r=e.touches[0].clientX;d(r)},onTouchMove:function(e){if(null!==o){var a=o-e.touches[0].clientX;a>5&&(null!==n&&n!==r.length-1?(l(n+1),i(n)):(l(0),i(0))),a<-5&&(null!==n&&0!==n?(l(n-1),i(n)):(l(r.length-1),i(r.length-1))),d(null)}},children:r.map((function(e,r){return(0,E.jsxs)("div",{className:n===r?m:p,children:[(0,E.jsx)("div",{className:j,children:(0,E.jsx)("img",{className:f,src:e.photo,alt:e.name,width:146,height:171,loading:"lazy"})}),(0,E.jsxs)("div",{className:S,children:[(0,E.jsx)("p",{className:g,children:e.name}),(0,E.jsx)("p",{className:v,children:e.profession}),(0,E.jsxs)("p",{className:N,children:[(0,E.jsx)("svg",{className:M,children:(0,E.jsx)("use",{href:"".concat(x.Z,"#icon-quotation-marks")})}),e.quote]}),(0,E.jsxs)("p",{className:T,children:[(0,E.jsx)("svg",{className:w,width:"20px",height:"20px",children:(0,E.jsx)("use",{href:"".concat(x.Z,"#icon-smile-light")})}),e.humor]}),(0,E.jsxs)("p",{className:y,children:[e.city,",",(0,E.jsxs)("span",{className:I,children:[" ",e.country]})]}),(0,E.jsx)("div",{className:b,children:(0,E.jsx)("svg",{width:"696px",height:"393px",className:k,children:(0,E.jsx)("use",{href:"".concat(x.Z,"#icon-map").concat(e.location)})})})]})]},e.id)}))})})},A=function(e){var r=e.array,n=e.currentIndex,a=e.setCurrentIndex,l=e.listRef,s=e.scrollToIndex,i=function(e){return a(e)};return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)("div",{className:C,children:[0!==n?(0,E.jsx)(V,{moveSlide:function(){null!==n&&0!==n?(a(n-1),s(n)):(a(r.length-1),s(r.length-1))},direction:"prev"}):null,(0,E.jsx)("div",{className:W,ref:l,children:r.map((function(e,r){return(0,E.jsx)("img",{className:n===r?P:Z,src:e.photoSmall,alt:e.name,onClick:function(){return i(r)},width:37,height:37,loading:"lazy"},e.id)}))}),n!==r.length-1?(0,E.jsx)(V,{moveSlide:function(){null!==n&&n!==r.length-1?(a(n+1),s(n)):(a(0),s(0))},direction:"next"}):null,(0,E.jsx)("div",{className:q,children:r.map((function(e,r){return(0,E.jsx)("div",{className:n!==r?O:"".concat(O," ").concat(B),onClick:function(){i(r),s(r)}},r)}))})]})})},F=function(){var e=(0,a.useState)(null),r=(0,s.Z)(e,2),n=r[0],h=r[1],m=_.Ec.map((function(e){return e.country})).reduce((function(e,r){return e.includes(r)?e:[].concat((0,l.Z)(e),[r])}),[]),p=(0,a.useRef)(null);function j(e){p.current.querySelectorAll("img")[e].scrollIntoView({behavior:"auto",block:"nearest",inline:"center"})}return(0,E.jsxs)("section",{className:i,children:[null===n?(0,E.jsxs)("div",{className:t,children:[(0,E.jsx)("div",{className:c,children:(0,E.jsx)("svg",{width:"728px",height:"412px",className:o,children:(0,E.jsx)("use",{href:x.Z+"#icon-mapGeneralWithoutCountries"})})}),(0,E.jsx)("ul",{className:d,children:m.map((function(e,r){return(0,E.jsx)("li",{className:u,children:e},r)}))})]}):(0,E.jsx)(z,{array:_.Ec,currentIndex:n,setCurrentIndex:h,scrollToIndex:j}),(0,E.jsx)(A,{array:_.Ec,currentIndex:n,setCurrentIndex:h,scrollToIndex:j,listRef:p})]})},D=n(6907),H=function(){return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(D.ql,{children:[(0,E.jsx)("title",{children:"\u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0440\u043e\u0437\u0440\u043e\u0431\u043d\u0438\u043a\u0456\u0432 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432!"}),(0,E.jsx)("meta",{name:"description",content:"\u0420\u043e\u0437\u0440\u043e\u0431\u043a\u0430 \u0441\u0430\u0439\u0442\u0456\u0432 \u0437 \u0456\u043d\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043b\u044c\u043d\u0438\u043c \u0434\u0438\u0437\u0430\u0439\u043d\u043e\u043c. \u0421\u0430\u0439\u0442-\u0432\u0456\u0437\u0438\u0442\u043a\u0430, \u0456\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d, \u043b\u0435\u043d\u0434\u0456\u043d\u0433, \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u0438\u0439 \u0441\u0430\u0439\u0442."}),(0,E.jsx)("meta",{name:"keywords",content:"\u0432\u0435\u0431-\u0441\u0430\u0439\u0442, \u0441\u0430\u0439\u0442, \u0432\u0435\u0431-\u0440\u043e\u0437\u0440\u043e\u0431\u043a\u0430, \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432, \u0434\u0438\u0437\u0430\u0439\u043d \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432, \u0440\u043e\u0437\u0440\u043e\u0431\u043a\u0430 \u0456\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0443, \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0443\u0432\u0430\u043d\u043d\u044f, \u0432\u0435\u0431-\u0434\u043e\u0434\u0430\u0442\u043e\u043a, SEO \u043e\u043f\u0442\u0438\u043c\u0456\u0437\u0430\u0446\u0456\u044f, \u043c\u043e\u0431\u0456\u043b\u044c\u043d\u0430 \u0440\u043e\u0437\u0440\u043e\u0431\u043a\u0430,  \u0434\u0438\u0437\u0430\u0439\u043d, \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f, \u043f\u0440\u043e\u0435\u043a\u0442\u0443\u0432\u0430\u043d\u043d\u044f"}),(0,E.jsx)("link",{rel:"canonical",href:"ourTeam"})]}),(0,E.jsx)("h1",{className:"seoTitle",children:"\u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0440\u043e\u0437\u0440\u043e\u0431\u043d\u0438\u043a\u0456\u0432 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432"}),(0,E.jsx)(F,{})]})}}}]);
//# sourceMappingURL=355.f374f51f.chunk.js.map