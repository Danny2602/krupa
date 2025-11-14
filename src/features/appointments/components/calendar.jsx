import React, { useState, useEffect, useMemo } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import '@/assets/styles/calendar.css';
dayjs.locale('es');

const events = [
  {
    id: '1',
    title: 'Reunión de equipo',
    start: '2025-11-03T09:00:00',
    end: '2025-11-03T11:00:00',
    backgroundColor: '#3b82f6',
    textColor: 'white'
  },
  {
    id: '2',
    title: 'Revisión de proyecto',
    start: '2025-11-04T15:00:00',
    end: '2025-11-04T17:00:00',
    backgroundColor: '#11b981',
    textColor: 'white'
  },
  {
    id: '3',
    title: 'Llamada con cliente',
    start: '2025-11-04T09:00:00',
    end: '2025-11-04T11:00:00',
    backgroundColor: '#f59e0b',
    textColor: 'white'
  },
  {
    id: '4',
    title: 'Presentación final',
    start: '2025-11-11T11:00:00',
    end: '2025-11-11T13:00:00',
    backgroundColor: '#ef4444',
    textColor: 'white'
  }
];

function Calendar() {
  const [selectedSlots, setSelectedSlots] = useState([]); // Mantiene los slots seleccionados por el usuario

  // Esta función genera los bloques de tiempo disponibles dinámicamente para la vista actual del calendario.
  const generateAvailableSlots = (fetchInfo, successCallback) => {
    const startDate = dayjs(fetchInfo.start);
    const endDate = dayjs(fetchInfo.end);
    const blocks = [];

    let currentDay = startDate;
    while (currentDay.isBefore(endDate)) {
      for (let hour = 9; hour < 19; hour += 1) {
        if (hour === 13) continue; // almuerzo

        const start = currentDay.hour(hour).minute(0);
        const end = start.add(1, 'hour');

        // Comprueba si el slot está ocupado por un evento existente
        const occupied = events.some(
          e =>
            dayjs(start).isBefore(dayjs(e.end)) &&
            dayjs(end).isAfter(dayjs(e.start))
        );

        // Comprueba si el slot está seleccionado actualmente por el usuario
        const isSelected = selectedSlots.some(s => s.id === `disponible-${start.toISOString()}`);

        if (!occupied) {
          blocks.push({
            id: `disponible-${start.toISOString()}`,
            title: isSelected ? 'Seleccionado' : 'Disponible',
            start: start.toISOString(),
            end: end.toISOString(),
            backgroundColor: isSelected ? '#3b82f6' : '#e0e7ff',
            textColor: isSelected ? 'white' : '#1e40af',
            display: 'auto',
            extendedProps: { libre: true }
          });
        }
      }
      currentDay = currentDay.add(1, 'day');
    }

    let finalEvents = [...events, ...blocks];

    if (selectedSlots.length === 2) {
      // Ordenar para asegurar que el primero es el que empieza antes
      const sortedSlots = [...selectedSlots].sort((a, b) => dayjs(a.start).diff(dayjs(b.start)));
      const [first, second] = sortedSlots;

      // Crear el evento combinado
      const combinedSlot = {
        id: `combined-${first.id}`,
        title: 'Cita seleccionada',
        start: first.start,
        end: second.end,
        backgroundColor: '#3b82f6',
        textColor: 'white',
        extendedProps: { libre: true, combined: true, childrenIds: [first.id, second.id] }
      };

      // Filtrar los slots individuales que forman el combinado
      finalEvents = finalEvents.filter(e => e.id !== first.id && e.id !== second.id);
      finalEvents.push(combinedSlot);
    }

    successCallback(finalEvents);
  };

  const handleEventClick = (clickInfo) => {
    const clickedEvent = clickInfo.event;
    const calendarApi = clickInfo.view.calendar;
    if (!clickedEvent.extendedProps.libre) return;

    const clickedId = clickedEvent.id;
    const isSelected = selectedSlots.some(s => s.id === clickedId);

    // Si se hace clic en un bloque combinado de 2h
    if (clickedEvent.extendedProps.combined) {
        // Esta es una aproximación, ya que timeBlocks no existe. Funciona para la lógica de deselección.
        const originalSlots = clickedEvent.extendedProps.childrenIds.map(id => calendarApi.getEventById(id) || { id, start: dayjs(id.replace('disponible-', '')).toISOString() });
        // Mantenemos seleccionado el slot sobre el que se hizo clic (aproximado)
        const clickTime = dayjs(clickInfo.jsEvent.target.getBoundingClientRect().top < clickedEvent.start ? clickedEvent.start : clickInfo.date);
        const closestSlot = originalSlots.sort((a,b) => Math.abs(dayjs(a.start).diff(clickTime)) - Math.abs(dayjs(b.start).diff(clickTime)))[0];
        setSelectedSlots([closestSlot]);
        return;
    }

    if (isSelected) {
      // Deseleccionar
      setSelectedSlots(selectedSlots.filter(s => s.id !== clickedId));
    } else {
      // Seleccionar
      if (selectedSlots.length === 0) {
        setSelectedSlots([{ id: clickedId, start: clickedEvent.startStr, end: clickedEvent.endStr }]);
      } else if (selectedSlots.length === 1) {
        const existingSlot = selectedSlots[0];
        const newSlot = { id: clickedId, start: clickedEvent.startStr, end: clickedEvent.endStr };
        // Comprobar si son adyacentes
        if (dayjs(newSlot.start).isSame(dayjs(existingSlot.end)) || dayjs(newSlot.end).isSame(dayjs(existingSlot.start))) {
          setSelectedSlots([...selectedSlots, newSlot]);
        } else {
          // Si no es adyacente, se reemplaza la selección
          setSelectedSlots([newSlot]);
        }
      } else { // ya hay 2 seleccionados
        setSelectedSlots([{ id: clickedId, start: clickedEvent.startStr, end: clickedEvent.endStr }]);
      }
    }
    // Refresca los eventos para mostrar la nueva selección
    calendarApi.refetchEvents();
  };

  return (
    <motion.div
      className="w-full h-full p-2 sm:p-4"
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
          weekends={true} // Mostrar fines de semana
          slotMinTime="09:00:00"
          slotMaxTime="18:00:00"
          allDaySlot={false}
          events={generateAvailableSlots} // Usar la función como fuente de eventos
          height="auto"
          nowIndicator={true}
          businessHours={{
            daysOfWeek: [1, 2, 3, 4, 5],
            startTime: '09:00',
            endTime: '18:00'
          }}
          slotLabelFormat={{
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
          }}
          eventClick={handleEventClick}
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
