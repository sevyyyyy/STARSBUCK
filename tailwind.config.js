/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'green':'#006341',
        'bayotlet':'#eb81a5',
        'indigagi':'#8f8bf4',
        'delaw':'#f1ff67',
        'black':'#000000',
        'white':'#ffffff',
        'offwhite':'#f9f9f9',
        'sblgreen':'#f1f8f5',
        'sbdgreen':'#d4e9e2',
        'dgreen':'#1e3932',
        'lozol':'#00754a',
        'fontgray':'#8c9398',
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