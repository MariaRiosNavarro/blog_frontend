/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["lemonade", "sunset", "autumn"],
  },
  theme: {
    extend: {
      backgroundImage: {
        parallax: 'url("../public/books.jpg")',
      },
    },
  },
  plugins: [require("daisyui")],
};
