module.exports = {
  "blue-light": {
    extend: "light", // <- inherit default values from light theme
    colors: {
      background: "#E6F7FF",
      foreground: "#333333",
      primary: {
        50: "#B3E0FF",
        100: "#99D2FF",
        200: "#80C3FF",
        300: "#66B5FF",
        400: "#4CA6FF",
        500: "#3398FF",
        600: "#198AFF",
        700: "#007BFF",
        800: "#006FE6",
        900: "#0059C2",
        DEFAULT: "#3398FF",
        foreground: "#333333",
      },
      focus: "#007BFF",
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
