import dayjs from 'dayjs';

const now = dayjs();

export const mockAppointments = [
    {
        id: '1',
        patientName: 'Juan Pérez',
        patientAge: 32,
        reason: 'Dolor de cabeza persistente',
        date: now.add(1, 'day').hour(10).minute(0).toDate(), // Tomorrow 10:00
        status: 'pending', // pending, confirmed, rejected, cancelled
        type: 'Consulta General',
    },
    {
        id: '2',
        patientName: 'María García',
        patientAge: 28,
        reason: 'Control anual',
        date: now.add(2, 'day').hour(15).minute(30).toDate(),
        status: 'confirmed',
        type: 'Chequeo',
    },
    {
        id: '3',
        patientName: 'Carlos López',
        patientAge: 45,
        reason: 'Resultados de análisis',
        date: now.subtract(1, 'day').hour(11).minute(0).toDate(),
        status: 'completed', // Or assume past confirmed is completed? keeping simple statuses for now
        type: 'Revisión',
    },
    {
        id: '4',
        patientName: 'Ana Rodríguez',
        patientAge: 60,
        reason: 'Presión alta',
        date: now.add(0, 'day').hour(14).minute(0).toDate(), // Today
        status: 'pending',
        type: 'Consulta General',
    },
    {
        id: '5',
        patientName: 'Luis Martinez',
        patientAge: 19,
        reason: 'Dolor abdominal',
        date: now.add(3, 'day').hour(9).minute(0).toDate(),
        status: 'cancelled',
        type: 'Urgencia',
    },
    {
        id: '6',
        patientName: 'Sofía Hernandez',
        patientAge: 5,
        reason: 'Vacunación',
        date: now.add(5, 'day').hour(16).minute(0).toDate(),
        status: 'pending',
        type: 'Pediatría',
    },
];
