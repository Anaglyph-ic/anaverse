(()=>{const a=new FileReader;a.onload=function(a){const e=JSON.parse(a.target.result),t={collection:e.collection,gallery:[],name:e.name,room:e.room,skybox:e.skybox,type:"local"};e.gallery.forEach((a=>{for(const e in a)switch(e){case"position":case"rotation":case"scale":for(const t in a[e])"x"===t||"y"===t||"z"===t||delete a[e][t];break;case"objktMetaData":case"openSeaMetaData":case"tokenType":break;default:delete a[e]}})),e.gallery.forEach((a=>{var e=!1;if(a.hasOwnProperty("objktMetaData")){var o=!1;for(const e in a.objktMetaData)"contract"===e||"token_id"===e?o=!0:delete a.objktMetaData[e];o&&(e=!0)}e&&t.gallery.push(a)})),t.gallery.length>0&&postMessage(t)},onmessage=function(e){switch(e.data.type){case"remote":(a=>{a.data.galleryURLs.forEach((a=>{fetch(a.galurl).then((a=>a.json())).then((e=>{var t,o,r,l,c,n;e&&(t=e,o=a.contract,r=a.id,l=a.curator,c=a.thumbnail,n={room:parseInt(t.room),skybox:parseInt(t.skybox),name:JSON.stringify(t.name),contract:o,collection:t.collection,id:r,curator:l,gallery:[],thumbnail:c,type:"remote"},t.gallery.forEach((a=>{for(const e in a)switch(e){case"position":case"rotation":case"scale":for(const t in a[e])"x"===t||"y"===t||"z"===t||delete a[e][t];break;case"objktMetaData":case"openSeaMetaData":case"tokenType":break;default:delete a[e]}})),t.gallery.forEach((a=>{var e=!1;if(a.hasOwnProperty("objktMetaData")){var t=!1;for(const e in a.objktMetaData)"contract"===e||"token_id"===e?t=!0:delete a.objktMetaData[e];t&&(e=!0)}e&&n.gallery.push(a)})),n.gallery.length>0&&postMessage(n))})).catch((a=>{console.log("invalid gallery"),console.log(a)}))}))})(e);break;case"local":(e=>{a.readAsText(e.data.path)})(e)}}})();