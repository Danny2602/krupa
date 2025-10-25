import React, { useState,useEffect } from "react";
import {
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Tabs,
    Tab,
    useMediaQuery,  
    Menu,
} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useScrollAndMobile from "@/hooks/useScrollAndMovile.js";
import { motion } from "motion/react"

function SelectedGroups({selectOptions,title}){
      const [tabSelected, setTabSelected] = useState(0);
      const { scrolled:scrollPosition, isMobile } = useScrollAndMobile();
      
      
      const handleTabChange = (event, newValue) => {
          setTabSelected(newValue);
      };

      // Menu desplegable
      const [anchorEl, setAnchorEl] = React.useState(null);
      const [selectedIndex, setSelectedIndex] = React.useState(1);
      const open = Boolean(anchorEl);

      // abrir al pasar el mouse
      const handleMouseEnter = (event) => {
          setAnchorEl(event.currentTarget);
      };

      // cerrar cuando sale
      const handleMouseLeave = () => {
          setAnchorEl(null);
      };

  return(
    <>
      <Tabs component="nav" aria-label="Device settings" >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-expanded={open ? 'true' : undefined}
         
          // quitar onClick
          onMouseEnter={handleMouseEnter}
        >
          <Tab 
            key={'ortesis-y-protesis'} 
            label={title} 
            sx={{color: scrollPosition ?'#ffffffff':'gray',fontWeight:'bold',padding:'0'}}
          />
          <ArrowDropDownIcon sx={{color: scrollPosition ? 'white':'gray'}}/>
        </ListItemButton>
      </Tabs>

      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMouseLeave}
        MenuListProps={{
          onMouseLeave: handleMouseLeave, // se cierra al salir
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
        PaperProps={{
        sx: {
          backgroundColor: scrollPosition ? "#012558" :  "white", 
          color: scrollPosition ? "white" : "black",        
        },
      }}
      >
        <div   className="grid grid-cols-3 auto-rows-autos">
          {selectOptions.map((item) => (
            <motion.div
              className={`rounded-lg border-4 ${scrollPosition ? "border-[#012558]" : "border-white"} `}
              onClick={() => setSelectedIndex(item.label)}
              style={{
                backgroundImage: `radial-gradient(circle,${scrollPosition ? "rgba(255, 255, 255, 255) 0%" : "rgba(1, 37, 88, 1) 0%"} , transparent 1020%)`, // azul-600
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "0% 0%",
              }}
              whileHover={{
                backgroundSize: "250% 250%", // el punto azul se expande
                transition: { duration: 0.6, ease: "easeOut" },
                color: scrollPosition ? "black" : "white",
                icon: "white",
              
                
              }}
              whileTap={{ scale: 0.9 }}
              key={item.label}
            >
            
              <ListItemButton sx={{ py: 0, minHeight: 32 }}>
                <div className="gap-2 items-center justify-center h-20 flex content-center">
                  <div className="content-center">{item.icon}</div>
                  <div className="">
                    <ListItemText primary={item.label}  primaryTypographyProps={{ fontWeight: "bold", color: "gray" }}/>
                    <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                  </div>
                </div>
              </ListItemButton>
            </motion.div>

          ))}
        </div>
      </Menu>
    </>
  )
}
export {SelectedGroups};
