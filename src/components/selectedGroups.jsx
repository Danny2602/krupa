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
      >
        {selectOptions.map((item) => (
          <ListItemButton
            key={item.label}
            sx={{ py: 0, minHeight: 32 }}
            onClick={() => setSelectedIndex(item.label)} // por si quieres click
          >
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label}/>
          </ListItemButton>
        ))}
      </Menu>
    </>
  )
}
export {SelectedGroups};
