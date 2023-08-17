/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },
      colors: {
        primary: {
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#666666",
          600: "#515151",
          700: "#434343",
          800: "#383838",
          900: "#313131",
          950: "#0c0c0c"
        }
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
    },
    boxShadow: {
      "inset-gray": "0px 0px 5px 0px rgba(0, 0, 0, 0.25) inset"
    }
  },
  plugins: []
};
