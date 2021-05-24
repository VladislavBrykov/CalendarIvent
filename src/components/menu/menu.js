import React from 'react'
import { Link } from 'react-router-dom';
import './menu.css';

class AppMenu extends React.Component {

  render() {
    return (

      <div className="sidebar">
        {
          this.props.loggedIn === "admin" || this.props.loggedIn === "user"
            ? this.props.loggedIn === "user"
              ? <div className="btn-group">
                {/* <button className="button"><Link to="/accaunt">Кабинет user</Link></button> */}
                <button className="button"><Link to="/">Главная</Link></button>
                <button className="button"><Link to="/calendar">Календарь праздников</Link></button>
                <button className="button"><Link to="/exemple-calendar">Главный календарь</Link></button>
                <button className="button"><Link to="/all-calendars">Мои календари</Link></button>
                <button className="button"><Link to="/new_calendar">Создать календарь</Link></button>
                <button className="button"><Link to="/all-public-calendars">Общие календари</Link></button>

              </div>

              : <div className="btn-group">
                <button className="button"><Link to="/accaunt">Кабинет admin</Link></button>
                <button className="button"><Link to="/">Главная</Link></button>
                <button className="button"><Link to="/categories">Категории</Link></button>
                <button className="button"><Link to="/users">Участники</Link></button>
                <button className="button"><Link to="/posts">Посты</Link></button>
                <button className="button"><Link to="/new-post">Добавить пост</Link></button>
              </div>

            : <div className="btn-group">
              <button className="button">Гость</button>
              <button className="button"><Link to="/">Главная</Link></button>
              <button className="button"><Link to="/calendar">Календарь праздников</Link></button>
              {/* <button className="button"><Link to="/users">Участники</Link></button>
              <button className="button"><Link to="/posts">Посты</Link></button> */}
            </div>
        }
      </div>


    )
  }
}

export default AppMenu;