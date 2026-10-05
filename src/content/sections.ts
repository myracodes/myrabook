import type { Section } from "./types"

// Le parcours, en chapitres : chacun a sa page et son entrée dans le menu,
// dans cet ordre.
// Sources : CV de calendor (src/cv/content/) et site resume.
export const SECTIONS: Section[] = [
  {
    slug: "banque",
    title: "Connaissance du secteur bancaire",
    intro:
      "BNP Paribas, 2014 - 2018 : 4 ans en banque, du réseau d'agences aux Fonctions Support.",
    variantColor: "sun",
    items: [
      {
        title: "Événementiel à grande échelle",
        context: "Fondation BNP Paribas",
        period: "2017 - 2018",
        summary:
          "J'ai organisé plus de 130 soirées de relations publiques en France et à l'étranger, et participé à la création du [Dansathon](https://dansathon.eu/fr/community/community-2018/), et participé à communiquer sur la mission de la Fondation.",
        skills: [
          "Organisation d'événements",
          "Relations publiques",
          "Innovation",
        ],
      },
      {
        title: "Communication et vie d'équipe",
        context: "BNP Paribas LEGAL",
        period: "2016 - 2017",
        summary:
          "J'ai mis en oeuvre la production éditoriale quotidienne et organisé les événements de la Fonction Juridique (séminaires, événements caritatifs, team building). J'ai également déployé le réseau social interne et formé les équipes.",
        skills: [
          "Communication interne",
          "Événementiel",
          "Engagement des collaborateurs",
        ],
      },
      {
        title: "Conduite du changement et événements",
        context: "BNP Paribas Procurement",
        period: "2015 - 2016",
        summary:
          "J'ai organisé tous les événements de la filière Achats en France et à l'étranger (séminaires, journées d'accueil, team buildings, etc.), conçu l'architecture et le design du réseau social interne et formé les équipes à son utilisation.",
        skills: [
          "Coordination internationale",
          "Accompagnement au changement",
          "Formation",
        ],
      },
      {
        title:
          "Chargée d'accueil et de conseil à la clientèle en agence bancaire",
        context:
          "BNP Paribas, agences de Fourqueux, St-Nom-la-Bretèche et Le Vésinet",
        period: "2014 - 2015",
        summary:
          "J'étais chargée des opérations bancaires courantes, de l'accueil et du conseil à la clientèle. Ces expériences ont été mes premiers contacts professionnels avec le secteur bancaire, et m'a permis de comprendre le fonctionnement d'une agence et les besoins des clients.",
        skills: [
          "Relation client",
          "Fonctionnement d'une agence",
          "Adaptabilité",
        ],
      },
    ],
  },
  {
    slug: "produits-numeriques",
    title: "Construction de produits numériques",
    intro:
      "Depuis 2021 : construction de produits digitaux, du besoin à la mise en production.",
    variantColor: "sky",
    items: [
      {
        title: "Gestion du backlog produit et technique",
        context: "Cap Collectif (application grand public)",
        period: "2024 - aujourd'hui",
        summary:
          "Sur une application grand public : analyse du besoin, création des EPIC, découpage et priorisation, en coordination avec PO, QA et designer. Réduction proactive de la dette technique et réduction des coûts, le tout en mode agile.",
        skills: [
          "Backlog & priorisation",
          "Méthode Agile",
          "Coordination PO / QA / design",
          "Maîtrise des coûts",
        ],
      },
      {
        title: "UX/UI et accessibilité",
        context: "Cap Collectif & Avanade",
        period: "2022 - aujourd'hui",
        summary:
          "Évolution du Design System (45 composants) et propositions d'améliorations UX/UI chez Cap Collectif. Mise en place du Design System avec le designer UX/UI sur Wat.erp, logiciel de gestion de l'eau couvrant ~90 % du territoire.",
        skills: [
          "Design System",
          "Accessibilité",
          "Figma",
          "Intégration pixel perfect",
        ],
      },
      {
        title: "Produits engageants",
        context: "GOOD Vibes & agence Visigo",
        period: "2021 - 2022",
        summary:
          "Vidéos interactives envoyées par SMS : nouvelles maquettes Figma, refonte du site vitrine, stratégie SEO et nouveaux outils internes pour l'agence.",
        skills: [
          "Maquettage Figma",
          "Expérience utilisateur",
          "SEO",
          "Outillage & formation",
        ],
      },
      {
        title: "Calendor, un produit de A à Z",
        context: "Projet personnel",
        period: "2026 - aujourd'hui",
        summary:
          "Application de documents personnalisés menée seule : cadrage, roadmap, conception UX/UI et développement, jusqu'à la mise en production.",
        skills: [
          "Gestion de produit",
          "Roadmap",
          "Conception UX/UI",
          "Accessibilité WCAG AAA",
        ],
      },
    ],
  },
  {
    slug: "methode-agile",
    title: "Méthode Agile",
    intro: "Des projets menés en Agile, et une formation Scrum pour l'ancrer.",
    variantColor: "sun",
    items: [
      {
        title: "Produit en mode Agile",
        context: "Cap Collectif",
        period: "2024 - aujourd'hui",
        summary:
          "Analyse du besoin, création des EPIC, découpage et priorisation du backlog, en coordination avec PO, QA et designer, sur une suite SaaS d'intelligence collective.",
        skills: [
          "Backlog & priorisation",
          "Découpage en EPIC",
          "Coordination PO / QA / design",
        ],
      },
      {
        title: "Scrum en équipe de 15",
        context: "Avanade (ESN)",
        period: "2022 - 2024",
        summary:
          "Portage vers Angular de Wat.erp, logiciel de gestion de l'eau couvrant ~90 % du territoire, au sein d'une équipe Scrum de 15 personnes, avec l'adoption de normes d'équipe communes.",
        skills: ["Scrum", "Travail en équipe", "Normes d'équipe"],
      },
      {
        title: "Formation Scrum",
        context: "Formation professionnelle",
        period: "8 - 9 octobre 2026",
        summary:
          "Deux jours de formation pour consolider la pratique de Scrum : rôles, cérémonies et pilotage par la valeur.",
        skills: ["Scrum", "Rôles et cérémonies", "Pilotage par la valeur"],
      },
    ],
  },
  {
    slug: "transmettre",
    title: "Transmettre et entreprendre",
    variantColor: "candy",
    items: [
      {
        title: "Éducation financière",
        context: "Engagement personnel",
        period: "",
        summary:
          "Intérêt personnel pour l'éducation financière, que je nourris notamment par des lectures et que j'aime transmettre autour de moi.",
        skills: ["Éducation financière", "Pédagogie"],
      },
      {
        title: "Jeunesse et pédagogie",
        context: "France & Canada",
        period: "Depuis 2010",
        summary:
          "Pendant plus de 10 ans, j'ai ==travaillé au contact des enfants au quotidien== : j'ai été baby-sitter puis nanny dans une famille canadienne. J'ai également donné des cours de français au Canada. J'aime transmettre et partager mes connaissances sur les sujets qui me tiennent à coeur, et je sais m'adapter à différents publics.",
        skills: ["Pédagogie", "Relation avec les familles", "Adaptabilité"],
      },
      {
        title: "Esprit d'entreprendre",
        context: "Associations & groupes de travail",
        period: "Depuis 2010",
        summary:
          "Au fil des années, j'ai entrepris divers projets, de plus ou moins grande envergure : de la co-fondation d'associations  et groupes de travail féministes à l'organisation de collectes caritatives ou d'événements sportifs, j'ai démontré une ==capacité à entreprendre et innover==.",
        skills: ["Esprit entrepreneurial", "Mobilisation", "Événementiel"],
      },
      {
        title: "Pratique sportive",
        context: "Pratique personnelle et en équipe",
        period: "",
        summary:
          "Depuis très longtemps, je pratique le sport. Mes sports de prédilection ont toujours été la ==course à pied==, le ==vélo== et la ==natation==, mais j'ai également pratiqué plusieurs sports de raquettes, le volley-ball, le ==step==, et d'autres.",
        skills: ["Persévérance", "Esprit d'équipe"],
      },
    ],
  },
]
