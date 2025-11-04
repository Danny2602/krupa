import { AnimatePresence, motion } from "framer-motion";
//Uso de Modal
// <button
//   onClick={() => setIsOpen(true)}
//   className=" bg-violet-600 text-white rounded hover:opacity-90 p-1.5"
//  >
//     Abrir Modal
//  </button>
//  <ModalEfect isOpen={isOpen} setIsOpen={setIsOpen} title="Modal" icono={FiAlertCircle} >MOdal</ModalEfect>
function ModalEfect({ isOpen, setIsOpen,children,title,icono:Icono }) {
    return (
        <AnimatePresence>
        {isOpen && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
            style={{padding:'2vh'}}
            >
                <motion.div
                    initial={{ scale: 0, rotate: "12.5deg" }}
                    animate={{ scale: 1, rotate: "0deg" }}
                    exit={{ scale: 0, rotate: "0deg" }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-gradient-to-br p-10 from-amber-900 to-amber-600 text-white rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                    style={{padding:'2vh'}}
                >
                    <Icono className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-2" />
                    <div className="relative z-10 ">
                        <div className=" w-full h-16 mb-2 text-3xl text-amber-600 grid place-items-center mx-auto">
                            <div className="bg-white w-16 h-16 rounded-full items-center justify-center flex">
                                {<Icono />}
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold text-center mb-2">
                            {title}
                        </h3>
                        <div className="text-center mb-6">
                            {children}
                        </div>
                        <div className="flex gap-2 p-4" style={{padding:'2vh'}}>
                            <button
                            onClick={() => setIsOpen(false)}
                            className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full rounded cursor-pointer"
                            style={{padding:'0.6vh'}}
                            >
                            Cancelar
                            </button>
                            <button
                            onClick={() => setIsOpen(false)}
                            className="bg-white hover:opacity-90 transition-colors text-indigo-600 hover:text-amber-700 font-semibold w-full  rounded cursor-pointer"
                            style={{padding:'0.6vh'}}
                            >
                            Enviar
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
    );
};

export { ModalEfect };