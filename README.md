# Myrabook

Book public, hébergé sur GitHub Pages : https://myracodes.github.io/myrabook/

## Stack

- [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript
- [React Router](https://reactrouter.com) en `HashRouter` (GitHub Pages ne gère pas les routes côté serveur)
- Formatage : [Biome](https://biomejs.dev) — lint : [oxlint](https://oxc.rs)

## Contenu

Tout le contenu éditorial vit dans `src/content/` :

- `pitch.ts` : la carte d'introduction, seule sur l'accueil
- `sections.ts` : le parcours en chapitres, une page et une entrée de menu par chapitre (une sous-section par expérience ou thème, `toComplete` pour les cartes à rédiger)
- `experiences.ts` / `sideProjects.ts` : version « profil développeuse », non affichée pour l'instant

Dans les textes, un passage écrit `==ainsi==` s'affiche surligné.

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
