(()=>{"use strict";var e,r,t={3966:(e,r,t)=>{var a=t(4691);const o={},s=e=>{const r=[];return e.figures.forEach((t=>{if(t.hasOwnProperty("animate"))t.animate=JSON.stringify(t.animate);else if("ParametricGeometry"===t.geometry.type){const r=new a.j(e.parametric[t.geometry.args[0]],t.geometry.args[1],t.geometry.args[2]);delete r.parameters,t.geometry=r}else if("TubeGeometry"===t.geometry.type){const r=new THREE.TubeGeometry(n(e.curves[t.geometry.args[0]]),t.geometry.args[1],t.geometry.args[2],t.geometry.args[3],t.geometry.args[4]);delete r.parameters,t.geometry=r}r.push(t)})),r},n=e=>{class r extends THREE.Curve{constructor(e=1){super(),this.scale=e}getPoint(r,t=new THREE.Vector3){const a=e(r),o=a.tx,s=a.ty,n=a.tz;return t.set(o,s,n).multiplyScalar(this.scale)}}return new r(10)},i=(e,r,t,a)=>{if(o.hasOwnProperty(t)){a&&(r=(()=>{let e="123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";return"oo"+Array(49).fill(0).map((r=>e[Math.random()*e.length|0])).join("")})());var n=o[t](r,!0,a);e.figures=s(n),e.features=n.features,e.groups=n.groups,a&&(e.commune=!0),postMessage(e)}else import(t).then((a=>{o[t]=a.genererFigures;var n=o[t](r,!0);if(e.figures=s(n),e.features=n.features,e.groups=!!n.hasOwnProperty("groups")&&n.groups,!e.name&&n.features.Name&&(e.name=n.features.Name),n.hasOwnProperty("plan")){postMessage({type:"purge"});for(let a=0;a<n.plan.length;a++)i(e,r,t,n.plan[a])}else postMessage(e)}))};onmessage=function(e){const r={type:e.data.type,name:e.data.name,tag:e.data.tag,random:e.data.random,portal:e.data.portal,genid:e.data.genid,hash:e.data.hash,objktid:e.data.objktid,loc:e.data.loc,galleryItems:e.data.galleryItems},t=e.data.hash,a=e.data.figuresUrl;i(r,t,a)}}},a={};function o(e){var r=a[e];if(void 0!==r)return r.exports;var s=a[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,o.x=()=>{var e=o.O(void 0,[691],(()=>o(3966)));return o.O(e)},e=[],o.O=(r,t,a,s)=>{if(!t){var n=1/0;for(l=0;l<e.length;l++){for(var[t,a,s]=e[l],i=!0,p=0;p<t.length;p++)(!1&s||n>=s)&&Object.keys(o.O).every((e=>o.O[e](t[p])))?t.splice(p--,1):(i=!1,s<n&&(n=s));if(i){e.splice(l--,1);var g=a();void 0!==g&&(r=g)}}return r}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[t,a,s]},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[])),o.u=e=>e+".bundle.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={966:1};o.f.i=(r,t)=>{e[r]||importScripts(o.p+o.u(r))};var r=self.webpackChunkfxhash_boilerplate_webpack=self.webpackChunkfxhash_boilerplate_webpack||[],t=r.push.bind(r);r.push=r=>{var[a,s,n]=r;for(var i in s)o.o(s,i)&&(o.m[i]=s[i]);for(n&&n(o);a.length;)e[a.pop()]=1;t(r)}})(),r=o.x,o.x=()=>o.e(691).then(r),o.x()})();