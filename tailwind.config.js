/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#E4E5E9", // light gray
        bgColorLight: "#F3F4F5", // very light gray
        bgColorDark: "#D4D6DC", // gray
        textColor: "#373943", // Dark blue
        textColorLight: "#676C7E", // Light gray
      },

      fontFamily: {
        serif: ["Libre Baskerville", "serif"],
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
