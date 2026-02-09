/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'valentine-pink': '#ff69b4',
        'valentine-red': '#ff1744',
        'valentine-rose': '#ff91a4',
        'valentine-pastel': '#ffe4e6',
        'beige': '#f5f5dc',
        'beige-50': '#fafaf5',
      },
    },
  },
  plugins: [],
}
