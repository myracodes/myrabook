import type { Pitch } from "./types"

// Carte de présentation, seule sur l'accueil. Son titre sert aussi d'entrée de menu.
export const PITCH: Pitch = {
  title: "Présentation",
  intro:
    "Cheffe de projets informatiques issue du développement web, je fais le lien entre les équipes métier et technique pour livrer des produits de qualité.",
  highlightsIntro:
    "Mon parcours pluriel m'a permis d'explorer les domaines suivants :",
  highlights: [
    {
      label: "L'informatique et les projets Agile",
      text: "5 ans en tant que développeuse d'applications web en ==environnement Agile==, dont une partie consacrée au pilotage de la partie technique.",
    },
    {
      label: "Le secteur bancaire",
      text: "Après 4 ans chez BNP Paribas (en agence, puis au siège, au sein des fonctions Achats, Juridique, et Fondation), j'ai acquis une ==connaissance approfondie du secteur bancaire==.",
    },
    {
      label: "Le design UX/UI",
      text: "Durant mes études (création d'un Design System complet) et dans mon expérience professionnelle (Cap Collectif, GOOD Vibes, Visigo, BNP Paribas), j'ai démontré une sensibilité forte pour l'expérience utilisateur et les interfaces, et sais me montrer force de proposition.",
    },
    {
      label: "Le marketing",
      text: "J'ai suivi des études en Communication et Marketing à Paris et suis diplômée d'un ==Bac +5 en Stratégie Digitale== de Sup de Pub (INSEEC).",
    },
    {
      label: "La communication",
      text: "Communication interne et digitale : production éditoriale, intranet, site et réseaux sociaux, déploiement d'un réseau social interne et formation des équipes.",
    },
    {
      label: "L'événementiel",
      text: "Plus de 130 soirées de relations publiques en un an à la Fondation BNP Paribas et participation à la création du Dansathon, hackathon mêlant danse et technologie.",
    },
    {
      label: "L'esprit entrepreneurial",
      text: "Co-fondation de l'association Pourvoir Féministe, et Calendor, une application menée seule du cadrage à la mise en production.",
    },
    {
      label: "L'éducation financière",
      text: "Un intérêt personnel pour l'éducation financière, que je nourris par mes lectures et que j'aime transmettre.",
    },
  ],
  conclusion:
    "Habituée aux environnements exigeants, j'anticipe les risques, j'optimise les processus, je facilite la communication, et j'utilise l'IA pour renforcer l'efficacité collective.",
}
