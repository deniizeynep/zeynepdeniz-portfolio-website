/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,js,jsx,tsx}"],
  theme: {
    extend: {},
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      fadeOut: {
        "0%": { opacity: 1 },
        "100%": { opacity: 0 },
      },
    },
    animation: {
      fadeIn: "fadeIn 1s ease-in",
      fadeOut: "fadeOut 1s ease-out",
    },
    fontFamily: {
      roboto: ['"Roboto Mono"', "sans-serif"],
    },
    fontSize: {
      "3xl": "1.2rem",
      "4xl": "2.541rem",
    },
    fontWeight: {
      bold: 500,
    },
  },
  plugins: [],
};
