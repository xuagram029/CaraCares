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
        body: ['Arial']
      }
    },
    boxShadow:{
      xxl:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;',
      xl:'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;',
      l:'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.9) -3px -3px 6px 1px inset;',
      m:'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;',
      s:'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;'
    },
  
    backgroundImage:  {
      'heropattern': "url('/images/contactsbg.png')",
      'donatecover5': "url('/images/donatecover5.png')",
      'donatecover6': "url('/images/donatecover6.png')",
      'donatecover7': "url('/images/donatecover7.png')",
      'donatecover': "url('/images/donatecover.png')",
  },
  
  },


  
  plugins: [],
}
