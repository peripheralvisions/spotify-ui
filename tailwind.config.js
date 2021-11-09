module.exports = {
  purge: ['./src/**/*.{js,jsx,tx,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "gray-750": "#3f495a",
        "gray-900-spotify": "#121212",
        "gray-800-spotify": "#181818",
        "gray-700-spotify": "#282828"
      },
      fontFamily: {
        main: ['Montserrat'],
      }
    },
  },
  variants: {
    extend: {
      // borderWidth: ['last'],
    },
  },
  plugins: [],
}
