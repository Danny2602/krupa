import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '@/layouts/navbar.jsx'
import Footer from '@/layouts/footer'
const navOptions = [
  { label: 'Inicio', path: '/inicio' },
  { label: 'Servicios', path: '/servicios' }, // o '/login' si no tienes la página aún
  { label: 'Contacto', path: '/contacto' },   // o '/login'
  { label: 'login', path: '/login' },   // o '/login'
];
const MainLayout = ({children}) => {
  return (
    <>
        <Navbar navOptions={navOptions}/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainLayout