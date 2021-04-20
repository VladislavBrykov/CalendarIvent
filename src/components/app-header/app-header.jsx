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




// const AppHeader = () => {
//   let loginButton;
//   let registrationButton;
//   let logo;

    // const loadData = async () => { //Функция с запросом на сервер

    //   axios.defaults.baseURL = 'http://localhost:3000/api';  
    //   const body = {};
    //   const res = await axios.post(
    //     `/auth/logout`,
    //     body,
    //     {
    //     headers: {
    //       Authorization: localStorage.jwtToken
    //     }
    //   }
    //   );
    //   delete localStorage.jwtToken;
    //   //window.location.reload(); 
    //    console.log(res.data);
    //    console.log(localStorage.jwtToken);
    // }

//     if (localStorage.jwtToken) {
//       //loginButton = <button id="btn" className="active" onClick={() => loadData()} >Выйти</button>
//       // loginButton = <button id="btn">onClick={() => loadData()}<Link to="/">Logout</Link></button>;
//       loginButton = <button id="btn" onClick={() => loadData()}><Link to="/login">Logout</Link></button>;

//      } else {
//        loginButton = <button id="btn"><Link to="/login">Login</Link></button>;
//        registrationButton = <button id="btn"><Link to="/registration">Registration</Link></button>
//        logo = <a href="/login" className="logo">Возможности ограничены: Авторизируйтесь</a>
//      }

//     return (
//       <div className="header">
//         {logo}
//         <div className="header-right">
//           <a className="active" href="#home">Home</a>
//           {loginButton}
//           {registrationButton}
//         </div>
//       </div>
//     )
// }

// export default AppHeader;

  // Короче тебе нужно переписать
  // Тебе сначало нужно реализовать правильно логин, и сделать отдельный стейт
  // Когда будет стейт для логина, тогда при логауте ты его будешь менять
  // Сейчас выходит что у тебя для логина в реакте нет состояния, только localStorage
  //ты сможешь это сделать? и цена
  // не уверен, что это будет быстро)
  // так как я с хуками работаю а тут тебе по хорошему если не используешь хуки то использовать редакс
  // тебе состояние логина нужно передавать полностью во все приложение, а не только в хедер
  // и это нужно делать на самом высоком уровне
  // потому что если ты продолжишь делать так, как сейчас, то тебе в каждый компонент надо будет как-то засовывать состояние логина
  // по этому на высшел уровне где то в App.js к примеру ты делаешь стейт и потом если не работаешь с редакс то просто его передаешь через пропсы в дочерние компоненты
  // короче нужно переделывать все
  // лучше сам начни все переделыват,а там вопросы будут - пиши
  //окей, пачалька =(
    // Страано просто ты начал с логаута, а не логина )))
    //спасибо, сори что голову поморил
    // та ниче) удачи в обучении)) если шо пиши
