const colors = require('./colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  safelist: [
    ...(Object.keys(colors).reduce((acc, name) => {
      acc.push(`border-${name}-600`)
      acc.push(`border-${name}-600`)
      acc.push(`bg-${name}-800`)
      acc.push(`bg-${name}-700`)
      acc.push(`bg-${name}-600`)
      acc.push(`bg-${name}-500`)
      acc.push(`bg-${name}-400`)
      acc.push(`bg-${name}-100`)
      acc.push(`bg-${name}-50`)
      acc.push(`hover:bg-${name}-600`)
      acc.push(`hover:bg-${name}-800`)
      acc.push(`bg-${name}-100`)
      acc.push(`ring-${name}-600`)
      acc.push(`focus:outline-${name}-800`)
      return acc
    }, [])),
    'bg-blueLight',
    'bg-blueDark',
  ],

  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
}
