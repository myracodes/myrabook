import { Link, useParams } from "react-router-dom"
import { PROJECTS } from "../../content/projects"
import { Card } from "../../shared/Card/Card"
import "./ProjectPage.css"

export function ProjectPage() {
  const { slug } = useParams()
  const project = PROJECTS.find(candidate => candidate.slug === slug)

  if (project === undefined) {
    return (
      <Card>
        <h2>Projet introuvable</h2>
        <Link to="/">Retour aux projets</Link>
      </Card>
    )
  }

  const meta = [project.year, ...(project.tags ?? [])].filter(Boolean)

  return (
    <Card variantColor="sky">
      <h2>{project.title}</h2>
      {meta.length > 0 && <p className="hint">{meta.join(" · ")}</p>}
      {project.body.map((paragraph, i) => (
        <p key={i} className="project-paragraph">
          {paragraph}
        </p>
      ))}
      <Link to="/" className="project-back">
        ← Retour aux projets
      </Link>
    </Card>
  )
}
