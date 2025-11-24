import toast from 'react-hot-toast';

// Configuración base para los toasts
const toastConfig = {
    duration: 4000,
    position: 'top-right',
};

export const showToast = {
    success: (message) => {
        toast.success(message, {
            ...toastConfig,
            style: {
                border: '1px solid #4ade80',
                padding: '16px',
                color: '#15803d',
                backgroundColor: '#f0fdf4',
            },
            iconTheme: {
                primary: '#4ade80',
                secondary: '#FFFAEE',
            },
        });
    },
    error: (message) => {
        toast.error(message, {
            ...toastConfig,
            style: {
                border: '1px solid #f87171',
                padding: '16px',
                color: '#b91c1c',
                backgroundColor: '#fef2f2',
            },
            iconTheme: {
                primary: '#f87171',
                secondary: '#FFFAEE',
            },
        });
    },
    // Por si necesitas uno neutral
    info: (message) => {
        toast(message, {
            ...toastConfig,
            icon: 'ℹ️',
            style: {
                border: '1px solid #60a5fa',
                padding: '16px',
                color: '#1e40af',
                backgroundColor: '#eff6ff',
            }
        })
    }
};
