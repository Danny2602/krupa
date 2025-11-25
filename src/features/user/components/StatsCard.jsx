import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'motion/react';

export const StatsCard = ({ title, value, icon: Icon, color, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
        >
            <Card
                className="h-full hover:shadow-xl transition-all duration-300"
                sx={{
                    background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)`,
                    borderLeft: `4px solid ${color}`
                }}
            >
                <CardContent>
                    <Box className="flex items-center justify-between">
                        <Box>
                            <Typography
                                variant="body2"
                                className="text-gray-600 font-medium mb-1"
                            >
                                {title}
                            </Typography>
                            <Typography
                                variant="h4"
                                className="font-bold"
                                sx={{ color }}
                            >
                                {value}
                            </Typography>
                        </Box>
                        <Box
                            className="p-3 rounded-full"
                            sx={{ backgroundColor: `${color}20` }}
                        >
                            <Icon sx={{ fontSize: 32, color }} />
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </motion.div>
    );
};
