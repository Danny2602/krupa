import api from "@/lib/axios";

export const appointmentApi = {
    getAppointmentsDoctor: async () => {
        const result = await api.get('/appointment/doctor');
        return result;
    },
    updateStatusAppointment: async (id, data) => {
        const result = await api.patch(`/appointment/${id}/status`, data);
        return result;
    }
}
