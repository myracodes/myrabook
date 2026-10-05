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
      text: "5 ans en tant que développeuse d'applications web en ==environnement Agile==, dont une partie consacrée au ==pilotage du backlog technique==.",
    },
    {
      label: "Le secteur bancaire",
      text: "Après 4 ans chez BNP Paribas (en agence, puis au sein des Fonctions Support), j'ai acquis une ==connaissance approfondie du secteur bancaire==, notamment au sein des entités Juridique, Achats, et Communication.",
    },
    {
      label: "La gestion de projets",
      text: "J'ai été amenée à ==piloter des projets variés==. D'abord en événementiel et en communication, puis dans l'informatique. J'ai également développé des projets personnels, en totale autonomie. Dans chacun de ces contextes, j'ai mis en place ou amélioré les outils de gestion et de suivi.",
    },
    {
      label: "Le design UX/UI",
      text: "Au fil des expériences j'ai démontré une appétence forte pour le travail sur les interfaces ; je sais me montrer force de proposition pour les améliorer et les rendre plus ==fluides, attractives, et intuitives==.",
    },
    {
      label: "Le marketing et la communication",
      text: "J'ai suivi des études en Communication et Marketing à Paris et suis diplômée d'un ==Bac +5 en Stratégie Digitale== de Sup de Pub (INSEEC). J'ai travaillé à la ==communication digitale== interne et externe en banque et dans mes projets associatifs.",
    },
    {
      label: "L'événementiel",
      text: "J'ai organisé ==plus d'événements que je ne peux m'en rappeler== :  130 soirées de relations publiques à la Fondation BNP Paribas, des événements caritatifs (Restos du Cœur, Téléthon), des événements sportifs (la course [Odyssea](https://odyssea.info/)), des hackathons ([Dansathon](https://dansathon.eu/fr/community/community-2018/)), des séminaires, des team buildings, des événements personnels, etc.",
    },
    {
      label: "L'esprit entrepreneurial",
      text: "J'ai ==fondé ou co-fondé de nombreux projets personnels== : collectifs, groupes de travail, application personnelle, projets musicaux, projets caritatifs, etc.",
    },
    {
      label: "L'éducation financière",
      text: "J'ai développé une curiosité et un ==intérêt pour l'éducation financière==, que je nourris notamment par des lectures et que j'aime transmettre.",
    },
  ],
  conclusion: "",
}
