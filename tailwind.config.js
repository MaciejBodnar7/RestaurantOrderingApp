/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#404040",
        secondary: "#8B8B8B",
        buttoncolor: "#16DB99",
      },
    },
  },
  plugins: [],
};
