/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyColor: "#F2F2F2", // Very light gray
        textColor: "#171D28", // Dark gray
        textColorLight: "#5c626d", // Light gray
        primary: "#F2F2F2", // Light gray
        secondary: "#171D28", // Dark gray
        accent: "#F2D8A7", // Light yellow
        accentDark: "#BFAA84", // Dark yellow
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
