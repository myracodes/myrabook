import { NavLink } from "react-router-dom"
import { PITCH } from "../../content/pitch"
import { SECTIONS } from "../../content/sections"
import "./Navbar.css"

// Une entrée par carte : l'accroche sur l'accueil, puis un chapitre par page
const LINKS = [
  { to: "/", label: PITCH.title },
  ...SECTIONS.map(section => ({ to: `/${section.slug}`, label: section.title })),
]

export function Navbar() {
  return (
    <nav className="navbar">
      {LINKS.map(link => (
        <NavLink
          key={link.to}
          to={link.to}
          // end : "/" ne doit pas rester actif sur toutes les autres routes
          end
          className={({ isActive }) =>
            `navbar-link${isActive ? " navbar-link--active" : ""}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}
