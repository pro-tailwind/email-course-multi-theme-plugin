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

module.exports = plugin(
  function ({ addBase }) {
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

    themes.forEach((theme) => {
      const { colors, name } = theme
      addBase({
        [`[data-theme="${name}"]`]: {
          '--color-text-base': colors['text-base'],
          '--color-text-inverted': colors['text-inverted'],
          '--color-bg-base': colors['bg-base'],
          '--color-bg-inverted': colors['bg-inverted'],
        },
      })
    })
  },

  // -----------------------------------------------------------------
  // Add semantic color names to Tailwind's color palette
  // -----------------------------------------------------------------

  {
    theme: {
      extend: {
        textColor: {
          multi: {
            base: 'var(--color-text-base)',
            inverted: 'var(--color-text-inverted)',

            /**
             * ## Challenge: Compose the color's R G B channels with Tailwind's `opacityValue`
             *
             * See the example below this comment to get you started
             */
            example: ({ opacityValue }) => {
              // Good luck!
            },
          },
        },
        backgroundColor: {
          multi: {
            base: 'var(--color-bg-base)',
            inverted: 'var(--color-bg-inverted)',
          },
        },
      },
    },
  }
)
