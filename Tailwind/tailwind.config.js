/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary':'blue',
        'secondary':'red'
      },
      height:{
        '13' :'3.25rem'
      }
    },
  },
  plugins: [],
}

