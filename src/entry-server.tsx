import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { App } from './App';
import { allPaths, getMeta, renderHead } from './lib/seo';
import { buildLlms, buildSitemap } from './lib/aieo';

export { allPaths };

export function render(url: string) {
  const html = renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>,
  );
  return { html, head: renderHead(getMeta(url)) };
}

export const sitemap = buildSitemap;
export const llms = buildLlms;
