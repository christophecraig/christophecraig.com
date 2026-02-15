import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    lang: z.enum(['fr', 'en']),
    image: z.string().optional(),
  }),
});

const realisations = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    lang: z.enum(['fr', 'en']),
    featured: z.boolean().default(false),
  }),
});

export const collections = { articles, realisations };
