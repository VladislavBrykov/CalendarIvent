import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './login.css';

const styles = {//Стили для страницы
    position: 'absolute',
    top: '70px',
    left: '50%',
    transform: 'translateX(-50%)',
}

export default ({
    changeLoggedIn
}) => {

    const [CalendarData, changeCalendarData] = useState({
        nameTable: '',
        description: '',
       // email: '',
    })




//
const loadData = async (id) => { //del ивент запрос на сервер
    axios.defaults.baseURL = 'http://localhost:3000/api';
  
    const res = await axios.post(
      `/new_calendar`,
      CalendarData,
      {
        headers: {
          Authorization: localStorage.jwtToken
        }
      }
    );

            // отлов ошибок, можно сделать большую вариацию по коду
        if (res.status != 200) {
            return alert(res.data ? res.data : 'Что-то пошло нет так')
        } else if (!res.data.status) {
            return alert(res.data.error ? res.data.error : 'Что-то пошло нет так')
        }
//




    // const loadData = async () => { //Функция с запросом на сервер
    //     // const body = { "login": "user1", "password": "qwe", "email": "user1@gmail.com" }

    //     axios.defaults.baseURL = 'http://localhost:3000/api';
    //     const res = await axios.post(
    //         `/auth/login`,
    //         UserData
    //     )

    //     // отлов ошибок, можно сделать большую вариацию по коду
    //     if (res.status != 200) {
    //         return alert(res.data ? res.data : 'Что-то пошло нет так')
    //     } else if (!res.data.status) {
    //         return alert(res.data.error ? res.data.error : 'Что-то пошло нет так')
    //     }

    //     let role = res.data.rp
    //     role = role.role;
    //     console.log(role + "role");
    //     console.log(res.data.rp)

       
    }

    return (
        <div>
            <div>
                <div style={styles} className="form_auth_block">
                    <div className="form_auth_block_content">
                        <p className="form_auth_block_head_text">Создание нового календаря</p>
                        <form className="form_auth_style">
                            <label>Название календаря</label>
                            <input type="loginl" name="auth_login" onChange={e => changeCalendarData({ ...CalendarData, nameTable: e.target.value })} placeholder="Введите название календаря" id="login" required ></input>
                            <label>Описание календаря</label>
                            <input type="loginl" name="auth_login" onChange={e => changeCalendarData({ ...CalendarData, description: e.target.value })} placeholder="Опишите ваш календарь " id="login" required ></input>
                            {/* <label>Введите Ваш имейл</label>
                            <input type="email" name="auth_email" onChange={e => changeCalendarData({ ...CalendarData, email: e.target.value })} placeholder="Введите Ваш имейл" id="email" required ></input> */}

                            <button className="form_auth_button" type="button" name="form_auth_submit" onClick={() => loadData()}><Link to="/all-calendars">Создать</Link></button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};