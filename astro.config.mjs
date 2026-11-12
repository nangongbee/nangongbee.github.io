import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nangongbee.github.io',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/experience/'),
    }),
  ],
  redirects: {
    '/archives': '/blog/',
    '/archives/2019': '/blog/',
    '/archives/2019/12': '/blog/',
    '/donate': '/',
  },
});
