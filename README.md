# Portfolio

Laura Norwood's personal portfolio — an extension of my CV, not a public product. Built with
[Astro](https://astro.build) and TypeScript, deployed to GitHub Pages.

## Development

```sh
npm install
npm run dev      # http://localhost:4321/Portfolio/
npm run build
npm run preview
```

## Deployment

Pushing to `main` builds and deploys via `.github/workflows/deploy.yml`. Repo **Settings →
Pages → Source** must be set to **GitHub Actions** (not "Deploy from a branch") for this to work.
