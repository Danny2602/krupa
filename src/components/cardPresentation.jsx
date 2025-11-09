import { useState } from "react";
import { Card } from "@mui/material";
import useScrollAndMobile from "@/hooks/useScrollAndMovile.js";
function CardPresentation({data}) {
    const {isMovile, scrolled} = useScrollAndMobile();
    const [selectedCard, setSelectedCard] = useState(null);
    const onClickCard = (index) => {
        setSelectedCard(index);
    }
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 h-full gap-4 p-4">
                <div className="overflow-auto max-h-[35%]">
                    {data.map((datas, index) => (

                        <Card key={index} style={{margin: "3px"}} className="mb-4 mx-2 border border-gray-300 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onClickCard(index)}>
                            <div className="p-4">
                            
                                <h2 className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-2xl">{datas.nombre}</h2>
                                <p className="text-sm text-gray-600">Especialidad: {datas.especialidad}</p>
                            </div>
                        </Card>
                       
                    ))}
                </div>
                {isMovile ? (
                    <></>
                ):(
                    <>
                        <div className="max-h-[35%]">
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