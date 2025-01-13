/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    screens: {
      'sm': '540px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        blue: {
          DEFAULT: "#0A21C0"
        }
      }
    },
  },
  plugins: [],
}

