!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("prettyme",[],t):"object"==typeof exports?exports.prettyme=t():e.prettyme=t()}(window,function(){return function(e){var t=window.webpackHotUpdateprettyme;window.webpackHotUpdateprettyme=function(e,n){!function(e,t){if(!v[e]||!b[e])return;for(var n in b[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--g&&0===y&&k()}(e,n),t&&t(e,n)};var n,r=!0,s="898f3175ab8fb95a9d32",o=1e4,i={},a=[],c=[];function l(e){var t=E[e];if(!t)return C;var r=function(r){return t.hot.active?(E[r]?-1===E[r].parents.indexOf(e)&&E[r].parents.push(e):(a=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),C(r)},s=function(e){return{configurable:!0,enumerable:!0,get:function(){return C[e]},set:function(t){C[e]=t}}};for(var o in C)Object.prototype.hasOwnProperty.call(C,o)&&"e"!==o&&Object.defineProperty(r,o,s(o));return r.e=function(e){return"ready"===u&&d("prepare"),y++,C.e(e).then(t,function(e){throw t(),e});function t(){y--,"prepare"===u&&(x[e]||_(e),0===y&&0===g&&k())}},r}var p=[],u="idle";function d(e){u=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var f,h,m,g=0,y=0,x={},b={},v={};function w(e){return+e+""===e?+e:e}function j(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,d("check"),(t=o,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=C.p+""+s+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return d("idle"),null;b={},x={},v=e.c,m=e.h,d("prepare");var t=new Promise(function(e,t){f={resolve:e,reject:t}});h={};return _("main"),"prepare"===u&&0===y&&0===g&&k(),t});var t}function _(e){v[e]?(b[e]=!0,g++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=C.p+""+e+"."+s+".hot-update.js",t.appendChild(n)}(e)):x[e]=!0}function k(){d("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then(function(){return O(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(w(n));e.resolve(t)}}function O(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var n,r,o,c,l;function p(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var s=r.pop(),o=s.id,i=s.chain;if((c=E[o])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:o};if(c.hot._main)return{type:"unaccepted",chain:i,moduleId:o};for(var a=0;a<c.parents.length;a++){var l=c.parents[a],p=E[l];if(p){if(p.hot._declinedDependencies[o])return{type:"declined",chain:i.concat([l]),moduleId:o,parentId:l};-1===t.indexOf(l)&&(p.hot._acceptedDependencies[o]?(n[l]||(n[l]=[]),f(n[l],[o])):(delete n[l],t.push(l),r.push({chain:i.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var g={},y=[],x={},b=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var j in h)if(Object.prototype.hasOwnProperty.call(h,j)){var _;l=w(j);var k=!1,O=!1,L=!1,A="";switch((_=h[j]?p(l):{type:"disposed",moduleId:j}).chain&&(A="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(k=new Error("Aborted because of self decline: "+_.moduleId+A));break;case"declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(k=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+A));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(_),t.ignoreUnaccepted||(k=new Error("Aborted because "+l+" is not accepted"+A));break;case"accepted":t.onAccepted&&t.onAccepted(_),O=!0;break;case"disposed":t.onDisposed&&t.onDisposed(_),L=!0;break;default:throw new Error("Unexception type "+_.type)}if(k)return d("abort"),Promise.reject(k);if(O)for(l in x[l]=h[l],f(y,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,l)&&(g[l]||(g[l]=[]),f(g[l],_.outdatedDependencies[l]));L&&(f(y,[_.moduleId]),x[l]=b)}var I,D=[];for(r=0;r<y.length;r++)l=y[r],E[l]&&E[l].hot._selfAccepted&&D.push({module:l,errorHandler:E[l].hot._selfAccepted});d("dispose"),Object.keys(v).forEach(function(e){!1===v[e]&&function(e){delete installedChunks[e]}(e)});for(var U,P,S=y.slice();S.length>0;)if(l=S.pop(),c=E[l]){var N={},R=c.hot._disposeHandlers;for(o=0;o<R.length;o++)(n=R[o])(N);for(i[l]=N,c.hot.active=!1,delete E[l],delete g[l],o=0;o<c.children.length;o++){var T=E[c.children[o]];T&&((I=T.parents.indexOf(l))>=0&&T.parents.splice(I,1))}}for(l in g)if(Object.prototype.hasOwnProperty.call(g,l)&&(c=E[l]))for(P=g[l],o=0;o<P.length;o++)U=P[o],(I=c.children.indexOf(U))>=0&&c.children.splice(I,1);for(l in d("apply"),s=m,x)Object.prototype.hasOwnProperty.call(x,l)&&(e[l]=x[l]);var H=null;for(l in g)if(Object.prototype.hasOwnProperty.call(g,l)&&(c=E[l])){P=g[l];var M=[];for(r=0;r<P.length;r++)if(U=P[r],n=c.hot._acceptedDependencies[U]){if(-1!==M.indexOf(n))continue;M.push(n)}for(r=0;r<M.length;r++){n=M[r];try{n(P)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:P[r],error:e}),t.ignoreErrored||H||(H=e)}}}for(r=0;r<D.length;r++){var B=D[r];l=B.module,a=[l];try{C(l)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||H||(H=n),H||(H=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||H||(H=e)}}return H?(d("fail"),Promise.reject(H)):(d("idle"),new Promise(function(e){e(y)}))}var E={};function C(t){if(E[t])return E[t].exports;var r=E[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:j,apply:O,status:function(e){if(!e)return u;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:i[e]};return n=void 0,t}(t),parents:(c=a,a=[],c),children:[]};return e[t].call(r.exports,r,r.exports,l(t)),r.l=!0,r.exports}return C.m=e,C.c=E,C.d=function(e,t,n){C.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},C.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},C.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return C.d(t,"a",t),t},C.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},C.p="",C.h=function(){return s},l(0)(C.s=0)}({"./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/sass/css.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js!./src/sass/css.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */function(e,t,n){(e.exports=n(/*! ../../node_modules/css-loader/lib/css-base.js */"./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".prettyme {\n  padding: 5px 20px 5px 80px;\n  margin-bottom: 40px;\n  color: #777;\n  position: relative; }\n  .prettyme .line {\n    margin: 20px 0; }\n    .prettyme .line:first-child {\n      margin-top: 0; }\n    .prettyme .line:last-child {\n      margin-bottom: 0; }\n  .prettyme .token-wrapper {\n    display: inline-block; }\n    .prettyme .token-wrapper i {\n      font-style: normal; }\n  .prettyme.numbered {\n    counter-reset: lines; }\n    .prettyme.numbered .line {\n      position: relative; }\n      .prettyme.numbered .line::before {\n        counter-increment: lines;\n        content: counter(lines);\n        position: absolute;\n        left: -80px;\n        text-align: right;\n        color: #d0d0d0;\n        min-width: 40px; }\n  .prettyme.theme-dark {\n    background-color: #444;\n    color: #aaa; }\n    .prettyme.theme-dark.numbered .line::before {\n      color: #6a6a6a; }\n\n.prettyme.css {\n  color: #1a8cff; }\n  .prettyme.css .comment {\n    color: #aaa; }\n  .prettyme.css :not(.comment).property, .prettyme.css :not(.comment).word.in-bracket:not(.value) {\n    color: #06ade0; }\n  .prettyme.css :not(.comment).value, .prettyme.css :not(.comment).in-value, .prettyme.css :not(.comment).word.in-value:not(.property) {\n    color: #ffbf00; }\n  .prettyme.css :not(.comment).color {\n    color: #9f81f7; }\n  .prettyme.css :not(.comment).function {\n    color: #ff3385; }\n  .prettyme.css :not(.comment).number, .prettyme.css :not(.comment).unit {\n    color: #00cca3; }\n  .prettyme.css :not(.comment).text {\n    color: #f781f3; }\n  .prettyme.css :not(.comment).delimiter {\n    color: #777; }\n  .prettyme.css :not(.comment).selector {\n    color: #1a8cff; }\n",""])},"./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var s=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([s]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},s=0;s<this.length;s++){var o=this[s][0];"number"==typeof o&&(r[o]=!0)}for(s=0;s<e.length;s++){var i=e[s];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},"./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */function(e,t,n){var r,s,o={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===s&&(s=r.apply(this,arguments)),s}),a=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),c=null,l=0,p=[],u=n(/*! ./urls */"./node_modules/style-loader/lib/urls.js");function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],s=o[r.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](r.parts[i]);for(;i<r.parts.length;i++)s.parts.push(x(r.parts[i],t))}else{var a=[];for(i=0;i<r.parts.length;i++)a.push(x(r.parts[i],t));o[r.id]={id:r.id,refs:1,parts:a}}}}function f(e,t){for(var n=[],r={},s=0;s<e.length;s++){var o=e[s],i=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(a):n.push(r[i]={id:i,parts:[a]})}return n}function h(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=p[p.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),p.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var s=a(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,s)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=p.indexOf(e);t>=0&&p.splice(t,1)}function g(e){var t=document.createElement("style");return e.attrs.type="text/css",y(t,e.attrs),h(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function x(e,t){var n,r,s,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var i=l++;n=c||(c=g(t)),r=w.bind(null,n,i,!1),s=w.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",y(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,s=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&s;(t.convertToAbsoluteUrls||o)&&(r=u(r));s&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");var i=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a)}.bind(null,n,t),s=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),s=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else s()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return d(n,t),function(e){for(var r=[],s=0;s<n.length;s++){var i=n[s];(a=o[i.id]).refs--,r.push(a)}e&&d(f(e,t),t);for(s=0;s<r.length;s++){var a;if(0===(a=r[s]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var b,v=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function w(e,t,n,r){var s=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(t,s);else{var o=document.createTextNode(s),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}},"./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var s,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(s=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(s)+")")})}},"./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},"./src/languages/_language.js":
/*!************************************!*\
  !*** ./src/languages/_language.js ***!
  \************************************/
/*! no static exports found */function(e,t,n){(function(t){class n{constructor(e){this.options=e,this.init()}get name(){return this.options.name}get lexer(){return this.options.lexer}init(){const e=n.getGlobal();e&&(e._prettymeLanguages[this.name]=this)}static getGlobal(){return void 0!==t?n.setGlobal(t):"undefined"!=typeof window?n.setGlobal(window):null}static setGlobal(e){return e._prettymeLanguages||(e._prettymeLanguages={}),e}static get(e){const t=this.getGlobal();return t?t._prettymeLanguages[e]:null}static get languages(){return t?Object.keys(t._prettymeLanguages):[]}}e.exports=n}).call(this,n(/*! ./../../node_modules/webpack/buildin/global.js */"./node_modules/webpack/buildin/global.js"))},"./src/languages/css.js":
/*!******************************!*\
  !*** ./src/languages/css.js ***!
  \******************************/
/*! no static exports found */function(e,t,n){"undefined"!=typeof window&&n(/*! ../sass/css.scss */"./src/sass/css.scss");const r=n(/*! ./_language */"./src/languages/_language.js"),s=n(/*! ../lexers/css */"./src/lexers/css.js");e.exports=new class extends r{constructor(){super({name:"css",lexer:s})}}},"./src/lexers/_highlighter.js":
/*!************************************!*\
  !*** ./src/lexers/_highlighter.js ***!
  \************************************/
/*! no static exports found */function(e,t,n){"use strict";const r=n(/*! ./aux/lexer */"./src/lexers/aux/lexer.js");class s{constructor(e){this.lexer=e?new r(e):null}highlight(e){return this.lexer?this.lexer.highlight(e):null}lex(e){return this.lexer?this.lexer.lex(e):null}}e.exports=s},"./src/lexers/aux/formatter.js":
/*!*************************************!*\
  !*** ./src/lexers/aux/formatter.js ***!
  \*************************************/
/*! no static exports found */function(e,t,n){"use strict";const r=n(/*! ../../utils/utils */"./src/utils/utils.js");class s{constructor(e){this.options=e}get code(){return this.options.code}get tokens(){return this.options.tokens}insertTokens(){return this.performInsertTokens(this.tokens,this.code)}performInsertTokens(e,t){let n,s,o,i=[],a=0;return e.forEach(e=>{n=e.wrapper?e.start:e.index,i.push(r.escape(t.substring(a,n))),e.wrapper?((o=new Set(e.className)).add("token-wrapper"),s=this.performInsertTokens(e.elements,e.content),i.push(this.formatWrapper(s,o))):i.push(this.formatValue(e.value,e.className)),a=n+e.length}),i.push(r.escape(t.substring(a))),i.join("")}formatWrapper(e,t){return this.formatContainer(e,t,"div")}formatValue(e,t){return this.formatContainer(r.escape(e),t,"span")}formatContainer(e,t,n){const r=`<${n} class="${Array.from(t).join(" ")}">`,s=`</${n}>`;return e.split("\n").map(e=>""!==e.trim()?`${r}${e}${s}`:e).join("\n")}format(){const e=this.insertTokens();return r.formatLines(e)}}e.exports=s},"./src/lexers/aux/lexer.js":
/*!*********************************!*\
  !*** ./src/lexers/aux/lexer.js ***!
  \*********************************/
/*! no static exports found */function(e,t,n){"use strict";const r=n(/*! ./tokeniser */"./src/lexers/aux/tokeniser.js"),s=n(/*! ./formatter */"./src/lexers/aux/formatter.js");class o{constructor(e){this.config=e}get comments(){return this.config.comments}get patterns(){return this.config.patterns}lex(e){return this.getTokeniser(e).elements}highlight(e){return new s({code:e,tokens:this.lex(e)}).format()}getTokeniser(e){return new r({content:e,comments:this.comments,patterns:this.patterns})}}e.exports=o},"./src/lexers/aux/limits.js":
/*!**********************************!*\
  !*** ./src/lexers/aux/limits.js ***!
  \**********************************/
/*! no static exports found */function(e,t,n){"use strict";class r{constructor(){this.tokens=[],this.openings={},this.closings={}}store(e){this.tokens.push(e),this.processOpening(e),this.processClosing(e)}processOpening(e){e.isOpening&&this.getContainer(this.openings,e.relatedClass).push(e.index)}processClosing(e){e.isClosing&&this.getContainer(this.closings,e.relatedClass).push(e.index)}getContainer(e,t){return e[t]||(e[t]=[]),e[t]}addLimits(){let e;for(e in this.openings)this.processKeyLimits(e)}processKeyLimits(e){const t=this.openings[e],n=this.closings[e]||[];let r,s=-1;t.forEach(t=>{t>s&&(r=this.getStop(n,t),this.addClass(e,[t,r]),s=r)})}getStop(e,t){const n=e.length;let r,s=0,o=-1;for(s=0;s<n;s++)if((r=e[s])>t){o=r,e.splice(s,1);break}return o}addClass(e,t){this.getRangeTokens(...t).forEach(t=>{t.className.add(e)})}getRangeTokens(e,t){return this.tokens.filter(n=>n.index>=e&&(-1===t||n.index<=t))}}e.exports=r},"./src/lexers/aux/tokeniser.js":
/*!*************************************!*\
  !*** ./src/lexers/aux/tokeniser.js ***!
  \*************************************/
/*! no static exports found */function(e,t,n){"use strict";const r=n(/*! ./limits */"./src/lexers/aux/limits.js");class s{constructor(e){this.options=e,this.getElements()}get content(){return this.options.content}get patterns(){return this.options.patterns}get comments(){return this.options.comments}getElements(){if(this.elements=[],!this.content||""===this.content.trim())return;const e=new r,t=new o({content:this.getContentWithoutComments(),patterns:this.patterns,index:0,taggedLimits:e}).elements.concat(this.elements);t.sort((e,t)=>e.index-t.index),e.addLimits(),this.elements=t}getContentWithoutComments(){this.elements=this.getComments();const e=[];let t,n,r=0;return this.elements.forEach(s=>{t=s.index,n=s.length,e.push(this.content.slice(r,t)),e.push(" ".repeat(n)),r=t+n}),e.push(this.content.slice(r)),e.join("")}getComments(){return this.comments?new o({content:this.content,patterns:[this.comments],index:0}).elements:[]}}class o{constructor(e){this.options=e,this.elements=[],this.empty||this.applyPatterns()}get type(){return this.options.type}get value(){return this.options.value}get index(){return parseInt(this.options.index)}get start(){return this.options.start?parseInt(this.options.start):0}get className(){return this.options.className||new Set}get length(){return this.options.length}get content(){return this.options.content}get patterns(){return this.options.patterns||[]}get empty(){return!this.content||""===this.content.trim()}get taggedLimits(){return this.options.taggedLimits}get relatedClass(){return this.options.pattern?this.options.pattern.relatedClass:null}get isOpening(){return this.options.pattern&&this.options.pattern.opening}get isClosing(){return this.options.pattern&&this.options.pattern.closing}get wrapper(){return this.options.wrapper}applyPatterns(){if(0===this.patterns.length)return;const e=this.patterns[0],t=this.patterns.slice(1),n=e.regex,r=e.group||1,s=new Set(this.className);let o,i,a,c=n.exec(this.content),l=0;for(e.class.forEach(e=>{s.add(e)});c;)o=c[r],i=c.index+this.content.substring(c.index).indexOf(o),a=o.length,this.processPart({content:this.content.substring(l,i),patterns:t,index:this.index+l,className:this.className}),e.accumulative?this.processPart({content:o,patterns:t,index:this.index+i,length:o.length,className:s}):e.wrapper?this.processPart({content:o,patterns:t,index:0,start:this.index+i,length:o.length,className:s,wrapper:!0}):this.generateToken({type:e.type,value:o,index:this.index+i,length:a,className:s,pattern:e}),l=i+a,c=n.exec(this.content);this.processPart({content:this.content.substring(l),patterns:t,index:this.index+l,className:this.className})}processPart(e){""!==e.content.trim()&&((e=Object.assign(e,{taggedLimits:this.taggedLimits})).wrapper?this.elements.push(new o(e)):this.elements=this.elements.concat(new o(e).elements))}generateToken(e){const t=new o(e);this.taggedLimits&&this.taggedLimits.store(t),this.elements.push(t)}}e.exports=s},"./src/lexers/css.js":
/*!***************************!*\
  !*** ./src/lexers/css.js ***!
  \***************************/
/*! no static exports found */function(e,t,n){"use strict";const r=n(/*! ./_highlighter */"./src/lexers/_highlighter.js"),s={comments:{type:"comment",regex:/(\/\*((?!\*\/).|\n)+\*\/)/g,class:["comment"]},patterns:[{type:"selector",regex:/([^\s\t\n\r]+)[\s\t\n\r]*{/g,class:["selector"]},{type:"property",regex:/[{;][\s\n\t\r]*([a-zA-Z-]+)[\s\n\t\r]*:/g,class:["property"]},{type:"open-bracket",regex:/({)/g,class:["in-bracket","delimiter"],opening:!0,relatedClass:"in-bracket"},{type:"close-bracket",regex:/(})/g,class:["in-bracket","delimiter"],closing:!0,relatedClass:"in-bracket"},{type:"text",regex:/('[^']*'|"[^"]*")/g,class:["value","text"]},{type:"function",regex:/([a-zA-Z\-_]*)[\s\t\r\n]*\(/g,class:["value","function"]},{type:"word",regex:/:[\s\n\t\r]*([a-zA-Z-]+)/g,class:["value","word"]},{type:"color",regex:/(#[0-9a-fA-F]{3,6})/g,class:["value","color"]},{type:"unit",regex:/([0-9.]*[0-9]+[a-zA-Z%]+)/g,class:["value","unit"]},{type:"number",regex:/([0-9.]*[0-9]+)/g,class:["value","number"]},{type:"value",regex:/:[\s\n\t\r]*([^;]*);/g,class:["value"]},{type:"delimiter",regex:/(\(|\)|,|:|;|{|})/g,class:["delimiter"]}]};e.exports=new r(s)},"./src/sass/css.scss":
/*!***************************!*\
  !*** ./src/sass/css.scss ***!
  \***************************/
/*! no static exports found */function(e,t,n){var r=n(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/lib!../../node_modules/sass-loader/lib/loader.js!./css.scss */"./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/sass/css.scss");"string"==typeof r&&(r=[[e.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0},o=n(/*! ../../node_modules/style-loader/lib/addStyles.js */"./node_modules/style-loader/lib/addStyles.js")(r,s);r.locals&&(e.exports=r.locals),e.hot.accept(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/lib!../../node_modules/sass-loader/lib/loader.js!./css.scss */"./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/sass/css.scss",function(t){!function(){var t=n(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/lib!../../node_modules/sass-loader/lib/loader.js!./css.scss */"./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/sass/css.scss");if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}()}),e.hot.dispose(function(){o()})},"./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! no static exports found */function(e,t,n){e.exports=new class{escape(e){const t=this.replaceAll(e,"<","&lt;");return this.replaceAll(t,">","&gt;")}replaceAll(e,t,n){return e.split(t).join(n)}formatLines(e){return['<div class="line">',e.split("\n").join('</div><div class="line">'),"</div>"].join("")}}},0:
/*!************************************!*\
  !*** multi ./src/languages/css.js ***!
  \************************************/
/*! no static exports found */function(e,t,n){e.exports=n(/*! /Users/juancastrofernandez/Desarrollo/Github/prettyme/src/languages/css.js */"./src/languages/css.js")}})});