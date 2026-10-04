import { NavLink } from "react-router-dom"
import "./Navbar.css"

const LINKS = [
  { to: "/", label: "Projets" },
  { to: "/a-propos", label: "À propos" },
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
