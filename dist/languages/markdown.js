!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("prettyme",[],t):"object"==typeof exports?exports.prettyme=t():e.prettyme=t()}(window,function(){return function(e){var t=window.webpackHotUpdateprettyme;window.webpackHotUpdateprettyme=function(e,s){!function(e,t){if(!j[e]||!b[e])return;for(var s in b[e]=!1,t)Object.prototype.hasOwnProperty.call(t,s)&&(h[s]=t[s]);0==--m&&0===y&&O()}(e,s),t&&t(e,s)};var s,r=!0,n="888d0625f90c37f51a66",o=1e4,i={},c=[],l=[];function a(e){var t=$[e];if(!t)return E;var r=function(r){return t.hot.active?($[r]?-1===$[r].parents.indexOf(e)&&$[r].parents.push(e):(c=[e],s=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),E(r)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return E[e]},set:function(t){E[e]=t}}};for(var o in E)Object.prototype.hasOwnProperty.call(E,o)&&"e"!==o&&Object.defineProperty(r,o,n(o));return r.e=function(e){return"ready"===u&&d("prepare"),y++,E.e(e).then(t,function(e){throw t(),e});function t(){y--,"prepare"===u&&(x[e]||k(e),0===y&&0===m&&O())}},r}var p=[],u="idle";function d(e){u=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var g,h,f,m=0,y=0,x={},b={},j={};function w(e){return+e+""===e?+e:e}function v(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,d("check"),(t=o,t=t||1e4,new Promise(function(e,s){if("undefined"==typeof XMLHttpRequest)return s(new Error("No browser support"));try{var r=new XMLHttpRequest,o=E.p+""+n+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return s(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)s(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)s(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void s(e)}e(t)}}})).then(function(e){if(!e)return d("idle"),null;b={},x={},j=e.c,f=e.h,d("prepare");var t=new Promise(function(e,t){g={resolve:e,reject:t}});h={};return k("main"),"prepare"===u&&0===y&&0===m&&O(),t});var t}function k(e){j[e]?(b[e]=!0,m++,function(e){var t=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.src=E.p+""+e+"."+n+".hot-update.js",t.appendChild(s)}(e)):x[e]=!0}function O(){d("ready");var e=g;if(g=null,e)if(r)Promise.resolve().then(function(){return _(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var s in h)Object.prototype.hasOwnProperty.call(h,s)&&t.push(w(s));e.resolve(t)}}function _(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var s,r,o,l,a;function p(e){for(var t=[e],s={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var n=r.pop(),o=n.id,i=n.chain;if((l=$[o])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:o};if(l.hot._main)return{type:"unaccepted",chain:i,moduleId:o};for(var c=0;c<l.parents.length;c++){var a=l.parents[c],p=$[a];if(p){if(p.hot._declinedDependencies[o])return{type:"declined",chain:i.concat([a]),moduleId:o,parentId:a};-1===t.indexOf(a)&&(p.hot._acceptedDependencies[o]?(s[a]||(s[a]=[]),g(s[a],[o])):(delete s[a],t.push(a),r.push({chain:i.concat([a]),id:a})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:s}}function g(e,t){for(var s=0;s<t.length;s++){var r=t[s];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var m={},y=[],x={},b=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var v in h)if(Object.prototype.hasOwnProperty.call(h,v)){var k;a=w(v);var O=!1,_=!1,C=!1,D="";switch((k=h[v]?p(a):{type:"disposed",moduleId:v}).chain&&(D="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(O=new Error("Aborted because of self decline: "+k.moduleId+D));break;case"declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+D));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(k),t.ignoreUnaccepted||(O=new Error("Aborted because "+a+" is not accepted"+D));break;case"accepted":t.onAccepted&&t.onAccepted(k),_=!0;break;case"disposed":t.onDisposed&&t.onDisposed(k),C=!0;break;default:throw new Error("Unexception type "+k.type)}if(O)return d("abort"),Promise.reject(O);if(_)for(a in x[a]=h[a],g(y,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,a)&&(m[a]||(m[a]=[]),g(m[a],k.outdatedDependencies[a]));C&&(g(y,[k.moduleId]),x[a]=b)}var P,S=[];for(r=0;r<y.length;r++)a=y[r],$[a]&&$[a].hot._selfAccepted&&S.push({module:a,errorHandler:$[a].hot._selfAccepted});d("dispose"),Object.keys(j).forEach(function(e){!1===j[e]&&function(e){delete installedChunks[e]}(e)});for(var L,N,A=y.slice();A.length>0;)if(a=A.pop(),l=$[a]){var H={},I=l.hot._disposeHandlers;for(o=0;o<I.length;o++)(s=I[o])(H);for(i[a]=H,l.hot.active=!1,delete $[a],delete m[a],o=0;o<l.children.length;o++){var T=$[l.children[o]];T&&((P=T.parents.indexOf(a))>=0&&T.parents.splice(P,1))}}for(a in m)if(Object.prototype.hasOwnProperty.call(m,a)&&(l=$[a]))for(N=m[a],o=0;o<N.length;o++)L=N[o],(P=l.children.indexOf(L))>=0&&l.children.splice(P,1);for(a in d("apply"),n=f,x)Object.prototype.hasOwnProperty.call(x,a)&&(e[a]=x[a]);var M=null;for(a in m)if(Object.prototype.hasOwnProperty.call(m,a)&&(l=$[a])){N=m[a];var q=[];for(r=0;r<N.length;r++)if(L=N[r],s=l.hot._acceptedDependencies[L]){if(-1!==q.indexOf(s))continue;q.push(s)}for(r=0;r<q.length;r++){s=q[r];try{s(N)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:a,dependencyId:N[r],error:e}),t.ignoreErrored||M||(M=e)}}}for(r=0;r<S.length;r++){var W=S[r];a=W.module,c=[a];try{E(a)}catch(e){if("function"==typeof W.errorHandler)try{W.errorHandler(e)}catch(s){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:a,error:s,originalError:e}),t.ignoreErrored||M||(M=s),M||(M=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:a,error:e}),t.ignoreErrored||M||(M=e)}}return M?(d("fail"),Promise.reject(M)):(d("idle"),new Promise(function(e){e(y)}))}var $={};function E(t){if($[t])return $[t].exports;var r=$[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:s!==e,active:!0,accept:function(e,s){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=s||function(){};else t._acceptedDependencies[e]=s||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var s=0;s<e.length;s++)t._declinedDependencies[e[s]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var s=t._disposeHandlers.indexOf(e);s>=0&&t._disposeHandlers.splice(s,1)},check:v,apply:_,status:function(e){if(!e)return u;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:i[e]};return s=void 0,t}(t),parents:(l=c,c=[],l),children:[]};return e[t].call(r.exports,r,r.exports,a(t)),r.l=!0,r.exports}return E.m=e,E.c=$,E.d=function(e,t,s){E.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},E.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},E.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return E.d(t,"a",t),t},E.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},E.p="",E.h=function(){return n},a(0)(E.s=0)}({"./node_modules/cssme/src/index.js":
/*!*****************************************!*\
  !*** ./node_modules/cssme/src/index.js ***!
  \*****************************************/
/*! no static exports found */function(e,t,s){"use strict";e.exports=new class{load(e={}){if("undefined"==typeof window)return;const t=document.createElement("style");t.type="text/css",t.innerHTML=this.stringify(e),document.getElementsByTagName("head")[0].appendChild(t)}stringify(e={}){const t=[],s=this.getEmptyStack(e);let r,n,o,i;for(;s.length>0;)for(n in(r=s.shift()).rules)o=r.rules[n],this.isObject(o)?n.split(",").forEach(e=>{s.push({rules:o,nestedSelectors:this.replaceAmpersand(e.trim(),r.nestedSelectors)})}):(t[i=this.getSelector(r.nestedSelectors)]=t[i]||[],t[i].push({property:n,value:o}));return this.formatOutput(t)}replaceAmpersand(e,t){if(!e.includes("&")||0===t.length)return t.concat(e);const s=t[t.length-1],r=e.replace(/&/g,s);return t.slice(0,-1).concat(r)}getEmptyStack(e){return[{rules:e,nestedSelectors:[]}]}formatOutput(e){const t=[],s=this;return Object.keys(e).map(function(r){t.push(r),s.formatDeclarations(t,e[r])}),t.join("")}formatDeclarations(e,t){e.push("{"),t.map(function(t){e.push(t.property,":",t.value,";")}),e.push("}")}getSelector(e){return e.join(" ")}isObject(e){return e instanceof Object}}},"./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */function(e,t){var s;s=function(){return this}();try{s=s||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(s=window)}e.exports=s},"./src/languages/markdown.js":
/*!***********************************!*\
  !*** ./src/languages/markdown.js ***!
  \***********************************/
/*! no static exports found */function(e,t,s){const r=s(/*! ../lib/utils */"./src/lib/utils.js"),n=s(/*! ../lexers/language */"./src/lexers/language.js"),o=s(/*! ../lexers/markdown_highlighter */"./src/lexers/markdown_highlighter.js"),i={patterns:[{type:"header",regex:/^\s{0,3}(#+) (.*)/gm,class:["header"],wrapper:!0,formatter:'<i class="a">$1</i> $2'},{type:"bold-asterisk",regex:/(\*\*(\S(.+?\S)?)\*\*)/g,class:["bold"],formatter:"<i>&lowast;&lowast;</i>$2<i>&lowast;&lowast;</i>"},{type:"bold-underscore",regex:/(__(\S(.+?\S)?)__)/g,class:["bold"],formatter:"<i>&#95;&#95;</i>$2<i>&#95;&#95;</i>"},{type:"italic-asterisk",regex:/(\*(.+?)\*)/g,class:["italic"],formatter:"<i>&lowast;</i>$2<i>&lowast;</i>"},{type:"italic-underscore",regex:/(_(.+?)_)/g,class:["italic"],formatter:"<i>&#95;</i>$2<i>&#95;</i>"},{type:"list-asterisk",regex:/^(\* (.*))/gm,class:["list","ul-list"],formatter:"<i>*</i> $2"},{type:"list-asterisk-spaces",regex:/^( *)(\* (.*))/gm,class:["list","ul-list"],formatter:"$1<i>*</i> $3"},{type:"list-dash",regex:/^(- (.*))/gm,class:["list","ul-list"],formatter:"<i>-</i> $2"},{type:"list-dash-spaces",regex:/^( *)(- (.*))/gm,class:["list","ul-list"],formatter:"$1<i>-</i> $3"},{type:"list-number",regex:/^(\d+\.) (.*)/gm,class:["list","ol-list"],formatter:"<i>$1</i> $2"},{type:"list-number-spaces",regex:/^( *)(\d+\.) (.*)/gm,class:["list","ol-list"],formatter:"$1<i>$2</i> $3"},{type:"link",regex:/!\[([^\]]*)\]\(([^)]*)\)/g,class:["link"],formatter:'<i>!</i><i class="b">[</i>$1<i class="b">]</i><i class="p">(</i><span class="u">$2</span><i class="p">)</i>'},{type:"code",regex:/^```([a-z]*)\n([\s\S]*?)\n```$/gm,class:["code"],repl:(e,t,s)=>{const n='<div class="code">',o=`<i>&#96&#96&#96</i>${t}\n${s}\n<i>&#96&#96&#96</i>`;return`${n}${r.replaceAll(o,"\n",`</div>\n${n}`)}</div>`}},{type:"code-inline",regex:/`(.*?)`/g,class:["code-inline"],formatter:"<i>&#96</i>$1<i>&#96</i>"},{type:"quote",regex:/^&gt;(.*)/gm,class:["quote"],formatter:"<i>></i>$1"},{type:"quote-spaces",regex:/^( *)&gt;(.*)/gm,class:["quote"],formatter:"$1<i>></i>$2"}]};e.exports=new class extends n{constructor(){super({name:"markdown",lexer:new o(i)})}}},"./src/lexers/highlighter.js":
/*!***********************************!*\
  !*** ./src/lexers/highlighter.js ***!
  \***********************************/
/*! no static exports found */function(e,t,s){"use strict";const r=s(/*! ../lib/lexer */"./src/lib/lexer.js");class n{constructor(e){this.lexer=e?new r(e):null}highlight(e,t={}){return this.lexer?this.lexer.highlight(e,t):null}lex(e,t={}){return this.lexer?this.lexer.lex(e,t):null}}e.exports=n},"./src/lexers/language.js":
/*!********************************!*\
  !*** ./src/lexers/language.js ***!
  \********************************/
/*! no static exports found */function(e,t,s){(function(t){const r=s(/*! cssme */"./node_modules/cssme/src/index.js");class n{constructor(e){this.options=e,this.init()}get name(){return this.options.name}get lexer(){return this.options.lexer}get styles(){return s("./src/styles/languages sync recursive ^\\.\\/.*$")(`./${this.name}`)}init(){const e=n.getGlobal();e&&(e._prettymeLanguages[this.name]=this)}loadStyles(e){if("undefined"==typeof window)return;const t=this.styles(e);r.load(t)}static getGlobal(){return void 0!==t?n.setGlobal(t):"undefined"!=typeof window?n.setGlobal(window):null}static setGlobal(e){return e._prettymeLanguages||(e._prettymeLanguages={}),e}static get(e){const t=this.getGlobal();return t?t._prettymeLanguages[e]:null}static get languages(){return t?Object.keys(t._prettymeLanguages):[]}}e.exports=n}).call(this,s(/*! ./../../node_modules/webpack/buildin/global.js */"./node_modules/webpack/buildin/global.js"))},"./src/lexers/markdown_highlighter.js":
/*!********************************************!*\
  !*** ./src/lexers/markdown_highlighter.js ***!
  \********************************************/
/*! no static exports found */function(e,t,s){"use strict";const r=s(/*! ./highlighter */"./src/lexers/highlighter.js"),n=s(/*! ../lib/transformer */"./src/lib/transformer.js");class o extends r{constructor(e){super(null),this.lexer=new n(e)}highlight(e,t={}){return this.lexer.transform(e,t)}lex(e,t={}){return null}}e.exports=o},"./src/lexers/tokens.js":
/*!******************************!*\
  !*** ./src/lexers/tokens.js ***!
  \******************************/
/*! no static exports found */function(e,t,s){"use strict";const r={space:{type:"space",regex:/( +)/g,class:["space"]},wildcard:{type:"any",regex:/(.+)/g,class:["any"]},null:{type:"null",regex:/(null)/g,class:["null"]},false:{type:"false",regex:/(false)/g,class:["false","boolean"]},true:{type:"true",regex:/(true)/g,class:["true","boolean"]},singleString:{type:"string",regex:/('[^'\n\n]*'?)/g,class:["string","single"]},doubleString:{type:"string",regex:/("[^"\n\n]*"?)/g,class:["string","double"]},floating:{type:"floating",regex:/\W+(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,class:["number","floating"]},integer:{type:"integer",regex:/\W+(-?(0|[1-9])[0-9]*)/g,class:["number","integer"]},unixComment:{type:"comment",regex:/(#(.*?)*)/g,class:["comment","unix"]},singleComment:{type:"comment",regex:/(\/\/(.*?)*)/g,class:["comment","single"]},multilineComment:{type:"comment",regex:/(\/\*((?!\*\/).|\n)+\*\/)/g,class:["comment","multiline"]},object:{type:"object",regex:/(new|class|extends)\s+([$_a-zA-Z0-9]+)/g,group:2,class:["object"]},functionCall:{type:"function",regex:/([$_a-zA-Z0-9]+)\s*\(/g,class:["function"],accumulative:!0}};e.exports=r},"./src/lib/formatter.js":
/*!******************************!*\
  !*** ./src/lib/formatter.js ***!
  \******************************/
/*! no static exports found */function(e,t,s){"use strict";const r=s(/*! ./utils */"./src/lib/utils.js");class n{constructor(e){this.options=e}get code(){return this.options.code}get tokens(){return this.options.tokens}get customOptions(){return this.options.custom||{}}insertTokens(){return this.performInsertTokens(this.tokens,this.code)}performInsertTokens(e,t){let s,n,o,i=[],c=0;return e.forEach(e=>{s=e.wrapper?e.start:e.index,i.push(r.escape(t.substring(c,s))),e.wrapper?((o=new Set(e.className)).add("token-wrapper"),n=this.performInsertTokens(e.elements,e.content),i.push(this.formatWrapper(n,o))):i.push(this.formatValue(e.value,e.className)),c=s+e.length}),i.push(r.escape(t.substring(c))),i.join("")}formatWrapper(e,t){return this.formatContainer(e,t,"div")}formatValue(e,t){return this.formatContainer(r.escape(e),t,"span")}formatContainer(e,t,s){const r=`<${s} class="${Array.from(t).join(" ")}">`,n=`</${s}>`;return e.split("\n").map(e=>e.length>0?`${r}${e}${n}`:e).join("\n")}format(){const e=this.insertTokens();return r.formatLines(e,this.customOptions.lineWrapper)}}e.exports=n},"./src/lib/lexer.js":
/*!**************************!*\
  !*** ./src/lib/lexer.js ***!
  \**************************/
/*! no static exports found */function(e,t,s){"use strict";const r=s(/*! ./tokeniser */"./src/lib/tokeniser.js"),n=s(/*! ./formatter */"./src/lib/formatter.js");class o{constructor(e){this.config=e}get comments(){return this.config.comments}get patterns(){return this.config.patterns}lex(e,t={}){return this.getTokeniser(e,t).elements}highlight(e,t={}){return new n({code:e,tokens:this.lex(e,t),custom:t}).format()}getTokeniser(e,t={}){return new r({content:e,comments:this.comments,patterns:this.patterns,custom:t})}}e.exports=o},"./src/lib/limits.js":
/*!***************************!*\
  !*** ./src/lib/limits.js ***!
  \***************************/
/*! no static exports found */function(e,t,s){"use strict";class r{constructor(){this.tokens=[],this.openings={},this.closings={}}store(e){this.tokens.push(e),this.processOpening(e),this.processClosing(e)}processOpening(e){e.isOpening&&this.getContainer(this.openings,e.relatedClass).push(e.index)}processClosing(e){e.isClosing&&this.getContainer(this.closings,e.relatedClass).push(e.index)}getContainer(e,t){return e[t]||(e[t]=[]),e[t]}addLimits(){let e;for(e in this.openings)this.processKeyLimits(e)}processKeyLimits(e){const t=this.openings[e],s=this.closings[e]||[];let r,n=-1;t.forEach(t=>{t>n&&(r=this.getStop(s,t),this.addClass(e,[t,r]),n=r)})}getStop(e,t){const s=e.length;let r,n=0,o=-1;for(n=0;n<s;n++)if((r=e[n])>t){o=r,e.splice(n,1);break}return o}addClass(e,t){this.getRangeTokens(...t).forEach(t=>{t.className.add(e)})}getRangeTokens(e,t){return this.tokens.filter(s=>s.index>=e&&(-1===t||s.index<=t))}}e.exports=r},"./src/lib/token.js":
/*!**************************!*\
  !*** ./src/lib/token.js ***!
  \**************************/
/*! no static exports found */function(e,t,s){"use strict";class r{constructor(e){this.options=e,this.elements=[],this.applyPatterns()}get type(){return this.options.type}get value(){return this.options.value}get index(){return parseInt(this.options.index)}get start(){return this.options.start?parseInt(this.options.start):0}get className(){return this.options.className||new Set}get length(){return this.options.length}get content(){return this.options.content}get patterns(){return this.options.patterns||[]}get empty(){return!this.content||""===this.content.trim()}get taggedLimits(){return this.options.taggedLimits}get relatedClass(){return this.options.pattern?this.options.pattern.relatedClass:null}get isOpening(){return this.options.pattern&&this.options.pattern.opening}get isClosing(){return this.options.pattern&&this.options.pattern.closing}get wrapper(){return this.options.wrapper}applyPatterns(){if(0===this.patterns.length)return;const e=this.index,t=this.content,s=this.patterns[0],r=this.patterns.slice(1),n=this.className;let o,i,c=s.regex.exec(this.content),l=0;for(;c;)o=c[s.group||1],i=c.index+t.substring(c.index).indexOf(o),this.processPart({content:t.substring(l,i),patterns:r,index:e+l,className:n}),this.processOccurrence({pattern:s,otherPatterns:r,index:e+i,value:o,className:n}),l=i+o.length,c=s.regex.exec(t);this.processPart({content:t.substring(l),patterns:r,index:e+l,className:n})}processOccurrence(e){const t=e.pattern,s=new Set(e.className);t.class.forEach(e=>{s.add(e)}),e.className=s,t.accumulative||t.wrapper?this.processWrapper(e):this.generateToken({type:e.pattern.type,value:e.value,index:e.index,length:e.value.length,className:e.className,pattern:e.pattern})}processWrapper(e){this.processPart({content:e.value,patterns:e.otherPatterns,index:e.pattern.wrapper?0:e.index,start:e.pattern.wrapper?e.index:null,className:e.className,wrapper:e.pattern.wrapper})}processPart(e){(e=Object.assign(e,{taggedLimits:this.taggedLimits})).wrapper?this.elements.push(new r(e)):this.elements=this.elements.concat(new r(e).elements)}generateToken(e){const t=new r(e);this.taggedLimits&&this.taggedLimits.store(t),this.elements.push(t)}}e.exports=r},"./src/lib/tokeniser.js":
/*!******************************!*\
  !*** ./src/lib/tokeniser.js ***!
  \******************************/
/*! no static exports found */function(e,t,s){"use strict";const r=s(/*! ./limits */"./src/lib/limits.js"),n=s(/*! ./token */"./src/lib/token.js"),o=s(/*! ../lexers/tokens */"./src/lexers/tokens.js");class i{constructor(e){this.options=e,this.getElements()}get content(){return this.options.content}get patterns(){return this.options.patterns.concat([o.space,o.wildcard])}get comments(){return this.options.comments||[]}get customOptions(){return this.options.custom||{}}getElements(){if(this.elements=[],!this.content||""===this.content.trim())return;const e=new r,t=new n({content:this.getContentWithoutComments(),patterns:this.patterns,index:0,taggedLimits:e}).elements.concat(this.elements);t.sort((e,t)=>e.index-t.index),e.addLimits(),this.elements=t}getContentWithoutComments(){this.elements=this.getComments();const e=[];let t,s,r=0;return this.elements.forEach(n=>{t=n.index,s=n.length,e.push(this.content.slice(r,t)),e.push("\n".repeat(s)),r=t+s}),e.push(this.content.slice(r)),e.join("")}getComments(){return this.comments?new n({content:this.content,patterns:this.comments,index:0}).elements:[]}}e.exports=i},"./src/lib/transformer.js":
/*!********************************!*\
  !*** ./src/lib/transformer.js ***!
  \********************************/
/*! no static exports found */function(e,t,s){"use strict";const r=s(/*! ./utils */"./src/lib/utils.js");class n{constructor(e){this.config=e}get patterns(){return this.config.patterns}transform(e,t={}){let s,n,o;return e=r.escape(e),this.patterns.forEach(t=>{s=t.group||1,n=["token-wrapper"].concat(t.class).join(" "),o=t.formatter||`$${s}`,e=t.repl?e.replace(t.regex,t.repl):e.replace(t.regex,`<div class="${n}">${o}</div>`)}),r.formatLines(e,t.lineWrapper)}}e.exports=n},"./src/lib/utils.js":
/*!**************************!*\
  !*** ./src/lib/utils.js ***!
  \**************************/
/*! no static exports found */function(e,t,s){e.exports=new class{escape(e){const t=this.replaceAll(e,"<","&lt;");return this.replaceAll(t,">","&gt;")}replaceAll(e,t,s){return e?e.split(t).join(s):""}formatLines(e,t=[]){const s=2===t.length?t[0]:"",r=2===t.length?t[1]:"";return[s,e.split("\n").join(`${r}\n${s}`),r].join("")}}},"./src/styles/base/language.js":
/*!*************************************!*\
  !*** ./src/styles/base/language.js ***!
  \*************************************/
/*! no static exports found */function(e,t){e.exports=(e=>({".prettyme":{color:e.colors.secondary,".comment":{color:e.colors.comment},".name":{color:e.colors.name},".delimiter":{color:e.colors.delimiter},".string":{color:e.colors.text},".number":{color:e.colors.number},".object":{color:e.colors.object},".reserved":{color:e.colors.reserved},".function.name:not(.reserved)":{color:e.colors.function},".null":{color:e.colors.null},".boolean":{color:e.colors.boolean}}}))},"./src/styles/languages sync recursive ^\\.\\/.*$":
/*!********************************************!*\
  !*** ./src/styles/languages sync ^\.\/.*$ ***!
  \********************************************/
/*! no static exports found */function(e,t,s){var r={"./css":"./src/styles/languages/css.js","./css.js":"./src/styles/languages/css.js","./html":"./src/styles/languages/html.js","./html.js":"./src/styles/languages/html.js","./javascript":"./src/styles/languages/javascript.js","./javascript.js":"./src/styles/languages/javascript.js","./json":"./src/styles/languages/json.js","./json.js":"./src/styles/languages/json.js","./markdown":"./src/styles/languages/markdown.js","./markdown.js":"./src/styles/languages/markdown.js","./php":"./src/styles/languages/php.js","./php.js":"./src/styles/languages/php.js"};function n(e){var t=o(e);return s(t)}function o(e){var t=r[e];if(!(t+1)){var s=new Error('Cannot find module "'+e+'".');throw s.code="MODULE_NOT_FOUND",s}return t}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id="./src/styles/languages sync recursive ^\\.\\/.*$"},"./src/styles/languages/css.js":
/*!*************************************!*\
  !*** ./src/styles/languages/css.js ***!
  \*************************************/
/*! no static exports found */function(e,t){e.exports=(e=>({".prettyme.css":{color:e.colors.primary,".comment":{color:e.colors.default},":not(.comment)":{"&.property, &.word.in-bracket:not(.value)":{color:e.colors.secondary},"&.value, &.in-value, &.word.in-value:not(.property)":{color:e.colors.tertiary},"&.color":{color:e.colors.color},"&.function":{color:e.colors.function},"&.number, &.unit":{color:e.colors.number},"&.text":{color:e.colors.text},"&.delimiter":{color:e.colors.delimiter},"&.selector":{color:e.colors.tag}}}}))},"./src/styles/languages/html.js":
/*!**************************************!*\
  !*** ./src/styles/languages/html.js ***!
  \**************************************/
/*! no static exports found */function(e,t){e.exports=(e=>({".prettyme.html":{color:e.colors["default-dark"],".comment":{color:e.colors.comment,"font-style":"italic"},"&.delimiter, &.comment":{color:e.colors.delimiter},".in-angle":{"&.tag":{color:e.colors.tag},"&.attribute":{color:e.colors.name},"&.value":{color:e.colors.tertiary}}}}))},"./src/styles/languages/javascript.js":
/*!********************************************!*\
  !*** ./src/styles/languages/javascript.js ***!
  \********************************************/
/*! no static exports found */function(e,t,s){const r=s(/*! ../base/language */"./src/styles/base/language.js");e.exports=(e=>Object.assign(r(e),(e=>({".prettyme.javascript":{".regex":{color:e.colors.regex},".string-template":{"&:not(.string-template-parameter)":{color:e.colors.text}}}}))(e)))},"./src/styles/languages/json.js":
/*!**************************************!*\
  !*** ./src/styles/languages/json.js ***!
  \**************************************/
/*! no static exports found */function(e,t){const s={};for(let e=0;e<10;e++)s[`.tab.tab${e}x`]={"padding-left":`${40*e}px`};e.exports=(e=>({".prettyme.json":Object.assign(s,{".property.string":{color:e.colors.name},".number":{color:e.colors.number},".string":{color:e.colors.text},".null":{color:e.colors.null},".true, .false":{color:e.colors.boolean}})}))},"./src/styles/languages/markdown.js":
/*!******************************************!*\
  !*** ./src/styles/languages/markdown.js ***!
  \******************************************/
/*! no static exports found */function(e,t){e.exports=(e=>({".prettyme.markdown":{".header":{".a":{color:e.colors.primary}},".bold":{"font-weight":"700",color:e.colors.color},".italic":{"font-style":"italic",color:e.colors.secondary},".list":{"&.ul-list, &.ol-list":{i:{color:e.colors.tertiary}}},".link":{i:{color:e.colors.function,"&.b":{color:e.colors.text},"&.p":{color:e.colors.color}},".u":{color:e.colors.primary}},".code-inline":{color:e.colors.function},".code":{color:e.colors.number,i:{color:e.colors.text}},".quote":{i:{color:e.colors.number}}}}))},"./src/styles/languages/php.js":
/*!*************************************!*\
  !*** ./src/styles/languages/php.js ***!
  \*************************************/
/*! no static exports found */function(e,t,s){const r=s(/*! ../base/language */"./src/styles/base/language.js");e.exports=(e=>Object.assign(r(e),(e=>({".prettyme.php":{".tag":{color:e.colors.tag}}}))(e)))},0:
/*!*****************************************!*\
  !*** multi ./src/languages/markdown.js ***!
  \*****************************************/
/*! no static exports found */function(e,t,s){e.exports=s(/*! /Users/juancastrofernandez/Desarrollo/Github/prettyme/src/languages/markdown.js */"./src/languages/markdown.js")}})});