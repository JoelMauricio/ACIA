/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-blue': '#2A2A72',
        'snd-blue': '#A9ADE5'
      },
      fontSize: {
        'hidden': {
          'display': 'none'
        }
      }
    },
  },
  plugins: [],
}
