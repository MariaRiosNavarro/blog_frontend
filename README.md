# React + Vite + Tailwind + Daisyui

Blog

- Install:

npm create vite@latest your-project-name -- --template react

cd your-project-name

npm i

npm install react-router-dom

npm i uuid

# Tailwind + Daisyui

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

npm i -D daisyui@latest

- IN tailwind.config.js:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["cupcake", "night", "retro"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
```

- IN daisyui, themes, choose the themes you want, here as example I use "cupcake", "night" and "retro" (first ist for light mode default, second is for dark mode default)

* IN index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Repo

git init

git add .

git commit -m "first commit"
