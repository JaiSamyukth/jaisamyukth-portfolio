// Turns the client build into static HTML: one file per route with real content,
// per-page meta and JSON-LD, plus sitemap.xml and llms.txt. Crawlers and AI
// agents that don't run JavaScript see the full site.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const server = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);

const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');
if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) {
  throw new Error('index.html is missing the <!--app-head--> / <!--app-html--> placeholders');
}

const page = (url) => {
  const { html, head } = server.render(url);
  return template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
};

for (const url of server.allPaths) {
  const file = url === '/' ? path.join(dist, 'index.html') : path.join(dist, url.slice(1), 'index.html');
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, page(url));
  console.log('prerendered', url);
}

await fs.writeFile(path.join(dist, '404.html'), page('/404'));
console.log('prerendered 404.html');

const today = new Date().toISOString().slice(0, 10);
await fs.writeFile(path.join(dist, 'sitemap.xml'), server.sitemap(today));
const { short, full } = server.llms();
await fs.writeFile(path.join(dist, 'llms.txt'), short);
await fs.writeFile(path.join(dist, 'llms-full.txt'), full);
console.log('wrote sitemap.xml, llms.txt, llms-full.txt');

await fs.rm(path.join(root, 'dist-ssr'), { recursive: true, force: true });
