# christophecraig.com

Site personnel bilingue (FR/EN) construit avec Astro, Tailwind CSS et Markdown.

## Stack

- **Astro** — Générateur de site statique
- **Tailwind CSS v3** — Styling utilitaire avec `@tailwindcss/typography`
- **Markdown** — Contenu (articles, projets, CV)
- **Fuse.js** — Recherche côté client
- **GitHub Actions** — Déploiement automatique sur VPS

## Développement

```bash
pnpm install
pnpm dev       # Serveur de développement sur localhost:4321
pnpm build     # Build statique dans dist/
pnpm preview   # Prévisualiser le build
```

## Structure

```
src/
├── content/           # Collections de contenu (articles, réalisations)
│   ├── config.ts      # Schémas Zod
│   ├── articles/      # Articles FR et EN
│   └── realisations/  # Projets FR et EN
├── data/              # CV en Markdown (cv-fr.md, cv-en.md)
├── layouts/           # BaseLayout.astro
├── pages/             # Routes FR et EN
├── components/        # Composants Astro
├── i18n/              # Traductions et utilitaires i18n
└── styles/            # CSS global + Tailwind
```

## Ajouter du contenu

### Article

Créer un fichier dans `src/content/articles/fr/` ou `src/content/articles/en/` :

```markdown
---
title: "Mon article"
description: "Description courte"
date: 2025-01-01
tags: ["tag1", "tag2"]
draft: false
lang: fr
---

Contenu de l'article en Markdown...
```

### Réalisation

Créer un fichier dans `src/content/realisations/fr/` ou `src/content/realisations/en/` :

```markdown
---
title: "Mon projet"
description: "Description du projet"
date: 2025-01-01
tags: ["react", "node"]
url: "https://example.com"
repo: "https://github.com/user/repo"
lang: fr
featured: true
---

Détails du projet...
```

## Déploiement

Le site se déploie automatiquement sur le VPS via GitHub Actions à chaque push sur `main`.

### Secrets GitHub requis

| Secret | Description |
|--------|-------------|
| `VPS_HOST` | IP ou domaine du VPS |
| `VPS_USER` | Utilisateur SSH (ex: `ccraig`) |
| `VPS_PATH` | Chemin sur le VPS (ex: `/home/ccraig/workspace/christophecraig.com`) |
| `SSH_PRIVATE_KEY` | Clé SSH privée pour l'accès au VPS |

### Configuration Nginx

Voir `nginx.conf.example` pour un exemple de configuration Nginx.

## Fonctionnalités

- Bilingue FR/EN avec switcher de langue
- Dark mode avec persistance localStorage
- Recherche côté client (Fuse.js)
- Scroll infini sur la liste d'articles
- Flux RSS (`/rss.xml`)
- Sitemap automatique
- CV avec bouton téléchargement PDF
- Animations au scroll et hover
- Design responsive
- Typographie machine à écrire (Courier Prime)
