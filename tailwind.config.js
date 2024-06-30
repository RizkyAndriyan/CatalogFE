/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      },
      colors:{
        "blue-light":"#e6f1ff",
        "blue-light-hover":"#d9eaff",
        "blue-light-active":"#b0d3ff",
        "blue-normal":"#0071ff",
        "blue-normal-hover":"#0066e6",
        "blue-normal-active":"#005acc",
        "blue-dark":"#0055bf",
        "blue-dark-hover":"#004499",
        "blue-dark-active":"#003373",
        "blue-darker":"#002859"
      }
    },
  },
  plugins: [],
}