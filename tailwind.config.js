/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".bg-navbar": {
          background:
            "linear-gradient(269.56deg, #078BFF -0.79%, #0053B4 101.14%)",
          boxShadow: "0px 3px 17px 4px rgba(95, 159, 255, 0.25)",
        },
        ".shadow-aesthetic": {
          boxShadow: "-5px 5px 19px rgba(148, 183, 215, 0.25)",
        },
        ".inner-shadow-bottom": {
          boxShadow: "inset 0 -85px 34px -50px rgb(0,0,0, .72)",
        },
        ".inner-shadow-max": {
          boxShadow: "inset 0 -100px 34px -25px rgb(0,0,0, .72)",
        },
      });
    }),
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ghibli: {
          light: "#97ABD2",
          DEFAULT: "#3599F4",
          dark: "#0369D1",
        },
      },
    },
  },
};
