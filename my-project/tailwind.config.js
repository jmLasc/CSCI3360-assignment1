const { default: daisyui } = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('tailwind-dracula')],
  daisyui: {
    themes: ["light", "dark", "cupcake", "retro", "cyberpunk"],
  }
}

