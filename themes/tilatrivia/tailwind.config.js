/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      light: '#F2F2F2',
      dark: '#202020',
      black: '#000000',
      primary: {
        light: '#0D5B7C',
        DEFAULT: '#0a4462',
        dark: '#08344a'
      },
      accent: {
        light: '#23BC23',
        DEFAULT: '#1ea51e',
        dark: '#198a19'
      },
      grey: '#5e5e5e'
    },
    extend: {},
  },
  plugins: [],
}
