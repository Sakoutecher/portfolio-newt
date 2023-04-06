//Types
import { ProjectType } from '../config/types'

export const projects: Array<ProjectType> = [
  {
    id: 0,
    title: `PERRIER X ROLLAND GARROS`,
    imgPath: '/assets/projects/rolland-garros/rolland-garros-vignette.png',
    mainsTag: ['MOTION DESIGN'],
    secondsTags: ['ILLUSTRATION'],
    filter: 'ALL',
    imgAccueil: '/assets/projects/rolland-garros/rolland-garros-accueil.png',
    client: [
      `CLIENTS :`,
      `PROJET SCOLAIRE`,
      `YNOV PARIS CAMPUS`,
      `PERRIER X ROLLAND GARROS`,
    ],
    role: [
      `ROLE :`,
      `DIRECTION ARTISTIQUE`,
      `MOTION DESIGN`,
      `ILLUSTRATION`,
      `SCENARISTE`,
    ],
    credits: [`CREDITS :`],
    description: [
      {
        title: `PRE-PRODUCTION`,
        desc: `Perrier et Roland Garros sont partenaires depuis maintenant 41 ans, à l’occasion de la prochaine édition de Roland Garros, ces deux derniers souhaitent mettre en avant leur longue durée de collaboration à travers une vidéo en motion design. Cette animation doit caractériser des éléments graphiques comme une balle, une bouteille ou bien encore une raquette pour leur donner des intentions, voire des émotions. C’est suite à ces informations que j’ai établies des idées de scénarios appuyés sur la communication de Perrier, qui m’ont permis de trouver en lien entre la longue collaboration et les différentes étapes que traverse un couple. J’ai alors produit un scénario appuyé d’un storyboard pour travailler mes plans et permettre au client de se projeter dans l’animation avec les recherches graphiques effectuées.`,
        side: 'left',
      },
      {
        title: `PRODUCTION`,
        desc: `Après avoir établi le scénario et le storyboard, j’ai approfondi les recherches graphiques pour proposer les illustrations qui seront animées pour le rendu final. Un style d’illustration en flat avec des personnages et éléments principaux plus détaillé que l’arrière-plan pour faire res- sortir les éléments importants et se concentrer sur le comportement et les émotions pour bien comprendre l’histoire d’amour entre la balle qui représente Roland Garros et la bouteille qui représente Perrier. Une fois les illustrations terminées et validées, tout est prêt pour attaquer l’animation. L’animation permet de donner vie aux éléments et de manière plus général au scénario, le projet se concrétise. Avant cela, il faudra de multiples essais pour trouver les bons gestes et trouver une dynamique commune.`,
        side: 'right',
      },
      {
        title: `POST-PRODUCTION`,
        desc: `Une fois l’animation de chaque scène terminée, on passe au montage, il faut assembler toutes les scènes pour en faire une vidéo. C’est aussi l’étape de tous les réglages, on accorde les violons, toutes les scènes doivent s’enchaîner comme prévu dans le scénario. C’est à cette étape que l’on rajoute la partie audio, le sound design qui va venir habillé de manière auditive la vidéo.`,
        side: 'left',
      },
    ],
    hrefButton: '#',
    renduFinal: true,
    video: true,
    videoPath: `/assets/projects/rolland-garros/rolland-garros-video.mp4`,
  },
  {
    id: 1,
    title: `LIVRET - MUSEE D'ORSAY`,
    imgPath: '/assets/projects/livret-musee/livret-musee-vignette.png',
    mainsTag: ['GRAPHIC DESIGN'],
    secondsTags: ['MISE EN PAGE', 'TYPOGRAPHIE'],
    filter: 'ALL',
    imgAccueil: '/assets/projects/livret-musee/livret-musee-accueil.png',
    client: [
      `CLIENTS :`,
      `PROJET SCOLAIRE`,
      `YNOV PARIS CAMPUS`,
      `MUSEE D'ORSAY`,
    ],
    role: [
      `ROLE :`,
      `DIRECTION ARTISTIQUE`,
      `GRAPHIC DESIGN`,
      `TYPOGRAPHIE`,
      `MISE EN PAGE`,
    ],
    credits: [`CREDITS :`],
    description: [
      {
        title: `PRE-PRODUCTION`,
        desc: `Le Musée d’Orsay est un musée pluridisciplinaire exposant la plus riche collection de tableaux impressionnistes et post impressionnistes au monde à l’intérieur de l'ancienne gare d'Orsay à Paris. Ce dernier propose une expérience riche qui mérite de se prolonger au travers d’un livret proposant des informations complémentaires pouvant aussi servir d’accompagnement durant la visite des clients du musée. Pour débuter le projet, la recherche du contenu est primordiale, qu’allons nous mettre comme informations et en quelle quantité ? Toutes ces informations permettent de facilité la recherche graphique pour trouver celle qui conviendra au mieux à la direction artistique du musée et au contenu attendu.`,
        side: 'left',
      },
      {
        title: `PRODUCTION`,
        desc: `Une fois la préparation terminée, il faut trouver une direction artistique qui correspond à celle du musée en réalisant plusieurs essais et propositions de typographies de titrage, typographies de labeur, de couleurs, de compositions et d’éléments graphiques. La direction artistique du musée est minimaliste, elle s’oriente sur des couleurs élégantes (noir, blanc et grège), d’une typographie avec serif proposant de forts contrastes entre pleins et déliés. Les éléments graphiques qu’utilise le musée sont tirés de la typographie utilisée et de traits fins. La direction artistique du livret reprend les codes de celle du musée mise à part la typographie de titrage qui propose moins de contraste entre les pleins et les déliés, mais garde une certaine finesse dans ses détails. La mise en page choisie brise l’élégance de la direction initiale, ce qui crée un contraste et permet de dynamiser la mise en page.`,
        side: 'right',
      },
      {
        title: `POST-PRODUCTION`,
        desc: `La mise en page terminée, l’impression de prototypes est nécessaire pour réaliser différents réglages de mise en page qui vont permettre d’optimiser l’expérience du lecteur.`,
        side: 'left',
      },
    ],
    hrefButton: '#',
    renduFinal: false,
    video: false,
    videoPath: `/assets/projects/livret-musee`,
  },
  {
    id: 2,
    title: `WHINTERZ - TYPOGRAPHIE`,
    imgPath: '/assets/projects/amour/amour-vignette.png',
    mainsTag: ['GRAPHIC DESIGN'],
    secondsTags: ['TYPOGRAPHIE'],
    filter: 'ALL',
    imgAccueil: '/assets/projects/amour/amour-vignette.png',
    client: [`CLIENTS :`, `ANTOINE GERVAIS`],
    role: [`ROLE :`, `GRAPHIC DESIGN`, `TYPOGRAPHIE`],
    credits: [`CREDITS :`, `MON EX`],
    description: [
      {
        title: `NOTE D'INTENTION`,
        desc: `J’accorde une grande importance à la typographie au sein d’un projet, explorer les pistes pour développer mes propres caractères est un véritable objectif. Une typographie qui nous repré- sente est une réflexion sur nous-même et les évènements que l’on traverse se retranscriront sur le rendu final, à l’image des peintres de l’époque ou leur style et les couleurs qu’ils appli- quaient évoluaient selon les moments marquants de leur vie. Pour en revenir à moi, malgré le vent glacé et le gris de l’hivers, une lueur de chaleur sommeil en moi. Un rayon de soleil qui traverse le gris des nuages et me rappelle que le beau temps se rapproche. Cette image est l’amour que l’on porte à nos proches et celui qui nous renvoi, c’est cet amour qui nous donne la force dans les moments difficiles. `,
        side: 'left',
      },
      {
        title: `LA CREATION DES CARACTERES`,
        desc: `Mes premiers croquis de caractères étaient très ronds et s’appuyaient de manière frappante sur la forme d’un cœur. On pourrait classer ces premiers essais dans la famille des linéales. Ce n’était pas ce que je recherchais, j’avais besoin de retrouver de la finesse dans toute cette rondeur, y ajouter du détail sans perdre mon idée initiale. En faisant quelques recherches sur chacune des familles, je me suis penché sur les réales qui possèdent des empattements hori- zontaux, ainsi qu’un fort contraste entre les pleins et les déliés. Le contraste entre pleins et déliés et le détail des empattements ajouterait une plus-value à mes caractères. C’est en associant les caractéristiques des réales à mon idée d’origine que j’ai construis les premiers caractères de cette typographie. En se basant sur des fûts avec de léger  empattements, j’y ai ajouté la moitié d’un cœur associé à de belles courbes pour donner de l’élégance, garder la douceur et surtout mettre beaucoup d’amour dans mes caractères.`,
        side: 'right',
      },
      {
        title: `POURQUOI WINTHERZ ?`,
        desc: `Le nom de la typographie reflète le caractère que je lui ai transmis et expliqué à travers la note d’intention. “Wintherz” ressemble étrangement au mot anglais “winter” qui se traduit par l’hivers mais pourquoi remplacé le “er” par “herz” ? “Herz” se traduit de l’allemand qui signifie cœur en français et permet de faire un jeu de mot. Le mélange de l’anglais et de l’allemand représente le choix que j’ai au collège : choisir l’option allemand (et j’en suis fier !). Plus concrètement l’hivers est la période de l’année qui s’accorde le plus avec mes intentions. Celles de trouver de la chaleur à travers les moments gris et froid mais dans lesquels on peut y retrouver un rayon de chaleur. En hivers, ce rayon ce traduit par les fêtes de fin d’année, les les raclettes avec ses proches et plus simplement les rares rayons de soleil. Le mot cœur, quant à lui, se traduit par l’amour que l’on partage avec nos proches qui nous réchauffe en attendant le soleil de l’été.`,
        side: 'left',
      },
    ],
    hrefButton: '#',
    renduFinal: true,
    video: false,
    videoPath: `/assets/projects/amour/amour-vignette.png`,
  },
  {
    id: 3,
    title: `HTW A & B - SPECIMEN TYPOGRAPHIE`,
    imgPath: '/assets/projects/htw/htw-vignette.png',
    mainsTag: ['GRAPHIC DESIGN'],
    secondsTags: ['TYPOGRAPHIE', 'PRINT'],
    filter: 'ALL',
    imgAccueil: '/assets/projects/htw/htw-vignette.png',
    client: [`CLIENTS :`, `UNDEFINED`],
    role: [`ROLE :`, `UNDEFINED`],
    credits: [`CREDITS :`, `UNDEFINED`],
    description: [
      {
        title: `UNDEFINED`,
        desc: `UNDEFINED`,
        side: 'left',
      },
      {
        title: `UNDEFINED`,
        desc: `UNDEFINED`,
        side: 'right',
      },
    ],
    hrefButton: '#',
    renduFinal: true,
    video: false,
    videoPath: `/assets/projects/htw/htw-vignette.png`,
  },
  {
    id: 4,
    title: `LE CAUCHEMAR CONTINUE - MENACE SANTANA`,
    imgPath: '/assets/projects/cauchemar/cauchemar-vignette.png',
    mainsTag: ['MOTION DESIGN'],
    secondsTags: ['DESIGN GENERATIF'],
    filter: 'ALL',
    imgAccueil: '/assets/projects/cauchemar/cauchemar-vignette.png',
    client: [`CLIENTS :`, `UNDEFINED`],
    role: [`ROLE :`, `UNDEFINED`],
    credits: [`CREDITS :`, `UNDEFINED`],
    description: [
      {
        title: `UNDEFINED`,
        desc: `UNDEFINED`,
        side: 'left',
      },
      {
        title: `UNDEFINED`,
        desc: `UNDEFINED`,
        side: 'right',
      },
    ],
    hrefButton: '#',
    renduFinal: true,
    video: false,
    videoPath: `/assets/projects/cauchemar/cauchemar-vignette.png`,
  },
  {
    id: 5,
    title: `AMNESIE - DAMSO`,
    imgPath: '/assets/projects/amnesie/amnesie-vignette.png',
    mainsTag: ['MOTION DESIGN'],
    secondsTags: ['DESIGN GENERATIF'],
    filter: 'ALL',
    imgAccueil: '/assets/projects/amnesie/amnesie-vignette.png',
    client: [`CLIENTS :`, `UNDEFINED`],
    role: [`ROLE :`, `UNDEFINED`],
    credits: [`CREDITS :`, `UNDEFINED`],
    description: [
      {
        title: `UNDEFINED`,
        desc: `UNDEFINED`,
        side: 'left',
      },
      {
        title: `UNDEFINED`,
        desc: `UNDEFINED`,
        side: 'right',
      },
    ],
    hrefButton: '#',
    renduFinal: true,
    video: false,
    videoPath: `/assets/projects/amnesie/amnesie-vignette.png`,
  },
  {
    id: 6,
    title: `BROCHURES YNOV PARIS EN REALITE AUGMENTE`,
    imgPath: '/assets/projects/brochure-ynov/brochure-ynov-vignette.png',
    mainsTag: ['MOTION DESIGN'],
    secondsTags: ['ILLUSTRATION', 'REALITE AUGMENTE'],
    filter: 'ALL',
    imgAccueil: '/assets/projects/brochure-ynov/brochure-ynov-vignette.png',
    client: [`CLIENTS :`, `UNDEFINED`],
    role: [`ROLE :`, `UNDEFINED`],
    credits: [`CREDITS :`, `UNDEFINED`],
    description: [
      {
        title: `UNDEFINED`,
        desc: `UNDEFINED`,
        side: 'left',
      },
      {
        title: `UNDEFINED`,
        desc: `UNDEFINED`,
        side: 'right',
      },
    ],
    hrefButton: '#',
    renduFinal: true,
    video: false,
    videoPath: `/assets/projects/brochure-ynov/brochure-ynov-vignette.png`,
  },
  {
    id: 7,
    title: `ANNONCE INAZUMA ELEVEN SUR DISNEY XD`,
    imgPath: '/assets/projects/disney-xd/disney-xd-vignette.png',
    mainsTag: ['MOTION DESIGN'],
    secondsTags: ['ILLUSTRATION'],
    filter: 'ALL',
    imgAccueil: '/assets/projects/disney-xd/disney-xd-accueil.png',
    client: [`CLIENTS :`, `UNDEFINED`],
    role: [`ROLE :`, `UNDEFINED`],
    credits: [`CREDITS :`, `UNDEFINED`],
    description: [
      {
        title: `UNDEFINED`,
        desc: `UNDEFINED`,
        side: 'left',
      },
      {
        title: `UNDEFINED`,
        desc: `UNDEFINED`,
        side: 'right',
      },
    ],
    hrefButton: '#',
    renduFinal: true,
    video: false,
    videoPath: `/assets/projects/disney-xd/disney-xd-accueil.png`,
  },
  {
    id: 8,
    title: `CHAMPIONNAT D'EUROPE DE LEAGUE OF LEGENDS`,
    imgPath: '/assets/projects/lec/lec-vignette.jpg',
    mainsTag: ['GRAPHIC DESIGN', 'MOTION DESIGN'],
    secondsTags: [],
    filter: 'ALL',
    imgAccueil: '/assets/projects/lec/lec-vignette.jpg',
    client: [`CLIENTS :`, `UNDEFINED`],
    role: [`ROLE :`, `UNDEFINED`],
    credits: [`CREDITS :`, `UNDEFINED`],
    description: [
      {
        title: `UNDEFINED`,
        desc: `UNDEFINED`,
        side: 'left',
      },
      {
        title: `UNDEFINED`,
        desc: `UNDEFINED`,
        side: 'right',
      },
    ],
    hrefButton: '#',
    renduFinal: true,
    video: false,
    videoPath: `/assets/projects/lec/lec-vignette.jpg`,
  },
  {
    id: 9,
    title: `CAPITOL RECORDS`,
    imgPath: '/assets/projects/capitol-records/capitol-records-vignette.png',
    mainsTag: ['UX UI DESIGN', 'MOTION DESIGN'],
    secondsTags: [],
    filter: 'ALL',
    imgAccueil: '/assets/projects/capitol-records/capitol-records-accueil.png',
    client: [`CLIENTS :`, `UNDEFINED`],
    role: [`ROLE :`, `UNDEFINED`],
    credits: [`CREDITS :`, `UNDEFINED`],
    description: [
      {
        title: `UNDEFINED`,
        desc: `UNDEFINED`,
        side: 'left',
      },
      {
        title: `UNDEFINED`,
        desc: `UNDEFINED`,
        side: 'right',
      },
    ],
    hrefButton: '#',
    renduFinal: true,
    video: false,
    videoPath: `/assets/projects/capitol-records/capitol-records-accueil.png`,
  },
  {
    id: 10,
    title: `INVERTED WORLD SERIES`,
    imgPath: '/assets/projects/inverted/inverted-vignette.png',
    mainsTag: ['MOTION DESIGN'],
    secondsTags: ['ILLUSTRATION'],
    filter: 'ALL',
    imgAccueil: '/assets/projects/inverted/inverted-vignette.png',
    client: [`CLIENTS :`, `UNDEFINED`],
    role: [`ROLE :`, `UNDEFINED`],
    credits: [`CREDITS :`, `UNDEFINED`],
    description: [
      {
        title: `UNDEFINED`,
        desc: `UNDEFINED`,
        side: 'left',
      },
      {
        title: `UNDEFINED`,
        desc: `UNDEFINED`,
        side: 'right',
      },
    ],
    hrefButton: '#',
    renduFinal: true,
    video: false,
    videoPath: `/assets/projects/inverted/inverted-vignette.png`,
  },
  {
    id: 11,
    title: `NOUVEAUX MAILLOTS, GROWECY ESPORT`,
    imgPath: '/assets/projects/growecy/growecy-vignette.png',
    mainsTag: ['MOTION DESIGN'],
    secondsTags: [],
    filter: 'ALL',
    imgAccueil: '/assets/projects/growecy/growecy-vignette.png',
    client: [`CLIENTS :`, `UNDEFINED`],
    role: [`ROLE :`, `UNDEFINED`],
    credits: [`CREDITS :`, `UNDEFINED`],
    description: [
      {
        title: `UNDEFINED`,
        desc: `UNDEFINED`,
        side: 'left',
      },
      {
        title: `UNDEFINED`,
        desc: `UNDEFINED`,
        side: 'right',
      },
    ],
    hrefButton: '#',
    renduFinal: true,
    video: false,
    videoPath: `/assets/projects/growecy/growecy-vignette.png`,
  },
]
