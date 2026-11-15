import { defineConfig } from 'astro/config';

// GitHub Actions provides these values automatically. Set them for local builds if needed.
const repository = process.env.GITHUB_REPOSITORY?.split('/');
const owner = repository?.[0];
const name = repository?.[1];
const projectBase = name && name.toLowerCase() !== `${owner?.toLowerCase()}.github.io` ? `/${name}` : '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://democide.threefold.life',
  base: process.env.BASE_PATH || '/',
  i18n: { defaultLocale: 'en', locales: ['en', 'bg'], routing: { prefixDefaultLocale: true } },
});

