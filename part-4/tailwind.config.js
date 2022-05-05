module.exports = {
  content: ['./src/**/*.{jsx,js}'],
  theme: {
    extend: {},
  },
  plugins: [require('./src/plugin/multi-theme-plugin')],
}
