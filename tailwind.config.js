/** @type {import('tailwindcss').Config} */
export default {
  content: [
	    "./src/**/*.{js,ts,jsx,tsx}",
	    "./index.html"
  ],
  theme: {
    
    extend: {
      screens:{
        'mobile':"420px"
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors:{
        buttonBg:'#2870EA',
        buttonTxt:'#1B4AEF',
        mainBg:'rgba(239, 242, 245, 1)',
        textLgt:'#5D667B',
        offerBg:'#0052FE',
      }
    },
  },
  plugins: [],
}