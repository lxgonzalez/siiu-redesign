/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        gravity: ['Gravity', 'sans-serif'],
      },
      colors: {
        primary: '#084771',
        secondary: '#808183',
        secondary100: '#F0EEED',
        tertiary: '#AD9218',
      },
    },
  },
  plugins: [],
};
