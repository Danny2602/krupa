import api from "@/lib/axios";

export const doctorApi = {
    getDoctors: async () => {
        const data = await api.get('/api/doctor');
        return data;
    },
    getDoctorsBySpecialty: async (id) => {
        const data = await api.get(`/api/doctor/specialty/${id}`);
        return data;
    }
}
