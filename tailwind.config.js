module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'body': ['Poppins', 'sans-serif'],
        'extrabold': ['Poppins', 'sans-serif', 800],
      },
      colors: {
        primary: "#0055A4",
        manulife: "#7ED396",
        vysio: "#F5BB57"
      },
      spacing: {
        '144': '36rem',
        '168': '42rem',
        '180': '45rem',
        '108': '27rem',
      },
      logo: (theme) => ({
        'logo-black': 'logo.png',
        'logo-white': 'logo_white.png',
      }),
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
      display: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
