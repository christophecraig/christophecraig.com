---
title: "Building a Personal Site with Astro"
description: "How I built my bilingual personal website using Astro, Tailwind CSS, and Markdown."
date: 2026-02-15
tags: ["astro", "tailwind", "web"]
draft: false
lang: en
---

## Why Astro?

When I decided to rebuild my personal site, I had a few criteria: performance, simplicity, and the ability to write in Markdown.

Astro checked all the boxes. Its "zero JavaScript by default" approach produces ultra-fast pages, and Content Collections make content management enjoyable.

## The Tech Stack

- **Astro** for static generation
- **Tailwind CSS** for styling
- **Markdown** for content
- **GitHub Actions** for automated deployment

## The Result

A fast, accessible, and easy-to-maintain website. Each article is a simple Markdown file I can edit from any text editor.

```javascript
// Content Collection example
const articles = await getCollection("articles");
```

Next steps include adding an RSS feed and improving SEO.
