import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { HexColorPicker } from 'react-colorful';

export const ColorPicker = ({
    label = 'Color',
    value,
    onChange,
    required = false
}) => {
    const [showColorPicker, setShowColorPicker] = useState(false);

    return (
        <Box sx={{ position: 'relative' }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>
                {label} {required && <span style={{ color: '#d32f2f' }}>*</span>}
            </Typography>

            {/* Botón para abrir el picker */}
            <Box
                onClick={() => setShowColorPicker(!showColorPicker)}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    padding: '10px 15px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    '&:hover': {
                        borderColor: '#1976d2',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }
                }}
            >
                <Box
                    sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '6px',
                        backgroundColor: value || '#000000',
                        border: '2px solid #fff',
                        boxShadow: '0 0 0 1px #ddd'
                    }}
                />
                <Typography sx={{ flex: 1, fontWeight: 500 }}>
                    {value || '#000000'}
                </Typography>
            </Box>

            {/* Popup con el color picker */}
            {showColorPicker && (
                <>
                    {/* Overlay para cerrar al hacer click afuera */}
                    <Box
                        onClick={() => setShowColorPicker(false)}
                        sx={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 999
                        }}
                    />

                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: '30%',
                            left: 0,
                            marginBottom: 1,
                            padding: 2,
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                            zIndex: 1000
                        }}
                    >
                        <HexColorPicker
                            color={value || '#000000'}
                            onChange={onChange}
                        />
                        <input
                            type="hidden"
                            value={value || '#000000'}
                            onChange={(e) => onChange(e.target.value)}
                            placeholder="#000000"
                            style={{
                                width: '100%',
                                marginTop: '10px',
                                padding: '8px',
                                border: '1px solid #ddd',
                                borderRadius: '6px',
                                fontSize: '14px',
                                fontFamily: 'monospace'
                            }}
                        />
                    </Box>
                </>
            )}
        </Box>
    );
};
