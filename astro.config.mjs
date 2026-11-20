// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { bundledThemes } from 'shiki';

// Preserve the existing syntax palettes and strengthen faint token colors.
const lightSyntaxTheme = {
  ...(await bundledThemes['catppuccin-latte']()).default,
  colorReplacements: {
    '#179299': '#0f6a70',
    '#1e66f5': '#1756d3',
    '#40a02b': '#28751a',
    '#7c7f93': '#5f6275',
    '#df8e1d': '#8d570e',
    '#e64553': '#ba2939',
    '#fe640b': '#a84507',
  },
};
const darkSyntaxTheme = {
  ...(await bundledThemes['kanagawa-dragon']()).default,
  colorReplacements: { '#737c73': '#91918c' },
};

export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  markdown: {
    shikiConfig: {
      themes: { dark: darkSyntaxTheme, light: lightSyntaxTheme },
    },
  },
});
