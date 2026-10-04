import type { Section } from "./types"

// Le parcours, en chapitres : chacun a sa page et son entrée dans le menu,
// dans cet ordre.
// Sources : CV de calendor (src/cv/content/) et site resume.
export const SECTIONS: Section[] = [
  {
    slug: "banque",
    title: "La banque de l'intérieur",
    intro:
      "BNP Paribas, 2014 - 2018 : 4 ans en banque, du réseau d'agences au siège.",
    variantColor: "sun",
    items: [
      {
        title: "Événementiel d'envergure",
        context: "Fondation BNP Paribas",
        period: "2017 - 2018",
        summary:
          "Plus de 130 soirées de relations publiques en France et à l'étranger (concerts, Opéra de Paris, cirque, danse) et participation à la création du [Dansathon](https://dansathon.eu/fr/community/community-2018/), premier hackathon mêlant danse et technologie, à Lyon, Liège et Londres.",
        skills: [
          "Organisation d'événements",
          "Relations publiques",
          "Création de formats innovants",
        ],
      },
      {
        title: "Communication et vie d'équipe",
        context: "BNP Paribas LEGAL",
        period: "2016 - 2017",
        summary:
          "Production éditoriale quotidienne, séminaires, journées d'accueil, collectes caritatives et course Odyssea, déploiement du réseau social interne.",
        skills: [
          "Communication interne",
          "Événementiel",
          "Engagement des collaborateurs",
        ],
      },
      {
        title: "Conduite du changement",
        context: "BNP Paribas Group Procurement",
        period: "2015 - 2016",
        summary:
          "Événements de la filière Achats en France et à l'étranger, conception du réseau social interne et formation des équipes à son utilisation.",
        skills: [
          "Coordination internationale",
          "Accompagnement au changement",
          "Formation",
        ],
      },
      {
        title: "Expérience en agence bancaire",
        context:
          "BNP Paribas, agences de Fourqueux, St-Nom-la-Bretèche et Le Vésinet",
        period: "2014 - 2015",
        summary:
          "Missions successives en tant qu'auxiliaire de vacances, au contact direct de la clientèle. Missions : opérations bancaires courantes, accueil et conseil.",
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
    title: "Construire des produits numériques",
    intro:
      "2021 - aujourd'hui : du besoin utilisateur à la mise en production.",
    variantColor: "sky",
    items: [
      {
        title: "Du besoin au backlog",
        context: "Cap Collectif",
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
        summary: "Lectures, actions, transmission…",
        skills: ["Éducation financière", "Pédagogie"],
        toComplete: true,
      },
      {
        title: "Jeunesse et pédagogie",
        context: "France & Canada",
        period: "Depuis 2010",
        summary:
          "10 ans de baby-sitting, nanny dans une famille canadienne et professeure de français au Canada.",
        skills: ["Pédagogie", "Relation avec les familles", "Adaptabilité"],
      },
      {
        title: "Créer des collectifs",
        context: "Associations & groupes de travail",
        period: "Depuis 2010",
        summary:
          "Co-fondation de l'association Pourvoir Féministe, coordination d'événements, organisation de collectes (Restos du Cœur, Téléthon). Groupes de travail : …",
        skills: ["Esprit entrepreneurial", "Mobilisation", "Événementiel"],
        toComplete: true,
      },
      {
        title: "Course à pied",
        context: "Odyssea & pratique personnelle",
        period: "",
        summary: "Course Odyssea chez BNP Paribas LEGAL, pratique actuelle…",
        skills: ["Persévérance", "Esprit d'équipe"],
        toComplete: true,
      },
    ],
  },
]
