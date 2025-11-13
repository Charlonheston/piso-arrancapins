/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#666666',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontWeight: {
        extralight: '200',
      },
      colors: {
        'gray-bg': '#f5f5f5',
      },
      boxShadow: {
        'sm': '0 2px 8px 0 rgb(0 0 0 / 0.06), 0 1px 4px -1px rgb(0 0 0 / 0.04)',
      },
    },
  },
  plugins: [],
}

