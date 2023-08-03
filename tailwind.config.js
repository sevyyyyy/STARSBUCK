/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'green':'#006341',
        'black':'#000000',
        'white':'#ffffff'
      }
    },
  },
  plugins: [],
}