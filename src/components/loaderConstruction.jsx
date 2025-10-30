import { motion,useInView } from 'motion/react'
import { Wrench } from "lucide-react";
function LoaderContruction({isActive=true,children}){
    return(
        <>
        {isActive ?(
            <div container padding={2} className='bg-amber-300'>
                    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
                    <motion.div
                        animate={{ rotate: [0, 20, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <Wrench size={80} className="text-amber-500" />
                    </motion.div>
                    <h1 className="text-3xl font-bold mt-4 text-gray-800">Página en construcción</h1>
                    <p className="text-gray-500 mt-2">Vuelve pronto 🚀</p>
                    </div>
                </div>
        ):(
            <>
            {children}
            </>
        )}
            
        </>
    )
}
export {LoaderContruction}