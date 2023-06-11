/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors:{
        'back-body': '#232622',
        'text-nav': '#F2DE79',
        'back-nav': '#8C897B',
        'text-sec': '#D9601A'
      }
    },
  },
  plugins: [],
}

