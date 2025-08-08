import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// IMPORTANT for GitHub Pages: set site to your eventual URL (update after you set the custom domain)
// For now we keep it generic; GitHub Pages workflow sets base automatically.
export default defineConfig({
  integrations: [tailwind(), mdx()],
  site: 'https://lupenobos.no/',
  output: 'static'
});
