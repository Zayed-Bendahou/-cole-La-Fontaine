/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Text: ['Montserrat'],
        Nav: ['Roboto'],
        Title: ['Rubik'],
        Title2: ['Agbalumo'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
