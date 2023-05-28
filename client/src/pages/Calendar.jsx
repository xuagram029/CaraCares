import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import axios from 'axios';

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8000/appointment');
      const transformedEvents = response.data.map(event => ({
        id: event.fullname,
        title: event.type,
        start: event.date_s,
      }));
      setEvents(transformedEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const eventContent = (eventInfo) => {
    const formattedStart = eventInfo.timeText.toLocaleString([], { timeStyle: 'short' }) // Format the date

    // eventInfo.timeText
    // console.log(eventInfo.timeText.toLocaleString([], { timeStyle: 'short' }))
    return (
      <div className='grid grid-cols-2 bg-slate-300 rounded-lg p-2'>
        <b>Time: {formattedStart}</b>
        <p className='-ml-1'><b>Agenda:</b> {eventInfo.event.title}</p>
        <p><b>name:</b> {eventInfo.event.id}</p>
      </div>
    );
  };

  return (
    <div className='w-full h-[90vh]'>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        // initialView="timeGridWeek"
        initialView="dayGridMonth"
        events={events}
        eventContent={eventContent}
        height="100%"
        aspectRatio={1.5}
      />
    </div>
  );
};

export default Calendar;
