/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      blue_dark_intro_bg: '#1c2431',
      blue_dark_main_bg: '#181f2a',
      blue_dark_footer_bg: '#0b1523',
      blue_dark_testimonials: '#202a3c',
      cyan: '#65e2d9',
      blue: '#339ecc',
      white: '#ffffff',
      light_red: '#ff4242',
    },
    fontFamily: {
      open_sans: ['Open Sans', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
    },
  },
  plugins: [],
}
