import { doctorApi } from "@/features/appointments/api/doctor";
import { showToast } from "@/lib/toast";
import { useState, useCallback } from 'react'

export const useDoctorApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    // const fetchDoctors = useCallback(async () => {
    //     setLoading(true);
    //     setError(null);
    //     try {
    //         const result = await doctorApi.getDoctors();
    //         setData(result.data);
    //         return result.data;
    //     } catch (err) {
    //         const errorMessage = err.response?.data?.message || 'Error al cargar los doctores';
    //         setError(errorMessage);
    //         showToast.error(errorMessage);
    //         return null;
    //     } finally {
    //         setLoading(false);
    //     }
    // }, []);
    const fetchDoctorsBySpecialty = useCallback(async (id) => {
        setLoading(true);
        setError(null);
        try {
            const result = await doctorApi.getDoctorsBySpecialty(id);
            setData(result.data);
            return result.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Error al cargar los doctores';
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
        data,//dataDoctors se usa para guardar los doctores cuando se hace la busqueda por especialidad y no usar otro usestate en el componente DoctorSelection
        fetchDoctorsBySpecialty
    };
}

