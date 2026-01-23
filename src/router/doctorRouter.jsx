import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DoctorPageHome from '@/features/doctor/pages/doctorPageHome'
import DoctorLayout from '@/layouts/doctor/DoctorLayout'
import DoctorAppointmentsPage from '@/features/doctor/pages/DoctorAppointmentsPage'


export default function DoctorRouter() {
    return (
        <Routes >
            <Route element={<DoctorLayout />}>
                <Route path="/home" element={<DoctorPageHome />} />
                <Route path="/citas" element={<DoctorAppointmentsPage />} />

            </Route>
        </Routes>
    )
}
