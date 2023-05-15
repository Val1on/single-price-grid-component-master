/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "hsl(179, 62%, 43%)",
          100: "hsl(71, 73%, 54%)",
          125: "hsl(71, 78%, 46%)",
          150: "hsl(179, 68%, 38%)",
          200: "hsl(179, 68%, 36%)",
        },
        neutrals: {
          50: "hsl(204, 43%, 93%)",
          100: " hsl(218, 22%, 67%)",
        },
      },
      fontFamily: {
        karla: "'Karla', sans-serif",
      },
    },
  },
  plugins: [],
};
