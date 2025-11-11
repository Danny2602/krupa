import { useState } from "react";
import { Card } from "@mui/material";
import {motion} from "framer-motion";
import useScrollAndMobile from "@/hooks/useScrollAndMovile.js";
function CardPresentation({data}) {
    const {isMovile, scrolled} = useScrollAndMobile();
    const [selectedCard, setSelectedCard] = useState(null);
    const onClickCard = (index) => {
        setSelectedCard(index);
    }
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-gray-950 gap-4 p-4 w-full h-100 overflow-hidden" style={{ padding: '2vh' }}>
                <div className="overflow-y-auto max-h-[100%]">
                    {data.map((datas, index) => (

                        <motion.div key={index}
                            style={{margin:'2px',padding:'6px'}}  
                            className={`mb-4 mx-2  rounded-md  cursor-pointer`} 
                            initial={{background:'white', color:'black'}}
                            animate={
                                selectedCard === index
                                ? { background: "#16a34a", color: "white" } // verde si está seleccionado
                                : { background: "white", color: "black" }   // normal si no
                            }
                            whileHover={{
                                background: "#012558",
                                color: "white",
                                
                            }}
                            transition={{ duration: 0.3 }}
                            onClick={() => onClickCard(index)}>
                            <div className="p-4">
                            
                                <h2 className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-2xl">{datas.nombre}</h2>
                                <p className="text-sm text-gray-600">Especialidad: {datas.especialidad}</p>
                            </div>
                        </motion.div>

                    ))}
                </div>
                {isMovile ? '':(
                    <>
                        <div className="h-full ">
                            <Card className="w-full h-full border border-gray-500">
                                {selectedCard !== null ? (
                                    <div className="p-4">
                                        <h2 className="text-2xl font-bold mb-2">{data[selectedCard].nombre}</h2>
                                        <p className="text-gray-600">Especialidad: {data[selectedCard].especialidad}</p>
                                    </div>
                                ) : (
                                    <div className="p-4">
                                        <h2 className="text-2xl font-bold mb-2">Selecciona un doctor</h2>
                                    </div>
                                )}
                            </Card>
                        </div>
                    </>
                )}
                
            </div>
        </>
    );
}
export { CardPresentation };