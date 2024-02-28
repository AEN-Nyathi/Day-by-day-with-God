import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#F0F8FF',
        dark: '#111111',
    
        primary: 'rgb(var(--color-primary) / var(--color-transparency))',
      },
      backgroundImage: {
        'logo': "url('/src/assets/logo.png')",
        'classroom': "url('/src/assets/classroom.jpg')",
      }
    },
  },
  plugins: [],
} satisfies Config

