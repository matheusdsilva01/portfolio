/** @type {import('tailwindcss').Config} */
export default {
  // context next projetct
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1330px"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        boxShadow: {
          "inset-gray": "0px 0px 5px 0px rgba(0, 0, 0, 0.25) inset"
        }
      },
      colors: {
        "light-black": "#0E0E11",
        "light-gray": "#18181B",
        primary: {
          50: "#effaff",
          100: "#dff3ff",
          200: "#b8eaff",
          300: "#78daff",
          400: "#32c8ff",
          500: "#06b1f1",
          600: "#008ece",
          700: "#0072a7",
          800: "#025f8a",
          900: "#084f72",
          950: "#06324b"
        }
      },
      keyframes: {
        slide: {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0"
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1"
          }
        },
        // animate from opacity 0 to opacity 1
        fadeIn: {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        }
      },
      animation: {
        slide: "slide 0.3s ease-in-out forwards",
        fadeIn: "fadeIn 0.3s ease-in-out forwards"
      }
    }
  },
  plugins: []
};
