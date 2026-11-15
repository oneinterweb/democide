# Power Kills: a multilingual companion

An independent English–Bulgarian companion project. It currently contains original introductory copy and links to the [original archive](https://www.hawaii.edu/powerkills/welcome.html); it does not include archive texts or translations.

## Local development

Install Node.js 22 or newer, then run:

```sh
npm ci
npm run dev
```

Run `npm run build` to create the static site in `dist/`. UI copy lives in `src/translations.ts`. A fluent Bulgarian reviewer should review the initial copy.

## Publish with GitHub Pages

1. Create a public repository and push this project to its `main` branch.
2. In repository **Settings → Pages**, set **Source** to **GitHub Actions**.
3. The included workflow builds and deploys after a push to `main`, or can be run manually from Actions.

The configuration automatically detects the owner and repository name in GitHub Actions and sets the correct project-site base path. For a custom domain, set `SITE_URL` and `BASE_PATH` as workflow environment variables (normally the domain and `/`); also configure the domain in GitHub Pages settings and DNS. For a local project-path build, use the same variables.

## Content and rights

The software is provided under the MIT license in `LICENSE`. This license does not grant rights to the original archive, third-party materials, or future contributions unless their rights holders expressly grant them. Check and record rights for each work before publishing copies or translations. See `CONTRIBUTING.md`.
