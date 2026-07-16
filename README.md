# Portfolio

Laura Norwood's personal portfolio site, built with [Astro](https://astro.build) and
TypeScript, deployed to GitHub Pages.

This is an extension of my CV, showcasing a few recent projects — it isn't a public product,
just a place to point people who want a quick look at what I've built.

## Development

```sh
npm install
npm run dev      # http://localhost:4321/Portfolio/
npm run build    # outputs to ./dist
npm run preview  # preview the production build locally
```

## Design

Dark, terminal-inspired theme — monospace UI chrome, comment-style section labels, and
project cards styled like little code-editor windows. Fonts are [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
(body/headings) and [Space Mono](https://fonts.google.com/specimen/Space+Mono) (nav, labels,
code accents), loaded from Google Fonts in `src/layouts/Layout.astro`.

## Project structure

```
src/
  data/projects.ts           # project cards shown on the site
  layouts/Layout.astro       # base HTML shell, fonts, meta tags
  components/                # Nav, Footer, ProjectCard
  scripts/project-filter.ts  # client-side language filter for the projects grid
  pages/index.astro          # the single-page site
```

### Keeping projects in sync

The **Featured projects** section is meant to mirror the pinned repos on
[github.com/Lanthanum89](https://github.com/Lanthanum89). There's no automation for this —
if the pinned repos change, update the `featured: true` entries (and the rest of the list) in
`src/data/projects.ts` by hand. Each entry's `language` drives the filter buttons above the
grid, and `ext`/`slug` control the fake filename shown in a card's title bar (e.g. `squish-pop.js`).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site with Astro
and deploys it to GitHub Pages at `https://lanthanum89.github.io/Portfolio/`.

This **requires** repo **Settings → Pages → Build and deployment → Source** to be set to
**"GitHub Actions"**, not "Deploy from a branch". If it's left on the legacy branch-deploy
setting, GitHub runs its own automatic Jekyll build instead of (well, alongside — and it wins)
this workflow, which fails outright since Jekyll tries to parse the `---` in `.astro` component
files as YAML front matter. Symptoms of this misconfiguration: the live site looks like the
default GitHub Pages theme (or shows raw unstyled HTML), or the Actions tab shows a failing
`pages build and deployment` run alongside a succeeding `Deploy to GitHub Pages` run.
