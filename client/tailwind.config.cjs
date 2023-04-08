/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        button: '#222',
        primary: '#f6f6f2'
      },
      fontFamily:{
        body: ['Roboto']
      }
    },
  },
  plugins: [],
}
