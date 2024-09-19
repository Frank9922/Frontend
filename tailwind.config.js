/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,jsx}", "./src/**/**/*.{js,jsx}"
  ],
  theme: {

    colors: {
      white: "#fdfaf1",
      primary: "#7aafa5",
      error: '#d9534f',
      background_error: '#fadad9'

    },

    extend: {
      fontFamily: {
        dancing: ["'Dacing Script'", 'sans-serif']
      }
    },
  },
  plugins: [],
}

