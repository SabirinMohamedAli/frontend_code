/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode via class
  theme: {
    extend: {
      colors: {
        primary: '#1E0236',
        secondary: ' #EBCA4C ',
        accent: '#E5CB90',
      },
    },
  },
  plugins: [],
}
