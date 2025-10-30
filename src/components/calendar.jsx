import { IlamyCalendar } from '@ilamy/calendar';
import React from 'react';
import '@/hooks/dayjs-config'; // Importa la configuración de Day.js

const events = [
  {
    id: '1',
    title: 'Team Meeting',
    start: new Date('2024-01-15T10:00:00'), // Lunes
    end: new Date('2024-01-15T11:00:00'),
    description: 'Weekly team sync',
    backgroundColor: '#3b82f6',
    color: 'white'
  },
  {
    id: '2',
    title: 'Project Review',
    start: new Date('2024-01-16T14:00:00'), // Martes
    end: new Date('2024-01-16T15:30:00'),
    backgroundColor: '#10b981',
    color: 'white',
  },
  {
    id: '3',
    title: 'Client Call',
    start: new Date('2024-01-17T09:00:00'), // Miércoles
    end: new Date('2024-01-17T10:00:00'),
    backgroundColor: '#f59e0b',
    color: 'white'
  }
];

function Calendar() {
  return (
    <div className="p-6">
      <IlamyCalendar 
        events={events} 
        initialView='day'
        weekends={false}
        slotMinTime="07:00:00"
        slotMaxTime="20:00:00"
        allDaySlot={true}
        businessHours={{
          daysOfWeek: [1, 2, 3, 4, 5], // Lunes a Viernes
          startTime: '08:00',
          endTime: '18:00',
        }}
        dayHeaderFormat={{ weekday: 'short', day: 'numeric', month: 'short' }}
        height="600px"
        slotDuration="01:00:00"
      />
    </div>
  );
}

export { Calendar };