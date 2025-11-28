import React, { useState } from "react";
import { motion } from "motion/react";
import { Box } from "@mui/material";
import { Kbutton } from "@/components/ui/KButton";
import ServiceSelection from "./steps/ServiceSelection";
import DoctorSelection from "./steps/DoctorSelection";
import DateTimeSelection from "./steps/DateTimeSelection";
import AppointmentSummary from "./steps/AppointmentSummary";

const steps = [
    { label: "Especialidad", component: "service" },
    { label: "Profesional", component: "doctor" },
    { label: "Fecha y Hora", component: "datetime" },
    { label: "Confirmar", component: "summary" },
];

function StepperAppointment() {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const [appointmentData, setAppointmentData] = useState({
        service: null,
        doctor: null,
        date: null,
        time: null,
        notes: ''
    });
    const [showSuccess, setShowSuccess] = useState(false);

    const total = steps.length;

    const canProceed = () => {
        switch (activeStep) {
            case 0:
                return appointmentData.service !== null;
            case 1:
                return appointmentData.doctor !== null;
            case 2:
                return appointmentData.date !== null && appointmentData.time !== null;
            case 3:
                return true;
            default:
                return false;
        }
    };

    const handleNext = () => {
        if (activeStep < total - 1) setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(prev => prev - 1);
            setCompleted(prev => {
                const updated = { ...prev };
                delete updated[activeStep - 1];
                return updated;
            });
        }
    };

    const handleComplete = () => {
        if (canProceed()) {
            setCompleted({ ...completed, [activeStep]: true });
            handleNext();
        }
    };

    const handleConfirm = () => {
        console.log("Booking appointment with data:", appointmentData);
        setCompleted({ ...completed, [activeStep]: true });
        setShowSuccess(true);
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
        setAppointmentData({
            service: null,
            doctor: null,
            date: null,
            time: null,
            notes: ''
        });
        setShowSuccess(false);
    };

    const renderStepContent = () => {
        const step = steps[activeStep];

        switch (step.component) {
            case "service":
                return (
                    <ServiceSelection
                        selectedService={appointmentData.service}
                        onSelect={(service) => setAppointmentData({ ...appointmentData, service })}
                    />
                );
            case "doctor":
                return (
                    <DoctorSelection
                        selectedService={appointmentData.service}
                        selectedDoctor={appointmentData.doctor}
                        onSelect={(doctor) => setAppointmentData({ ...appointmentData, doctor })}
                    />
                );
            case "datetime":
                return (
                    <DateTimeSelection
                        selectedDate={appointmentData.date}
                        selectedTime={appointmentData.time}
                        onSelectDate={(date) => setAppointmentData(prev => ({ ...prev, date }))}
                        onSelectTime={(time) => setAppointmentData(prev => ({ ...prev, time }))}
                        notes={appointmentData.notes}
                        onNotesChange={(notes) => setAppointmentData(prev => ({ ...prev, notes }))}
                    />
                );
            case "summary":
                return <AppointmentSummary data={appointmentData} />;
            default:
                return null;
        }
    };

    return (
        <Box className="w-full max-w-7xl h-[90%] flex flex-col rounded-2xl border-2 border-gray-300 bg-white shadow-lg overflow-hidden">
            {/* Stepper Header - Desktop */}
            <Box className="hidden sm:flex w-full px-6 py-4 flex-row items-center border-b border-gray-200">
                {steps.map((step, i) => (
                    <Box key={i} className="flex flex-col items-center flex-1 relative">
                        {i < total - 1 && (
                            <Box
                                sx={{ top: "16px" }}
                                className={`absolute left-1/2 h-[2px] w-full z-0 ${completed[i] ? "bg-gradient-to-r from-purple-500 to-purple-600" : "bg-gray-300"
                                    }`}
                            />
                        )}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center justify-center w-10 h-10 rounded-full text-white font-semibold cursor-pointer transition-all duration-300 z-10 ${completed[i]
                                ? "bg-gradient-to-r from-purple-500 to-purple-600 shadow-md"
                                : i === activeStep
                                    ? "bg-gradient-to-r from-blue-500 to-blue-600 shadow-md"
                                    : "bg-gray-400"
                                }`}
                        >
                            {completed[i] ? "✓" : i + 1}
                        </motion.div>
                        <Box
                            className={`mt-1 text-center text-xs font-medium ${i === activeStep ? "text-blue-600" : "text-gray-600"
                                }`}
                        >
                            {step.label}
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* Stepper Header - Mobile */}
            <Box className="sm:hidden w-full border-b border-gray-200 p-3">
                <Box className="flex justify-between items-center mb-2">
                    <Box className="text-sm font-semibold text-blue-600">{steps[activeStep].label}</Box>
                    <Box className="text-xs text-gray-500">Paso {activeStep + 1} de {total}</Box>
                </Box>
                <Box className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                        className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${((activeStep + 1) / total) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </Box>
            </Box>

            {/* Content Area */}
            <Box className="flex-1 w-full overflow-y-auto p-4">
                {showSuccess ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="h-full flex items-center justify-center"
                    >
                        <Box className="max-w-2xl w-full bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center">
                            <Box className="text-6xl mb-4">🎉</Box>
                            <Box className="text-2xl font-bold text-green-700 mb-2">
                                ¡Cita Agendada Exitosamente!
                            </Box>
                            <Box className="text-gray-700 mb-4">
                                Tu cita ha sido confirmada. Recibirás un correo de confirmación con todos los detalles.
                            </Box>
                            <Box className="mt-4 p-4 bg-white rounded-lg text-left">
                                <Box className="text-gray-700 text-sm space-y-1">
                                    <div><strong>Especialidad:</strong> {appointmentData.service?.label || appointmentData.service?.name}</div>
                                    <div><strong>Doctor:</strong> {appointmentData.doctor?.name} {appointmentData.doctor?.lastName}</div>
                                    <div><strong>Fecha:</strong> {appointmentData.date}</div>
                                    <div><strong>Hora:</strong> {appointmentData.time}</div>
                                </Box>
                            </Box>
                        </Box>
                    </motion.div>
                ) : (
                    <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="h-full overflow-y-auto"
                    >
                        {renderStepContent()}
                    </motion.div>
                )}
            </Box>

            {/* Navigation Buttons */}
            <Box className="flex-none flex justify-center gap-3 w-full p-3 border-t border-gray-200 bg-gray-50">
                {!showSuccess ? (
                    <>
                        <Kbutton
                            text="Anterior"
                            color="secondary"
                            size="medium"
                            variant="outlined"
                            onClick={handleBack}
                            disabled={activeStep === 0}
                        />

                        {activeStep === total - 1 ? (
                            <Kbutton
                                text="Confirmar Cita"
                                color="success"

                                size="medium"
                                variant="contained"
                                onClick={handleConfirm}
                                className="font-bold text-amber-50"
                            />
                        ) : (
                            <Kbutton
                                text="Siguiente"
                                color="primary"
                                size="medium"
                                variant="contained"
                                onClick={handleComplete}
                                disabled={!canProceed()}
                                className="font-bold"
                            />
                        )}
                    </>
                ) : (
                    <Kbutton
                        text="Agendar Otra Cita"
                        color="primary"
                        size="medium"
                        variant="contained"
                        onClick={handleReset}
                        className="font-bold"
                    />
                )}
            </Box>
        </Box>
    );
}

export { StepperAppointment };
