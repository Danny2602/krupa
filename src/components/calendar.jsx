import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import '@/assets/styles/calendar.css';
import { TextField } from '@mui/material'
dayjs.locale('es');

const events = [
  {
    id: '1',
    title: 'Reunión de equipo',
    start: '2025-11-03T08:00:00',
    end: '2025-11-03T10:00:00',
    backgroundColor: '#3b82f6',
    textColor: 'white'
  },
  {
    id: '2',
    title: 'Revisión de proyecto',
    start: '2025-11-04T14:00:00',
    end: '2025-11-04T16:00:00',
    backgroundColor: '#11b981',
    textColor: 'white'
  },
  {
    id: '3',
    title: 'Llamada con cliente',
    start: '2025-11-04T08:00:00',
    end: '2025-11-04T10:00:00',
    backgroundColor: '#f59e0b',
    textColor: 'white'
  },
  {
    id: '4',
    title: 'Presentación final',
    start: '2025-11-05T10:00:00',
    end: '2025-11-05T12:00:00',
    backgroundColor: '#ef4444',
    textColor: 'white'
  }
];

function Calendar() {
  
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Generar eventos vacíos de 2h entre 8:00–17:00 excepto 12:00–13:00
  const generateTimeBlocks = () => {
    const startDate = dayjs('2025-11-03');
    const blocks = [];

    for (let day = 0; day < 5; day++) {
      const currentDay = startDate.add(day, 'day');

      for (let hour = 8; hour < 17; hour += 2) {
        if (hour === 12) continue; // almuerzo

        const start = currentDay.hour(hour).minute(0);
        const end = start.add(2, 'hour');

        // Verificar si ya hay un evento en ese rango
        const occupied = events.some(
          e =>
            dayjs(start).isBefore(dayjs(e.end)) &&
            dayjs(end).isAfter(dayjs(e.start))
        );

        if (!occupied) {
          blocks.push({
            title: 'Disponible',
            start: start.toISOString(),
            end: end.toISOString(),
            backgroundColor: '#e0e7ff',
            textColor: '#1e40af',
            display: 'auto',
            extendedProps: { libre: true }
          });
        }
      }
    }
    return blocks;
  };

  const combinedEvents = [...events, ...generateTimeBlocks()];

  const handleEventClick = (info) => {// 
    if (info.event.extendedProps.libre) {
      
    }
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto p-6 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-slate-110  "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      

      <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
        <FullCalendar
          plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
          initialView="timeGridWeek"
          locale={esLocale}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: ''
          }}
          weekends={false}
          slotMinTime="08:00:00"
          slotMaxTime="18:00:00"
          allDaySlot={false}
          events={combinedEvents}
          height="auto"
          nowIndicator={true}
          businessHours={{
            daysOfWeek: [1, 2, 3, 4, 5],
            startTime: '08:00',
            endTime: '18:00'
          }}
          slotLabelFormat={{
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
          }}
          onEventClick={handleEventClick}
          eventDidMount={(info) => {
            const isLibre = info.event.extendedProps.libre;
            info.el.style.cursor = isLibre ? 'pointer' : 'not-allowed';
          }}
            validRange={{
            start: dayjs().startOf('week').toDate(), // impide retroceder antes de esta semana
          }}
          initialDate={dayjs().toDate()} // empieza en la semana actual
        />
      </div>

      
    </motion.div>
  );
}

export { Calendar };
