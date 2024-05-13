/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily:{
        Satisfy:["Satisfy"],
        Poppins:["Poppins"]
      } ,   
      colors: {
      'sp': '#FFE600',  // Studio color Yello
      'ss': '#282828',  // Studio color black
      'st': '#464646',  // Studio color Text black
    },
  },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require("daisyui"),
  ],
}