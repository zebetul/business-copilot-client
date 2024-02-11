/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // bodyColor: "#E4E5E9", // Very light gray
        bgColor: "#E4E5E9", // light gray
        bgColorLight: "#F3F4F5", // very light gray
        bgColorDark: "#D4D6DC", // gray
        textColor: "#373943", // Dark blue
        textColorLight: "#676C7E", // Light gray
        // primary: "#F2F2F2", // Light gray
        // secondary: "#171D28", // Dark gray
        // accent: "#F2D8A7", // Light yellow
        // accentDark: "#BFAA84", // Dark yellow
      },

      fontFamily: {
        serif: ["Libre Baskerville", "serif"],
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
