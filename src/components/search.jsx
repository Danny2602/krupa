import React from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";    
function Search({valorInput, cambio, onSubmit}) {

    return (
        <div>
             <form onSubmit={onSubmit}>
                            <TextField
                                value={valorInput}
                                onChange={cambio}
                                placeholder="Buscar..."
                                size="small"
                                variant="outlined"
                                sx={{ minWidth: 150, background: "#fff", borderRadius: 1 }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton type="submit" edge="end">
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </form>
                        
        </div>
    );
}

export {Search};