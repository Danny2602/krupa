import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { Card } from '@mui/material';

// Function to map status to colors
const getEventColor = (status) => {
    switch (status) {
        case 'confirmed': return '#10B981'; // Green
        case 'pending': return '#F59E0B'; // Amber
        case 'cancelled': return '#EF4444'; // Red
        case 'rejected': return '#EF4444';
        default: return '#3B82F6'; // Blue
    }
};

export default function DoctorCalendar({ appointments, onEventClick }) {

    // Transformar las citas al formato de FullCalendar
    const events = appointments.map(app => ({
        id: app.id,
        title: `${app.patientName} - ${app.reason}`,
        start: app.date,
        backgroundColor: getEventColor(app.status),
        borderColor: getEventColor(app.status),
        extendedProps: { ...app }
    }));

    return (
        <Card className="p-4 shadow-lg rounded-xl bg-white/90 backdrop-blur-sm">
            <style>{`
                .fc-toolbar-title { font-size: 1.25rem !important; font-weight: 600; color: #1f2937; }
                .fc-button { background-color: #3b82f6 !important; border: none !important; text-transform: capitalize; }
                .fc-button:hover { background-color: #2563eb !important; }
                .fc-button-active { background-color: #1d4ed8 !important; }
                .fc-daygrid-day.fc-day-today { background-color: #eff6ff !important; }
            `}</style>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                locale={esLocale}
                events={events}
                eventClick={(info) => {
                    if (onEventClick) {
                        onEventClick(info.event.extendedProps);
                    }
                }}
                height="auto"
                aspectRatio={1.5}
                slotMinTime="08:00:00"
                slotMaxTime="20:00:00"
                allDaySlot={false}
                buttonText={{
                    today: 'Hoy',
                    month: 'Mes',
                    week: 'Semana',
                    day: 'Día',
                    list: 'Lista'
                }}
            />
        </Card>
    );
}
