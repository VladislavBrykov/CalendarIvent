import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './login.css';
alert
const styles = {//Стили для страницы
    position: 'absolute',
    top: '70px',
    left: '50%',
    transform: 'translateX(-50%)',
}


export default ({
    changeLoggedIn
}) => {

    const [UserData, changeUserData] = useState({
        login: '',
        password: '',
        email: '',
    })

    const loadData = async () => { //Функция с запросом на сервер
        // const body = { "login": "user1", "password": "qwe", "email": "user1@gmail.com" }

        axios.defaults.baseURL = 'http://localhost:3000/api';
        const res = await axios.post(
            `/auth/login`,
            UserData
        )

        // отлов ошибок, можно сделать большую вариацию по коду
        if (res.status != 200) {
            return alert(res.data ? res.data : 'Что-то пошло нет так')
        } else if (!res.data.status) {
            return alert(res.data.error ? res.data.error : 'Что-то пошло нет так')
        }

        let role = res.data.rp
        role = role.role;
        console.log(role + "role");
        console.log(res.data.rp)

        if (role === "admin") {
            changeLoggedIn("admin")
            localStorage.jwtToken = res.data.jwtToken   //https://learn.javascript.ru/localstorage
            localStorage.role = res.data.rp.role        //https://learn.javascript.ru/localstorage
            localStorage.id = res.data.rp.id
            //alert(localStorage.jwtToken);
            //setDataFromServer(res.data)
        }
        else if (role === "user") {
            changeLoggedIn("user")
            localStorage.jwtToken = res.data.jwtToken   //https://learn.javascript.ru/localstorage
            localStorage.role = res.data.rp.role        //https://learn.javascript.ru/localstorage
            localStorage.id = res.data.rp.id
            //alert(localStorage.jwtToken);
            //setDataFromServer(res.data)
        }
    }

    return (
        <div>
            <div>
                <div style={styles} className="form_auth_block">
                    <div className="form_auth_block_content">
                        <p className="form_auth_block_head_text">Авторизация</p>
                        <form className="form_auth_style">
                            <label>Введите Ваш логин</label>
                            <input type="loginl" name="auth_login" onChange={e => changeUserData({ ...UserData, login: e.target.value })} placeholder="Введите Ваш логин" id="login" required ></input>
                            <label>Введите Ваш пароль</label>
                            <input type="password" name="auth_pass" onChange={e => changeUserData({ ...UserData, password: e.target.value })} placeholder="Введите пароль" id="pass" required ></input>
                            <label>Введите Ваш имейл</label>
                            <input type="email" name="auth_email" onChange={e => changeUserData({ ...UserData, email: e.target.value })} placeholder="Введите Ваш имейл" id="email" required ></input>

                            <button className="form_auth_button" type="button" name="form_auth_submit" onClick={() => loadData()}><Link to="/">Login</Link></button>

                            <button className="form_auth_button" type="button" ><Link to="/password-reset">Восстановление пароля</Link></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};