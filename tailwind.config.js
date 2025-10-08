/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // THIS SECTION IS PROBABLY MISSING OR INCORRECT
      colors: {
        'primary': '#043873',
        'secondary': '#4F9CF9',
        'accent-yellow': '#FFE492',
        'accent-blue': '#A7CEFC',
        'dark-gray': '#212529',
        'white': '#FFFFFF',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
    // We defined our breakpoints here
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1440px',
      'xl': '1552px',
      '2xl': '1920px',
    },
  },
  plugins: [],
}
