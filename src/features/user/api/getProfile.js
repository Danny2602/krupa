import api from '@/lib/axios'
export const getProfileApi = {
    getIdProfile: async (profileData) => {
        const {data} = await api.get('api/users/profile', profileData);
        return {data};
    },
};