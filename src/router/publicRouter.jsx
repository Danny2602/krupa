import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/layouts/public/mainLayout.jsx'
import { Inicio } from '@/pages/inicio.jsx'
import Login from '@/features/auth/pages/LoginPage.jsx'
import { Ubicaciones } from '@/pages/ubicaciones.jsx'
import { Columna } from '@/pages/columna.jsx'
import { MiembrosSuperiores } from '@/pages/miembrosSuperiores.jsx'
import { Rodilla } from '@/pages/rodilla.jsx'
import { PieYTobillo } from '@/pages/pieYTobillo.jsx'
import { Noticias } from '@/pages/noticias.jsx'
import { Contacto } from '@/pages/contacto.jsx'


const PublicRouter = () => {
  return (
    <Routes>
      {/* Ruta padre con Layout que envuelve las subrutas */}
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ubicaciones" element={<Ubicaciones />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contacto" element={<Contacto />} />

        {/* Service Pages */}
        <Route path="/servicios/columna" element={<Columna />} />
        <Route path="/servicios/miembros-superiores" element={<MiembrosSuperiores />} />
        <Route path="/servicios/rodilla" element={<Rodilla />} />
        <Route path="/servicios/pie-tobillo" element={<PieYTobillo />} />
      </Route>
    </Routes>
  )
}

export { PublicRouter }