/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '130px'
    },
    extend: {
      colors: {
        text: "#06172D",
        bgSingle: "#ebeff3"
      },
    },
  },
  plugins: [],
};
