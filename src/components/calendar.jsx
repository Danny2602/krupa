import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';
import { motion } from 'framer-motion';
import '@/assets/styles/calendar.css';

const events = [
  {
    id: '1',
    title: 'Reunión de equipo',
    start: '2025-10-27T10:00:00',
    end: '2025-10-27T11:00:00',
    backgroundColor: '#3b82f6',
    textColor: 'white'
  },
  {
    id: '2',
    title: 'Revisión de proyecto',
    start: '2025-10-28T14:00:00',
    end: '2025-10-28T15:30:00',
    backgroundColor: '#10b981',
    textColor: 'white'
  },
  {
    id: '3',
    title: 'Llamada con cliente',
    start: '2025-10-29T09:00:00',
    end: '2025-10-29T10:00:00',
    backgroundColor: '#f59e0b',
    textColor: 'white'
  },
  {
    id: '4',
    title: 'Presentación final',
    start: '2025-10-30T11:00:00',
    end: '2025-10-30T12:00:00',
    backgroundColor: '#ef4444',
    textColor: 'white'
  }
];

function Calendar() {
  return (
    <motion.div
      className="max-w-6xl mx-auto p-6 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-slate-100 shadow-2xl border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-500 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        📅 Agenda Semanal
      </motion.h2>

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
          slotMinTime="07:00:00"
          slotMaxTime="20:00:00"
          allDaySlot={false}
          events={events}
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
          eventDidMount={(info) => {
            info.el.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
            info.el.addEventListener('mouseenter', () => {
              info.el.style.transform = 'scale(1.05)';
              info.el.style.boxShadow = '0 6px 14px rgba(0,0,0,0.15)';
            });
            info.el.addEventListener('mouseleave', () => {
              info.el.style.transform = 'scale(1)';
              info.el.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';
            });
          }}
        />
      </div>
    </motion.div>
  );
}

export { Calendar };
