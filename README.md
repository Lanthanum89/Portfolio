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

## Project structure

```
src/
  data/projects.ts           # project cards shown on the site (mirrors pinned GitHub repos)
  layouts/Layout.astro       # base HTML shell
  components/                # Nav, Footer, ProjectCard
  scripts/project-filter.ts  # client-side language filter for the projects grid
  pages/index.astro          # the single-page site
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys
it to GitHub Pages at `https://lanthanum89.github.io/Portfolio/`. In the repo settings, set
**Pages > Source** to **GitHub Actions**.
