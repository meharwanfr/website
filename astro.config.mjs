// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },  markdown: {
    shikiConfig: {
      themes: {
        dark: 'kanagawa-dragon',
        light: 'catppuccin-latte'
      }
    },
  },

});
