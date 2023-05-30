/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      fontFamily:{
        body: ['Arial']
      }
    },
    
    boxShadow:{
      xxl:'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;',
      xl:'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;',
      l:'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;',
      m:'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;',
      s:'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;'
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
