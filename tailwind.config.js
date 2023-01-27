module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      xl: "1024px",
    },
    fontSize: {
      11: "0.6875rem",
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      21: "1.3125rem",
      35: "2.1875rem",
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      gray: "#999999",
      orange: "#ff4d00",
    },
    dropShadow: {
      orange: "0 1px 5px 0 rgba(255, 77, 0, 0.5)",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
