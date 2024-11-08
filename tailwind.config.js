/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-purple-100': '#E6D9F9', // Light purple color
        'light-purple-200': '#D1B3E0', // Slightly darker light purple
      },
    },
  },
  plugins: [],
}

