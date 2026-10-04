import "./RichText.css"

interface RichTextProps {
  text: string
}

// Repère les passages balisés dans le contenu : ==à surligner== ou [texte du lien](url)
const MARKUP_PATTERN = /(==.+?==|\[.+?\]\(.+?\))/
const HIGHLIGHT_PATTERN = /^==(.+)==$/
const LINK_PATTERN = /^\[(.+)\]\((.+)\)$/

// Affiche un texte du contenu en surlignant les passages marqués ==ainsi==
// et en transformant les [liens](url) en liens externes
export function RichText({ text }: RichTextProps) {
  // Avec un groupe capturant, split intercale les passages balisés entre les morceaux de texte brut
  const parts = text.split(MARKUP_PATTERN)

  return (
    <>
      {parts.map((part, i) => {
        const highlight = part.match(HIGHLIGHT_PATTERN)
        if (highlight) {
          return (
            <mark key={i} className="rich-text-highlight">
              {highlight[1]}
            </mark>
          )
        }

        const link = part.match(LINK_PATTERN)
        if (link) {
          return (
            <a
              key={i}
              className="rich-text-link"
              href={link[2]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link[1]}
            </a>
          )
        }

        return part
      })}
    </>
  )
}
