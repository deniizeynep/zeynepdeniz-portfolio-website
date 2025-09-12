/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,js,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'roboto': ['"Roboto Mono"', 'sans-serif'],
    },
    fontSize: {
        '3xl': '1.2rem',
        '4xl': '2.541rem',
      },
      fontWeight:{
        'bold': 500,
      },
  },
  plugins: [],
};
