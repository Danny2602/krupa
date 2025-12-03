import { useState, useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import EmojiPicker from 'emoji-picker-react';

export const EmojiPickerComponent = ({
    label = 'Emoji',
    value,
    onChange,
    required = false
}) => {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const buttonRef = useRef(null);
    const pickerRef = useRef(null);

    // Detectar clics fuera del picker para cerrarlo
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                showEmojiPicker &&
                pickerRef.current &&
                buttonRef.current &&
                !pickerRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)
            ) {
                setShowEmojiPicker(false);
            }
        };

        if (showEmojiPicker) {
            setTimeout(() => {
                document.addEventListener('mousedown', handleClickOutside);
            }, 0);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showEmojiPicker]);

    const handleEmojiClick = (emojiObject) => {
        onChange(emojiObject.emoji);
        setShowEmojiPicker(false);
    };

    return (
        <Box sx={{ position: 'relative' }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>
                {label} {required && <span style={{ color: '#d32f2f' }}>*</span>}
            </Typography>

            {/* Botón para abrir el picker */}
            <Box
                ref={buttonRef}
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
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
                        fontSize: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 40,
                        minHeight: 40
                    }}
                >
                    {value || '😀'}
                </Box>
                <Typography sx={{ flex: 1, fontWeight: 500, color: '#666' }}>
                    {value ? 'Emoji seleccionado' : 'Seleccionar emoji'}
                </Typography>
            </Box>

            {/* Popup con el emoji picker */}
            {showEmojiPicker && (
                <Box
                    ref={pickerRef}
                    sx={{
                        position: 'absolute',
                        bottom: '30%',
                        left: 0,
                        marginBottom: 1,
                        zIndex: 1300
                    }}
                >
                    <EmojiPicker
                        width={300}
                        height={350}
                        onEmojiClick={handleEmojiClick}
                        searchDisabled={true}
                        skinTonesDisabled
                        previewConfig={{ showPreview: false }}
                    />
                </Box>
            )}
        </Box>
    );
};
