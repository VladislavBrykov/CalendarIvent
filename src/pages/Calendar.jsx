import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import axios from 'axios';
import CalendarModalWindow from './../components/CalendarModalWindow'
import 'react-big-calendar/lib/sass/styles.scss';

const localizer = momentLocalizer(moment)
const allViews = { month: true, day: true, agenda: true }

export default ({ }) => {
  const [isOpenModal, isOpenModalChange] = useState(false)
  const [currentEvent, currentEventChange] = useState(null)
  const [allEvents, allEventsChange] = useState([])

  // Функция открытия модального окна и установка выбранного ивента
  const openModal = (event) => {
    isOpenModalChange(true)
    currentEventChange(event)
  }

  // Функция закрытия модального окна и уадление выбранного ивента
  const closeModal = () => {
    isOpenModalChange(false)
    currentEventChange(null)
  }

  const newIvent = async (start, end, title, description) => { //новый ивент запрос на сервер
    const body = { "start": start, "end": end, "title":title, "description": description } // То что передаем на сервер
    console.log(body);
    axios.defaults.baseURL = 'http://localhost:3000/api';

    const res = await axios.post(
      `/mycalendar`,
      body,
      {
        headers: {
          Authorization: localStorage.jwtToken
        }
      }
    );
    //alert('ивент создан');
    allIvent();
}


const delIvent = async (id) => { //del ивент запрос на сервер
  const body = { "event_id": id} // То что передаем на сервер
  console.log(body);

  axios.defaults.baseURL = 'http://localhost:3000/api';

  const res = await axios.patch(
    `/event`,
    body,
    {
      headers: {
        Authorization: localStorage.jwtToken
      }
    }
  );
  allIvent();
}


const allIvent = async () => { //all ивент запрос на сервер
  // const body = { "event_id": id} // То что передаем на сервер
  // console.log(body);
  axios.defaults.baseURL = 'http://localhost:3000/api';

  const res = await axios.get(
    `/event`,
    //body,
    {
      headers: {
        Authorization: localStorage.jwtToken
      }
    }
  );
  console.log(res.data.rp);
  //alert('ивенты подгружены');
  allEventsChange(res.data.rp)
  //return(res.data.rp)
}



const flyIvent = async (id, title, description, start, end, mail) => { //fly ивент запрос на сервер
  const body = { "event_id": id, "title": title, "description": description, "start": start, "end": end, "mail": mail} // То что передаем на сервер
  console.log(body);

  axios.defaults.baseURL = 'http://localhost:3000/api';

  const res = await axios.post(
    `/mail_event`,
    body,
    {
      headers: {
        Authorization: localStorage.jwtToken
      }
    }
  );
  allIvent();
}


  // Функция для создания ивента
  // Можно добавить функцию обращения к API для создания ивента в указанном месте
  // А можно заменить allEventsChange на функцию обращения к API для создания ивента, а потом вызвать функцию получения данных о ивентах
  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('Название нового ивента')
    if (title) {
      const description = window.prompt('Описание нового ивента')

      // allEventsChange([
        
      //   ...allEvents,
      //   {
      //     id: allEvents.length + 1,
      //     start,
      //     end,
      //     title,
      //     description
      //   },
      // ])

      newIvent(start, end, title, description);
     
    }
    // let a = allIvent()
    // console.log(a);
     //allIvent();

  }

  // Функция отслеживания выбора ивента для открытия модального окна
  const handleSelectEvent = (event) => openModal(event)

  // Функция для удаления ивента
  // Можно сделать также, как и со созданием
  const deleteEvent = (event) => {
console.log(event.id + " event");
delIvent(event.id);
    if (window.confirm(`Вы хотите удалить ивент "${event.title}"`)) {
      allEventsChange(allEvents.filter(v => v.id != event.id))
      closeModal()
      // alert(event_id + "iddd")
       //delIvent(event.id);
    }
   // alert(event.id + "event.id")
   // delIvent(event.id);
  }


  const mailEvent = (event, mail) => {  //отправить ивент по почте
    console.log(mail + " mail");
    console.log(event.id + " event");
    flyIvent(event.id, event.title, event.description, event.start, event.end, mail);
        if (window.confirm(`Вы делитесь ивентом"${event.title}"`)) {
          allEventsChange(allEvents.filter(v => v.id != event.id))
          closeModal()
        }
      }

  useEffect(() => {
    allIvent();


  

  }, [])

  return (
    <div>
      <Calendar
        localizer={localizer}
        views={allViews}
        events={allEvents}
        style={{ height: 600 }}
        popup
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
      />
      {
        isOpenModal
          ? <CalendarModalWindow
            closeModal={closeModal}
            currentEvent={currentEvent}
            deleteEvent={deleteEvent}
            mailEvent={mailEvent}
          />
          : null
      }
    </div>
  )

}