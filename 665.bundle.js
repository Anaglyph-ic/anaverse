(()=>{const a=[];onmessage=function(t){var e=t.data.galleryURLs,o=e.length,r=0;e.forEach((t=>{fetch(t.galurl).then((a=>a.json())).then((e=>{var n,c,s,l,i,h;n=e,c=t.contract,s=t.id,l=t.curator,i=t.thumbnail,h={room:parseInt(n.room),skybox:parseInt(n.skybox),name:JSON.stringify(n.name),contract:c,collection:n.collection,id:s,curator:l,gallery:[],thumbnail:i},n.gallery.forEach((a=>{for(const t in a)switch(t){case"position":case"rotation":case"scale":for(const e in a[t])"x"===e||"y"===e||"z"===e||delete a[t][e];break;case"objktMetaData":case"openSeaMetaData":case"tokenType":break;default:delete a[t]}})),n.gallery.forEach((a=>{var t=!1;if(a.hasOwnProperty("objktMetaData")){var e=!1;for(const t in a.objktMetaData)"contract"===t||"token_id"===t?e=!0:delete a.objktMetaData[t];e&&(t=!0)}t&&h.gallery.push(a)})),h.gallery.length>0&&a.push(h),++r===o&&postMessage(a)}))}))}})();