# Myrabook

Book public, hébergé sur GitHub Pages : https://myracodes.github.io/myrabook/

## Stack

- [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript
- [React Router](https://reactrouter.com) en `HashRouter` (GitHub Pages ne gère pas les routes côté serveur)
- Formatage : [Biome](https://biomejs.dev) — lint : [oxlint](https://oxc.rs)

## Contenu

Tout le contenu éditorial vit dans `src/content/` :

- `projects.ts` : les projets affichés sur l'accueil (un projet = une page `#/projets/<slug>`)
- `about.ts` : la page « À propos »

## Développement

```sh
npm install
npm run dev      # serveur de développement
npm run build    # build de production
npm run lint     # lint (oxlint)
npm run format   # formatage (biome)
```

## Déploiement

Chaque push sur `main` déclenche `.github/workflows/deploy.yml`, qui builde et publie sur GitHub Pages.
À activer une fois : Settings → Pages → Source : **GitHub Actions**.

## Documentation

- [Règles pour les agents IA](AGENTS.md)
