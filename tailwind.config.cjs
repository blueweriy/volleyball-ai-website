/** @type {import('tailwindcss').Config} */
module.exports = {
  // tell Tailwind to scan these files for class names
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
