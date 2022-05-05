const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
const Color = require('color')

// -----------------------------------------------------------------
// Get RGB channels for a given color
// -----------------------------------------------------------------

function getRgbChannels(color) {
  return Color(color).rgb().array().join(', ')
}

// -----------------------------------------------------------------
// Compose Tailwind's `opacityValue` into the alpha channel
// -----------------------------------------------------------------

function withOpacityValue(variable) {
  return function ({ opacityValue }) {
    if (opacityValue !== undefined) {
      return `rgba(var(${variable}), ${opacityValue})`
    }
    return `rgb(${variable})`
  }
}

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
  function ({ addBase, addVariant }) {
    // -----------------------------------------------------------------
    // Root scope CSS variables
    // -----------------------------------------------------------------

    const defaultColors = themes[0].colors
    addBase({
      ':root': {
        '--color-text-base': getRgbChannels(defaultColors['text-base']),
        '--color-text-inverted': getRgbChannels(defaultColors['text-inverted']),
        '--color-bg-base': getRgbChannels(defaultColors['bg-base']),
        '--color-bg-inverted': getRgbChannels(defaultColors['bg-inverted']),
      },
    })

    // -----------------------------------------------------------------
    // Redefine CSS variables for each theme
    // -----------------------------------------------------------------

    themes.forEach((theme) => {
      const { colors } = theme
      addBase({
        [`[data-theme=${theme.name}]`]: {
          '--color-text-base': getRgbChannels(colors['text-base']),
          '--color-text-inverted': getRgbChannels(colors['text-inverted']),
          '--color-bg-base': getRgbChannels(colors['bg-base']),
          '--color-bg-inverted': getRgbChannels(colors['bg-inverted']),
        },
      })
    })

    // -----------------------------------------------------------------
    // BONUS: Add theme-specific variant for bespoke theming overrides
    // -----------------------------------------------------------------

    themes.forEach((theme) => {
      addVariant(`theme-${theme.name}`, `[data-theme=${theme.name}] &`)
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
            base: withOpacityValue('--color-text-base'),
            inverted: withOpacityValue('--color-text-inverted'),
          },
        },
        backgroundColor: {
          multi: {
            base: withOpacityValue('--color-bg-base'),
            inverted: withOpacityValue('--color-bg-inverted'),
          },
        },
      },
    },
  }
)
