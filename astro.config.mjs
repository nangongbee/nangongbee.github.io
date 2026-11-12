import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wuyingzhen.github.io',
  trailingSlash: 'always',
  integrations: [sitemap()],
  redirects: {
    '/archives': '/blog/',
    '/archives/2019': '/blog/',
    '/archives/2019/12': '/blog/',
    '/donate': '/',
  },
});
