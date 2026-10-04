import type { Experience } from "./types"

// Version "profil développeuse" : non affichée pour l'instant, conservée pour
// d'autres candidatures. L'accueil affiche src/content/sections.ts.

// Expériences professionnelles, de la plus récente à la plus ancienne.
// Sources : CV de calendor (src/cv/content/experiences.ts) et site resume.
export const EXPERIENCES: Experience[] = [
  {
    title: "Développeuse front-end",
    context: "Cap Collectif",
    period: "2024 - aujourd'hui",
    summary:
      "Développement de fonctionnalités et refontes front-end sur une suite SaaS open source d'intelligence collective (budget participatif, consultation, questionnaire…). Évolution du Design System (45 composants) avec une attention particulière à l'accessibilité, correction de 100 % des tests instables et 40 % d'économies sur la CI. Pilotage de tâches techniques, de l'analyse du besoin à la planification, et prise en charge de sujets back-end avec l'aide de l'IA.",
    skills: [
      "React / Next.js",
      "TypeScript & GraphQL",
      "Design System",
      "Accessibilité",
      "Tests automatisés (Cypress)",
      "Réduction de la dette technique",
      "Pilotage technique",
      "Développement assisté par IA",
    ],
  },
  {
    title: "Développeuse front-end",
    context: "Avanade (ESN)",
    period: "2022 - 2024",
    summary:
      "Au sein d'une équipe de 15 personnes, portage vers Angular de Wat.erp, le logiciel de gestion des contrats d'eau de ~90 % du territoire français (Veolia, Société des Eaux de Marseille). Intégration pixel perfect des maquettes, branchement des API REST, mise en place du Design System avec le designer UX/UI, et adoption de normes d'équipe (git flow, conventional commits, conventions de nommage). En interne : outils et composants du Design System d'Avanade.",
    skills: [
      "Angular & NgRx",
      "TypeScript",
      "Intégration pixel perfect",
      "Design System",
      "API REST",
      "Normes et qualité de code",
      "Scrum",
    ],
  },
  {
    title: "Développeuse full-stack",
    context: "GOOD Vibes",
    period: "2021 - 2022",
    summary:
      "Système d'envoi de vidéos interactives par SMS et e-mail, développé en équipe de 3 et en asynchrone France - USA. Refonte du site vitrine en React, nouvelles maquettes Figma développées avec Storybook, galerie de composants réutilisables et corrections back-end en Node.js. Chaque fonctionnalité était testée (Cypress, Jest) et validée visuellement sur Chromatic.",
    skills: [
      "React",
      "Node.js",
      "Storybook & Chromatic",
      "Tests (Cypress, Jest)",
      "Maquettage Figma",
      "Travail asynchrone",
    ],
  },
  {
    title: "Chargée de projets web",
    context: "Agence Visigo",
    period: "2021 - 2022",
    summary:
      "Pour l'agence éditrice de GOOD Vibes : diagnostic et stratégie SEO avec un consultant (Lighthouse, Search Console, Analytics), refonte de pages avec une graphiste et amélioration du responsive, correction du contenu éditorial. Mise en place de nouveaux outils internes, formation de l'équipe et documentation des processus.",
    skills: [
      "SEO",
      "HTML / CSS",
      "Responsive design",
      "Qualité éditoriale",
      "Outillage & formation",
      "Documentation",
    ],
  },
  {
    title: "Césure, engagement associatif et reconversion",
    context: "Canada & France",
    period: "2018 - 2021",
    summary:
      "Deux ans au Canada en visa Vacances-Travail (boulangerie, cours de français, nanny) et musique en groupe à Montréal. De retour en France, co-fondation de l'association Pourvoir Féministe et coordination d'événements. C'est aussi le début de l'autoformation qui a mené à la reconversion vers le développement web.",
    skills: [
      "Adaptabilité",
      "Autonomie",
      "Autoformation",
      "Organisation d'événements",
      "Projets associatifs",
    ],
  },
  {
    title: "Chargée de projets digitaux, communication et événements",
    context: "BNP Paribas",
    period: "2015 - 2018",
    summary:
      "Postes successifs dans 3 entités du Groupe (Achats, Juridique, Fondation). Organisation de nombreux événements, dont plus de 130 soirées de relations publiques en un an à la Fondation, et participation à la création du Dansathon, hackathon mêlant danse et technologie. Communication digitale et webmastering (intranet, site, réseaux sociaux), déploiement du réseau social interne et formation des équipes.",
    skills: [
      "Gestion de projet",
      "Organisation d'événements",
      "Communication digitale",
      "Webmastering",
      "Accompagnement au changement",
      "Coordination multi-équipes",
    ],
  },
  {
    title: "Bénévolat et jobs étudiants",
    context: "Associations et emplois étudiants",
    period: "Depuis 2010",
    summary:
      "Vente et accueil pendant les études, baby-sitting (10 ans), et bénévolat associatif : photographie de concerts, correction-relecture pour des médias, régie plateau pour une compagnie de théâtre, organisation de collectes (Restos du Cœur, Téléthon).",
    skills: [
      "Relation client",
      "Sens des responsabilités",
      "Production d'images",
      "Relecture",
      "Solidarité",
    ],
  },
]
