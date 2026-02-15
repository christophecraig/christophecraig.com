---
title: "TypeScript : bonnes pratiques en 2025"
description: "Les patterns et pratiques TypeScript que j'utilise au quotidien pour écrire du code plus robuste."
date: 2025-02-01
tags: ["typescript", "javascript", "bonnes-pratiques"]
draft: false
lang: fr
---

## Types stricts dès le départ

La première règle : activer `strict: true` dans votre `tsconfig.json`. Cela active plusieurs vérifications qui attrapent des bugs avant même l'exécution.

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true
  }
}
```

## Préférer les types aux interfaces

Les types offrent plus de flexibilité avec les unions et intersections :

```typescript
type Result<T> = { success: true; data: T } | { success: false; error: string };
```

## Utiliser les branded types

Pour éviter de confondre des valeurs du même type primitif :

```typescript
type UserId = string & { readonly __brand: 'UserId' };
type OrderId = string & { readonly __brand: 'OrderId' };
```

Ces pratiques simples améliorent considérablement la qualité du code au quotidien.
