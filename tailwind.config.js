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
        vysio: "#F5BB57",
        dark: "#27272a",
        dark_diff: "#3f3f46",
        puro_blue: "#001996",
        puro_red: "#F00000",
        purolator: "#AC99D5",
        footer: "#F2F2F2",
        fingo: "#A2D2FF"
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
