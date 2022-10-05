/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "wave-pattern-up-1":
          "url('../public/assets/backgrounds/wave-up-1.svg')",
      },
      colors: {
        "background-dark-1": "#242629",
        "background-dark-2": "#16161a",
        "text-1": "#fffffe",
        "text-2": "#94a1b2",
        "highlight-1": "#7f5af0",
        "highlight-2": "#2cb67d",
        "test-1": "#f25042",

        stroke: "#010101",

        current: "currentColor",
      },
    },
  },
  plugins: [],
};
