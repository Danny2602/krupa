import { Route, Routes } from "react-router-dom";
import React from 'react'
import Home from '@/features/user/pages/UserHomePage'
import Appointment from "@/features/appointments/pages/AppointmentPage";
import UserProfilePage from "@/features/user/pages/UserProfilePage";
import UserLayout from "@/layouts/user/userLayout";

const UserRouter = () => {
  return (
    <Routes >
      <Route element={<UserLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/profile" element={<UserProfilePage />} />
      </Route>
    </Routes>
  )
}

export default UserRouter