module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'body': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#40C365"
      },
      spacing: {
        '144': '36rem',
        '108': '27rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
