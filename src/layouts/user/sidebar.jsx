import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCog,
  FaInfoCircle,
  FaSignOutAlt,
  FaChevronLeft,
  FaChevronRight,
  FaBars,
} from "react-icons/fa";
import useScrollAndMobile from "@/hooks/useScrollAndMovile";
import { patch } from "@mui/material";

const menuItems = [
  { label: "Inicio", icon: <FaHome />,path:'/user/home' },
  { label: "Citas", icon: <FaCog />,path:'/user/appointment' },
  { label: "Acerca de", icon: <FaInfoCircle />,path:'/user/home' },
  { label: "Salir", icon: <FaSignOutAlt />,path:'/user/home' },
];
const MotionNavLink=motion(NavLink)
function Sidebar({ isOpen, setIsOpen }) {
  const [active, setActive] = useState("Inicio");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { isMobile } = useScrollAndMobile(); // detecta si es móvil
  
  // ancho variable (solo en desktop)
  const sidebarWidth = isOpen ? "200px" : "70px";

  return (
    <>
      {/* Botón hamburguesa fijo arriba a la izquierda (solo móvil) */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-[60] bg-blue-600 p-2 rounded-lg text-white shadow-lg"
        >
          <FaBars size={22} />
        </button>
      )}

      {/* Sidebar principal */}
      <motion.div
        animate={{
          width: isMobile ? (isOpen ? "200px" : "0px") : sidebarWidth,
          opacity: isMobile && !isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
        className={`fixed left-0 top-0 h-screen bg-gray-900 text-white flex flex-col items-center justify-start shadow-2xl z-50 ${
          isMobile ? "overflow-hidden" : ""
        }`}
        style={{
          paddingTop: isMobile ? "4rem" : "2rem",
        }}
      >
        {/* Botón de expansión solo para desktop */}
        {!isMobile && (
          <div
            className="cursor-pointer flex items-center justify-center bg-[#f57922] rounded-full"
            style={{
              width: "40px",
              height: "40px",
              marginBottom: "2rem",
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ fontSize: "20px" }}
            >
              {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
            </motion.div>
          </div>
        )}

        {/* Menú */}
        <nav
          className="flex flex-col w-full"
          style={{ gap: "0.75rem", paddingInline: "0.5rem" }}
        >
          {menuItems.map((item, idx) => (
            
            <MotionNavLink
              key={item.label}
              to={item.path}
              
              onClick={() => setActive(item.label)}
              onMouseEnter={() => !isOpen && setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative flex items-center cursor-pointer rounded-xl transition-colors ${
                active === item.label
                  ? "bg-[#012558] text-white"
                  : "text-gray-300"
              }`}
              style={{
                padding: "0.5rem 0.75rem",
                marginInline: "0.5rem",
                borderRadius: "12px",
                width: "calc(100% - 1rem)",
                justifyContent: isOpen ? "flex-start" : "center",
              }}
              whileHover={{ scale: 1.03 }}
            >
              <div
                className="relative flex justify-center items-center "
                style={{ width: "24px", height: "24px", fontSize: "22px" }}
              >
                {item.icon}

                {/* Tooltip cuando está cerrado (solo desktop) */}
                {!isOpen && !isMobile && (
                  <motion.div
                    animate={
                      hoveredIndex === idx
                        ? { opacity: 1, x: 0, scale: 1 }
                        : { opacity: 0, x: 10, scale: 0.98 }
                    }
                    transition={{ duration: 0.15 }}
                    style={{
                      position: "absolute",
                      left: "55px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      backgroundColor: "#1f2937",
                      color: "white",
                      fontSize: "13px",
                      padding: "6px 10px",
                      borderRadius: "6px",
                      whiteSpace: "nowrap",
                      pointerEvents: "none",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                      zIndex: 999,
                    }}
                  >
                    {item.label}
                  </motion.div>
                )}
              </div>

              {/* Texto visible solo si está abierto */}
              {isOpen && (
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    marginLeft: "12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}
                </motion.span>
              )}
            </MotionNavLink>
          ))}
        </nav>
      </motion.div>
    </>
  );
}

export { Sidebar };
