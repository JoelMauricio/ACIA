/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        purBlue: '#7D80DA',
        lightBlue: '#EAF6FF',
        mainBlack: '#232528',
        boneWhite: '#FFFFFF',
        white2: '#fefefe',
        gray: '#8F8F8F',
        red: '#E22239',
        grid: '#EFF0F0',
        darkBG: '#1D1D1D',
        darkBD2: '#323232',
        darkGrid: '#4B4A4A'
      },
      fontSize: {
        md: '16px'
      },
      spacing: {
        '3r': '3rem',
        '4r': '4rem',
        '5r': '5rem'
      },
      boxShadow: {
        'md': '0px 3px 8px rgba(0,0,0,0.20)',
      }
    },
  },
  plugins: [],
}
