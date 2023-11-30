/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      // colors: {
      //   'purple': '#3f3cbb'
      // }
    },
    fontFamily: {
      'roboto': "'Roboto', sans-serif"
    }
  },
  plugins: [],
}

