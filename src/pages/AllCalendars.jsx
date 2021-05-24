import React from 'react'
import { useState, useEffect } from 'react';
import Pagination from 'rc-pagination';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './posts.css'
import 'rc-pagination/assets/index.css';

function PostsPage(params) {// Страница постов
  const styles = {//Стили для страницы
    position: 'absolute',
    top: '70px',
    left: '50%',
    transform: 'translateX(-50%)',
  }

  const [CurrentPage, changeCurrentPage] = useState(1)
  const [dataFromServer, setDataFromServer] = useState([]); //Используем хук состояния для данных с сервера

  const loadData = async () => { //Функция с запросом на сервер
    axios.defaults.baseURL = 'http://localhost:3000/api';
    const res = await axios.get(
        `/base_myevent`,
        {
          headers: {
            Authorization: localStorage.jwtToken
          }
        }
      );
    console.log(res.data.rp);
    setDataFromServer(res.data.rp.reverse())
  }

      const delCalendar = async (item) => { //Функция с запросом на сервер удалить календать из списка общих
      let id_userr = item.id_user, namee = item.name_table, descriptionn = item.description;
      const res = await axios.delete('http://localhost:3000/api/delete_myevent', {
        headers: {
          Authorization: localStorage.jwtToken,
          Name: namee,
          Description: descriptionn,
          Id_user: id_userr
        }
      });
    console.log(res.data.rp);
    loadData();
   // setDataFromServer(res.data.rp.reverse())
  }

  const shareCalendar = async (name_table) => { //Функция с запросом на сервер удалить календать из списка общих
    let body = {"name_table": name_table}
    axios.defaults.baseURL = 'http://localhost:3000/api';
    const res = await axios.post(
      `/public_calendar`,
      body,
      {
        headers: {
          Authorization: localStorage.jwtToken
        }
      }
    );
  console.log(res.data.rp);
  loadData();
 // setDataFromServer(res.data.rp.reverse())
}

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div style={styles}>

      {
        dataFromServer.map((item, index) => index < CurrentPage * 5 && index >= (CurrentPage - 1) * 5
          ? <div id="pressed">
            <h2 id="h2" key={index}>{item.name_table}</h2>
            <h3 id="h4" key={index}>{item.description}</h3>
            <div class="btnn-group">
              <button class="button" ><Link to={'/event' + '/' + item.name_table}>Посмотреть</Link></button>
              <button  class="button"  onClick={() => delCalendar(item)}> Удалить </button>
              <button  class="button"  onClick={() => shareCalendar(item.name_table)}> Cделать общедоступным </button>
            </div>
          </div>
          : null)
      }

      {
        dataFromServer.length
          ? <div className="p-2">
            <Pagination className="" onChange={(current) => changeCurrentPage(current)} defaultCurrent={1} total={Math.ceil(dataFromServer.length / 5) * 10} />
          </div>
          :<div> 
          <h2>Календарей пока нет</h2>
          </div>
      }

    </div>
  );
}

export default PostsPage;

