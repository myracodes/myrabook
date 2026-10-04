import { Link } from "react-router-dom"
import { PROJECTS } from "../../content/projects"
import { Card } from "../../shared/Card/Card"
import "./HomePage.css"

export function HomePage() {
  return (
    <div className="project-list">
      {PROJECTS.map(project => (
        <Link
          key={project.slug}
          to={`/projets/${project.slug}`}
          className="project-link"
        >
          <Card variantColor="candy">
            <h2>{project.title}</h2>
            <p className="hint">{project.summary}</p>
          </Card>
        </Link>
      ))}
    </div>
  )
}
