const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  content: [
    "./content/**/*.{md,html}",
    "./layouts/**/*.html",
  ],
  safelist: [],
  darkMode: 'media',
  theme: {
    container: {
      center: true,
    },
    fill: theme => ({
      current: 'currentColor',
      white: theme('colors.white'),
    }),
    colors: {
      transparent: 'transparent',
      white: colors.white,
      black: colors.black,
      gray: colors.neutral,
      red: colors.red,
      green: colors.green,
      yellow: colors.yellow,
      blue: colors.blue,
    },
  },
  variants: {
    logical: [
      'responsive',
      'hover'
    ],
  },
  // daisyui: {
  //   themes: ["lofi"],
  // },
  plugins: [
    require('tailwindcss-logical'),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
}