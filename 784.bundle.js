onmessage=function(e){this.fetch(e.data.img).then((function(e){var t=e.body.getReader();return new ReadableStream({start:function(e){return function n(){return t.read().then((function(t){var a=t.done,r=t.value;if(!a)return e.enqueue(r),n();e.close()}))}()}})})).then((function(e){return new Response(e)})).then((function(e){return e.blob()})).then((function(e){return URL.createObjectURL(e)})).then((function(t){e.data.hasOwnProperty("id")?postMessage([t,e.data.id,e.data.type,e.data.location,e.data.note]):postMessage(t)})).catch((function(e){return console.error(e)}))};