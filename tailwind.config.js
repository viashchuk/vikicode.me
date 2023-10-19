/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          500: '#B4A3D7'
        },
        gray: {
          500: '#3D3B3B'
        },
        pink: {
          500: '#FFC6D7'
        }
      }
    },
  },
  plugins: [],
}

