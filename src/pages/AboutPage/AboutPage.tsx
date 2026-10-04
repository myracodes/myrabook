import { ABOUT } from "../../content/about"
import { Card } from "../../shared/Card/Card"
import "./AboutPage.css"

export function AboutPage() {
  return (
    <Card variantColor="sun">
      <h2>À propos</h2>
      {ABOUT.map((paragraph, i) => (
        <p key={i} className="about-paragraph">
          {paragraph}
        </p>
      ))}
    </Card>
  )
}
