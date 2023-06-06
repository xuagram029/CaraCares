import React, { useContext, useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router';

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    if(!user){
      navigate('/admin-login')
    }else if(user?.resp[0]?.role === 'user'){
      navigate('/')
   }
  }, [user])
  

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8000/appointment');
      console.log(response.data);
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
      <div className='text-white w-full text-center bg-rose-500 rounded-lg p-2'>
        <b>Time: {formattedStart}</b>
        <p className='-ml-1'><b>Agenda:</b> {eventInfo.event.title}</p>
        <p><b>name:</b> {eventInfo.event.id}</p>
      </div>
    );
  };

  return (
    <div className='flex flex-col sm:flex-row'>
      <Sidebar />
      <div className='ml-5 flex-grow'>
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
    </div>
  );
};

export default Calendar;