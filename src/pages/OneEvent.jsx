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
    let params = window.location.href; //получаем полную ссылку страницы
    params = params.match(/event\/([^ ]*)/)[1];   //получаем все что идет после /post-id
    //params = parseInt(params.replace(/\D+/g, ""));  //получаем айди поста со ссылки

    const body = { "start": start, "end": end, "title":title, "description": description} // То что передаем на сервер
    console.log(body);
    axios.defaults.baseURL = 'http://localhost:3000/api';

    const res = await axios.post(
      `/event/` + params,
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
  let params = window.location.href; //получаем полную ссылку страницы
  params = params.match(/event\/([^ ]*)/)[1];   //получаем все что идет после /post-id
  //alert(params)
  //params = parseInt(params.replace(/\D+/g, ""));  //получаем айди поста со ссылки

  axios.defaults.baseURL = 'http://localhost:3000/api';

  const res = await axios.get(
    `/event/` + params,
    //body,
    {
      headers: {
        Authorization: localStorage.jwtToken,
      }
    }
  );
  console.log(res.data.rp);
  //alert('ивенты подгружены');
  allEventsChange(res.data.rp)
  //return(res.data.rp)
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

  useEffect(() => {
    allIvent();


    // }
   // allEventsChange = allIvent();
    //allEventsChange([allIvent()
      // {
      //   id: 2,
      //   start: new Date('Wed Apr 21 2021 17:31:20 GMT+0300 (Москва, стандартное время'),
      //   end: new Date('Wed Apr 27 2021 17:31:20 GMT+0300 (Москва, стандартное время'),
      //   title: 'test event',
      //   description: 'This is a test description of an event',
      // },
      // {
      //   id: 4,
      //   start: new Date('Wed Apr 21 2021 17:31:20 GMT+0300 (Москва, стандартное время'),
      //   end: new Date('Wed Apr 27 2021 17:31:20 GMT+0300 (Москва, стандартное время'),
      //   title: 'test event',
      //   description: 'This is a test description of an event',
      // },
      // {
      //   id: 5,
      //   start: new Date('Wed Apr 21 2021 17:31:20 GMT+0300 (Москва, стандартное время'),
      //   end: new Date('Wed Apr 27 2021 17:31:20 GMT+0300 (Москва, стандартное время'),
      //   title: 'test event',
      //   description: 'This is a test description of an event',
      // },
      // {
      //   id: 6,
      //   start: new Date('Wed Apr 14 2021 17:31:20 GMT+0300 (Москва, стандартное время'),
      //   end: new Date('Wed Apr 14 2021 17:31:20 GMT+0300 (Москва, стандартное время'),
      //   title: 'test event',
      //   description: 'This is a test description of an event',
      // },
      // {
      //   id: 7,
      //   start: new Date('Wed Apr 14 2021 17:31:20 GMT+0300 (Москва, стандартное время'),
      //   end: new Date('Wed Apr 14 2021 17:31:20 GMT+0300 (Москва, стандартное время'),
      //   title: 'test event',
      //   description: 'This is a test description of an event',
      // },
      // {
      //   id: 8,
      //   start: new Date('Wed Apr 14 2021 17:31:20 GMT+0300 (Москва, стандартное время'),
      //   end: new Date('Wed Apr 14 2021 17:31:20 GMT+0300 (Москва, стандартное время'),
      //   title: 'test event',
      //   description: 'This is a test description of an event',
      // },
      // {
      //   id: 9,
      //   start: new Date('Wed Apr 14 2021 17:31:20 GMT+0300 (Москва, стандартное время'),
      //   end: new Date('Wed Apr 14 2021 17:31:20 GMT+0300 (Москва, стандартное время'),
      //   title: 'test event',
      //   description: 'This is a test description of an event',
      // },
    //])

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
          />
          : null
      }
    </div>
  )

}