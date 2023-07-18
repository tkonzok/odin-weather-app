"use strict";(self.webpackChunkodin_weather_app=self.webpackChunkodin_weather_app||[]).push([[826],{602:(n,e,t)=>{var o=t(379),r=t.n(o),a=t(795),i=t.n(a),c=t(569),s=t.n(c),d=t(565),l=t.n(d),u=t(216),p=t.n(u),f=t(589),m=t.n(f),h=t(24),y={};y.styleTagTransform=m(),y.setAttributes=l(),y.insert=s().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=p(),r()(h.Z,y),h.Z&&h.Z.locals&&h.Z.locals;var g=t(426),b={};b.styleTagTransform=m(),b.setAttributes=l(),b.insert=s().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=p(),r()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals;const x=document.querySelector("#weather"),v=document.querySelector("form"),w=(document.querySelector("#search-button"),document.querySelector("#city-input"),document.querySelector(".weather-today"),document.querySelector(".weather-today > .date")),C=document.querySelector("#today-icon"),S=document.querySelector(".weather-today #current-temperature"),z=document.querySelector(".weather-today #minmax-temperature"),k=document.querySelector(".weather-today .condition"),E=(document.querySelector("#day1"),document.querySelector("#day1 > .date")),q=document.querySelector("#day1-icon"),I=document.querySelector("#day1 .temperature"),A=document.querySelector("#day1 .condition"),$=(document.querySelector("#day2"),document.querySelector("#day2 > .date")),_=document.querySelector("#day2-icon"),R=document.querySelector("#day2 .temperature"),T=document.querySelector("#day2 .condition"),F=(document.querySelector("#day3"),document.querySelector("#day3 > .date")),j=document.querySelector("#day3-icon"),Z=document.querySelector("#day3 .temperature"),M=document.querySelector("#day3 .condition"),O="e404ee23ac724f8db2c152612231707",D="8s7SFBMuaeubNODDvWAmpA5k8nV5NouA";let N={};async function L(n){console.log(n),await async function(n){try{const e=`https://api.weatherapi.com/v1/forecast.json?key=${O}&q=${n}&days=4`,t=await fetch(e,{mode:"cors"});N=await t.json(),console.log(N),async function(n){try{const e=`https://api.giphy.com/v1/gifs/translate?api_key=${D}&s=${n}`,t=await fetch(e,{mode:"cors"}),o=await t.json();x.src=o.data.images.original.url}catch(n){x.src="https://media1.giphy.com/media/C21GGDOpKT6Z4VuXyn/giphy.gif?cid=74c12b19qa38oey5ioadgo8y4uw2whwjlbdvtrnn57shrdr9&ep=v1_gifs_translate&rid=giphy.gif&ct=g"}}(N.current.condition.text)}catch(n){console.log(n)}}(n),w.textContent=`${N.location.name}, ${N.location.country} (${N.current.last_updated})`,C.src=`http:${N.current.condition.icon}`,S.textContent=`${N.current.temp_c}°C`,z.textContent=`${N.forecast.forecastday[0].day.mintemp_c} / ${N.forecast.forecastday[0].day.maxtemp_c}°C`,k.textContent=N.current.condition.text,E.textContent=N.forecast.forecastday[1].date,q.src=`http:${N.forecast.forecastday[1].day.condition.icon}`,I.textContent=`${N.forecast.forecastday[1].day.mintemp_c} / ${N.forecast.forecastday[1].day.maxtemp_c}°C`,A.textContent=N.forecast.forecastday[1].day.condition.text,$.textContent=N.forecast.forecastday[2].date,_.src=`http:${N.forecast.forecastday[2].day.condition.icon}`,R.textContent=`${N.forecast.forecastday[2].day.mintemp_c} / ${N.forecast.forecastday[2].day.maxtemp_c}°C`,T.textContent=N.forecast.forecastday[2].day.condition.text,F.textContent=N.forecast.forecastday[3].date,j.src=`http:${N.forecast.forecastday[3].day.condition.icon}`,Z.textContent=`${N.forecast.forecastday[3].day.mintemp_c} / ${N.forecast.forecastday[3].day.maxtemp_c}°C`,M.textContent=N.forecast.forecastday[3].day.condition.text}v.addEventListener("submit",(n=>{n.preventDefault(),L(new FormData(v).get("location"))})),L("Hamburg")},24:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n  appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  appearance: textfield; /* 1b */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const c=i},426:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"body {\n  font-size: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  gap: 50px;\n}\n\n#bg {\n  display: block;\n  position: fixed;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  justify-items: center;\n  align-items: center;\n}\n\n#searchbar-container {\n  text-align: center;\n  padding-top: 50px;\n}\n\n.weather-container {\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n  align-items: center;\n  gap: 50px;\n}\n\n.temperature {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.weather-today {\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  grid-template-rows: 24px 1fr;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid;\n  width: 70%;\n  background: rgb(152, 137, 120);\n  background: linear-gradient(\n    0deg,\n    rgba(152, 137, 120, 1) 0%,\n    rgba(255, 228, 196, 1) 100%\n  );\n}\n\n.weather-today * {\n  padding: 0 24px;\n}\n\n.weather-today .date {\n  grid-column: span 3;\n  text-align: center;\n}\n\n.weather-today > div {\n  text-align: center;\n}\n\n.weather-today > div > p:last-child {\n  font-size: 12px;\n}\n\n.weather-forecast {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr;\n  width: 70%;\n  border: 2px solid;\n  background: rgb(152, 137, 120);\n  background: linear-gradient(\n    0deg,\n    rgba(152, 137, 120, 1) 0%,\n    rgba(255, 228, 196, 1) 100%\n  );\n}\n\n.weather-forecast > div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.weather-forecast > div:first-child {\n  border-right: 1px solid;\n}\n\n.weather-forecast > div:last-child {\n  border-left: 1px solid;\n}\n\n#weather {\n  text-align: center;\n  max-height: 200px;\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},n=>{n(n.s=602)}]);