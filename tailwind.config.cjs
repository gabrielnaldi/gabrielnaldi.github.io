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
        firstColor: 'var(--first-color)',
        firstColorAlt: 'var(--first-color-alt)',
        titleColor: 'var(--title-color)',
        textColor: 'var(--text-color)',
        containerColor: 'var(--container-color)',
        bodyColor: 'var(--body-color)',
        navColor: 'var(--nav-color)',
      },
      boxShadow: {
        btnMain: '#fff 4px 4px',
        btnSecondary: '#2fbf71 4px 4px',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      minHeight: {
        'section': 'calc(100vh - 64px)',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, 150px)',
        'auto-300': 'repeat(auto-fit, minmax(150px, 300px))',
        'auto-100': 'repeat(auto-fit, minmax(150px, 150px))'
      },
      backgroundImage: {
        'project-1': "url('./projects/project-bg-placeholder.jpg')",
      },
    },
  },
  plugins: [],
}
