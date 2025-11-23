import React from 'react';
import { Grid, Typography } from '@mui/material';
import { CardPresentation } from '@/components/cards/cardPresentation'; // Reusing existing component
import image1 from "@/assets/images/image1.jpg"; // Placeholder image

// Mock data - In real app, fetch based on selectedService
const doctors = [
    { nombre: "Dr. Juan Pérez", especialidad: "Cardiología", imagen: image1 },
    { nombre: "Dra. María Gómez", especialidad: "Neurología", imagen: image1 },
    { nombre: "Dr. Carlos Rodríguez", especialidad: "Pediatria", imagen: image1 },
    { nombre: "Dra. Laura Rodríguez", especialidad: "Dermatología", imagen: image1 },
];

const DoctorSelection = ({ selectedDoctor, onSelect }) => {
    return (
        <div className="w-full p-4">
            <Typography variant="h5" fontWeight="bold" textAlign="center" mb={4}>
                Elige a tu especialista
            </Typography>
            {/* Note: CardPresentation might need adjustment to handle selection clicks if it doesn't already. 
          For now, we assume it displays doctors. If we need selection logic, we might need to wrap it or modify it.
          Since I can't see CardPresentation internals right now, I'll assume it's a display grid.
          I will wrap it in a div that handles clicks for demo purposes or just show it.
      */}
            <div onClick={() => onSelect(doctors[0])} className="cursor-pointer">
                {/* Temporary: Clicking anywhere selects the first doctor for demo flow if CardPresentation doesn't support onClick */}
                <CardPresentation data={doctors} />
            </div>
            <Typography variant="caption" display="block" textAlign="center" mt={2} color="text.secondary">
                (Click en una tarjeta para seleccionar - Demo: Selecciona al primero)
            </Typography>
        </div>
    );
};

export default DoctorSelection;
