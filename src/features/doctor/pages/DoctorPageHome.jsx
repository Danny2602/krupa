import React from 'react'
import { WelcomeBanner } from '../components/WelcomeBanner'
import { useAuth } from '@/context/AuthContext';
import { Typography } from '@mui/material';
export default function DoctorPageHome() {
    const { user } = useAuth()
    return (
        <>
            <WelcomeBanner user={user} />
            <Typography variant="h5" className="font-bold text-gray-800 mb-4">
                Citas Medicas Pendientes de confirmación
            </Typography>
        </>
    )
}

