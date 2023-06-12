/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        130: "130px",
        150: "150px",
      },
    },
  },
  plugins: [],
};
