import React, { useState } from 'react'
import { Box, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { showToast } from '@/lib/toast';
export const InputImage = ({ photoPreview, setPhotoPreview, setFormData }) => {

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // 5MB limit example
                showToast.error('La imagen no debe superar los 5MB');
                return;
            }
            const objectUrl = URL.createObjectURL(file);
            setPhotoPreview(objectUrl);
            setFormData(prev => ({ ...prev, photo: file }));
        }
    };
    return (
        <label className="md:w-full w-[200px] aspect-square border-2 border-dashed border-amber-600 rounded-lg flex flex-col justify-center items-center cursor-pointer hover:bg-amber-50 transition-colors relative overflow-hidden group">
            <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoChange}
            />
            {photoPreview ? (
                <>
                    <img
                        src={photoPreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Typography variant="body2" className="text-white font-medium">
                            Cambiar foto
                        </Typography>
                    </div>
                </>
            ) : (
                <Box className="text-center p-1">
                    <Add className="text-amber-600 text-2xl mb-1" />
                    <Typography variant="body2" className="text-gray-600 font-medium">
                        Inserte foto
                    </Typography>
                </Box>
            )}
        </label>
    )
}
