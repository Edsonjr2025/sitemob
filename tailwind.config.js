/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FF1414',
        secondary: '#E60000',
        dark: {
          DEFAULT: '#0A0A0A',
          light: '#141414',
          lighter: '#1A1A1A'
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 20, 20, 0.3)',
      }
    },
  },
  plugins: [],
};