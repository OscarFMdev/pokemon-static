module.exports = {
  "green-dark": {
    extend: "dark", // <- inherit default values from dark theme
    colors: {
      background: "#003300",
      foreground: "#ffffff",
      primary: {
        50: "#005A00",
        100: "#006D00",
        200: "#008B00",
        300: "#00A600",
        400: "#00C400",
        500: "#00E000",
        600: "#00F500",
        700: "#00FF00",
        800: "#00E600",
        900: "#00C200",
        DEFAULT: "#00E000",
        foreground: "#ffffff",
      },
      focus: "#00F500",
    },
    layout: {
      disabledOpacity: "0.3",
      radius: {
        small: "4px",
        medium: "6px",
        large: "8px",
      },
      borderWidth: {
        small: "1px",
        medium: "2px",
        large: "3px",
      },
    },
  },
};
