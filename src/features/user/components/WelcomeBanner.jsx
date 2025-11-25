import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import { WavingHand } from '@mui/icons-material';
import { motion } from 'motion/react';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

export const WelcomeBanner = ({ user }) => {
    const getGreeting = () => {
        const hour = dayjs().hour();
        if (hour < 12) return 'Buenos días';
        if (hour < 18) return 'Buenas tardes';
        return 'Buenas noches';
    };

    const formattedDate = dayjs().format('dddd, D [de] MMMM [de] YYYY');

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card
                className="overflow-hidden"
                sx={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white'
                }}
            >
                <CardContent className="p-6">
                    <Box className="flex items-center justify-between flex-wrap gap-4">
                        <Box className="flex items-center gap-4">
                            <Avatar
                                src={user?.avatar}
                                alt={user?.name}
                                sx={{
                                    width: 70,
                                    height: 70,
                                    border: '3px solid white',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                }}
                            >
                                {user?.name?.charAt(0)}
                            </Avatar>
                            <Box>
                                <Box className="flex items-center gap-2 mb-1">
                                    <Typography variant="h4" className="font-bold">
                                        {getGreeting()}, {user?.name || 'Usuario'}!
                                    </Typography>
                                    <motion.div
                                        animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatDelay: 1
                                        }}
                                    >
                                        <WavingHand sx={{ fontSize: 32 }} />
                                    </motion.div>
                                </Box>
                                <Typography variant="body1" className="opacity-90">
                                    {formattedDate}
                                </Typography>
                            </Box>
                        </Box>
                        {user?.email && (
                            <Box className="text-right">
                                <Typography variant="body2" className="opacity-75">
                                    {user.email}
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </CardContent>
            </Card>
        </motion.div>
    );
};
