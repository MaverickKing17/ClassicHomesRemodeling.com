/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAFA',
        foreground: '#111111',
        primary: { 
          DEFAULT: '#0F172A', 
          foreground: '#FFFFFF' 
        },
        gold: { 
          DEFAULT: '#D4AF37', 
          foreground: '#000000' 
        },
        trust: '#065F46',
        muted: '#666666',
        border: '#E5E7EB',
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        xl: '1rem',
      },
      boxShadow: {
        luxury: '0 10px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)',
      },
      spacing: {
        '8pt': '0.5rem',
        '16pt': '1rem',
        '24pt': '1.5rem',
        '32pt': '2rem',
        '40pt': '2.5rem',
      },
      ringOffsetWidth: {
        2: '2px',
      },
      ringColor: {
        focus: '#D4AF37',           // gold focus ring
      },
      ringWidth: {
        focus: '3px',               // ≥3px for WCAG 2.4.7
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
