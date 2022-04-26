const plugin = require('tailwindcss/plugin')
const Color = require('color')

// Convert HEX color to `R, G, B`
function getRgbChannels(color) {
  return Color(color).rgb().color.join(', ')
}

// Compose Tailwind's `opacityValue` into the alpha channel
function withOpacityValue(variable) {
  return function ({ opacityValue }) {
    if (opacityValue !== undefined) {
      return `rgba(var(${variable}), ${opacityValue})`
    }
    return `rgb(${variable})`
  }
}

// Create the plugin
const multiThemePlugin = plugin(
  function ({ addBase, addVariant, theme }) {
    const themes = [
      {
        name: 'default',
        colors: {
          'text-base': theme('colors.fuchsia.800'),
          'text-inverted': theme('colors.fuchsia.100'),
          'bg-base': theme('colors.fuchsia.100'),
          'bg-inverted': theme('colors.fuchsia.800'),
        },
      },
      {
        name: 'swiss',
        colors: {
          'text-base': theme('colors.red.800'),
          'text-inverted': theme('colors.red.100'),
          'bg-base': theme('colors.red.100'),
          'bg-inverted': theme('colors.red.800'),
        },
      },
      {
        name: 'forest',
        colors: {
          'text-base': theme('colors.green.800'),
          'text-inverted': theme('colors.green.100'),
          'bg-base': theme('colors.green.100'),
          'bg-inverted': theme('colors.green.800'),
        },
      },
      {
        name: 'aqua',
        colors: {
          'text-base': theme('colors.cyan.800'),
          'text-inverted': theme('colors.cyan.100'),
          'bg-base': theme('colors.cyan.100'),
          'bg-inverted': theme('colors.cyan.800'),
        },
      },
    ]

    // Add `:root` scope CSS variables (set to default theme)
    const defaultColors = themes[0].colors
    addBase({
      ':root': {
        '--color-text-base': getRgbChannels(defaultColors['text-base']),
        '--color-text-inverted': getRgbChannels(defaultColors['text-inverted']),
        '--color-bg-base': getRgbChannels(defaultColors['bg-base']),
        '--color-bg-inverted': getRgbChannels(defaultColors['bg-inverted']),
      },
    })

    // Redefine the CSS variables for each theme scope
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

    // BONUS: Add theme-specific variant for bespoke theming overrides
    themes.forEach((theme) => {
      addVariant(`theme-${theme.name}`, `[data-theme=${theme.name}] &`)
    })
  },
  // Add semantic color names to Tailwind's color palette
  {
    theme: {
      extend: {
        textColor: {
          multi: {
            'text-base': withOpacityValue('--color-text-base'),
            'text-inverted': withOpacityValue('--color-text-inverted'),
          },
        },
        backgroundColor: {
          multi: {
            'bg-base': withOpacityValue('--color-bg-base'),
            'bg-inverted': withOpacityValue('--color-bg-inverted'),
          },
        },
      },
    },
  }
)

module.exports = multiThemePlugin
