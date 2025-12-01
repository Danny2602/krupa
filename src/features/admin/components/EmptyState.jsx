import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'motion/react';
import { InboxOutlined } from '@mui/icons-material';

export const EmptyState = ({ message = 'No hay datos disponibles', icon: Icon = InboxOutlined }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            <Box
                className="flex flex-col items-center justify-center p-12 text-center"
                sx={{
                    backgroundColor: '#f9fafb',
                    borderRadius: 2,
                    border: '2px dashed #d1d5db'
                }}
            >
                <Icon sx={{ fontSize: 80, color: '#9ca3af', mb: 2 }} />
                <Typography variant="h6" className="text-gray-600">
                    {message}
                </Typography>
            </Box>
        </motion.div>
    );
};
