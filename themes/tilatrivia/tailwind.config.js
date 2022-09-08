/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fdfdfd',
      black: '#202020',
      primary: {
        light: '#106894',
        DEFAULT: '#0a4462',
        dark: '#08344a'
      },
      accent: {
        light: '#26cf26',
        DEFAULT: '#1ea51e',
        dark: '#198a19'
      },
    },
    extend: {},
  },
  plugins: [],
}
