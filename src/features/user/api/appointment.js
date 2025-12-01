import api from "@/lib/axios";

export const appointmentApi = {
    getAppointmentForUser: async () => {
        const result = await api.get('/appointment/user');
        return result;
    },

}
