# Règles pour les agents IA

Règles à respecter dans ce projet. Ce fichier est mis à jour au fil de l'eau.

## Git

- Ne jamais effectuer d'action git (commit, push, branch, reset, etc.). Les opérations git sont gérées manuellement par Myriam.
- Après chaque refactorisation (ou lot de modifications cohérent), proposer un titre de commit — sans faire le commit. Style des titres existants : Conventional Commits, en anglais, en minuscules (ex. `refactor(global): share card component across pages`) avec le périmètre entre parenthèses : `global` si on touche à quelque chose qui n'est pas spécifique à une seule feature, sinon la feature concernée (`home`, `project`, `about`, etc.) ou autre si plus pertinent.

## CSS

- Pas de CSS inline (attribut `style` ou objets de style dans le JSX). Si du style est nécessaire, créer un fichier CSS dédié et l'importer.
  - Seule exception : une valeur qui dépend des données et ne peut pas s'écrire dans un CSS statique (ex. le pourcentage d'un camembert) peut passer par une **variable CSS** posée en `style` (`style={{ "--progress": "16%" }}`). Tout le reste du dessin reste dans le `.css`, et un commentaire au-dessus du `style` justifie l'exception.
- Les contrôles communs (cases à cocher, inputs, boutons…) gardent tous le même style : réutiliser les classes partagées (ex. les styles de `button` ou `.hint` de `App.css`) sans ajouter de retouche propre à une page ou à une instance.
- Les couleurs doivent toujours garantir un score d'accessibilité optimal : viser un contraste WCAG AAA (≥ 7:1 pour le texte) sur les fonds du thème (`--paper`, `--surface`). Utiliser les tokens du thème (`src/index.css`) — notamment `--success`, `--info`, `--warning`, `--danger` — plutôt que des couleurs en dur. Si besoin d'ajouter des couleurs, demander la permission en justifiant le besoin, puis vérifier le ratio. 

## Icônes (SVG)

- Pas de SVG inline dans le JSX : chaque icône vit dans un fichier `.svg` de `src/assets/icons/`, importé comme URL (`import eyeIcon from "…/assets/icons/eye.svg"`) et affiché via `<img>`. Avant de créer une icône, vérifier si elle n'existe pas déjà dans ce dossier.
- Un SVG affiché via `<img>` n'hérite pas du CSS de la page (`currentColor`, variables) : fixer la couleur dans le fichier `.svg` avec la valeur hexadécimale d'un token du thème, et l'indiquer en commentaire dans le fichier (ex. `#3b3554 = token "ink"`).

## Organisation des fichiers

- Un fichier = une responsabilité (données, types, logique d'affichage). Découper plutôt qu'entasser : voir `src/content/` (un fichier de données par type de contenu + un fichier de types partagé).
- Composants : `src/shared/` ne contient que les composants partagés (utilisés par l'app ou par plusieurs pages, ex. `Navbar`, `Card`). Un composant propre à une seule page vit dans `src/pages/<Page>/components/<Composant>/`.
- Contenu du book : tout le contenu éditorial vit dans `src/content/`, jamais en dur dans les composants.

## Commandes terminal

- Avant de demander une autorisation pour une commande dans le terminal, toujours expliquer à quoi elle sert et comment elle est construite (en une ligne)

## Langue

- Le code (identifiants, noms de variables/fonctions/fichiers) est en anglais (ex. `setLanguage`, pas `setLangue`), sauf si l'anglais rend vraiment le code incompréhensible.
- Le contenu du book (textes affichés) est en français.

## Nommage

- Des noms explicites, toujours : pas de variables d'une lettre ni d'abréviations opaques. Exception : les usages idiomatiques si communs qu'ils sont évidents, comme `e` dans un `onChange(e)` ou l'index `i` d'un `.map()`.

## Commentaires

- Pas besoin de rédiger les commentaires en anglais : le projet est développé par des francophones.
- Le commentaire qui dit à quoi correspond un style vit au-dessus du sélecteur, pas éparpillé sur ses propriétés.
- Ne pas commenter ce qu'une propriété CSS fait déjà comprendre par elle-même (un `margin-bottom` espace avec l'élément suivant, un `flex-direction: row` aligne les enfants en ligne, un `font-weight: bold` met en gras…). Commenter uniquement ce qui n'est pas déductible de la ligne : un choix de valeur précis (pourquoi 31% et pas un tiers rond), une couleur/police posée pour une raison propre à cet usage (et non déjà expliquée à la définition du token), une dépendance entre deux styles (un margin qui s'aligne sur un autre).