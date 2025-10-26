import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Grid, Paper, Box, Stack, styled } from "@mui/material";
import useScrollAndMobile from "@/hooks/useScrollAndMovile.js";
import { LetterMove } from "./efectos_texto/letterMove";

// Imágenes
import image1 from "@/assets/images/image1.jpg";
import image2 from "@/assets/images/image2.jpg";
import image3 from "@/assets/images/image3.jpg";
import image4 from "@/assets/images/image4.jpg";
import image5 from "@/assets/images/image5.jpg";

const images = [
  {
    src: image1,
    label: "Nuestra Misión",
    text: `Proveer a nuestros clientes los mejores productos y soluciones 
            de rehabilitación con los precios más competitivos del mercado.`,
  },
  {
    src: image2,
    label: "¿Por qué?",
    text: `El equipo de BioMotion tiene más de 25 años sumados de experiencia 
            en mejorar acceso global a tecnología ortopédica y servicios ortésicos y protésicos.`,
  },
  {
    src: image3,
    label: "Nosotros",
    text: `BioMotion es un distribuidor eficaz de tecnología ortopédica, protésica y órtesica. 
            Nacimos en 2011 en Quito, Ecuador.`,
  },
  {
    src: image4,
    label: "Valores",
    text: `Nuestros principios son la base de BioMotion: comprensión, éxito compartido, eficiencia,
            honestidad e integridad, excelente atención al cliente.`,
  },
  {
    src: image5,
    label: "Nuestra Visión",
    text: `Ser la mejor empresa que ofrece soluciones ortopédicas, protésicas y órtesicas en Ecuador, 
            con inventario creciente y costos accesibles.`,
  },
];

const Item = styled(Paper)(() => ({
  backgroundColor: "transparent",
  color: "white",
  textAlign: "center",
  padding: 8,
  transition: "transform 0.3s ease",
}));

const Card = () => {
  const [mainIdx, setMainIdx] = useState(0);
  const { isMobile } = useScrollAndMobile();
  const intervalRef = useRef(null);

  // Rotación automática
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setMainIdx((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleSelect = (idx) => {
    if (idx === mainIdx) return;
    setMainIdx(idx);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setMainIdx((prev) => (prev + 1) % images.length);
    }, 8000);
  };

  const smallImages = images.filter((_, idx) => idx !== mainIdx);

  return (
    <Box className="flex flex-col md:flex-row w-full  min-h-180 gap-2 border-8 border-white  rounded-1xl  ">
      {/* Imagen principal */}
      <Grid item className="relative flex-1 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={mainIdx}
            className="absolute inset-0 bg-cover bg-center rounded-2xl flex items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${images[mainIdx].src})`,
            }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-6 md:p-12 text-white text-center md:text-left max-w-3xl">
              <LetterMove
                letter={images[mainIdx].label}
                fontSize={isMobile ? "1vh" : "1.5vh"}
              />
              <motion.p
                className={`mt-4 text-sm md:text-xl leading-relaxed ${
                  isMobile ? "px-3" : ""
                }`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {images[mainIdx].text}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </Grid>

      {/* Miniaturas */}
      <Grid
        item
       
        
        className="flex md:flex-col flex-row justify-center items-center gap-2"
      >
        {smallImages.map((img, idx) => (
          <motion.div
            key={img.label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              handleSelect(images.findIndex((i) => i.label === img.label))
            }
            className="cursor-pointer relative w-[22vw] h-[20vw] md:w-[8vw] md:h-[9vw] rounded-xl overflow-hidden shadow-md"
          >
            <div
              className="absolute inset-0 bg-cover bg-center brightness-75 hover:brightness-100 transition-all"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${img.src})`,
              }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-sm md:text-base font-semibold text-center">
                {img.label}
              </p>
            </div>
          </motion.div>
        ))}
      </Grid>
    </Box>
  );
};

export { Card };
