import { useState, useCallback } from 'react';
import { appointmentApi } from '@/features/doctor/api/appointmentApi';
import { showToast } from '@/lib/toast';

export const useAppointment = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const getAppointmentsDoctor = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await appointmentApi.getAppointmentsDoctor();
            setData(result.data);
            return result.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Error al cargar las citas';
            setError(errorMessage);
            showToast.error(errorMessage);
            return null;
        } finally {
            setLoading(false);
        }
    }, []);
    const updateStatusAppointment = useCallback(async (id, data) => {
        setLoading(true);
        setError(null);
        try {
            const result = await appointmentApi.updateStatusAppointment(id, data);
            setData(result.data);
            return result.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Error al actualizar el estado de la cita';
            setError(errorMessage);
            showToast.error(errorMessage);
            return null;
        } finally {
            setLoading(false);
        }
    }, []);
    return { loading, error, data, getAppointmentsDoctor, updateStatusAppointment };
};