/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { burtons: "burtons" },
    },
    keyframes: {
      rotate: {
        "0%": { transform: "rotate(0.0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
    },
    animation: {
      "waving-hand": "rotate 2s linear",
    },
  },

  plugins: [],
};
