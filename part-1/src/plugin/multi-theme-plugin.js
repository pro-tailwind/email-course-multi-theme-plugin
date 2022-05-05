const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

// -----------------------------------------------------------------
// Themes definition
// -----------------------------------------------------------------

const themes = [
  {
    name: 'default',
    colors: {
      'text-base': colors.fuchsia['800'],
      'text-inverted': colors.fuchsia['100'],
      'bg-base': colors.fuchsia['100'],
      'bg-inverted': colors.fuchsia['800'],
    },
  },
  {
    name: 'swiss',
    colors: {
      'text-base': colors.red['800'],
      'text-inverted': colors.red['100'],
      'bg-base': colors.red['100'],
      'bg-inverted': colors.red['800'],
    },
  },
  {
    name: 'forest',
    colors: {
      'text-base': colors.green['800'],
      'text-inverted': colors.green['100'],
      'bg-base': colors.green['100'],
      'bg-inverted': colors.green['800'],
    },
  },
  {
    name: 'aqua',
    colors: {
      'text-base': colors.cyan['800'],
      'text-inverted': colors.cyan['100'],
      'bg-base': colors.cyan['100'],
      'bg-inverted': colors.cyan['800'],
    },
  },
]

// -----------------------------------------------------------------
// Tailwind CSS plugin
// -----------------------------------------------------------------

module.exports = plugin(function ({ addBase }) {
  // -----------------------------------------------------------------
  // Root scope CSS variables
  // -----------------------------------------------------------------

  const defaultColors = themes[0].colors
  addBase({
    ':root': {
      '--color-text-base': defaultColors['text-base'],
      '--color-text-inverted': defaultColors['text-inverted'],
      '--color-bg-base': defaultColors['bg-base'],
      '--color-bg-inverted': defaultColors['bg-inverted'],
    },
  })

  // -----------------------------------------------------------------
  // Redefine CSS variables for each theme
  // -----------------------------------------------------------------

  /**
   * ## Your challenge
   *
   * 1. Redefine the values of the CSS variables for each of the 4 themes in the `themes` array.
   * 2. Our theme scope selectors should be `data-theme="swiss"`, etc.
   * 3. You need to write the CSS with the CSS-in-JS syntax.
   *
   * Good luck!
   */
})
