/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'laptop': '1400px',
        'XL': '375px', // Custom breakpoint for 1024px
        'mL': '475px', // Custom breakpoint for 1024px
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
        instrumentSans: "Instrument Sans, sans-serif",
        tiroBangla: "Tiro Bangla , sans-serif",
        hindSiliguri: "Hind Siliguri , sans-serif",
        jakartaSans: "Plus Jakarta Sans , sans-serif",
        oswald: "Oswald , sans-serif",
        brittany: "Brittany, sans-serif",
      },
      colors: {
        firstColor: "#0E214E", // background color
       
      },
    },
  },
  plugins: [require('daisyui'),],
}

