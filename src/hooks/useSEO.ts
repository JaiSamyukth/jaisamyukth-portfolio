import { useEffect } from 'react';

interface SEOOptions {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const BASE_TITLE = 'Jai Samyukth B U';
const BASE_URL   = 'https://jaisamyukth.com';

export function useSEO({ title, description, canonical, ogImage }: SEOOptions) {
  useEffect(() => {
    // Document title
    document.title = title.includes(BASE_TITLE)
      ? title
      : `${title} | ${BASE_TITLE}`;

    const setMeta = (selector: string, value: string, attr: 'content' | 'href' = 'content') => {
      let el = document.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
      if (!el) return;
      (el as any)[attr] = value;
    };

    // Primary meta
    setMeta('meta[name="description"]', description);

    // Open Graph
    setMeta('meta[property="og:title"]', document.title);
    setMeta('meta[property="og:description"]', description);
    if (canonical) setMeta('meta[property="og:url"]', `${BASE_URL}/${canonical}`);
    if (ogImage)   setMeta('meta[property="og:image"]', ogImage);

    // Twitter Card
    setMeta('meta[property="twitter:title"]', document.title);
    setMeta('meta[property="twitter:description"]', description);
    if (canonical) setMeta('meta[property="twitter:url"]', `${BASE_URL}/${canonical}`);
    if (ogImage)   setMeta('meta[property="twitter:image"]', ogImage);

    // Canonical link
    if (canonical) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (link) link.href = `${BASE_URL}/${canonical}`;
    }
  }, [title, description, canonical, ogImage]);
}
