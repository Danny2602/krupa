// src/TextMove.jsx
import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, keyframes } from "@mui/material";

// Keyframes de animaciones
const mainBlockAnim = keyframes`
  0% { width: 0%; left: 0; }
  50% { width: 100%; left: 0; }
  100% { width: 0; left: 100%; }
`;

const secBlockAnim = keyframes`
  0% { width: 0%; left: 0; }
  50% { width: 100%; left: 0; }
  100% { width: 0; left: 100%; }
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const popIn = keyframes`
  0% { width: 0px; height: 0px; opacity: 0; }
  50% { width: 10px; height: 10px; opacity: 1; bottom: 45px; }
  65% { width: 15px; height: 7px; bottom: 0px; }
  80% { width: 10px; height: 10px; bottom: 20px; }
  100% { width: 7px; height: 7px; opacity: 1; bottom: 13px; }
`;

const TextMove = ({
  title1,
  title2,
  title1Size,
  title2Size,
  block1Color = "#012558",
  block2Color = "#f57922",
  interval = 10000 // tiempo entre animaciones en ms
}) => {
  // estado para reiniciar animaciones
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate(false);  // reinicia animaciones
      setTimeout(() => setAnimate(true), 50); // vuelve a activar
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ height: "10vh" }} >
      <Box
        sx={{
          width: {  xs: "100%", sm: "60%", md: "70%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
        
      >
        {/* Title */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            alignItems: "center",
            height: "50px",
            mb: 1,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              height: "100%",
              backgroundColor: block1Color,
              width: "0%",
              animation: animate
                ? `${mainBlockAnim} 2s cubic-bezier(.74, .06, .4, .92) forwards`
                : "none",
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: title1Size,
              color: "#000",
              opacity: animate ? 0 : 1, // reinicio de animación
              animation: animate
                ? `${fadeIn} 2s forwards`
                : "none",
              animationDelay: "1.6s",
              position: "relative",
            }}
          >
            {title1}
            <Box
              component="span"
              sx={{
                position: "absolute",
                bottom: "13px",
                right: "-12px",
                width: "0px",
                height: "0px",
                borderRadius: "50%",
                backgroundColor: block1Color,
                animation: animate
                  ? `${popIn} 0.8s cubic-bezier(.74, .06, .4, .92) forwards`
                  : "none",
                animationDelay: "2s",
              }}
            />
          </Typography>
        </Box>

        {/* Role */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            alignItems: "center",
            height: "30px",
            mt: -1,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              height: "100%",
              backgroundColor: block2Color,
              width: "0%",
              animation: animate
                ? `${secBlockAnim} 2s cubic-bezier(.74, .06, .4, .92) forwards`
                : "none",
              animationDelay: "2s",
            }}
          />
          <Typography
            sx={{
              fontSize: title2Size,
              color: "#000",
              textTransform: "uppercase",
              letterSpacing: 2,
              opacity: animate ? 0 : 1,
              animation: animate
                ? `${fadeIn} 2s forwards`
                : "none",
              animationDelay: "3.2s",
            }}
          >
            {title2}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default TextMove;
