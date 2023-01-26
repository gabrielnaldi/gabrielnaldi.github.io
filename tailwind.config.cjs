/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        background: '#10101a',
        main: '#2fbf71',
        description: '#ffffffcc'
      },
      boxShadow: {
        btnMain: '#fff 4px 4px',
        btnSecondary: '#2fbf71 4px 4px',
      }
    },
  },
  plugins: [],
}
