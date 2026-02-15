import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { stripLangFromSlug } from '../i18n/utils';

export async function GET(context: APIContext) {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  const projects = await getCollection('realisations');

  const items = [
    ...articles.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      tags: a.data.tags,
      url: `/${a.data.lang}/articles/${stripLangFromSlug(a.slug)}/`,
      lang: a.data.lang,
      type: 'article',
    })),
    ...projects.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      tags: p.data.tags,
      url: `/${p.data.lang}/realisations/${stripLangFromSlug(p.slug)}/`,
      lang: p.data.lang,
      type: 'project',
    })),
  ];

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json' },
  });
}
