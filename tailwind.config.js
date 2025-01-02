/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    'hover:bg-violet-500',
    'hover:none',
    // Add other hover classes if needed
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   satoshi: "Satoshi Variable, sans-serif;",
      // },
    },
  },
  plugins: [],
};
