import dayjs from 'dayjs';

const now = dayjs();

export const mockAppointments = [
    {
        id: '1',
        name: 'Juan Pérez',
        patientAge: 32,
        notes: 'Dolor de cabeza persistente',
        startTime: now.add(1, 'day').hour(10).minute(0).toDate(), // Tomorrow 10:00
        status: 'pending', // pending, confirmed, rejected, cancelled
        type: 'Consulta General',
    },
    {
        id: '2',
        name: 'María García',
        patientAge: 28,
        notes: 'Control anual',
        startTime: now.add(2, 'day').hour(15).minute(30).toDate(),
        status: 'confirmed',
        type: 'Chequeo',
    },
    {
        id: '3',
        name: 'Carlos López',
        patientAge: 45,
        notes: 'Resultados de análisis',
        startTime: now.subtract(1, 'day').hour(11).minute(0).toDate(),
        status: 'completed', // Or assume past confirmed is completed? keeping simple statuses for now
        type: 'Revisión',
    },
    {
        id: '4',
        name: 'Ana Rodríguez',
        patientAge: 60,
        notes: 'Presión alta',
        startTime: now.add(0, 'day').hour(14).minute(0).toDate(), // Today
        status: 'pending',
        type: 'Consulta General',
    },
    {
        id: '5',
        name: 'Luis Martinez',
        patientAge: 19,
        notes: 'Dolor abdominal',
        startTime: now.add(3, 'day').hour(9).minute(0).toDate(),
        status: 'cancelled',
        type: 'Urgencia',
    },
    {
        id: '6',
        name: 'Sofía Hernandez',
        patientAge: 5,
        notes: 'Vacunación',
        startTime: now.add(5, 'day').hour(16).minute(0).toDate(),
        status: 'pending',
        type: 'Pediatría',
    },
];
