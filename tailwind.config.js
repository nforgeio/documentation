/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.mdx"], // my markdown stuff is in ../docs, not /src
  darkMode: ["class", '[data-theme="dark"]'], // hooks into docusaurus' dark mode
  theme: {
    extend: {
      screens: {
        'desktop': '997px',
      },
    },
  },
  plugins: [],
  corePlugins: { preflight: false },
};
