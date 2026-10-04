import type { Section } from "../../../../content/types"
import { Card } from "../../../../shared/Card/Card"
import { RichText } from "../../../../shared/RichText/RichText"
import { ExperienceItem } from "../ExperienceItem/ExperienceItem"

interface SectionCardProps {
  section: Section
}

// Un chapitre du parcours : une seule carte, une sous-section par expérience
export function SectionCard({ section }: SectionCardProps) {
  return (
    <Card variantColor={section.variantColor}>
      <h2>{section.title}</h2>
      {section.intro && (
        <p className="hint">
          <RichText text={section.intro} />
        </p>
      )}
      {section.items.map(item => (
        <ExperienceItem key={item.title} experience={item} />
      ))}
    </Card>
  )
}
