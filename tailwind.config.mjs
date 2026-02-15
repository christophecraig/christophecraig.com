import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          light: '#FAFAF8',
          dark: '#1A1A1A',
        },
        text: {
          light: '#2D2D2D',
          dark: '#E8E8E4',
        },
        accent: {
          green: '#2D6A4F',
          yellow: '#F5E6A3',
          rose: '#E8B4B8',
          cyan: '#A8D5E2',
        },
      },
      fontFamily: {
        typewriter: ['"Courier Prime"', '"Special Elite"', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    typography,
  ],
};
