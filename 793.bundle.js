onmessage=function(a){import(a.data.skyurl).then((e=>{var t=a.data.side,s=new OffscreenCanvas(4*t,3*t);self.document={createElement:()=>s,fonts:{check:()=>!0}};var n=e.skybox(a.data.side,a.data.hash);for(const a in n.coordinates){var o=n.coordinates[a];let e=new OffscreenCanvas(t,t).getContext("2d");e.putImageData(n.image,-o.x,-o.y,o.x,o.y,t,t),postMessage({pos:a,imagedata:e.getImageData(0,0,t,t),side:t})}}))};