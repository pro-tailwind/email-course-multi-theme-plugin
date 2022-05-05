module.exports = {
  // You should never leave the `content` array empty, but we're not actually
  // creating any UI for this exercise, so... don't worry.
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require('./src/plugin/multi-theme-plugin')],
  corePlugins: {
    // This cleans up the `base` layer, so our CSS variables
    // show right on top of the file.
    preflight: false,
  },
}
