import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '@/layouts/public/navbar.jsx'
import Footer from '@/layouts//public/footer'

const navOptions = [
  { label: 'Inicio', path: '/inicio' },
  { label: 'Ubicaciones', path: '/ubicaciones' },
  { label: 'Noticias', path: '/noticias' },
  { label: 'Contacto', path: '/contacto' }
];

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar navOptions={navOptions} />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout