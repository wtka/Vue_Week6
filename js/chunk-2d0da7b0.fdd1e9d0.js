(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da7b0"],{"6c7d":function(t,c,e){"use strict";e.r(c);var n=e("7a23");function a(t,c,e,a,r,b){var s=Object(n["x"])("FrontNavbar");return Object(n["s"])(),Object(n["d"])(s)}var r={class:"navbar navbar-expand-lg navbar-light bg-light"},b={class:"container-fluid"},s=Object(n["g"])("洋食館"),l={class:"collapse navbar-collapse"},u={class:"navbar-nav me-auto mb-2 mb-lg-0"},i={class:"nav-item"},o=Object(n["g"])("首頁"),j={class:"nav-item"},O=Object(n["g"])("前台產品列表"),d={class:"nav-item"},f=Object(n["g"])("前台購物車"),v={class:"nav-item"},p=Object(n["g"])("後台購物車列表"),g=["disabled"],m={class:"btn btn-primary",type:"button"},k=Object(n["g"])(" 結帳 "),h={class:"badge rounded-pill bg-danger"};function w(t,c,e,a,w,C){var E=Object(n["x"])("router-link"),N=Object(n["x"])("router-view");return Object(n["s"])(),Object(n["e"])(n["a"],null,[Object(n["f"])("nav",r,[Object(n["f"])("div",b,[Object(n["h"])(E,{class:"navbar-brand nav-link",to:"/"},{default:Object(n["E"])((function(){return[s]})),_:1}),Object(n["f"])("div",l,[Object(n["f"])("ul",u,[Object(n["f"])("li",i,[Object(n["h"])(E,{class:"nav-link",to:"/"},{default:Object(n["E"])((function(){return[o]})),_:1})]),Object(n["f"])("li",j,[Object(n["h"])(E,{class:"nav-link",to:"/products"},{default:Object(n["E"])((function(){return[O]})),_:1})]),Object(n["f"])("li",d,[Object(n["h"])(E,{class:"nav-link",to:"/cart"},{default:Object(n["E"])((function(){return[f]})),_:1})]),Object(n["f"])("li",v,[Object(n["h"])(E,{class:"nav-link",to:"/admin"},{default:Object(n["E"])((function(){return[p]})),_:1})])])]),Object(n["f"])("button",{class:"btn btn-outline-danger",type:"button",onClick:c[0]||(c[0]=function(t){return a.clearCart()}),disabled:a.isBlock}," 清空購物車 ",8,g),Object(n["f"])("button",m,[k,Object(n["f"])("span",h,Object(n["z"])(a.cartNum),1)])])]),Object(n["h"])(N)],64)}var C=e("5502"),E={setup:function(){var t=Object(C["b"])(),c=function(){return t.dispatch("cart/clearCart")},e=Object(n["b"])((function(){return t.state.cart.cartNumber})),a=Object(n["b"])((function(){return t.state.cart.isBlockItem}));return Object(n["q"])((function(){t.dispatch("cart/getCart")})),{store:t,cartNum:e,isBlock:a,clearCart:c}}},N=e("6b0d"),_=e.n(N);const x=_()(E,[["render",w]]);var y=x,B={components:{FrontNavbar:y}};const F=_()(B,[["render",a]]);c["default"]=F}}]);
//# sourceMappingURL=chunk-2d0da7b0.fdd1e9d0.js.map