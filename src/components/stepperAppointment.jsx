import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/calendar";
// ⚙️ Aquí defines tus pasos y su contenido libremente
const steps = [
    {
        label: "Datos del cliente",
        content: (
        <div className="space-y-4">
            <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
                type="text"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Ingresa el nombre"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input
                type="email"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="ejemplo@email.com"
            />
            </div>
        </div>
        ),
    },
    {
        label: "Detalles del servicio",
        content: (
        <Calendar />
        ),
    },
    {
        label: "Confirmación",
        content: (
        <div className="text-center space-y-3">
            <p className="text-gray-700">
            Verifica que todos los datos sean correctos antes de confirmar la cita.
            </p>
            <button className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Confirmar cita
            </button>
        </div>
        ),
    },
    ];

    function StepperAppointment() {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});

    const total = steps.length;
    const allDone = Object.keys(completed).length === total;

    const handleNext = () => {
        if (activeStep < total - 1) setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        if (activeStep > 0) setActiveStep(activeStep - 1);
    };

    const handleComplete = () => {
        setCompleted({ ...completed, [activeStep]: true });
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <div className="min-w-[90%] h-[90vh] max-w-3xl mx-auto p-6 flex flex-col items-center  rounded-3xl border border-gray-500">
        {/* Stepper */}
        <div className="flex flex-col sm:flex-row items-center w-full relative " style={{padding:'1vh'}}>
            {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center flex-1 relative">
                {i < total - 1 && (
                <div
                    className={`hidden sm:block absolute top-5 left-1/2 h-[3px] w-full ${
                    completed[i] ? "bg-green-500" : "bg-gray-300"
                    } -z-10`}
                />
                )}

                <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-center w-10 h-10 rounded-full text-white font-semibold cursor-pointer transition-all duration-300 ${
                    completed[i]
                    ? "bg-green-500"
                    : i === activeStep
                    ? "bg-blue-600"
                    : "bg-gray-400"
                }`}
                onClick={() => setActiveStep(i)}
                >
                {completed[i] ? "✓" : i + 1}
                </motion.div>

                <p
                className={`mt-2 text-center text-sm sm:text-base ${
                    i === activeStep ? "text-blue-600 font-medium" : "text-gray-600"
                }`}
                >
                {step.label}
                </p>
            </div>
            ))}
        </div>

        {/* Contenido dinámico */}
        <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 w-full px-4 sm:px-8  h-full flex items-center justify-center  overflow-auto"
        >
            {allDone ? (
            <p className="text-center text-lg font-semibold text-green-600">
                🎉 Todos los pasos completados correctamente
            </p>
            ) : (
            steps[activeStep].content
            )}
        </motion.div>

        {/* Botones */}
        <div className="flex flex-wrap justify-center gap-3 mt-8  w-full">
            {!allDone && (
            <>
                <button
                onClick={handleBack}
                disabled={activeStep === 0}
                className=" w-[10%] bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50"
                style={{padding:'1vh'}}  
                >
                Atrás
                </button>

                <button
                onClick={handleComplete}
                className="font-bold w-[10%] bg-amber-600 text-white rounded-lg hover:bg-blue-700"
                style={{padding:'1vh'}}                            

                >
                {Object.keys(completed).length === total - 1 ? "Finalizar" : "Siguiente"}
                </button>
            </>
            )}

            {allDone && (
            <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleReset}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
                Reiniciar
            </motion.button>
            )}
        </div>
        </div>
    );
}

export { StepperAppointment };
