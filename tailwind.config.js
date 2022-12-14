/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        signature: ["Dancing Script"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tw-elements/dist/plugin"),
  ],
};
