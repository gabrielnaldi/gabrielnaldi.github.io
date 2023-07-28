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
        lightBlue: '#2cd9ff',
        lightGreen: '#7eff82'
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
      animation: {
        'rotate-slow': 'rotate 5s linear infinite',
        'rotate-fast': 'rotate 2.5s linear infinite',
        'fade-in': 'fade 2s ease-in'
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'scale(1) rotate(360deg)'},
          '50%': { transform: 'scale(.8) rotate(-360deg)'},
          '100%': { transform: 'scale(1) rotate(360deg)'}
        },
        fade: {
          from : {opacity: 0},
          to: {opacity: 1}
        }
      }
    },
  },
  plugins: [],
}
