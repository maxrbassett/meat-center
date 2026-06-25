import { defineConfig } from 'astro/config';

// Single static page at "/". No integrations, no client framework — keep it fast.
export default defineConfig({
  site: 'https://meatcenterlancaster.example', // CONFIRM: real domain once owner provides one
  compressHTML: true,
});
