(()=>{const e={};onmessage=function(a){const s=a.data.figuresUrl,t=a.data.hash,r={type:a.data.type,name:a.data.name,tag:a.data.tag};if(e.hasOwnProperty(s)){var g=e[s](t);r.figures=g.figures,r.features=g.features,postMessage(r)}else import(s).then((a=>{e[s]=a.genererFigures;var g=e[s](t);r.figures=g.figures,r.features=g.features,postMessage(r)}))}})();