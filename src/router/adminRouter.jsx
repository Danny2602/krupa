import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '@/layouts/admin/AdminLayout';
import AdminDashboard from '@/features/admin/pages/AdminDashboard';
import SpecialtiesPage from '@/features/admin/pages/SpecialtiesPage';
import DoctorsPage from '@/features/admin/pages/DoctorsPage';
import UsersPage from '@/features/admin/pages/UsersPage';
import AppointmentsPage from '@/features/admin/pages/AppointmentsPage';
import NewsPage from '@/features/admin/pages/NewsPage';

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route path="/dashboard" element={<AdminDashboard />} />
                <Route path="/specialties" element={<SpecialtiesPage />} />
                <Route path="/doctors" element={<DoctorsPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/appointments" element={<AppointmentsPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
            </Route>
        </Routes>
    );
};

export default AdminRouter;
