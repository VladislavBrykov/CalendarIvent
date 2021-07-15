import React from 'react'
import './app-header.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AppHeader extends React.Component {

  async loadData() { //Функция с запросом на сервер

    axios.defaults.baseURL = 'http://localhost:3000/api';
    const body = {};
    await axios.post(
      `/auth/logout`,
      body,
      {
        headers: {
          Authorization: localStorage.jwtToken
        }
      }
    )
      .then(() => this.props.changeLoggedIn('off'))

    delete localStorage.jwtToken;
    delete localStorage.role;
  }

  render() {

    return (
      <div className="header-wrapper">
        {
          this.props.loggedIn === "admin" || this.props.loggedIn === "user"
            ? <div className="header">
              <button id="btn" onClick={() => this.loadData()}><Link to="/login">Logout</Link></button>;
            </div>
            : <div className="header">
              <button id="btn"><Link to="/login">Login</Link></button>
              <button id="btn"><Link to="/registration">Registration</Link></button>
              <a href="/login" className="logo">Возможности ограничены: Авторизируйтесь</a>
            </div>
        }
      </div>
    );
  }
}

export default AppHeader;
