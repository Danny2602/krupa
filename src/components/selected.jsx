import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';



const FireNav = styled(List)({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

export default function CustomizedList({title,options}) {
  const [open, setOpen] = React.useState(false);
  return (
            <>
                <ListItemButton
                    onClick={() => setOpen(!open)}
                    sx={[
                        {px: 2,pt: 1,},
                        open
                            ? {pb: 1,}
                            : {pb: 2.5,},
                        open
                        ? {
                            '&:hover, &:focus': {
                            '& svg': {
                                opacity: 1,
                            },
                            },
                        }
                        : {
                            '&:hover, &:focus': {
                                '& svg': {
                                opacity: 0,
                                },
                            },
                        },
                    ]}
                >
                <ListItemText primary={title}/>
                <KeyboardArrowDown
                  sx={[
                    {
                      mr: -1,
                      opacity: 0,
                      transition: '0.2s',
                    },
                    open
                      ? {
                          transform: 'rotate(-180deg)',
                        }
                      : {
                          transform: 'rotate(0)',
                        },
                  ]}
                />
              </ListItemButton>
              {open &&
                options.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: 'rgba(0, 0, 0, 0.8)' }}
                  >
                    <ListItemIcon sx={{ color: 'black' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                    />
                  </ListItemButton>
                ))}
            </>
    );
}
