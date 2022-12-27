/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        purple:{
          400:  "#695e93",
          500: "#8155ba",
          800: "#281c2d"
        },
        red:{
          500: "#ff3434"
        },
        grey:{
          100: "#f5fff8",
          300: "#d9d9d9",
          600: "#5b5b5b"
        }
      },
      
      boxShadow:{
        white: "0px 4px 10px rgba(255, 255, 255, 0.75)",
        purple: "0px -50px 60px rgba(105,94,147,0.25)"
      },

      backgroundImage:{
        gradient: "linear-gradient(180deg, #281c2d 0%, rgba (40, 28, 45, 0) 100%)"
      }
    },
  },
  plugins: [],
}
