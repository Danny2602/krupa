import api from '@/lib/axios';

export const updateProfileApi = {
    updateProfile: async (profileData) => {
        const {data} = await api.patch('api/users/profile', profileData);
        return {data};
    },
};