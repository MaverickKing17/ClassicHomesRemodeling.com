/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A', // Slate 900
        secondary: '#111111', // Rich Black
        gold: '#D4AF37', // Metallic Gold
        'gold-light': '#F4CF57',
        trust: '#065F46', // Deep Green
        surface: '#FAFAFA',
      },
      fontFamily: {
        serif: ['Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'touch': '44px', // Minimum touch target
      }
    },
  },
  plugins: [],
}