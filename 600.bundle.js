(()=>{const e=new OffscreenCanvas(1e3,200).getContext("2d");function t(e,t){return e?e.length>t?e.substring(0,t)+"…":e:""}onmessage=function(l){const s=l.data.operation;var a="";switch(l.data.feedType){case"teztok":a="https://assets.objkt.media/file/assets-003/"+s.token.fa2_address+"/"+s.token.token_id+"/thumb288";break;case"reddit":a=s.img}this.fetch(a).then((e=>{const t=e.body.getReader();return new ReadableStream({start:e=>function l(){return t.read().then((({done:t,value:s})=>{if(!t)return e.enqueue(s),l();e.close()}))}()})})).then((e=>new Response(e))).then((e=>e.blob())).then((a=>{switch(l.data.feedType){case"teztok":!function(l,s){const a=Object.assign({},l);function i(l){e.fillStyle="white",e.fillRect(0,0,1e3,200),e.fillStyle="black",e.textAlign="left",e.scale(1,1),e.strokeRect(0,0,200,200),e.strokeRect(200,0,600,40),e.font="28px consolas",e.fillText(t(l.token.name,35),210,30),e.font="22px consolas",e.strokeRect(200,40,210,60),l.token.artist_profile?(e.fillText("by "+t(l.token.artist_profile.alias,11),210,60),l.token.artist_profile.twitter&&e.fillText("@"+t(l.token.artist_profile.twitter,11),210,90)):e.fillText(t(l.token.artist_address,15),210,90),e.strokeRect(200,100,210,65),e.fillText(l.token.editions+" edition(s)",210,125),e.textAlign="right",e.font="22px sans-serif bolder",e.fillText(l.price/1e6+" ꜩ",400,155),e.strokeRect(200,165,210,35),e.font="22px consolas",e.fillText(l.token.platform,400,190),e.textAlign="center",l.seller_profile?e.fillText(t(l.seller_profile.alias?l.seller_profile.alias:l.seller_address,25),600,70):e.fillText(t(l.seller_address,25),600,70),l.buyer_profile?e.fillText(t(l.buyer_profile.alias?l.buyer_profile.alias:l.buyer_address,25),600,150):e.fillText(t(l.buyer_address,25),600,150),l.implements&&(e.fillText(l.implements,500,110),e.fillText("↓",600,110)),e.strokeRect(410,165,390,40),e.fillText(l.type,600,190),e.strokeRect(800,0,200,200),e.strokeRect(0,0,1e3,200)}e.textAlign="center",s?Promise.all([createImageBitmap(s,0,0,200,200)]).then((t=>{i(a),e.drawImage(t[0],1,1,198,198),a.img=e.getImageData(0,0,1e3,200),postMessage(a)})).catch((t=>{i(a),e.fillText("NOT FOUND",100,100),a.img=e.getImageData(0,0,1e3,200),postMessage(a)})):(i(a),e.fillText("NOT FOUND",100,100),a.img=e.getImageData(0,0,1e3,200),postMessage(a))}(s,a);break;case"reddit":!function(l,s){const a=Object.assign({},l);function i(l){if(e.fillStyle="white",e.fillRect(0,0,1e3,200),e.fillStyle="black",e.textAlign="left",e.scale(1,1),e.strokeRect(0,0,200,200),e.font="28px consolas",e.font="22px consolas",l.author&&e.fillText("by "+t(l.author,70),210,190),l.title){var s=l.title.split(" ");for(let t=0;t<s.length;t+=8){var a="";for(let e=0;e<8;e++)s[t+e]&&(a+=s[t+e]+" ");e.fillText(a,210,30+t/8*30)}}}e.textAlign="center",s?Promise.all([createImageBitmap(s)]).then((t=>{i(a),e.drawImage(t[0],1,1,198,198),a.img=e.getImageData(0,0,1e3,200),postMessage(a)})).catch((t=>{i(a),e.fillText("NOT FOUND",100,100),a.img=e.getImageData(0,0,1e3,200),postMessage(a)})):(i(a),e.fillText("NOT FOUND",100,100),a.img=e.getImageData(0,0,1e3,200),postMessage(a))}(s,a)}})).catch((e=>console.error(e)))}})();