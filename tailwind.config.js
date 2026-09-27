/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: '#262624',
        surface: '#30302E',
        ink: '#F5F4EF',
        moss: {
          50: 'rgba(79,184,138,0.12)',
          100: 'rgba(79,184,138,0.22)',
          300: '#7CD3A9',
          500: '#4FB88A',
          600: '#3C9A70',
          700: '#2E7C59',
        },
        accent: {
          400: '#E08B65',
          500: '#D97757',
          600: '#C36A4C',
        },
      },
      fontFamily: {
        serif: ['ui-serif', 'Georgia', 'Cambria', 'serif'],
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
