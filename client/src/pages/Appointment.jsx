import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get('http://localhost:8000/appointment');
    //   const transformedAppointments = res.data.map(e => ({
    //     name: e.fullname,
    //     title: e.type,
    //     start: e.date_s
    //   }));

      const transformedAppointments = res.data.map(event => ({
        id: event.fullname,
        title: event.type,
        start: event.date_s,
      }));

      setAppointments(transformedAppointments);
    } catch (error) {
      console.log(error);
    }
  };

  const appointmentContent = (eventInfo) => {
      const formattedStart = eventInfo.event.start.toLocaleString([], { timeStyle: 'short' }); // Format the date
    return (
      <div>
        <h4>{eventInfo.event.extendedProps.name}</h4>
        <h5>{eventInfo.event.title}</h5>
        <p>{formattedStart}</p>
      </div>
    );
  };

  return (
    <div className='w-full h-screen'>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        // initialView="dayGridMonth",
        // initialView="timeGridPlugin"
        events={appointments}
        eventContent={appointmentContent}
        height="100%"
        aspectRatio={1.5}
      />
    </div>
  );
};

export default Appointment;