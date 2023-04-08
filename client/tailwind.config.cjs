/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      backgroundImage: {
        'wave-pattern': "url('../assets/ui/CARA_PICTURES/wave2.png')",
       
      },
      colors:{
        button: '#222',
        primary: '#f6f6f2'
      },
      fontFamily:{
        body: ['Lato']
      }
    },
    boxShadow:{
      xxl:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;',
      xl:'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;',
      l:'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;',
      m:'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;',
      s:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;'
    },
  
  },
  plugins: [],
}
