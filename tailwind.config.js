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
        primary: "#0085ff"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
