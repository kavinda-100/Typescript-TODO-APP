/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-primary': "#F8F8FF",
        'white-secondary': "#fffafa",
      },
    },
  },
  plugins: [],
}

