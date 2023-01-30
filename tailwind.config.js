module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      xl: "1024px",
      cursor: {raw: "(pointer: fine)"},
    },
    fontSize: {
      11: "0.6875rem",
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      21: "1.3125rem",
      24: "1.5rem",
      35: "2.1875rem",
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      gray: "#999999",
      orange: "#ff4d00",
    },
    extend: {
      zIndex: {
        navbar: 100,
        modal: 200,
        confetti: 300,
        cursor: 400,
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
