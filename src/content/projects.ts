import type { Project } from "./types"

// Contenu provisoire : à remplacer par les vrais projets.
export const PROJECTS: Project[] = [
  {
    slug: "projet-exemple",
    title: "Projet exemple",
    summary: "Une courte description du projet.",
    year: 2026,
    tags: ["tag"],
    body: ["Premier paragraphe de présentation.", "Deuxième paragraphe."],
  },
  {
    slug: "autre-projet",
    title: "Autre projet",
    summary: "Une autre courte description.",
    body: ["Paragraphe de présentation."],
  },
]
