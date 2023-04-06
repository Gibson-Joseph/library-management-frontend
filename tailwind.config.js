/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
      keyframes: {
        open: {
          "0%": { opacity: 0, transform: "translateY(-100%)" },
          "50%": { opacity: 1, transform: "translateY(10%)" },
          "100%": { opacity: 1, transform: "translateY(0%)" },
        },
        close: {
          "0%": { opacity: 1, transform: "translateY(0%)" },
          "50%": { opacity: 0.8, transform: "translateY(10%)" },
          "100%": { opacity: 0, transform: "translateY(-150%)" },
        },
        largeScreenClose:{
          "0%": { opacity: 1, transform: "translateY(0%)" },
          "100%": { opacity: 0, transform: "translateY(-150%)" },
        }
      },
      animation: {
        openMenu: "open 1s ease-out forwards",
        closeMenu: "close 1s ease-out forwards",
        largeScreenClose:"largeScreenClose 1s ease-out forwards"
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
};
