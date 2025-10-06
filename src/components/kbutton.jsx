import React from "react";
import { Button } from "@mui/material";
import { colors } from '@/assets/styles/colors';
import '@/assets/styles/buttonStyle.css';

function Kbutton({ text, color, size, variant, startIcon,onMouseLeave,onMouseEnter, style = {}, sx = {}, ...props }) {
  const bgColor = colors[color] || colors.primary;

  // si no hay texto y hay icono, forzamos centrado
  const isOnlyIcon = !text && startIcon;

  return (
    <Button
      variant={variant}
      size={size}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      startIcon={isOnlyIcon ? null : startIcon} // 👈 no usar startIcon si no hay texto
      style={{
        ...style,
        backgroundColor: bgColor,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        minWidth: isOnlyIcon ? "40px" : undefined, // 👈 tamaño más pequeño si solo es ícono
        ...props.style,
      }}
      sx={{
        ...sx,
        p: isOnlyIcon ? 1 : undefined, // 👈 padding más compacto si solo es ícono
      }}
      {...props}
    >
      {isOnlyIcon ? startIcon : text}
    </Button>
  );
}
function KbuttonBlob({
  text = "Button",
  width = "200px",
  height = "50px",
  fontSize = "16px",
  color = "#f57922",          // color de los blobs y efecto blur
  hoverTextColor = "#FFFFFF", // color del texto al hover
  bgColor = "#ffffffff",        // color de fondo del botón
  borderRadius = "40px",      // nuevo prop para el radio de los bordes
  startIcon = null,
  iconPosition = "left",
}) {
  const [hover, setHover] = React.useState(false);

  const buttonStyle = {
    width,
    height,
    fontSize,
    border: `2px solid ${color}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: startIcon ? "8px" : undefined,
    position: "relative",
    color: hover ? hoverTextColor : color,
    background:  bgColor,
    borderRadius: borderRadius, // aplicamos el prop
    overflow: "hidden",
    transition: "all 0.3s ease",
    textTransform: "none", // ❌ quitar mayúsculas
  };

  const blobStyle = {
    background: color,
    borderRadius: borderRadius, // aplicamos el mismo borderRadius
  };

  return (
    <>
      <button
        className="blob-btn"
        style={buttonStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span
          className="button-content"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            position: "relative",
            gap: startIcon ? "8px" : undefined,
          }}
        >
          {iconPosition === "left" && startIcon && (
            <span className="button-icon">{startIcon}</span>
          )}
          <span>{text}</span>
          {iconPosition === "right" && startIcon && (
            <span className="button-icon">{startIcon}</span>
          )}
        </span>

        <span className="blob-btn__inner" style={{ borderRadius: borderRadius }}>
          <span className="blob-btn__blobs">
            <span className="blob-btn__blob" style={blobStyle}></span>
            <span className="blob-btn__blob" style={blobStyle}></span>
            <span className="blob-btn__blob" style={blobStyle}></span>
            <span className="blob-btn__blob" style={blobStyle}></span>
          </span>
        </span>
      </button>

      <svg style={{ display: "none" }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>
    </>
  );
}


export { Kbutton,KbuttonBlob };
