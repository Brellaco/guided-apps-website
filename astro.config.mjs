import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://guided-apps.com',
  server: {
    host: '0.0.0.0',
    port: 4321,
  },
});
