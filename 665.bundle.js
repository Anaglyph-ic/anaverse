(()=>{const a=[];onmessage=function(e){var t=e.data.galleryURLs,o=t.length,s=0;t.forEach((e=>{fetch(e).then((a=>a.json())).then((e=>{var t,n;t=e,n={room:parseInt(t.room),skybox:parseInt(t.skybox),name:JSON.stringify(t.name),gallery:[]},t.gallery.forEach((a=>{for(const e in a)switch(e){case"position":case"rotation":case"scale":for(const t in a[e])"x"===t||"y"===t||"z"===t||delete a[e][t];break;case"objktMetaData":case"openSeaMetaData":case"tokenType":break;default:delete a[e]}})),t.gallery.forEach((a=>{var e=!1;if(a.hasOwnProperty("objktMetaData")){var t=!1;for(const e in a.objktMetaData)"contract"===e||"token_id"===e?t=!0:delete a.objktMetaData[e];t&&(e=!0)}e&&n.gallery.push(a)})),n.gallery.length>0&&a.push(n),++s===o&&postMessage(a)}))}))}})();