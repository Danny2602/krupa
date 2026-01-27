import { doctorApi } from "../api/doctorApi";

import { useState } from 'react';
import { showToast } from "@/lib/toast";
import { useCallback } from 'react';

export const useDoctorApi = () => {
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    // const [data, setData] = useState(null);

    // const fetchAppointmentsForDoctor = useCallback(async () => {
    //     setLoading(true);
    //     setError(null);
    //     try {
    //         const result = await doctorApi.getDoctorAppointments();
    //         setData(result.data);
    //         return result.data;
    //     } catch (err) {
    //         const errorMessage = err.response?.data?.message || 'Error al cargar la citas';
    //         setError(errorMessage);
    //         showToast.error(errorMessage);
    //         return null;
    //     } finally {
    //         setLoading(false);
    //     }
    // }, []);
    // return { loading, error, data, fetchAppointmentsForDoctor };
};
