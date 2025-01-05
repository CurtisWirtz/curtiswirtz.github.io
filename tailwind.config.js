module.exports = {
  content: [
    "./_includes/**/*.html", // Include includes directory
    "./_layouts/**/*.html" // Include layouts directory
  ],
  theme: {
    screens: {
      "-sm": { max: "599px" },
      sm: "600px",
      "-md": { max: "767px" },
      md: "768px",
      "-tablet": { max: "899px" },
      tablet: "900px",
      "-lg": { max: "1023px" },
      lg: "1024px",
      "-xl": { max: "1219px" },
      xl: "1220px",
      "-2xl": { max: "1599px" },
      "2xl": "1600px",
      "-3xl": { max: "1999px" },
      "3xl": "2000px"
    },
    colors: {},
    extend: {
      colors: {
        inherit: "inherit",
        transparent: "transparent",
        current: "currentColor",
        white: "#fff",
        black: "#000",
        base: "#d1e4dd",
        pank: "#ef7ef7"
      },
      maxWidth: {
        300: "75rem" // 1200px
      },
      minHeight: {
        200: "50rem" // 800px
      }
    }
  },
  plugins: [],
  output: {
    path: "./assets/css",
    filename: "styles.css"
  }
};
