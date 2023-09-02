/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5b03e4",
        secondary: "#c03afe",
        black: "#2a2a2a",
        gray: "#afafaf",
        snow: "#f9ebff",
      },
      fontFamily: {
        poppins: "poppins",
      },
      backgroundImage: {
        "hero-pattern-right": "url('./src/assets/images/banner-right')",
      },
    },
  },
  plugins: [],
};
