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
        blue: '#2A2A72',
        clearBlue: '#A9ADE5',
        lightBlue: '#EAF6FF',
        mainBlack: '#232528',
        boneWhite: '#FFFDFA',
        gray: '#8F8F8F',
        red: '#E22239',
        grid: '#EFF0F0'
      },
      fontSize: {
        md: '18px'
      }
    },
  },
  plugins: [],
}
