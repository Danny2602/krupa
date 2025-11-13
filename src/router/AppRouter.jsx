import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/layouts/public/mainLayout.jsx'
import { Inicio } from '@/pages/inicio.jsx'
import Login from '@/pages/auth/login.jsx'

const AppRouter = () => {
  return (
    <Routes>
      {/* Ruta padre con Layout que envuelve las subrutas */}
      <Route element={<Layout />}>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route index element={<Navigate to="/inicio" replace />} />
      </Route>

      {/* catch-all */}
      <Route path="/*" element={<Navigate to="/inicio" replace />} />
    </Routes>
  )
}

export default AppRouter