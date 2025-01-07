const plugin = require("tailwindcss/plugin");

/**
 * Clamp utility function for fluid typography
 * clamp(MIN_VALUE, FLUID_VALUE, MAX_VALUE)
 */
fontSizeClamp = (min, max) => {
  return `clamp(${min}rem, ${max * 1.25}vw, ${max}rem)`;
};

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
    fontFamily: {
      playertwo: ['"Press Start 2P"']
    },
    extend: {
      fontSize: {
        h1: fontSizeClamp(1.75, 3), // 28px - 48px
        h2: fontSizeClamp(1.25, 1.625), // 20px - 32px
        h3: fontSizeClamp(1.75, 2.75), // 28px - 44px
        h4: fontSizeClamp(1.25, 1.5), // 20px - 24px
        h5: fontSizeClamp(1.25, 1.5), // 20px - 24px
        body: fontSizeClamp(1, 1.125) // 16px - 18px
      },
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
        400: "100rem" //1600px
      },
      minHeight: {
        200: "50rem" // 800px
      }
    }
  },
  output: {
    path: "./assets/css",
    filename: "styles.css"
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addBase, theme }) {
      addBase({
        "h1, .h1": {
          fontFamily: theme("fontFamily.playertwo"),
          fontWeight: theme("fontWeight.medium"),
          fontSize: theme("fontSize.h1"),
          lineHeight: "1.1"
        },
        "h2, .h2": {
          fontFamily: theme("fontFamily.playertwo"),
          fontWeight: theme("fontWeight.medium"),
          fontSize: theme("fontSize.h2"),
          lineHeight: "1.15"
        },
        "h3, .h3": {
          fontFamily: theme("fontFamily.playertwo"),
          fontWeight: theme("fontWeight.medium"),
          fontSize: theme("fontSize.h3"),
          lineHeight: "1.2"
        },
        "h4, .h4": {
          fontFamily: theme("fontFamily.playertwo"),
          fontWeight: theme("fontWeight.normal"),
          fontSize: theme("fontSize.h4"),
          lineHeight: "1.2"
        },
        "h5, .h5": {
          fontFamily: theme("fontFamily.playertwo"),
          fontWeight: theme("fontWeight.bold"),
          fontSize: theme("fontSize.h5"),
          lineHeight: "1.2"
        }
      });
    })
  ]
};
