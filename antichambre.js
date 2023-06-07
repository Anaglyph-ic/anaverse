// ANTICHAMBRE
// Ceci est script principal d'administration des fonctions.
// Son objet est d'appeler les différentes actions de construction
// de l'antichambre dans le bon ordre et en leur fournissant les
// informations dont elles ont besoin (et seulement celle-là).

// C'est le script qui est appelé dans le contexte principal via
// la page index.html, laquelle ne fait elle-même pas grand-chose
// d'autre.

// Appel des variables et des fonctions nécessaires.
import {
  hauteur,
  largeur,
  ratio,
  concatenationListe,
  hash,
  choixFormat,
} from "./utilitairesMathematiques.js";
import { ajouterPropriete, options, params, proprietes } from "./proprietes.js";
import { construirePorte } from "./porte/porte.js";
import { genExt } from "./exterieur/exterieur.js";
import { cadre } from "./cadre/cadre.js";
import { dessiner, encreur, rasterize } from "./crayon.js";
import { endommagement } from "./endommagement/endommageur.js";
import { fuite } from "./fuite/fuite.js";
import { ajouterPapier } from "./cadre/papier.js";
import { genererTitre } from "./cadre/lexique.js";

// Antichambre.js se découpe en trois grandes étapes:
// - la construction de l'antichambre en elle-même
// - la récupération des métadonnées une fois la construction achevée et son affichage
// - la capture de tous ces éléments par le système de verse, si la génération s'effectue dans ce contexte

// Avant de démarrer, il faut prendre en charge la boucle de chargement qui permet de
// faire en sorte que le gentil utilisateur ne perde pas trop vite patience.

const boucle = document.getElementById("boucle");

// La première étape est la fonction principale. C'est elle qui fait la pièce. Les autres
// ne sont que des récupérations de ce qu'elle produit.

const conteneur = document.getElementById("conteneurSVG");

const genrererAntichambre = () => {
  // Création de l'élément SVG qui recevra le contenu de l'antichambre.
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  // Mise à la taille.
  svg.setAttribute("viewBox", `0 0 ${largeur} ${hauteur}`);

  // Invisibilité avant la révélation
  svg.style.opacity = 0;

  const resize = () => {
    if (proprietes.Format === "Portrait") {
      svg.style.top = "0px";
      svg.setAttribute("height", window.innerHeight);
      svg.setAttribute("width", window.innerHeight / ratio);
    } else {
      conteneur.style.top =
        window.innerHeight / 2 - window.innerWidth / ratio / 2 + "px";
      conteneur.style.position = "absolute";

      svg.style.left = "0px";
      svg.setAttribute("height", window.innerWidth / ratio);
      svg.setAttribute("width", window.innerWidth);
    }
  };

  resize();

  window.onresize = resize;

  svg.style.display = "block";
  svg.style.margin = "auto";
  //svg.style.position = "absolute";

  svg.id = "antichambre";

  // [===== Variables générales =====]

  // Antichambre est une suite de lignes (élément SVG <line>) qui sont
  // distribuées dans des groupes (<g>) lesquels représentent des calques.
  // L'ordre des calques n'a pas d'importance. L'objet "positif" représente
  // ce qui doit être tracé. L'array "negatif" represente les espaces qui doivent
  // être laissés vides.

  let positif = {};
  let negatif = [];

  // [===== Porte =====]
  // Le calque pivot est celui qui est intermédiaire est la porte. Il s'agit
  // d'une structure elliptique centrale qui lie les deux autres calques.
  // Au sein de l'ellipse, on trouve le "point de fuite" (ou simplement fuite)
  // qui est une représentation abstraite d'un monde inatteignable. En dehors
  // de l'ellipse, on trouve une représentation d'une surface verticale, telle qu'une
  // falaise rocheuse, un mur de brique, un rideau de végétation, etc.

  // Il peut y avoir une porte centrale, deux portes jumelles, ou trois portes au total.

  const portes = [];

  options.PorteSchema.forEach((porte) => portes.push(construirePorte(porte)));

  if (options.Porte) {
    positif.porte = new Float32Array();
    portes.forEach(
      (porte) =>
        (positif.porte = concatenationListe(positif.porte, porte.lignes))
    );
  }

  // [===== Point de fuite =====]
  // Le point de fuite. Il est nécessaire de connaitre la forme du pourtour intérieur
  // de la porte pour y restreindre le dessin.

  if (options.Fuite) {
    var masquesInterieurs = [];

    portes.forEach((porte) => masquesInterieurs.push(porte.pourtourInterne));

    positif.fuite = fuite(masquesInterieurs);
  }

  // [===== Extérieur =====]
  // La surface verticale extérieure. Il est nécessaire de connaitre la forme du
  //pourtour exterieur de la porte pour ne pas y dessiner de surface.

  if (options.Exterieur) {
    var masquesExterieurs = [];

    portes.forEach((porte) => masquesExterieurs.push(porte.pourtourExterne));

    positif.exterieur = genExt(masquesExterieurs);
  }

  // [===== Cadre =====]
  // Ajouter une bande libre tout autour de l'œuvre.
  const cadreTotal = cadre();
  negatif.push(cadreTotal);

  // [===== Endommagement =====]
  // Il y a une répétition d'opération ici, mais elle est peu coûteuse et
  // utile pour générer calque par calque.
  if (proprietes.Endommagement) {
    var masquesExterieurs = [];

    portes.forEach((porte) => masquesExterieurs.push(porte.pourtourExterne));

    const dommages = endommagement(masquesExterieurs);

    negatif = [...negatif, ...dommages];
  }

  // Génération du titre, qui sera au-dessus de tout le reste
  const titre = genererTitre();

  // Créer un espace vide pour le titre.
  negatif.push(titre.obliteration);

  if (options.Bruit) {
    encreur(svg, 1, "encre");
    encreur(svg, 0.5, "encreTitre");
  }

  const exports = dessiner(svg, positif, negatif, titre);

  return { preview: svg, exports };
};

