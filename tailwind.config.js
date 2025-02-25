const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // flowbite.content(),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#000000',
        'secondary': '#111111',
        'tertiary': '#222222',
        'white': '#eeeeee',
        'black': '#333333',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}