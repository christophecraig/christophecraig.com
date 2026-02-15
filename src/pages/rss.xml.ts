import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { stripLangFromSlug } from '../i18n/utils';

export async function GET(context: APIContext) {
  const articles = (await getCollection('articles', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Christophe Craig',
    description: 'Articles sur le développement web / Web development articles',
    site: context.site!,
    items: articles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.date,
      description: article.data.description,
      link: `/${article.data.lang}/articles/${stripLangFromSlug(article.slug)}/`,
    })),
  });
}
