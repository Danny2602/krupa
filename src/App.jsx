import { useState } from 'react'// useState es una función que permite crear un estado en un componente funcional

import { Navbar } from '@/layouts/navbar.jsx'
import { Inicio } from '@/pages/inicio.jsx'
import Footer from '@/layouts/footer'

import { GridGifs } from './components/gridGifs.jsx'
function App() {
  const [gifs, setGifs] = useState([]);
  return (
    <>
      <Navbar gifs={gifs} setGifs={setGifs} />
      <Inicio />
      <GridGifs gifs={gifs} />
      <Footer />
    </>
  )
}

export default App
