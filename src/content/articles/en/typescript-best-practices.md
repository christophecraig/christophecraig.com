---
title: "TypeScript Best Practices in 2025"
description: "TypeScript patterns and practices I use daily to write more robust code."
date: 2025-02-01
tags: ["typescript", "javascript", "best-practices"]
draft: false
lang: en
---

## Strict Types from the Start

Rule number one: enable `strict: true` in your `tsconfig.json`. This activates several checks that catch bugs before runtime.

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true
  }
}
```

## Prefer Types Over Interfaces

Types offer more flexibility with unions and intersections:

```typescript
type Result<T> = { success: true; data: T } | { success: false; error: string };
```

## Use Branded Types

To avoid mixing up values of the same primitive type:

```typescript
type UserId = string & { readonly __brand: 'UserId' };
type OrderId = string & { readonly __brand: 'OrderId' };
```

These simple practices significantly improve day-to-day code quality.
