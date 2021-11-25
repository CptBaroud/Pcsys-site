const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enable: true,
    content: ['./public/*.html'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      padding: '2rem'
    },
    colors : {
      cyan: colors.cyan,
      sky: colors.sky,
      green: colors.green,
      yellow: colors.amber,
      red: colors.red,
      orange: colors.orange,
      gray: colors.gray,
      blue: colors.blue,
      white: colors.white,
      pink: colors.pink
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
