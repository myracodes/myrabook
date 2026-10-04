import { HashRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { AboutPage } from "./pages/AboutPage/AboutPage"
import { HomePage } from "./pages/HomePage/HomePage"
import { ProjectPage } from "./pages/ProjectPage/ProjectPage"
import { Navbar } from "./shared/Navbar/Navbar"
import { COMMIT_HASH } from "./version"

// HashRouter : GitHub Pages ne sait pas renvoyer index.html sur une URL
// inconnue, les routes passent donc après le #.
export default function App() {
  return (
    <HashRouter>
      <main className="app">
        <div className="app-header">
          <h1>Myriam MIRA</h1>
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projets/:slug" element={<ProjectPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>

        <footer className="footer">
          <p>version {COMMIT_HASH}</p>
        </footer>
      </main>
    </HashRouter>
  )
}
