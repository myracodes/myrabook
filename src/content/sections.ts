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
          "J'ai organisé plus de 130 soirées de relations publiques en France et à l'étranger, participé à la création du [Dansathon](https://dansathon.eu/fr/community/community-2018/), et participé à communiquer sur la mission de la Fondation.",
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
          "J'ai organisé l'animation de la filière Achats, via la communication et l'organisation de tous les événements en France et à l'étranger (séminaires, journées d'accueil, team buildings, etc.), conçu l'architecture et le design du réseau social interne et formé les équipes à son utilisation.",
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
          "J'étais chargée des opérations bancaires courantes, de l'accueil et du conseil à la clientèle. Ces expériences ont été mes premiers contacts professionnels avec le secteur bancaire, et m'ont permis de comprendre le fonctionnement d'une agence et les besoins des client·es.",
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
          "Sur une application grand public : analyse des besoins et contraintes techniques, création des EPIC, découpage et priorisation, en coordination avec PO, QA et designer. Réduction proactive de la dette technique et réduction des coûts, le tout en mode agile.",
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
          "Évolution du Design System (45 composants) et propositions d'améliorations UX/UI, accessibilité, et performance chez Cap Collectif. Mise en place du Design System en coordination avec le designer UX/UI chez VEOLIA, sur un logiciel de gestion de l'eau couvrant ~90 % du territoire français.",
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
          "Propositions d'améliorations, mise à jour des maquettes Figma, refonte intégrale du site vitrine, mise en place de la stratégie SEO, mise en place de nouveaux outils internes pour l'agence.",
        skills: [
          "Maquettage Figma",
          "Expérience utilisateur",
          "SEO",
          "Outillage numérique & formation",
        ],
      },
      {
        title: "Documentation technique et formation",
        context: "Cap Collectif, Avanade, GOOD Vibes, agence Visigo",
        period: "2021 - 2024",
        summary:
          "Rédaction de la documentation technique dans le code et dans le Wiki, partage de connaissances via des présentations techniques, mise en place de formations internes pour les équipes sur les nouveaux outils.",
        skills: ["Documentation technique", "Formation"],
      },
      {
        title: "Calendor, la création d'un produit de A à Z",
        context: "Projet personnel",
        period: "2026 - aujourd'hui",
        summary:
          "Création d'une application 100% personnalisée menée seule : définition du besoin, création des features, conception UX/UI, développement, mise en production, mises à jour techniques.",
        skills: [
          "Gestion de produit",
          "Roadmap",
          "Conception UX/UI",
          "Vision produit",
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
        title: "Produit en mode Agile, équipe de 8 personnes",
        context: "Cap Collectif",
        period: "2024 - aujourd'hui",
        summary:
          "Analyse du besoin, création des EPIC, découpage et priorisation du backlog, en coordination avec PO, QA et designer, sur une suite SaaS d'intelligence collective, participation aux rituels Agile sur un modèle « Scrumban » (daily, rétrospective, planning, kanban board, etc.).",
        skills: [
          "Backlog & priorisation",
          "Découpage en EPIC",
          "Coordination PO / QA / design",
        ],
      },
      {
        title: "Produit en mode Agile, équipe de 15 personnes",
        context: "Avanade (ESN)",
        period: "2022 - 2024",
        summary:
          "Projet de développement d'envergure autour du logiciel de gestion de l'eau couvrant ~90 % du territoire, au sein d'une équipe Scrum de 15 personnes, avec l'adoption de normes d'équipe communes, des rituels (planning, review, rétrospective, etc.).",
        skills: ["Scrum", "Travail en équipe", "Normes d'équipe"],
      },
      {
        title: "Formation Scrum",
        context: "Formation professionnelle",
        period: "2026",
        summary:
          "Formation Scrum PSM I (8-9 octobre 2026), lecture du Manifeste Scrum en amont.",
        skills: ["Scrum", "Rôles et cérémonies"],
      },
      {
        title: "Formation théorique",
        context: "Formation professionnelle",
        period: "2022",
        summary:
          "Formation théorique sur la méthode Agile et Scrum, puis mise en pratique avec la création de user stories et la planification d'un projet fictif.",
        skills: ["Agile", "Scrum", "User stories"],
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
          "Pendant plus de 10 ans, j'ai ==travaillé au contact quotidien des enfants== : j'ai été baby-sitter puis nanny dans deux familles canadiennes. J'ai également donné des cours de français au Canada. J'aime transmettre et partager mes connaissances sur les sujets qui me tiennent à coeur, et je sais m'adapter à différents publics.",
        skills: ["Pédagogie", "Relation avec les familles", "Adaptabilité"],
      },
      {
        title: "Esprit d'entreprendre",
        context: "Associations & groupes de travail",
        period: "Depuis 2010",
        summary:
          "Au fil des années, j'ai entrepris divers projets, de plus ou moins grande envergure : de la co-fondation d'associations  et groupes de travail féministes à l'organisation de collectes caritatives ou d'événements sportifs, j'ai démontré une ==capacité à entreprendre et innover==.",
        skills: ["Esprit entrepreneurial", "Mobilisation"],
      },
      {
        title: "Pratique sportive",
        context: "Pratique personnelle et en clubs",
        period: "",
        summary:
          "Mes sports de prédilection ont toujours été la ==course à pied==, le ==vélo== et la ==natation==, mais j'ai également pratiqué plusieurs sports de raquettes, le volley-ball, le ==step==, et d'autres. J'aime découvrir de nouvelles activités pour me challenger et partager le sport avec d'autres.",
        skills: ["Persévérance", "Esprit d'équipe"],
      },
    ],
  },
]
