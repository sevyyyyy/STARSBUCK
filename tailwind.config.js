/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'green':'#006341',
        'black':'#000000',
        'white':'#ffffff',
        'sblgreen':'#f1f8f5',
        'sbdgreen':'#d4e9e2'
      }
    },
  },
  plugins: [],
}