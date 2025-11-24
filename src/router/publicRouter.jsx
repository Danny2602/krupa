import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/layouts/public/mainLayout.jsx'
import { Inicio } from '@/pages/inicio.jsx'
import Login from '@/features/auth/pages/LoginPage.jsx'


const PublicRouter = () => {
  return (
    <Routes>
      {/* Ruta padre con Layout que envuelve las subrutas */}
      <Route element={<Layout />}>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        {/* Si no coincide ninguna subruta */}
        {/* <Route index element={<Navigate to="/inicio" replace />} />
        <Route path="*" element={<Navigate to="/inicio" replace />} /> */}
      </Route>
    </Routes>
  )
}

export { PublicRouter } 