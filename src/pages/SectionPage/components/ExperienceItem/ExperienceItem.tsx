import type { Experience } from "../../../../content/types"
import { RichText } from "../../../../shared/RichText/RichText"
import "./ExperienceItem.css"

interface ExperienceItemProps {
  experience: Experience
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  // La période est facultative : on n'affiche pas de séparateur orphelin
  const subtitle = [experience.context, experience.period]
    .filter(Boolean)
    .join(" · ")

  return (
    <article className="experience">
      <div className="experience-heading">
        <h3 className="experience-title">{experience.title}</h3>
        <p className="hint">{subtitle}</p>
        {experience.toComplete && (
          <p className="experience-to-complete">À compléter</p>
        )}
      </div>
      <p className="experience-summary">
        <RichText text={experience.summary} />
      </p>
      <ul className="experience-skills" aria-label="Compétences développées">
        {experience.skills.map(skill => (
          <li key={skill} className="experience-skill">
            {skill}
          </li>
        ))}
      </ul>
    </article>
  )
}
