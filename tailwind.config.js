/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg": "#060606",
        gray: {
          500: "#CCCCCC",
          900: "#999999",
        },
        dark: {
          100: "#0F0F0F",
          180: "#181818",
          200: "#262626",
          290: "#292929",
        },
      },
      spacing: {
        13: "52px",
        15: "60px",
        18: "72px",
        22: "88px",
        25: "100px",
        55: "220px",
        70: "280px",
        94: "376px",
        100: "400px",
      },
      borderRadius: {
        "4xl": "32px",
      },
    },
  },
  plugins: [],
};
