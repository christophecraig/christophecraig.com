---
title: "Créer un site personnel avec Astro"
description: "Comment j'ai construit mon site personnel bilingue avec Astro, Tailwind CSS et du Markdown."
date: 2025-01-15
tags: ["astro", "tailwind", "web"]
draft: false
lang: fr
---

## Pourquoi Astro ?

Quand j'ai décidé de refaire mon site personnel, j'avais quelques critères en tête : performance, simplicité et la possibilité d'écrire en Markdown.

Astro cochait toutes les cases. Son approche "zéro JavaScript par défaut" produit des pages ultra-rapides, et les Content Collections rendent la gestion de contenu agréable.

## La stack technique

- **Astro** pour la génération statique
- **Tailwind CSS** pour le styling
- **Markdown** pour le contenu
- **GitHub Actions** pour le déploiement automatique

## Le résultat

Un site rapide, accessible et facile à maintenir. Chaque article est un simple fichier Markdown que je peux éditer depuis n'importe quel éditeur de texte.

```javascript
// Exemple de Content Collection
const articles = await getCollection('articles');
```

La prochaine étape sera d'ajouter un flux RSS et d'améliorer le SEO.
