module.exports = {
    content: ["layouts/**/*.html"],
    theme: {
        screens: {
            sm: '24rem',
            md: '48rem',
            lg: '64rem',
            xl: '80rem',
        },
        colors: {
            'white': '#ffffff',
            'black': '#000000',
            'light': '#f7f7f7',
            'dark': '#202020',
            'green': '#1E9E1A',
            'green-light': '#ABDFA9',
            'blue': '#0F49BD',
            'blue-light': '#A1BEF7',
            'blue-fade-light': '#acbfe4',
            'blue-fade-dark': '#5c83d0',
            'gray': '#5C5C5C',
            'gray-light': '#dbdbdb',
        },
        fontFamily: {
            sans: ['Lato', 'sans-serif'],
            serif: ['Bitter', 'serif'],
        },
    },
    safelist: [
        'h-0',
        'h-full',
        'bg-black/0',
        'bg-black/50',
    ],
    plugins: [],
}