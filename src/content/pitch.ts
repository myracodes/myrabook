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
      text: "Après 4 ans chez BNP Paribas (en agence, puis au siège, au sein des Fonctions Support), j'ai acquis une ==connaissance approfondie du secteur bancaire==, notamment au service Juridique, particulièrement sensible.",
    },
    {
      label: "Le design UX/UI",
      text: "Au fil des expériences j'ai démontré une sensibilité forte pour le travail sur les interfaces ; je sais me montrer force de proposition pour améliorer ces dernières et les rendre plus ==fluides, attractives, et intuitives==.",
    },
    {
      label: "Le marketing",
      text: "J'ai suivi des études en Communication et Marketing à Paris et suis diplômée d'un ==Bac +5 en Stratégie Digitale== de Sup de Pub (INSEEC).",
    },
    {
      label: "La communication",
      text: "Outre mes études dont c'était la spécialité, j'ai travaillé à la ==communication digitale== interne et externe en banque et dans mes projets associatifs.",
    },
    {
      label: "L'événementiel",
      text: "J'ai organisé plus d'événements que je ne peux m'en rappeler :  130 soirées de relations publiques à la Fondation BNP Paribas, des événements caritatifs (Restos du Cœur, Téléthon), des événements sportifs (la course [Odyssea](https://odyssea.info/)), des hackathons ([Dansathon](https://dansathon.eu/fr/community/community-2018/)), etc.",
    },
    {
      label: "L'esprit entrepreneurial",
      text: "J'ai toujours aimé mener à bien des projets personnels ; j'ai fondé ou co-fondé de nombreux projets personnels (par exemple : l'association Pourvoir Féministe), Calendor (une application menée seule du cadrage à la mise en production), des projets musicaux, et d'autres initiatives.",
    },
    {
      label: "L'éducation financière",
      text: "Un intérêt personnel pour l'éducation financière, que je nourris notamment par des lectures et que j'aime transmettre.",
    },
  ],
  conclusion:
    "Habituée aux environnements exigeants, j'anticipe les risques, j'optimise les processus, je facilite la communication, et j'utilise l'IA pour renforcer l'efficacité collective.",
}
