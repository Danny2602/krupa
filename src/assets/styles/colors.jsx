// ============================================
// SISTEMA DE COLORES CENTRALIZADO
// ============================================
// Este archivo centraliza todos los colores de las páginas públicas.
// Para cambiar el esquema de colores completo, solo modifica estos valores.

// Paleta de Colores Principal
const colors = {
  // Colores Principales
  primary: "#f57922",           // Naranja principal
  primaryHover: "#d66a1d",      // Naranja hover (más oscuro)
  primaryLight: "#ff9854",      // Naranja claro
  primaryDark: "#c45918",       // Naranja oscuro

  // Colores Secundarios
  secondary: "#012558",         // Azul oscuro principal
  secondaryHover: "#024080",    // Azul hover
  secondaryLight: "#023a70",    // Azul claro
  secondaryDark: "#001a40",     // Azul muy oscuro

  // Colores de Texto
  textPrimary: "#ffffff",       // Texto blanco
  textSecondary: "#012558",     // Texto azul oscuro
  textBody: "#333333",          // Texto normal
  textLight: "#666666",         // Texto gris

  // Colores de Fondo
  background: "#f5f5f5",        // Fondo gris claro
  backgroundWhite: "#ffffff",   // Fondo blanco

  // Colores de Estado
  success: "#038F08",           // Verde éxito
  successHover: "#027006",      // Verde hover

  // Colores de Borde
  border: "#e0e0e0",            // Borde gris claro
  borderHover: "#f57922",       // Borde hover (naranja)
};

// Gradientes Predefinidos
const gradients = {
  primary: "linear-gradient(135deg, #f57922 0%, #d66a1d 100%)",
  secondary: "linear-gradient(135deg, #012558 0%, #024080 100%)",
  hero: "linear-gradient(135deg, #012558 0%, #024080 50%, #f57922 100%)",
};

// ============================================
// VARIANTES DE BOTONES
// ============================================
const buttonVariants = {
  // Botón con fondo sólido
  contained: (colorName = "primary") => {
    const colorMap = {
      primary: {
        backgroundColor: colors.primary,
        color: colors.textPrimary,
        hover: colors.primaryHover,
      },
      secondary: {
        backgroundColor: colors.secondary,
        color: colors.textPrimary,
        hover: colors.secondaryHover,
      },
      success: {
        backgroundColor: colors.success,
        color: colors.textPrimary,
        hover: colors.successHover,
      },
    };

    const config = colorMap[colorName] || colorMap.primary;

    return {
      backgroundColor: config.backgroundColor,
      color: config.color,
      "&:hover": { backgroundColor: config.hover },
    };
  },

  // Botón con borde
  outlined: (colorName = "primary") => {
    const colorMap = {
      primary: {
        borderColor: colors.primary,
        color: colors.primary,
        hover: colors.primaryLight,
      },
      secondary: {
        borderColor: colors.secondary,
        color: colors.secondary,
        hover: colors.secondaryLight,
      },
    };

    const config = colorMap[colorName] || colorMap.primary;

    return {
      borderColor: config.borderColor,
      color: config.color,
      backgroundColor: "transparent",
      border: "2px solid",
      "&:hover": {
        borderColor: config.hover,
        backgroundColor: "transparent",
      },
    };
  },

  // Botón solo texto
  text: (colorName = "primary") => ({
    color: colors[colorName] || colors.primary,
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "rgba(245, 121, 34, 0.08)",
    },
  }),
};

// ============================================
// FUNCIONES HELPER PARA ESTILOS
// ============================================

// Helper para crear estilos de card con hover effect
const cardStyles = {
  default: {
    borderRadius: 3,
    border: `2px solid transparent`,
    transition: "all 0.3s ease",
    "&:hover": {
      borderColor: colors.borderHover,
      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
      transform: "translateY(-8px)",
    },
  },
};

// Helper para iconos con color primario
const iconStyles = {
  primary: {
    color: colors.primary,
  },
  secondary: {
    color: colors.secondary,
  },
  large: {
    fontSize: 50,
    color: colors.primary,
  },
};

// Helper para tipografía
const typographyStyles = {
  heading: {
    fontWeight: "bold",
    color: colors.textSecondary,
  },
  subheading: {
    color: colors.primary,
  },
  body: {
    color: colors.textLight,
  },
};

// Helper para secciones
const sectionStyles = {
  lightBackground: {
    backgroundColor: colors.background,
  },
  whiteBackground: {
    backgroundColor: colors.backgroundWhite,
  },
  primaryGradient: {
    background: gradients.primary,
  },
  secondaryGradient: {
    background: gradients.secondary,
  },
};

// ============================================
// EXPORTS
// ============================================
export {
  colors,
  gradients,
  buttonVariants,
  cardStyles,
  iconStyles,
  typographyStyles,
  sectionStyles,
};
