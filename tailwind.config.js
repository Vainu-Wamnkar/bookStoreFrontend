// tailwind.config.js
export default {
  darkMode: 'class', // important
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
