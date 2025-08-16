import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ego-cars.cl',
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    })
  ],
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/variables.scss";`
        }
      }
    }
  }
});