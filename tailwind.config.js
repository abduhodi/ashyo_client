/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      // padding: "100px",
    },
    extend: {
      colors: {
        text: "#06172D",
        bgSingle: "#ebeff3",
        color1: "#12486B",
        color_bg: "#E7EDF0",
      },
    },
  },
  plugins: [],
};
