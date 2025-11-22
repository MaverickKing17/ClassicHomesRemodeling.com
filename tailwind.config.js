module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#FAFAFA',
        foreground: '#111111',
        primary: { DEFAULT: '#0F172A', fg: '#FFFFFF' },
        gold: { DEFAULT: '#D4AF37', fg: '#000000' },
        trust: '#065F46',
        muted: '#666666',
      },
      borderRadius: { lg: '0.5rem', md: '0.375rem' },
      fontFamily: { sans: ['Inter', 'system-ui'] },
      ring: { focus: '0 0 0 3px #D4AF37' },
      spacing: { '8pt': '0.5rem' },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
