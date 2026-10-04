import type { CardVariantColor } from "../shared/Card/Card"

// Dans les textes du contenu, un passage écrit ==ainsi== s'affiche surligné
// et [un texte](https://…) devient un lien externe (voir RichText)

export interface Experience {
  // Intitulé de la carte (poste, thème ou projet)
  title: string
  // Entreprise ou cadre (ex. "Projet personnel")
  context: string
  period: string
  // Résumé court de ce qui a été fait
  summary: string
  // Compétences développées, affichées en étiquettes
  skills: string[]
  // Carte dont le contenu reste à rédiger : affiche une mention "À compléter"
  toComplete?: boolean
}

// Un chapitre du parcours : un titre, une intro facultative et ses cartes
export interface Section {
  // Chemin de la page du chapitre (ex. "banque" → #/banque)
  slug: string
  title: string
  intro?: string
  variantColor: CardVariantColor
  items: Experience[]
}

// Un point fort de la présentation : un intitulé mis en avant et son détail
export interface PitchHighlight {
  label: string
  text: string
  // Point dont le contenu reste à rédiger : affiche une mention "À compléter"
  toComplete?: boolean
}

// Carte de présentation de l'accueil : une accroche, les points forts, une conclusion
export interface Pitch {
  title: string
  intro: string
  // Phrase qui annonce la liste des points forts
  highlightsIntro: string
  highlights: PitchHighlight[]
  conclusion: string
}
