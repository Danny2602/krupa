import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, Typography, Button } from '@mui/material';
import { WelcomeBanner } from '../components/WelcomeBanner'
import { useAuth } from '@/context/AuthContext';
export default function DoctorPageHome() {
    const { user } = useAuth()
    const navigate = useNavigate();

    // Es un contador de citas pendientes
    const pendingCount = 3;

    return (
        <div className="space-y-6">
            <WelcomeBanner user={user} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-linear-to-br from-blue-500 to-indigo-600 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <CardContent className="flex flex-col items-center justify-center py-8">
                        <Typography variant="h2" className="font-bold mb-2">
                            {pendingCount}
                        </Typography>
                        <Typography variant="subtitle1" className="opacity-90">
                            Citas Pendientes
                        </Typography>
                        <Button
                            variant="contained"
                            className="mt-4 bg-white text-indigo-600 hover:bg-gray-100 font-bold"
                            onClick={() => navigate('/doctor/citas')}
                        >
                            Ver Solicitudes
                        </Button>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-emerald-500 cursor-pointer" onClick={() => navigate('/doctor/citas')}>
                    <CardContent>
                        <div className="flex items-center space-x-2 mb-2 text-emerald-600">
                            <Typography variant="h6" className="font-bold">Próxima Cita</Typography>
                        </div>
                        <Typography variant="h5" className="font-bold text-gray-800">
                            Juan Pérez
                        </Typography>
                        <Typography variant="body2" className="text-gray-500 mt-1">
                            Mañana, 10:00 AM
                        </Typography>
                        <Typography variant="body2" className="text-indigo-500 mt-2 font-medium">
                            Ver Calendario &rarr;
                        </Typography>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                    <Typography variant="h5" className="font-bold text-gray-800">
                        Citas Pendientes Recientes
                    </Typography>
                    <Button onClick={() => navigate('/doctor/citas')} color="primary">
                        Ver Todo
                    </Button>
                </div>
                {/* Placeholder */}
                <Typography variant="body2" className="text-gray-500 italic">
                    Ve a la sección de "Citas" para gestionar todas las solicitudes.
                </Typography>
            </div>
        </div>
    )
}

