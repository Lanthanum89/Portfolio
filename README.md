# Portfolio

Laura Norwood's personal portfolio — an extension of my CV, not a public product. Built with
[Astro](https://astro.build) and TypeScript, deployed to GitHub Pages.

## Development

```sh
npm install
npm run dev      # http://localhost:4321/
npm run build
npm run preview
```

## Deployment

Pushing to `main` builds and deploys via `.github/workflows/deploy.yml`. Repo **Settings →
Pages → Source** must be set to **GitHub Actions** (not "Deploy from a branch") for this to work.

Served at [lauranorwood.net](https://lauranorwood.net) via a custom domain, set through
`public/CNAME`. DNS for the domain must point at GitHub Pages (A records for `@`, optionally a
CNAME for `www`) — see GitHub's [custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
for current values.
