(()=>{"use strict";var e,r,t={7260:(e,r,t)=>{var a=t(8116);const o={},s=e=>{const r=[];return e.figures.forEach((t=>{if(t.hasOwnProperty("animate"))t.animate=JSON.stringify(t.animate);else if("ParametricGeometry"===t.geometry.type){const r=new a.s(e.parametric[t.geometry.args[0]],t.geometry.args[1],t.geometry.args[2]);delete r.parameters,t.geometry=r}else if("TubeGeometry"===t.geometry.type){const r=new THREE.TubeGeometry(generateCurvefunction(e.curves[t.geometry.args[0]]),t.geometry.args[1],t.geometry.args[2],t.geometry.args[3],t.geometry.args[4]);delete r.parameters,t.geometry=r}r.push(t)})),r},n=(e,r,t,a,n,p)=>{if(o.hasOwnProperty(t)){let g=[];r.hasOwnProperty("constructor")&&r.constructor===Array&&(g=[...r],r=g.hash[0]);var l=o[t](r,!0);e.figures=s(l),e.features=l.features,e.groups=l.groups,p&&(e.name=p),l.hasOwnProperty("startPoint")&&(e.startPoint=l.startPoint),l.gallery&&l.gallery.hasOwnProperty("startPoint")&&(e.startPoint=l.gallery.startPoint),a&&(e.commune=!0,e.deltaLocation=a),l.hasOwnProperty("plan")&&!n?i(e,g,t,l):postMessage(e)}else import(t).then((a=>{o[t]=a.genererFigures;let p=[];r.constructor===Array&&(p=[...r],r=p[0].hash);var l=o[t](r,!0);e.figures=s(l),e.features=l.features,e.groups=!!l.hasOwnProperty("groups")&&l.groups,l.hasOwnProperty("startPoint")&&(e.startPoint=l.startPoint),e.gallery&&e.gallery.hasOwnProperty("startPoint")&&(e.startPoint=e.gallery.startPoint),!e.name&&l.features.Name&&(e.name=l.features.Name),l.hasOwnProperty("plan")&&!n?i(e,p,t,l):postMessage(e)}))},i=(e,r,t,a)=>{postMessage({type:"purge"});for(let o=0;o<r.length;o++)o>0&&(e.gallery=null),n(e,r[o].hash,t,a.plan[o],!0,r[o].name)};onmessage=function(e){const r={type:e.data.type,name:e.data.name,tag:e.data.tag,random:e.data.random,portal:e.data.portal,genid:e.data.genid,hash:e.data.hash,objktid:e.data.objktid,loc:e.data.loc,gallery:e.data.gallery},t=e.data.hash,a=e.data.figuresUrl;n(r,t,a)}}},a={};function o(e){var r=a[e];if(void 0!==r)return r.exports;var s=a[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,o.x=()=>{var e=o.O(void 0,[116],(()=>o(7260)));return o.O(e)},e=[],o.O=(r,t,a,s)=>{if(!t){var n=1/0;for(g=0;g<e.length;g++){for(var[t,a,s]=e[g],i=!0,p=0;p<t.length;p++)(!1&s||n>=s)&&Object.keys(o.O).every((e=>o.O[e](t[p])))?t.splice(p--,1):(i=!1,s<n&&(n=s));if(i){e.splice(g--,1);var l=a();void 0!==l&&(r=l)}}return r}s=s||0;for(var g=e.length;g>0&&e[g-1][2]>s;g--)e[g]=e[g-1];e[g]=[t,a,s]},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[])),o.u=e=>e+".bundle.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var a=t.length-1;a>-1&&!e;)e=t[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={260:1};o.f.i=(r,t)=>{e[r]||importScripts(o.p+o.u(r))};var r=self.webpackChunkfxhash_boilerplate_webpack=self.webpackChunkfxhash_boilerplate_webpack||[],t=r.push.bind(r);r.push=r=>{var[a,s,n]=r;for(var i in s)o.o(s,i)&&(o.m[i]=s[i]);for(n&&n(o);a.length;)e[a.pop()]=1;t(r)}})(),r=o.x,o.x=()=>o.e(116).then(r),o.x()})();