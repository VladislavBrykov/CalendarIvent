import axios from 'axios';
import { Link } from 'react-router-dom';
import './login.css';
import React, { Component }  from 'react';

function RegistrationPage() {
    const styles = {//Стили для страницы
        position: 'absolute',
        top: '0px',
        left: '50%',
        transform: 'translateX(-50%)',
    }

    const loadData = async () => { //Функция с запросом на сервер
        let login = document.getElementById('login').value;
        let password = document.getElementById('pass').value;
        let passwordConfirmation = document.getElementById('pass').value;
        let email = document.getElementById('email').value;
        
        const body = { "login": login, "password": password, "passwordConfirmation":passwordConfirmation, "email": email } // То что передаем на сервер
        console.log(body);
        axios.defaults.baseURL = 'http://localhost:3000/api';

        await axios.post(
            `http://localhost:3000/api/auth/register`,
            body
        );
        alert('На почту было отправлено письмо. Подтвердите регистрацию');
    }

    return (
        <div>
            <div>
                <div style={styles} class="form_auth_block">
                    <div class="form_auth_block_content">
                        <p class="form_auth_block_head_text">Регистрация</p>
                        <form class="form_auth_style" action="#" method="post">
                            <label>Введите Ваш логин</label>
                            <input type="loginl" name="auth_login" placeholder="Введите Ваш логин" id="login" required ></input>
                            <label>Введите Ваш пароль</label>
                            <input type="password" name="auth_pass" placeholder="Введите пароль" id="pass" required ></input>
                            <label>Подтвердите пароль</label>
                            <input type="password" name="auth_pass" placeholder="Подтвердите пароль" required ></input>
                            <label>Введите Ваш имейл</label>
                            <input type="email" name="auth_email" placeholder="Введите Ваш имейл" id="email" required ></input>
                            <button class="form_auth_button" type="submit" name="form_auth_submit" onClick={() => loadData()}><Link to="/">Зарегистрироваться</Link></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;


