import { HashRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { JOB_TITLE, NAME } from "./content/header"
import { HomePage } from "./pages/HomePage/HomePage"
import { SectionPage } from "./pages/SectionPage/SectionPage"
import { Navbar } from "./shared/Navbar/Navbar"
import { COMMIT_HASH } from "./version"

// HashRouter : GitHub Pages ne sait pas renvoyer index.html sur une URL
// inconnue, les routes passent donc après le #.
export default function App() {
  return (
    <HashRouter>
      <main className="app">
        <div className="app-header">
          <div className="app-title">
            <h1>{NAME}</h1>
            <p className="app-job-title">{JOB_TITLE}</p>
          </div>
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:slug" element={<SectionPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>

        <footer className="footer">
          <p>version {COMMIT_HASH}</p>
        </footer>
      </main>
    </HashRouter>
  )
}
