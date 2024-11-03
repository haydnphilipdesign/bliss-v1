/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7f2',
          100: '#e6ebe0',
          200: '#ccd8c1',
          300: '#adc099',
          400: '#8ba575',
          500: '#658a52',
          600: '#527043',
          700: '#425937',
          800: '#374730',
          900: '#2f3c2a',
        },
        earth: {
          100: '#f4e9e1',
          200: '#e6d0c3',
          300: '#d4b4a5',
          400: '#c19887',
          500: '#a67c6a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};