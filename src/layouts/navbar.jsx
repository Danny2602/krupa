import React, { useState,useEffect } from "react";
import CustomizedList from "@/components/selected.jsx";
import { motion } from "motion/react";
import {
    AppBar,
    Toolbar,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Tabs,
    Tab,
    useMediaQuery,
    Grid,  
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { getGifs } from "../api/giphy.jsx";
import { Search } from "../components/search.jsx";
const navOptions = ["Inicio", "Servicios", "Contacto"];
import logo4 from '@/assets/images/logo4.png'
import logo2 from '@/assets/images/logo2.png'
import { Kbutton,KbuttonBlob } from "../components/kbutton.jsx";
import { SelectedGroups } from "@/components/selectedGroups.jsx";
// estilos selected
import useScrollAndMobile from "@/hooks/useScrollAndMovile.js";
//icono descargados
import RodillaIcon from '@/assets/icons/rodillaIcon.png'
const selectOptions = [
    {icon: <SearchIcon />, label: 'Columna'},
    {icon: <SearchIcon />, label: 'Miembros Superiores'},
    {icon: <img src={RodillaIcon} alt="Rodilla" className="w-7 h-7" />, label: 'Rodilla'},
    {icon: <SearchIcon />, label: 'Pie y Tobillo'},
];

function Navbar({gifs, setGifs}) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [tabSelected, setTabSelected] = useState(0);
    const [valorInput, setValorInput] = useState('');
    const { scrolled:scrollPosition, isMobile } = useScrollAndMobile();
    const handleTabChange = (event, newValue) => {
        setTabSelected(newValue);
    };

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const gifts = await getGifs(valorInput);
        setGifs(gifts.data);
    };

    
    return (
        <>
            <AppBar position="sticky" color="default" elevation={scrollPosition > 5 ? 4 : 0} 
                    sx={{mb:-1,
                    backgroundColor: scrollPosition ? 'rgba(6, 32, 151, 0.7)' : 'transparent',
                    backdropFilter: scrollPosition ? 'blur(10px)' : 'none',
                    
                    
                }}  >
                <Toolbar sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
                    {/* <img src={scrollPosition ? logo4:logo2} alt="Logo" style={{ height: 40 }} /> */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        {isMobile ? (
                            <>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={handleDrawerToggle}
                                >
                                    <MenuIcon sx={{color: scrollPosition ? 'white':'black'}}/>
                                </IconButton>
                                <Drawer
                                    anchor="right"
                                    open={drawerOpen}
                                    onClose={handleDrawerToggle}
                                >
                                    <List sx={{ width: 200 }}>
                                        {navOptions.map((option, idx) => (
                                            <ListItem button key={option} onClick={handleDrawerToggle}>
                                                <ListItemText primary={option} />
                                                
                                            </ListItem>
                                            
                                        ))}
                                            <CustomizedList title="Ortesis y Prótesis" options={selectOptions} />
                                            <br></br>
                                             <Grid container spacing={1} paddingLeft={1}>
                                                <KbuttonBlob startIcon={<ContactMailIcon />} text={'Contactanos'} height="5vh" width="21vh" color="rgba(6, 32, 151, 0.7)"/>

                                             </Grid>

                                    </List>
                                    
                                </Drawer>
                            </>
                        ) : (
                        <div className="flex items-center justify-between w-[95vw] ">
                                <div className="flex items-center ">
                                    <Tabs
                                    value={tabSelected}
                                    onChange={handleTabChange}
                                    textColor="inherit"
                                    indicatorColor={scrollPosition ? "primary" : "primary"}

                                    sx={{ minWidth: 300 }}
                                    
                                    >
                                    {navOptions.map((option) => (
                                        
                                        <Tab
                                        key={option}
                                        label={option}
                                        sx={{
                                            fontWeight: "bold",
                                            color: scrollPosition ? "#fff" : "gray",
                                            "&.Mui-selected": {
                                            color: scrollPosition
                                                ? "rgba(255,255,255,1)"
                                                : "primary.main",
                                            },
                                            "&:hover": {
                                            backgroundColor: scrollPosition
                                                ? "rgba(255,255,255,1)"
                                                : "primary.main",
                                                color: scrollPosition ? "gray" : "white",
                                                borderRadius: "5px",
                                                transition: "all 0.3s ease",
                                            },
                                            
                                        }}
                                        
                                        />
                                    ))}
                                    </Tabs>

                                    <SelectedGroups
                                        selectOptions={selectOptions}
                                        title="Ortesis y Prótesis"
                                    />
                                </div>

                            {/* Botón a la derecha */}
                                <div className="">
                                    <KbuttonBlob
                                    startIcon={<ContactMailIcon />}
                                    text="Contactanos"
                                    height="5vh"
                                    width="25vh"
                                    color="rgba(6, 32, 151, 0.7)"
                                    />
                                </div>
                            </div>


                            
                        )}
                        
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export { Navbar };