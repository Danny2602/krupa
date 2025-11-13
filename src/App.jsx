import { useState,useEffect } from 'react'// useState es una función que permite crear un estado en un componente funcional


import AppRouter from '@/router/AppRouter.jsx'


function App() {
  // const [count, setCount] = useState(0)
  // useEffect(()=>{
  //   console.log('hola');
  // },[count])

  // const evento= (e)=>{
  // console.log('se mueve el scroll')
  // }

  // useEffect(() => {
  //   document.addEventListener('wheel', evento);
  //   return () => {
  //       document.removeEventListener('wheel', evento);
  //     }
  // })
        //   {/* <button onClick={()=>setCount(count+1)} className='bg-amber-300'>+1</button>
        // {count} */}
  const [gifs, setGifs] = useState([]);
  return (
    <>
        <AppRouter/>
    </>
  )
}

export default App
