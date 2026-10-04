import "./RichText.css"

interface RichTextProps {
  text: string
}

// Repère les passages à surligner, écrits ==entre doubles égals== dans le contenu
const HIGHLIGHT_PATTERN = /==(.+?)==/

// Affiche un texte du contenu en surlignant les passages marqués ==ainsi==
export function RichText({ text }: RichTextProps) {
  // Avec un groupe capturant, split intercale les passages marqués :
  // les index impairs sont donc les passages à surligner
  const parts = text.split(HIGHLIGHT_PATTERN)

  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="rich-text-highlight">
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  )
}
