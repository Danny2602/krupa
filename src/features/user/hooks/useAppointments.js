import { useState } from 'react';
import { appointmentApi } from '@/features/user/api/appointment';
import { showToast } from "@/lib/toast";
import { useCallback } from 'react';

export const useAppointmentApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const fetchAppointmentsForUser = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await appointmentApi.getAppointmentForUser();
            setData(result.data);
            return result.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Error al cargar la citas';
            setError(errorMessage);
            showToast.error(errorMessage);
            return null;
        } finally {
            setLoading(false);
        }
    }, []);
    return { loading, error, data, fetchAppointmentsForUser };
};
