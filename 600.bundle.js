(()=>{const e=new OffscreenCanvas(1e3,200).getContext("2d");function t(e,t){return e?e.length>t?e.substring(0,t)+"…":e:""}onmessage=function(l){const i=l.data.operation;var s="";switch(l.data.feedType){case"teztok-nft-liquidity":case"teztok-nft-lat-sales":case"teztok-nft-lat-purchases":case"teztok-nft-livefeed":s="https://assets.objkt.media/file/assets-003/"+i.token.fa2_address+"/"+i.token.token_id+"/thumb288",i.price&&(i.price_in_usd||(i.price_in_usd=i.price*i.quotes.usd),i.fiat="USD $"+Math.floor(i.price_in_usd/1e4)/100,i.price=i.price/1e6+" ꜩ"),i.previousSale&&(i.usdProfit=`\n          USD $ \n          ${Math.floor(i.previousSale.profit.profit_in_usd/1e4)/100}\n          `,i.tzProfit=Math.floor(i.previousSale.profit.profit_in_tz/1e4)/100+" ꜩ");break;case"sansa-nft-livefeed":s=i.asset.imageThumbnailUrl,i.fiat="USD $"+i.price;break;case"reddit":s=i.img;break;case"gmstudio-nft-livefeed":case"artblocks-nft-livefeed":case"superrare-nft-livefeed":case"bright-nft-livefeed":case"genart-nft-livefeed":s=i.imageUrlOS,i.price=i.valueETH+" ETH",i.fiat="USD $"+i.valueUSD;break;case"verse-nft-livefeed":s=""}this.fetch(s).then((e=>{const t=e.body.getReader();return new ReadableStream({start:e=>function l(){return t.read().then((({done:t,value:i})=>{if(!t)return e.enqueue(i),l();e.close()}))}()})})).then((e=>new Response(e))).then((e=>e.blob())).then((s=>{l.data.feedType,function(l,i,s){const a=Object.assign({},l);function r(l){if(e.fillStyle="white",e.fillRect(0,0,1e3,200),l.hasOwnProperty("userInvolved")&&l.userInvolved&&(e.fillStyle="rgba(0,255,235,0.5)",e.fillRect(200,0,600,200)),e.fillStyle="black",e.textAlign="left",e.scale(1,1),e.strokeRect(0,0,200,200),e.strokeRect(200,0,600,40),e.font="28px consolas",e.fillText(t(`1/${l.token.editions} - ${l.token.name}`,35),210,30),e.font="22px consolas",e.strokeRect(200,40,210,60),l.token.artist_profile?(l.token.artist_profile.alias&&e.fillText("by "+t(l.token.artist_profile.alias,11),210,60),l.token.artist_profile.twitter&&e.fillText("@"+t(l.token.artist_profile.twitter,11),210,90)):e.fillText(t(l.token.artist_address,15),210,90),e.strokeRect(200,100,210,65),e.textAlign="right",e.font="22px sans-serif bolder",l.fiat&&e.fillText(l.fiat,400,125),l.price&&e.fillText(l.price,400,155),e.strokeRect(200,165,210,35),e.font="22px consolas",e.fillText(l.token.platform,400,190),e.textAlign="center",l.seller_profile?e.fillText(t(l.seller_profile.alias&&l.seller_profile.alias.length>0?l.seller_profile.alias:l.seller_address,25),600,70):e.fillText(t(l.seller_address,25),600,70),l.buyer_profile?e.fillText(t(l.buyer_profile.alias&&l.buyer_profile.alias.length>0?l.buyer_profile.alias:l.buyer_address,25),600,150):e.fillText(t(l.buyer_address,25),600,150),l.implements&&(e.fillText(l.implements,500,110),e.fillText("↓",600,110)),e.strokeRect(410,165,390,40),e.fillText(l.type,600,190),e.strokeRect(800,0,200,200),e.strokeRect(0,0,1e3,200),l.hasOwnProperty("previousSale")){e.textAlign="left";const t=l.previousSale.profit.profit_in_usd>100?"rgba(34,139,34)":"rgba(210,43,43)";e.fillStyle=t,e.fillRect(960,0,40,200),e.fillStyle="black";const i=l.previousSale.profit.profit_in_usd>=0?"PROFIT":"LOSS";e.fillText(i,810,40),e.fillText(l.usdProfit,810,70),e.fillText(l.tzProfit,810,90)}}a.feedType=s,e.textAlign="center",i?Promise.all([createImageBitmap(i,0,0,200,200)]).then((t=>{r(a),e.drawImage(t[0],1,1,198,198),a.img=e.getImageData(0,0,1e3,200),postMessage(a)})).catch((t=>{r(a),e.fillText("NOT FOUND",100,100),a.img=e.getImageData(0,0,1e3,200),postMessage(a)})):(r(a),e.fillText("NOT FOUND",100,100),a.img=e.getImageData(0,0,1e3,200),postMessage(a))}(i,s,l.data.feedType)})).catch((e=>console.error(e)))}})();