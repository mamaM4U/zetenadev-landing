import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 28px rgba(0, 183, 255, .32)',
        solar: '0 18px 70px rgba(238, 166, 48, .18)',
      },
    },
  },
  plugins: [],
} satisfies Config;
