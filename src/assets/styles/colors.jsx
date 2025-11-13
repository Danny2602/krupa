const colors = {
  primary: "#f57922",
  textPrimary: "#ffffff",
  secondary: "#012558",
  background: "#f5f5f5",
  green:'#038F08',
  text: "#333333",
};

// Definición de variantes
const buttonVariants = {
  contained: (color) => ({
    backgroundColor: colors[color] || colors.primary,
    color: colors.textPrimary,
  }),
  outlined: (color) => ({
    borderColor: colors[color] || colors.primary,
    color: colors[color] || colors.primary,
    backgroundColor: "transparent",
  }),
  text: (color) => ({
    color: colors[color] || colors.primary,
    backgroundColor: "transparent",
  }),
};

export { colors, buttonVariants };
