import { useState, useEffect } from 'react';

export const useAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            setLoading(true);
            // TODO: Replace with actual API call
            // import { appointmentApi } from '@/features/appointments/api/appointmentApi';
            // const response = await appointmentApi.getUserAppointments();
            // setAppointments(response.data);

            // Mock data for demonstration
            const mockAppointments = [
                {
                    id: 1,
                    service: 'Consulta General',
                    date: new Date(Date.now() + 86400000), // Tomorrow
                    status: 'pending',
                    professional: 'Dr. Juan Pérez',
                    notes: 'Traer estudios previos'
                },
                {
                    id: 2,
                    service: 'Odontología',
                    date: new Date(Date.now() + 172800000), // In 2 days
                    status: 'confirmed',
                    professional: 'Dra. María González',
                    notes: 'Limpieza dental'
                },
                {
                    id: 3,
                    service: 'Cardiología',
                    date: new Date(Date.now() + 259200000), // In 3 days
                    status: 'pending',
                    professional: 'Dr. Carlos Ramírez',
                    notes: null
                },
                {
                    id: 4,
                    service: 'Nutrición',
                    date: new Date(Date.now() + 432000000), // In 5 days
                    status: 'confirmed',
                    professional: 'Lic. Ana Martínez',
                    notes: 'Primera consulta - plan nutricional'
                }
            ];

            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 500));
            setAppointments(mockAppointments);
            setError(null);
        } catch (err) {
            setError(err.message || 'Error al cargar las citas');
        } finally {
            setLoading(false);
        }
    };

    return { appointments, loading, error, refetch: fetchAppointments };
};
