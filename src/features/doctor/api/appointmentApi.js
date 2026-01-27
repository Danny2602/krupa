import api from "@/lib/axios";

export const appointmentApi = {
    getAppointmentsDoctor: async () => {
        const result = await api.get('/appointment/doctor');
        return result;
    },
}
