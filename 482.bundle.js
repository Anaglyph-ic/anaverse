onmessage=function(e){this.fetch(e.data.img).then((e=>{const t=e.body.getReader();return new ReadableStream({start:e=>function a(){return t.read().then((({done:t,value:n})=>{if(!t)return e.enqueue(n),a();e.close()}))}()})})).then((e=>new Response(e))).then((e=>e.blob())).then((e=>URL.createObjectURL(e))).then((t=>{e.data.hasOwnProperty("id")?postMessage([t,e.data.id,e.data.type,e.data.location]):postMessage(t)})).catch((e=>console.error(e)))};