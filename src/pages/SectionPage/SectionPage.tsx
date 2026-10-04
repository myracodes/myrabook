import { Navigate, useParams } from "react-router-dom"
import { SECTIONS } from "../../content/sections"
import { SectionCard } from "./components/SectionCard/SectionCard"

// Un chapitre du parcours, retrouvé par son slug dans l'URL
export function SectionPage() {
  const { slug } = useParams()
  const section = SECTIONS.find(candidate => candidate.slug === slug)

  // Slug inconnu : retour à l'accueil plutôt qu'une page vide
  if (!section) return <Navigate to="/" replace />

  return <SectionCard section={section} />
}
