/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
const{ purpleDark, blueLight, greenDark } = require('./themes')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        ...purpleDark,
        ...blueLight,
        ...greenDark
      },
    }),
  ],
}

