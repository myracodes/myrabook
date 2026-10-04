import type { Pitch } from "../../../../content/types"
import { Card } from "../../../../shared/Card/Card"
import { RichText } from "../../../../shared/RichText/RichText"
import "./PitchCard.css"

interface PitchCardProps {
  pitch: Pitch
}

// La présentation : une accroche, les points forts en liste, une conclusion
export function PitchCard({ pitch }: PitchCardProps) {
  return (
    <Card>
      <h2>{pitch.title}</h2>
      <p className="pitch-intro"><RichText text={pitch.intro} /></p>
      <p className="pitch-highlights-intro"><RichText text={pitch.highlightsIntro} /></p>
      <ul className="pitch-highlights">
        {pitch.highlights.map(highlight => (
          <li key={highlight.label} className="pitch-highlight">
            <strong>{highlight.label}</strong>
            <span>
              <RichText text={highlight.text} />
            </span>
            {highlight.toComplete && (
              <span className="pitch-to-complete">À compléter</span>
            )}
          </li>
        ))}
      </ul>
      <p className="pitch-conclusion"><RichText text={pitch.conclusion} /></p>
    </Card>
  )
}
