# IVy TechOps

A local personal-brand website draft for Iskandar Verdiyev, AI Automation Engineer. Built with Astro + strict TypeScript, semantic HTML, and plain CSS. Static output; no client framework, animation library, CMS, analytics, contact backend, or deployment integration.

## Development

Use Node **24.16.0** (tested, recorded in `.node-version`) or a compatible supported Node release **22.12.0+**. npm is the package manager; commit `package-lock.json` when dependency inputs change.

```sh
npm ci
npm run dev
```

Open the printed local URL, normally `http://127.0.0.1:4321/`. Add `-- --port 4321` to select a port explicitly. The server binds to loopback, so the draft stays on your machine.

```sh
npm run check
npm run build
npm run verify
npm run preview
```

`check` type-checks Astro and TypeScript. `build` writes the production site to `dist/`. `verify` checks generated pages, links/fragments, semantic foundations, absence of client scripts and obsolete claims, and draft indexing rules. `preview` serves the built output; restart it after rebuilding if needed. Stop a local server with Ctrl+C.

## Editing

| Location | Responsibility |
| --- | --- |
| `src/pages/index.astro` | Homepage narrative and section composition |
| `src/pages/contact.astro` | Email contact destination, without simulated submission |
| `src/pages/404.astro` | Custom missing-page content |
| `src/layouts/BaseLayout.astro` | Shared metadata, landmarks, header/footer, global CSS |
| `src/components/` | Brand, navigation, buttons, headings, SVG icons, workflow/project visuals, FAQ |
| `src/data/site.ts` | Public identity, contact, navigation, owner-supplied summaries, FAQs |
| `src/styles/tokens.css` | Palette, typography, spacing, radii, container width |
| `src/styles/global.css` | Presentation, responsive layouts, and motion rules |
| `public/fonts/` | Self-hosted Latin WOFF2 fonts and SIL Open Font Licenses |
| `docs/website-rebuild-plan.md` | Discovery, evidence rules, scope, implementation record |

This phase builds `/`, `/contact/`, and `/404.html`. Navigation uses real homepage anchors. Service detail pages, an About route, project collections, and full case studies remain later work; no empty project routes are generated.

Self-hosted Manrope (400–800 variable) handles all typography. Emphasized headlines, monograms, and process numbers use an upright bold 700 weight. Original diagrams illustrate workflows; they are not screenshots or evidence of real outcomes. Contact links open the owner's confirmed email address; the site sends no message.

## Accessibility and motion

Core production content requires **zero browser JavaScript**. Mobile navigation and FAQs use native `details`/`summary`; links retain visible keyboard focus. Responsive layouts cover narrow mobile through desktop. Reduced motion disables animation, transitions, smooth scrolling, and hover movement. Content never waits for a reveal script.

## Draft and future hosting

The draft is deliberately `noindex, nofollow`; `public/robots.txt` disallows crawling. `SITE_URL` is unset, so no invented canonical hostname is emitted. Description/social metadata lives in the layout. `.env.example` documents the future hostname input; set it in the shell or build environment, since the Astro config reads `process.env.SITE_URL`.

Before publication, assign the real Workers hostname, set `SITE_URL`, deliberately revise draft robots rules, complete launch checks, and add a sitemap/share image as appropriate. Static `dist/` can later use Cloudflare Workers Static Assets with `not_found_handling: "404-page"`. No adapter or Wrangler dependency is needed for this local build; hosting configuration/deployment require a later request. There is no deploy script or deployment workflow.

## Preserved site

The previous site is preserved at Git tag **`archive/pre-astro-2026-10-14`**, commit **`f3b1f49f2733fd4a8711ac9f9b1c7e4fe2f5198a`**. The rebuild branch is **`codex/website-rebuild`**. `main` retains the previous version.

```sh
git show archive/pre-astro-2026-10-14:index.html
git show archive/pre-astro-2026-10-14:style.css
git show archive/pre-astro-2026-10-14:script.js
```

For a separate inspection checkout, run `git worktree add ../ivy-legacy archive/pre-astro-2026-10-14`. Nothing has been pushed or deployed as part of this phase.
