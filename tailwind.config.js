/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // semua file di folder app
    "./pages/**/*.{js,ts,jsx,tsx}", // kalau ada folder pages
    "./components/**/*.{js,ts,jsx,tsx}", // kalau nanti bikin components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
