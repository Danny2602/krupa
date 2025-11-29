import { appointmentApi } from "@/features/appointments/api/appointment";

import React, { useState, useCallback } from 'react'
import { showToast } from "@/lib/toast";

export const useAppointmentApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const fetchAppointmentForDoctorAndDay = useCallback(async (doctorId, day) => {
        setLoading(true);
        setError(null);
        try {
            const result = await appointmentApi.getAppointmentForDoctorAndDay(doctorId, day);
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

    return {
        loading,
        error,
        data,
        fetchAppointmentForDoctorAndDay,
    };
}
