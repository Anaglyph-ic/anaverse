(()=>{const e=new OffscreenCanvas(1e3,200).getContext("2d");function t(e,t){return e?e.length>t?e.substring(0,t)+"…":e:""}onmessage=function(l){const a=l.data.operation;var s="";switch(l.data.feedType){case"teztok-nft-liquidity":case"teztok-nft-lat-sales":case"teztok-nft-lat-purchases":case"teztok-nft-livefeed":s="https://assets.objkt.media/file/assets-003/"+a.token.fa2_address+"/"+a.token.token_id+"/thumb288",a.price=a.price/1e6+" ꜩ";break;case"sansa-nft-livefeed":s=a.asset.imageThumbnailUrl,a.price="USD $"+a.price;break;case"reddit":s=a.img}this.fetch(s).then((e=>{const t=e.body.getReader();return new ReadableStream({start:e=>function l(){return t.read().then((({done:t,value:a})=>{if(!t)return e.enqueue(a),l();e.close()}))}()})})).then((e=>new Response(e))).then((e=>e.blob())).then((s=>{switch(l.data.feedType){case"teztok-nft-lat-sales":case"teztok-nft-liquidity":case"teztok-nft-lat-purchases":case"teztok-nft-livefeed":case"sansa-nft-livefeed":!function(l,a,s){const i=Object.assign({},l);function n(l){e.fillStyle="white",e.fillRect(0,0,1e3,200),e.fillStyle="black",e.textAlign="left",e.scale(1,1),e.strokeRect(0,0,200,200),e.strokeRect(200,0,600,40),e.font="28px consolas",e.fillText(t(l.token.name,35),210,30),e.font="22px consolas",e.strokeRect(200,40,210,60),l.token.artist_profile?(e.fillText("by "+t(l.token.artist_profile.alias,11),210,60),l.token.artist_profile.twitter&&e.fillText("@"+t(l.token.artist_profile.twitter,11),210,90)):e.fillText(t(l.token.artist_address,15),210,90),e.strokeRect(200,100,210,65),e.fillText(l.token.editions+" edition(s)",210,125),e.textAlign="right",e.font="22px sans-serif bolder",e.fillText(l.price,400,155),e.strokeRect(200,165,210,35),e.font="22px consolas",e.fillText(l.token.platform,400,190),e.textAlign="center",l.seller_profile?e.fillText(t(l.seller_profile.alias?l.seller_profile.alias:l.seller_address,25),600,70):e.fillText(t(l.seller_address,25),600,70),l.buyer_profile?e.fillText(t(l.buyer_profile.alias?l.buyer_profile.alias:l.buyer_address,25),600,150):e.fillText(t(l.buyer_address,25),600,150),l.implements&&(e.fillText(l.implements,500,110),e.fillText("↓",600,110)),e.strokeRect(410,165,390,40),e.fillText(l.type,600,190),e.strokeRect(800,0,200,200),e.strokeRect(0,0,1e3,200)}i.feedType=s,e.textAlign="center",a?Promise.all([createImageBitmap(a,0,0,200,200)]).then((t=>{n(i),e.drawImage(t[0],1,1,198,198),i.img=e.getImageData(0,0,1e3,200),postMessage(i)})).catch((t=>{n(i),e.fillText("NOT FOUND",100,100),i.img=e.getImageData(0,0,1e3,200),postMessage(i)})):(n(i),e.fillText("NOT FOUND",100,100),i.img=e.getImageData(0,0,1e3,200),postMessage(i))}(a,s,l.data.feedType);break;case"reddit":!function(l,a){const s=Object.assign({},l);function i(l){if(e.fillStyle="white",e.fillRect(0,0,1e3,200),e.fillStyle="black",e.textAlign="left",e.scale(1,1),e.strokeRect(0,0,200,200),e.font="28px consolas",e.font="22px consolas",l.author&&e.fillText("by "+t(l.author,70),210,190),l.title){var a=l.title.split(" ");for(let t=0;t<a.length;t+=8){var s="";for(let e=0;e<8;e++)a[t+e]&&(s+=a[t+e]+" ");e.fillText(s,210,30+t/8*30)}}}e.textAlign="center",a?Promise.all([createImageBitmap(a)]).then((t=>{i(s),e.drawImage(t[0],1,1,198,198),s.img=e.getImageData(0,0,1e3,200),postMessage(s)})).catch((t=>{i(s),e.fillText("NOT FOUND",100,100),s.img=e.getImageData(0,0,1e3,200),postMessage(s)})):(i(s),e.fillText("NOT FOUND",100,100),s.img=e.getImageData(0,0,1e3,200),postMessage(s))}(a,s)}})).catch((e=>console.error(e)))}})();