import type { Experience } from "./types"

// Version "profil développeuse" : non affichée pour l'instant, conservée pour
// d'autres candidatures. L'accueil affiche src/content/sections.ts.

// Projets personnels, du plus récent au plus ancien.
export const SIDE_PROJECTS: Experience[] = [
  {
    title: "Calendor",
    context: "Projet personnel",
    period: "2026 - aujourd'hui",
    summary:
      "Application web qui génère des documents PDF personnalisés (calendriers, CV…), menée seule de l'idée à la mise en production : cadrage, roadmap, conception UX/UI. Authentification et base de données avec Supabase, qualité outillée (TypeScript, Biome, oxlint) et accessibilité WCAG AAA. Développement assisté par IA, encadré par des règles d'agents centralisées et une relecture systématique.",
    skills: [
      "React 19 & Vite",
      "Supabase",
      "Accessibilité WCAG AAA",
      "Gestion de produit",
      "Développement assisté par IA",
    ],
  },
  {
    title: "Resume",
    context: "Projet personnel",
    period: "2025 - aujourd'hui",
    summary:
      "CV en ligne bilingue : site Angular 19 avec rendu côté serveur (SSR), internationalisation français / anglais, composants PrimeNG et tests unitaires Jasmine / Karma. Design, UX/UI, architecture et structure du contenu définis de bout en bout.",
    skills: [
      "Angular 19 & SSR",
      "Internationalisation",
      "PrimeNG",
      "Tests unitaires",
      "Conception UX/UI",
    ],
  },
]
