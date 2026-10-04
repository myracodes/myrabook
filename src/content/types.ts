export interface Project {
  // Identifiant utilisé dans l'URL : #/projets/<slug>
  slug: string
  title: string
  // Phrase d'accroche affichée sur la carte de l'accueil
  summary: string
  year?: number
  tags?: string[]
  // Un élément = un paragraphe sur la page du projet
  body: string[]
}
