(()=>{var n={388:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>f});var o=t(933),i=t.n(o),r=t(476),a=t.n(r),l=t(896),s=t(672),p=a()(i());p.i(l.Z),p.i(s.Z),p.push([n.id,"/* Global */\n\n/* Blocks */",""]);const f=p},672:(n,e,t)=>{"use strict";t.d(e,{Z:()=>l});var o=t(933),i=t.n(o),r=t(476),a=t.n(r)()(i());a.push([n.id,"/*  padding устанавливает внутренние отступы/поля со всех сторон элемента\n    cвойство margin CSS определяет внешний отступ на всех четырёх сторонах элемента\n*/\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    color: #1A1B22;\n    margin: unset;\n}\n\na {\n    color: #1A1B22;\n    text-decoration: unset;\n}\n\nli {\n    display: inline-block;\n}\n\n.container {\n    max-width: 1400px;\n    margin: 0 auto;\n}\n\nsection {\n    padding: 0 6.0%;\n}\n\n/* Head */\n\nheader {\n    height: 80px;\n    padding: 0 6.0%;\n    background: #FFFFFF;\n    box-shadow: inset 0px -1px 0px #D1D2D6;\n}\n\n    .headerFlex {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        height: 80px;\n        width: 100%;\n    }\n\n    .logoFlex {\n        font-family: Roboto Slab;\n        font-style: normal;\n        font-weight: bold;\n        font-size: 20px;\n        line-height: 24px;\n        /* identical to box height, or 120% */\n        display: flex;\n        align-items: center;\n        /* main/primary */\n        color: #1A1B22;\n    }\n\n    header nav {\n        height: 100%;\n        margin-left: auto;\n    }\n\n    header nav ul {\n        height: 100%;\n        margin: unset;\n        padding: unset;\n    }\n\n    header nav ul li {\n        font-family: Roboto;\n        font-style: normal;\n        font-weight: 500;\n        font-size: 18px;\n        line-height: 24px;\n        height: 60%;\n        margin-top: 19px;\n    }\n\n    /* Выделение активной вкладки */\n    header nav ul li.active {\n        border-bottom: 2px solid #1A1B22;\n    }\n\n    header nav ul li:nth-child(2) {\n        margin: 0 32px 0 34px;\n    }\n\n    header nav ul li:last-child {\n        height: 48px;\n        padding: 0 15px 0 19px;\n        border: 1px solid #1A1B22;\n        box-sizing: border-box;\n        border-radius: 100px;\n    }\n\n    header nav ul li:last-child a p {\n        width: 54px;\n        display: inline-block;\n        margin-top: 11px;\n    }\n\n    header nav ul li:last-child a img {\n        margin-bottom: 0px;\n    }\n\n    .burger {\n        width: 24px;\n        height: 24px;\n        display: none;\n    }\n\n/* Middle Section */\n\n.middle p {\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 18px;\n    line-height: 24px;\n    /* identical to box height, or 133% */\n    color: rgba(26, 27, 34, 0.5);\n    margin-top: 40px;\n}\n\n.middle h1 {\n    font-family: Roboto Slab;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 40px;\n    line-height: 46px;\n    color: #1A1B22;\n    margin-top: 28px;\n}\n\n.middle div {\n    margin-top: 30px;\n    margin-bottom: 56px;\n}\n\n/* Content Section */\n\n.contentFlex {\n    width: 100%;\n    background: #F5F6F7;\n    padding-top: 62px;\n}\n\n/* CSS свойство align-items выравнивает flex-элементы текущей flex-линии таким же образом, как и justify-content, но в перпендикулярном направлении. */\n\n.cardFlexContainer {\n    display: flex;\n    flex-wrap: wrap;\n    padding-left: auto;\n    padding-bottom: 62px;\n    align-items: center;\n    justify-content: space-between;\n\n}\n\n/* Card Section */\n\n.card {\n    width: 400px;\n    flex-direction: column;\n\n    max-width: 400px;\n    min-height: 576px;\n    margin-bottom: 16px;\n    background: #FFFFFF;\n    border-radius: 16px;\n    position: relative;\n}\n\n    .image {\n        max-width: 400px;\n        max-height: 272px;\n        border-radius: 16px 16px 0 0;\n    }\n\n    .nameOnCardFlex {\n        display:flex;\n        justify-content: space-between;\n        position: absolute;\n        left: 24px;\n        top: 24px;\n        right: 24px;\n    }\n\n    .categoryFlex {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 40px;\n        width: 88px;\n        background: #FFFFFF;\n        border-radius: 10px;\n        font-family: Roboto;\n        font-style: normal;\n        font-weight: 500;\n        font-size: 14px;\n        line-height: 24px;\n        /* identical to box height, or 171% */\n        text-align: center;\n        color: #000000;\n    }\n\n    .deleteFlex {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: #FFFFFF;\n        border-radius: 10px;\n        height: 40px;\n        width: 40px;\n    }\n\n    .deleteFlex img {\n        height: 24px;\n        width: 24px;\n    }\n\n/* Text on cards Section */\n\n.date {\n    font-family: Source Sans Pro;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 18px;\n    line-height: 24px;\n    color: #B6BCBF;\n    margin-top: 12px;\n    margin-left: 24px;\n    /* identical to box height, or 133% */\n    display: flex;\n    align-items: center;\n    /* simulator/gray/text */\n    color: #B6BCBF;\n}\n\n.title {\n    font-family: Roboto Slab;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 26px;\n    line-height: 30px;\n    /* or 115% */\n    /* main/primary */\n    color: #1A1B22;\n    margin-left: 24px;\n    margin-right: 24px;\n}\n\n.description {\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 22px;\n    /* or 137% */\n    /* main/primary */\n    color: #1A1B22;\n    margin-left: 24px;\n    margin-right: 24px;\n}\n\n.source {\n    font-family: Roboto Slab;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 20px;\n    /* identical to box height, or 125% */\n    letter-spacing: 0.4px;\n    text-transform: uppercase;\n    /* simulator/gray/text */\n    color: #B6BCBF;\n    position: absolute;\n    bottom: 0px;\n    margin-left: 24px;\n}\n\n.removeFromSavedInner{\n    display: flex;\n}\n\n.blackDelete img {\n    filter: brightness(0%)\n}\n\n.deleteCard {\n    background: #FFFFFF;\n    border-radius: 10px;\n    height: 40px;\n    width: 159px;\n    margin-right: 5px;\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 14px;\n    display: none;\n    justify-content: center;\n    align-items: center;\n    color: #000000;\n}\n\n.deleteCardFlag {\n    display: flex;\n}\n\n\n/* Footer Section */\n\nfooter {\n    padding: 0 6.0%;\n    height: 80px;\n    display: flex;\n    background: #FFFFFF;\n    flex-wrap: wrap;\n}\n\n.flexFooter {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    }\n\n.footerText {\n    font-family: Roboto;\n    color: #b6bcbf;\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 15px;\n}\n\n.footerMenu {\n    display: flex;\n    flex-wrap: wrap;\n    margin-bottom: center;\n}\n\n.footerLink1 {\n    display: flex;\n    align-items: center;\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 18px;\n    line-height: 24px;\n    margin-left: 2vw;\n    margin-right: 2vw;\n    margin-bottom: 5px;\n    flex-wrap: wrap;\n}\n\n.footerLink2 {\n    display: flex;\n    align-items: center;\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 18px;\n    line-height: 24px;\n    margin-left: 2vw;\n    margin-right: 2vw;\n    margin-bottom: 5px;\n    flex-wrap: wrap;\n}\n\n.socialWebs {\n    display: flex;\n    align-items: baseline;\n    margin-left: 2vw;\n    flex-wrap: wrap;\n    margin-bottom: 5px;\n}\n\n.socialWebs1 {\n    display: flex;\n    align-items: baseline;\n    margin-left: 2vw;\n    flex-wrap: wrap;\n}\n\n.socialWebs2 {\n    display: flex;\n    align-items: baseline;\n    margin-left: 2vw;\n    flex-wrap: wrap;\n}\n\n.footerLinks {\n    margin-top: 20px;\n    height: 80px;\n    display: flex;\n    flex-wrap: wrap;\n    align-content: space-around;\n}\n\n\n@media (max-width: 720px) {\n\n  .cardFlexContainer {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  }\n\n  header nav {\n    display: none;\n  }\n\n  .burger {\n    display: flex;\n  }\n\n  footer {\n    height: 100px;\n  }\n\n  .footerText {\n    order: 1;\n  }\n}\n",""]);const l=a},896:(n,e,t)=>{"use strict";t.d(e,{Z:()=>l});var o=t(933),i=t.n(o),r=t(476),a=t.n(r)()(i());a.push([n.id,":root {\n    --beige: #eeeeee;\n}",""]);const l=a},476:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var p=0;p<n.length;p++){var f=[].concat(n[p]);o&&a[f[0]]||(void 0!==r&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=r),t&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=t):f[2]=t),i&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=i):f[4]="".concat(i)),e.push(f))}},e}},933:n=>{"use strict";n.exports=function(n){return n[1]}},164:(n,e,t)=>{var o=t(388);"string"==typeof o&&(o=[[n.id,o,""]]);t(688)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(n.exports=o.locals)},688:(n,e,t)=>{var o,i,r={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),l=function(n){return document.querySelector(n)},s=function(n){var e={};return function(n){if("function"==typeof n)return n();if(void 0===e[n]){var t=l.call(this,n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}}(),p=null,f=0,d=[],c=t(408);function h(n,e){for(var t=0;t<n.length;t++){var o=n[t],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(y(o.parts[a],e))}else{var l=[];for(a=0;a<o.parts.length;a++)l.push(y(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:l}}}}function u(n,e){for(var t=[],o={},i=0;i<n.length;i++){var r=n[i],a=e.base?r[0]+e.base:r[0],l={css:r[1],media:r[2],sourceMap:r[3]};o[a]?o[a].parts.push(l):t.push(o[a]={id:a,parts:[l]})}return t}function x(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=d[d.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),d.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(n.insertInto+" "+n.insertAt.before);t.insertBefore(e,i)}}function g(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=d.indexOf(n);e>=0&&d.splice(e,1)}function m(n){var e=document.createElement("style");return n.attrs.type="text/css",b(e,n.attrs),x(n,e),e}function b(n,e){Object.keys(e).forEach((function(t){n.setAttribute(t,e[t])}))}function y(n,e){var t,o,i,r;if(e.transform&&n.css){if(!(r=e.transform(n.css)))return function(){};n.css=r}if(e.singleton){var a=f++;t=p||(p=m(e)),o=F.bind(null,t,a,!1),i=F.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",b(e,n.attrs),x(n,e),e}(e),o=B.bind(null,t,e),i=function(){g(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(e),o=S.bind(null,t),i=function(){g(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=u(n,e);return h(t,e),function(n){for(var o=[],i=0;i<t.length;i++){var a=t[i];(l=r[a.id]).refs--,o.push(l)}for(n&&h(u(n,e),e),i=0;i<o.length;i++){var l;if(0===(l=o[i]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete r[l.id]}}}};var v,w=(v=[],function(n,e){return v[n]=e,v.filter(Boolean).join("\n")});function F(n,e,t,o){var i=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=w(e,i);else{var r=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}function S(n,e){var t=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function B(n,e,t){var o=t.css,i=t.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=c(o)),i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),l=n.href;n.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}},408:n=>{n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(n,e){var i,r=e.trim().replace(/^"(.*)"$/,(function(n,e){return e})).replace(/^'(.*)'$/,(function(n,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?n:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t(164)})();