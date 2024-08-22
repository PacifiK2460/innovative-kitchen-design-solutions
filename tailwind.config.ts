import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#f0f0eb",
        background: "#11110e",
        primary: "#b37923",
        secondary: "#4b5d4d",
        accent: "#8ea497",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({ addCommonColors: true })],
};
