import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  return `/${lang}${path}`;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'fr' ? 'en' : 'fr';
}

/** Strip the lang prefix from a content collection slug (e.g. "fr/my-article" → "my-article") */
export function stripLangFromSlug(slug: string): string {
  return slug.replace(/^(fr|en)\//, '');
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
