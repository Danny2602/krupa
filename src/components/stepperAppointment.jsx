import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/calendar";
import { Kbutton } from "@/components/kbutton";
import { Checkbox,TextField,Select,MenuItem } from "@mui/material";
import { CardPresentation } from "@/components/cardPresentation";
const data=[
    {nombre:"Dr. Juan Pérez",especialidad:"Cardiología"},
    {nombre:"Dra. María Gómez",especialidad:"Neurología"},
    {nombre:"Dr. Carlos Rodríguez",especialidad:"Pediatria"},
    {nombre:"Dra. Laura Rodríguez",especialidad:"Dermatología"},
    {nombre:"Dr. Carlos Rodríguez",especialidad:"Pediatria"},
    {nombre:"Dra. Laura Rodríguez",especialidad:"Dermatología"},
    {nombre:"Dr. Carlos Rodríguez",especialidad:"Pediatria"},
    {nombre:"Dra. Laura Rodríguez",especialidad:"Dermatología"},
    {nombre:"Dr. Carlos Rodríguez",especialidad:"Pediatria"},
    {nombre:"Dra. Laura Rodríguez",especialidad:"Dermatología"},
    {nombre:"Dr. Carlos Rodríguez",especialidad:"Pediatria"},
    {nombre:"Dr. Juan Pérez",especialidad:"Cardiología"},
    {nombre:"Dra. María Gómez",especialidad:"Neurología"},
    {nombre:"Dr. Carlos Rodríguez",especialidad:"Pediatria"},
    {nombre:"Dra. Laura Rodríguez",especialidad:"Dermatología"},
    {nombre:"Dr. Carlos Rodríguez",especialidad:"Pediatria"},
    {nombre:"Dra. Laura Rodríguez",especialidad:"Dermatología"},
    {nombre:"Dr. Carlos Rodríguez",especialidad:"Pediatria"},
    {nombre:"Dra. Laura Rodríguez",especialidad:"Dermatología"},
    {nombre:"Dr. Carlos Rodríguez",especialidad:"Pediatria"},
    {nombre:"Dra. Laura Rodríguez",especialidad:"Dermatología"},
    {nombre:"Dr. Carlos Rodríguez",especialidad:"Pediatria"},
]
const styleCheckbox={
    className:"items-center flex hover:bg-gray-200 cursor-pointer border border-gray-300 rounded-lg p-2"
}
const steps = [
    {
        label: "Datos del cliente",
        content: (
            <div className="w-full max-w-md ">
                <div className="">
                    <label className="block text-4xl font-medium text-gray-700 p-12">
                        Registro de Cita Médica
                    </label>

                    {/* Datos del paciente */}
                    <div className="grid grid-cols-1  gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Nombre completo
                            </label>
                            <TextField
                                
                                id='outlined-disabled'
                                size='small'
                                fullWidth
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Correo electrónico
                            </label>
                            <TextField
                                
                                id='outlined-disabled'
                                size='small'
                                fullWidth
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Teléfono
                            </label>
                            <TextField
                                
                                id='outlined-disabled'
                                size='small'
                                fullWidth
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Especialidad
                            </label>
                            <Select
                                id='outlined-disabled'  size='small' fullWidth>
                                <MenuItem value={"general"} defaultChecked>Medicina General</MenuItem>
                                <MenuItem value={"pediatria"}>Pediatría</MenuItem>
                                <MenuItem value={"dermatologia"}>Dermatología</MenuItem>
                                <MenuItem value={"cardiologia"}>Cardiología</MenuItem>
                            </Select>
                        </div>

                        
                        
                    </div>
                </div>
        </div>
        ),
    },
    {
        label:"Sintomas",
        content:(
            <div className="w-[90%] text-center ">
                        <label className="block text-4xl font-medium text-gray-700 p-12">Síntomas</label>
                        <br></br>
                        <div className="grid grid-flow-col auto-rows-auto grid-rows-5 gap-4 overflow-y-auto">
                            <div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Fiebre</label></div>
                            <div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Dolor de garganta</label></div>
                            <div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Tos</label></div>
                            <div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Dificultad para respirar</label></div>
                            <div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Fatiga</label></div>
                            <div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Dolor muscular</label></div>
                            <div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Pérdida del gusto u olfato</label></div>
                            <div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Congestión nasal</label></div><div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Fiebre</label></div>
                            <div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Dolor de garganta</label></div>
                            <div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Tos</label></div>
                            <div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Dificultad para respirar</label></div>
                            <div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Fatiga</label></div>
                            <div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Dolor muscular</label></div>
                            <div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Pérdida del gusto u olfato</label></div>
                            <div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Congestión nasal</label></div><div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Fiebre</label></div>
                            <div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Dolor de garganta</label></div>
                            <div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Tos</label></div>
                            <div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Dificultad para respirar</label></div>
                            <div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Fatiga</label></div>
                            <div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Dolor muscular</label></div>
                            <div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Pérdida del gusto u olfato</label></div>
                            <div className={styleCheckbox.className}><Checkbox size="small" /><label className=" text-sm font-medium text-gray-700">Congestión nasal</label></div>
                        </div>
            </div>
        ),
    },{
        label: "Selecciona Al Doctor",
        content: (
            <div className="w-[90%] h-[90%] bg-red-200 ">
                <div className="text-center">
                    <label className="block text-base sm:text-lg md:text-xl lg:text-1xl xl:text-2xl font-bold text-gray-700 p-12">
                        Selección de Doctor
                    </label>
                </div>
                    
                
                <div className="">
                    <CardPresentation data={data} />
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
        <div className="min-w-[90%] h-[87vh] max-w-3xl mx-auto p-6 flex flex-col items-center  rounded-3xl border border-gray-500">
        {/* Stepper */}
        <div className="flex flex-col sm:flex-row items-center w-full relative" style={{padding:'1.5vh'}}>
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
            className="mt-10  w-full px-4 sm:px-8  h-full flex items-center justify-center  overflow-hidden"
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
        <div className="flex justify-center gap-4 w-full" style={{padding:'1vh'}} >
            {!allDone && (
            <>
                <Kbutton
                text="Anterior"
                color="secondary"
                size="large"
                variant="contained"
                onClick={handleBack}
                />
                
                <Kbutton
                text={Object.keys(completed).length === total - 1 ? "Finalizar" : "Siguiente"}
                color="primary"
                size="large"
                variant="contained"
                onClick={handleComplete}
                className="font-bold"
                />
            </>
            )}

            {allDone && (
            <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleReset}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
                Enviar
            </motion.button>
            )}
        </div>
        </div>
    );
}

export { StepperAppointment };
