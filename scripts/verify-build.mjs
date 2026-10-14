import { readFile, readdir } from 'node:fs/promises';
import { resolve, relative } from 'node:path';
import assert from 'node:assert/strict';

// Check the generated site's observable output, without extra dependencies.
const dist = resolve('dist');
async function findHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(entry => entry.isDirectory()
    ? findHtml(resolve(directory, entry.name))
    : entry.name.endsWith('.html') ? [resolve(directory, entry.name)] : []));
  return nested.flat();
}
const files = await findHtml(dist);
const pages = new Map(await Promise.all(files.map(async file => [file, await readFile(file, 'utf8')])));
const anchors = html => new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
let checkedLinks = 0;
for (const [file, html] of pages) {
  const label = relative(dist, file);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${label}: expected one h1`);
  assert.match(html, /<main\b/, `${label}: missing main landmark`);
  assert.match(html, /name="description"/, `${label}: missing description`);
  assert.match(html, /name="robots" content="noindex, nofollow"/, `${label}: draft must stay noindex`);
  assert.doesNotMatch(html, /<script\b/i, `${label}: production draft should require no browser JavaScript`);
  assert.doesNotMatch(html, /PC Repair|Book a Visit|80\+ happy|same-day|no-fix|\[PROJECT TITLE\]/i, `${label}: obsolete or placeholder content`);
  for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    if (/^(https?:|mailto:)/.test(href)) continue;
    const currentPath = label.replaceAll('\\', '/').replace(/index\.html$/, '');
    const url = new URL(href, `https://local.invalid/${currentPath}`);
    const target = resolve(dist, `.${url.pathname.endsWith('/') ? `${url.pathname}index.html` : url.pathname}`);
    assert(pages.has(target), `${label}: missing link destination ${href}`);
    if (url.hash) assert(anchors(pages.get(target)).has(decodeURIComponent(url.hash.slice(1))), `${label}: missing anchor ${href}`);
    checkedLinks++;
  }
}
assert(pages.has(resolve(dist, '404.html')), 'Missing static 404 page');
console.log(`Verified ${pages.size} static pages and ${checkedLinks} internal links; no client scripts, draft indexing, or obsolete site claims.`);
