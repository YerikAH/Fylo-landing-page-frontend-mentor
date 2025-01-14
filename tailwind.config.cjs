/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
    extend: {
      maxWidth: {
        m39rem: '39rem',
      },
      gridTemplateColumns: {
        auto_2: 'repeat(2,auto)',
        auto_3: 'repeat(3,auto)',
        custom_5: '3fr 2fr 1fr 1fr 2fr',
      },
    },
  },
  plugins: [],
}