// Attendre que tout soit chargé avant d'exécuter la création de
// l'antichambre afin que la boucle de chargement puisse être
// exécutée.

window.addEventListener("load", (event) => {
  // Déclenchement du chronomètre.
  const debut = performance.now();

  if (options.Papier) {
    ajouterPapier();
  }

  // Création de l'antichambre.
  const antichambre = genrererAntichambre();

  // Déploiement de l'antichambre dans le DOM.
  conteneur.append(antichambre.preview);

  // Tour de chrono.
  const tempstichambre = performance.now();

  const tailleDOM = document.getElementsByTagName("*").length;

  // Comptage du nombre d'objets dans le DOM
  ajouterPropriete("Nombre total d'éléments dans le DOM", tailleDOM);

  // Ajout du titre à la page.
  document.title = proprietes.Titre;

  const message = `
[===========================================================================]
      ___    _   ____________________  _____    __  _______  ____  ______
     /   |  / | / /_  __/  _/ ____/ / / /   |  /  |/  / __ )/ __ \ / ____/
    / /| | /  |/ / / /  / // /   / /_/ / /| | / /|_/ / __  / /_/ / __/   
   / ___ |/ /|  / / / _/ // /___/ __  / ___ |/ /  / / /_/ / _, _/ /___   
  /_/  |_/_/ |_/ /_/ /___/ \____/_/ /_/_/  |_/_/  /_/_____/_/ |_/_____/   

                    Une œuvre générative par Anaglyphic

[===========================================================================]


Appuyez sur [e] pour exporter des fichiers vectoriels traçables.

Appuyez sur [p] pour exporter un fichier image PNG imprimable (sans texture papier) en haute résolution.

Appuyez sur [m] pour exporter un fichier image PNG en haute résolution pour exposition sur écran (avec texture papier).

Cet export est lourd à manier, changez la largeur d'export si votre machine ne parvient pas à la réaliser.

Utilisez le paramètre "?exportLargeur=" dans l'URL pour choisir la dimension de l'export.

Utilisez le paramètre "?vitesse=" dans l'URL pour choisir une vitesse d'apparition sur l'écran. 

Vitesse = 0 déclenche un court-circuit vers un affichage total instantané. 

Vitesse supérieur à 1 signifie un affichage progressif.


`;

  // construction des propriétés;

  const clefsProprietes = [
    "Titre",
    "Format",
    "Schéma",
    "Type de point de fuite",
    "Type de motif extérieur",
    "Endommagement",
  ];

  window.$artifact = {
    features: {},
    aspectRatio: choixFormat ? 1 / ratio : ratio,
  };

  clefsProprietes.forEach(
    (clef) => (window.$artifact.features[clef] = proprietes[clef])
  );

  window.$artifact.features.$custom_title = proprietes.Titre;

  proprietes.Hash = hash;

  window.proprietes = proprietes;

  const lines = document.querySelectorAll("line");
  const svg = document.querySelector("svg");

  const nombreDeLignes = lines.length;

  let vitesse = 5;

  if (params.get("vitesse")) {
    vitesse = parseFloat(params.get("vitesse"));
  }

  if (params.get("machine")) {
    vitesse = 0;
  }

  if (vitesse === 0) {
    for (let i = 0; i < nombreDeLignes; i++) {
      lines[i].setAttribute("stroke", "#141414");
    }

    boucle.animate([{ opacity: 1, opacity: 0 }], {
      duration: 500,
      iterations: 1,
      fill: "forwards",
    });

    setTimeout(() => {
      svg.animate([{ opacity: 0, opacity: 1 }], {
        duration: 1000,
        iterations: 1,
        fill: "forwards",
      });

      setTimeout(() => boucle.remove(), 600);
    }, 600);

    setTimeout(() => {
      svg.style.opacity = 1;
    }, 2000);
  } else {
    boucle.animate([{ opacity: 1, opacity: 0 }], {
      duration: 500,
      iterations: 1,
      fill: "forwards",
    });
    setTimeout(() => {
      svg.style.opacity = 1;

      let debut, horodatagePrecedent;
      let fin = false;
      let decompte = 0;

      function dessinateur(horodatage) {
        if (debut === undefined) {
          debut = horodatage;
        }

        if (horodatagePrecedent !== horodatage) {
          if (decompte + vitesse >= nombreDeLignes) {
            vitesse = nombreDeLignes - (decompte + vitesse);
            fin = true;
          }

          for (let i = 0; i < vitesse; i++) {
            lines[decompte + i].setAttribute("stroke", "#141414");
          }

          decompte += vitesse;
        }

        if (decompte <= nombreDeLignes) {
          horodatagePrecedent = horodatage;
          if (!fin) {
            window.requestAnimationFrame(dessinateur);
          } else {
            console.log("Fini de tracer!");
          }
        }
      }

      window.requestAnimationFrame(dessinateur);
    }, 600);
  }

  //Blocage de la console pour le développement
  if (1) {
    console.log(message);
    console.table("[=== Propriétés simplifiées ===]");
    console.table(window.$artifact.features);
    console.table("[=== Propriétés réelles ===]");
    console.table(window.proprietes);
  }

  if (params.get("verseCapture") || params.get("machine")) {
    // Attendre que les traits soient révélés.
    setTimeout(() => {
      rasterize(document.querySelector("svg"), 1200, true, true);
    }, 3000);
  }
});
