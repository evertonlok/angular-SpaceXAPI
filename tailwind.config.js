/* global module*/
module.exports = {
  prefix: '',
  important: true,
  purge: {
    enabled: true,
    content: [
      './src/**/*.{html, ts}',
    ]
  },
  darkMode: 'class',
  theme: {
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
