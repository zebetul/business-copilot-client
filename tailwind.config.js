/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "rgb(var(--bgColor))",
        bgColorLight: "rgb(var(--bgColorLight))",
        bgColorDark: "rgb(var(--bgColorDark))",
        bgColorHighlight: "rgb(var(--bgColorHighlight))",

        textColor: "rgb(var(--textColor))",
        textColorLight: "rgb(var(--textColorLight))",

        accentColor: "rgb(var(--accentColor))",
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
