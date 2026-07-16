# Portfolio

Personal portfolio site for [lauranorwood.net](https://lauranorwood.net), built with
[Astro](https://astro.build) and TypeScript, deployed to GitHub Pages.

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  data/projects.ts     # project cards shown on the site
  layouts/Layout.astro # base HTML shell
  components/          # Nav, Footer, ProjectCard
  pages/index.astro    # the single-page site
public/
  CNAME                # custom domain for GitHub Pages
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys
it to GitHub Pages. In the repo settings, set **Pages > Source** to **GitHub Actions**, and
configure the `lauranorwood.net` DNS to point at GitHub Pages (see the
[GitHub Pages custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
