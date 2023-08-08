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
        'sbdgreen':'#d4e9e2',
        'dgreen':'#1e3932',
        'lozol':'#00754a',
        'sbgray':'#f2f0eb'
      },
      backgroundImage:{
        'star':"url('./img/rewards/star.png')",
        'keepbackground':"url('./img/rewards/keep-background.webp')"
      },
    },
  },
  plugins: [],
}