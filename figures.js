const genererFigures=t=>{let e="123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",s=t.slice(2),i=new RegExp(".{"+(t.length/4|0)+"}","g"),r=s.match(i).map((t=>{return s=t,[...s].reduce(((t,s)=>t*e.length+e.indexOf(s)|0),0);var s}));var a=((t,e,s,i)=>()=>{var r=((t|=0)+(e|=0)|0)+(i|=0)|0;return i=i+1|0,t=e^e>>>9,e=(s|=0)+(s<<3)|0,s=(s=s<<21|s>>>11)+r|0,(r>>>0)/4294967296})(...r);const n=[],o={Name:""};class h{constructor(t=0,e=0,s=0){h.prototype.isVector3=!0,this.x=t,this.y=e,this.z=s}set(t,e,s){return void 0===s&&(s=this.z),this.x=t,this.y=e,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return void 0!==e?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return void 0!==e?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return void 0!==e?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(_quaternion.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_quaternion.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,s=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*s+r[6]*i,this.y=r[1]*e+r[4]*s+r[7]*i,this.z=r[2]*e+r[5]*s+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,s=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*s+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*s+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*s+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*s+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,s=this.y,i=this.z,r=t.x,a=t.y,n=t.z,o=t.w,h=o*e+a*i-n*s,u=o*s+n*e-r*i,l=o*i+r*s-a*e,c=-r*e-a*s-n*i;return this.x=h*o+c*-r+u*-n-l*-a,this.y=u*o+c*-a+l*-r-h*-n,this.z=l*o+c*-n+h*-a-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,s=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*s+r[8]*i,this.y=r[1]*e+r[5]*s+r[9]*i,this.z=r[2]*e+r[6]*s+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(e,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this.z=t.z+(e.z-t.z)*s,this}cross(t,e){return void 0!==e?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const s=t.x,i=t.y,r=t.z,a=e.x,n=e.y,o=e.z;return this.x=i*o-r*n,this.y=r*a-s*o,this.z=s*n-i*a,this}projectOnVector(t){const e=t.lengthSq();if(0===e)return this.set(0,0,0);const s=t.dot(this)/e;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return _vector.copy(this).projectOnVector(t),this.sub(_vector)}reflect(t){return this.sub(_vector.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(0===e)return Math.PI/2;const s=this.dot(t)/e;return Math.acos(MathUtils.clamp(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,s=this.y-t.y,i=this.z-t.z;return e*e+s*s+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,s){const i=Math.sin(e)*t;return this.x=i*Math.sin(s),this.y=Math.cos(e)*t,this.z=i*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,s){return this.x=t*Math.sin(e),this.y=s,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=s,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,3*e)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,s){return void 0!==s&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=2*(Math.random()-.5),e=Math.random()*Math.PI*2,s=Math.sqrt(1-t**2);return this.x=s*Math.cos(e),this.y=s*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}function u(t){const e=(1+Math.sqrt(5))/2,s=[-1,e,0,1,e,0,-1,-e,0,1,-e,0,0,-1,e,0,1,e,0,-1,-e,0,1,-e,e,0,-1,e,0,1,-e,0,-1,-e,0,1],i=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],r=[];function n(t,e){const i=3*t;e.x=s[i+0],e.y=s[i+1],e.z=s[i+2]}function o(t,e,s,i){const a=i+1,n=[];for(let i=0;i<=a;i++){n[i]=[];const r=t.clone().lerp(s,i/a),o=e.clone().lerp(s,i/a),h=a-i;for(let t=0;t<=h;t++)n[i][t]=0===t&&i===a?r:r.clone().lerp(o,t/h)}function o(t){r.push(t.x,t.y,t.z)}for(let t=0;t<a;t++)for(let e=0;e<2*(a-t)-1;e++){const s=Math.floor(e/2);e%2==0?(o(n[t][s+1]),o(n[t+1][s]),o(n[t][s])):(o(n[t][s+1]),o(n[t+1][s+1]),o(n[t+1][s]))}}!function(t){const e=new h,s=new h,r=new h;for(let a=0;a<i.length;a+=3)n(i[a+0],e),n(i[a+1],s),n(i[a+2],r),o(e,s,r,t)}(t.geometry.args[0]),function(t){const e=new h;for(let s=0;s<r.length;s+=3)e.x=r[s+0],e.y=r[s+1],e.z=r[s+2],e.normalize().multiplyScalar(t),r[s+0]=e.x,r[s+1]=e.y,r[s+2]=e.z}(t.geometry.args[1]);var u=new Float32Array(r);let l=parseInt(100*a()),c=parseInt(100*a()),d=parseInt(100*a());for(let t=0;t<u.length;t+=3){var y=u[t]+u[t+1]+u[t+2];u[t]+=.5*Math.sin(9777*(y+l)),u[t+1]+=.5*Math.sin(4791*(y+c)),u[t+2]+=.5*Math.sin(6881*(y+d))}t.attributes={positions:u}}function l(t,e,s,i){var r={geometry:{type:"BoxGeometry",args:[1,3]},pos:{x:1*t,y:1*e,z:-300},rot:{x:0,y:0,z:0},scale:{x:s/5,y:i/5,z:s/5},rockType:"Big",lines:!0,hatch:!0,full:!1};u(r),n.push(r)}switch(Symbol.iterator,n.push({geometry:{type:"BoxGeometry",args:[10,1,10]},pos:{x:0,y:0,z:0},rot:{x:0,y:0,z:0},scale:{x:1,y:1,z:1},lines:!0,hatch:!0,full:!1}),Math.floor(3*a())+1){case 1:l(400*a()-200,100+150*a(),200+200*a(),250+450*a());break;case 2:l(200*a()-350,100+200*a(),100+250*a(),350+250*a()),l(100+200*a(),100+150*a(),100+200*a(),350+250*a());break;case 3:l(50*a()-300,100+50*a(),100+200*a(),350+250*a()),l(0+200*a(),100+50*a(),100+200*a(),500+200*a()),l(300+100*a(),100+50*a(),100+200*a(),350+250*a())}for(let t=0;t<6*a();++t)c=100+600*a(),d=250+350*a(),y=100+50*a(),m=100+50*a(),x=void 0,u(x={geometry:{type:"IcosahedronGeometry",args:[1,3]},pos:{x:1*c,y:1*d,z:1*(100*a()-200)},rot:{x:0,y:0,z:0},scale:{x:y/5,y:m/5,z:y/5},rockType:"Small",lines:!0,hatch:!0,full:!1}),n.push(x);var c,d,y,m,x,p,z,M;o.Name="Cité des "+(p="",M=["erêts","ides","eries","èvres","ines","aines","ies","essins","alots","elles","iers","evues","onnes","ons","es","ys","illes","anges","eux","irs","és","ottes","aires"],p+=(z=["Bag","Rat","Ub","Bell","Bern","Berth","Born","Bosqu","Jarv","Malgr","Chartr","Kroum","Dor","Beaud","Cl","Da","Emp","Estr","Etouv","Font","Gag","Grés","Hape-t","Lerm","Kerm","Rabat","Bast","Court","Mén","Mir","Mon","Moss","Orgu","Patr","Bard","Plan"])[Math.floor(a()*z.length)],p+=M[Math.floor(a()*M.length)],a()<.2&&(p+=" "+(1+Math.floor(9*a()))),p);const f=["de giraffes","de frères","de rochers","de bâtiments","d'unités","de jours dans un mois","de jours dans une année","de nuits dans une année","de minutes de soleil un jour de solstice d'été","de voitures dans le parking","de laisses viables","d'enclumes en réserve","de personnes dans la cité.","de doses de lessive pour une machine à 60°C","de pistons dans un moteur V8","de travers de porcs sel-poivre à commander pour midi","de raviolis dans une boite de raviolis","de bureaucrates par habitant sur ce rocher","de mètres cubes d'enclumes disponibles dans ce département","de systèmes types automates cellulaires","de jardins","de monolithes","de pièces dans ma collection","de personnes qui achètent des tirages d'œuvres d'art numériques comme si c'était des actions de sociétés cotées en bourse","de poneys","de chevaux","d'hippopotames","de Daltons vaniteux et avides d'argent","de collectionneurs qui n'ont strictement aucune idée de ce qu'ils collectionnent","de gens dans les trois pays les plus peuplés en 1823","de pommes nécessaires (en moyenne) pour arriver au poids de trois enclumes","de longues lettres épistolaires de mon ami Dino","de fois où le vent a failli m'emporter"],g=["Je ne crois pas qu'il en reste.","Je ne sais plus.","Peut-être trois ou quatre?","Aucune idée.","J'ai oublié.","Bonne question, à vérifier.","Vois ça avec le département comptabilité.","Ça va dépendre des jours, je pense.","Quand il fait beau ou quand il pleut ?","Ça va dépendre du vent.","Les jours pairs ou les jours impairs?","J'ai perdu ma calculatrice.","Impossible d'en être certain.","Difficile à dire.","Quand j'étais cowboy, beaucoup. Aujourd'hui, moins.","Il faudrait consulter le registre.","Vous posez trop de questions.","C'est une vraie question. Je me souviens de ces longues soirées d'été, à l'ombre des peupliers en fleurs. À l'époque j'avais un adopté un chacal hollandais. Il était spécialisé dans les enchères. Nous partagions quelques croquettes en regardant le vent secouer les nuages. Mais vous connaissez déjà cette histoire, je me répète.","Une? Deux? Je n'arrive pas à m'en souvenir.","Entre vingt et trente.","À vous le faire le calcul, moi j'ai arrêté les additions après mon doctorat en théorie de la syntaxe arithmétique.","Puisque je vous répète qu'il n'y avait rien de sexuel entre nous.","Si vous pensez que vous allez m'avoir comme ça. L'espagnolette, c'est terminé pour moi.","En valeur absolue ?","Ça dépend de si vous retranchez la valeur marginale de chaque enclume produite.","Votre question n'a aucun sens.","Pourquoi cherchez-vous à obtenir cette information ? Vous êtes bureaucrate ?","Aucune importance.","Mon chacal hollandais s'appelait Vital. C'est un nom très courant là-bas.","En partant du début ou de la fin ?","Pourquoi vous voulez savoir ça ? Vous spéculez sur le marché secondaire ?","Demandez aux autorités concernées, moi je n'y suis pour rien."];for(let t=0;t<10;t++)g.push(Math.floor(100*a()));const v=t=>t[Math.floor(a()*t.length)],b=()=>{const t="Nombre "+v(f)+" ?",e=v(g);o[t]=e};for(let t=0;t<10+Math.floor(32*a());t++)b();return{figures:n,features:o}};export{genererFigures};