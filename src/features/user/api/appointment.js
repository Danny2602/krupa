import api from "@/lib/axios";

export const appointmentApi = {
    getAppointmentForUser: async () => {
        const result = await api.get('/api/appointment/user');
        return result;
    },

}
