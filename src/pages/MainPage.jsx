import axios from 'axios';
import { Link } from 'react-router-dom';
import './main.css';
import React, { Component }  from 'react';

function MainPage() {
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
        
        <div class="block-20 space-between-blocks">
        <div class="container">
          <div class="row px-2 pt-4">
            <div class="col-lg-4">
              <div class="testimonial-card-1 mb-5">
                <p class="testimonial-card-1__paragraph mb-3">
                  " I was laughing at the "easy to copy-paste" solution to
                  building landing pages. Awesome, Innovative, and pretty useful
                  for building quick pages. "
                </p>
                <div class="person">
                  <div class="mb-2">
                    <img
                      class="person__avatar"
                      src="https://i.imgur.com/3AMFDNC.jpg"
                    />
                  </div>
                  <div class="flex-grow-1 d-flex flex-column">
                    <span class="person__rating"
                      ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i></span
                    ><span class="person__name my-1">Brajeshwar</span>
                    <a
                      href="https://twitter.com/brajeshwar"
                      target="_blank"
                      class="person__info"
                      >@Brajeshwar</a
                    >
                  </div>
                </div>
                <span class="testimonial-card-1__quote-symbol"
                  ><i class="fas fa-quote-left"></i
                ></span>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="testimonial-card-1 mb-5">
                <p class="testimonial-card-1__paragraph mb-3">
                  " Frontendor have developed one of the best copy-paste framework
                  with beautiful neat code! 99% on-time delivery record with all
                  the blocks on any existing codebase! Saves all the late nights,
                  build the landing page quickly and the design is always up to
                  date in the trend! "
                </p>
                <div class="person">
                  <div class="mb-2">
                    <img
                      class="person__avatar"
                      src="https://i.imgur.com/HKAewoz.jpg"
                    />
                  </div>
                  <div class="flex-grow-1 d-flex flex-column">
                    <span class="person__rating"
                      ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i></span
                    ><span class="person__name my-1">Fajar Siddiq</span>
                    <a
                      href="https://twitter.com/fajarsiddiqFS"
                      target="_blank"
                      class="person__info"
                      >@fajarsiddiqFS</a
                    >
                  </div>
                </div>
                <span class="testimonial-card-1__quote-symbol"
                  ><i class="fas fa-quote-left"></i
                ></span>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="testimonial-card-1 mb-5">
                <p class="testimonial-card-1__paragraph mb-3">
                  " These templates are very complete and also nice looking. Even
                  non-technical people can easily integrate them as whole. One
                  does not need more to build a complete webpage than these easy
                  and beautiful blocks. Job well done, indeed. "
                </p>
                <div class="person">
                  <div class="mb-2">
                    <img
                      class="person__avatar"
                      src="https://i.imgur.com/xabGxOb.png"
                    />
                  </div>
                  <div class="flex-grow-1 d-flex flex-column">
                    <span class="person__rating"
                      ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i></span
                    ><span class="person__name my-1">Aleksandar Balalovski</span>
                    <a
                      href="https://twitter.com/itsbalal"
                      target="_blank"
                      class="person__info"
                      >@itsbalal</a
                    >
                  </div>
                </div>
                <span class="testimonial-card-1__quote-symbol"
                  ><i class="fas fa-quote-left"></i
                ></span>
              </div>
            </div>
          </div>
        </div>
  
        <div class="container">
          <div class="row px-2 pt-4">
            <div class="col-lg-4">
              <div class="testimonial-card-1 mb-5">
                <p class="testimonial-card-1__paragraph mb-3">
                  " Frontendor has allowed me to save a lot of time when creating
                  a website for a client. The blocks are dead simple to use if you
                  know relatively basic HTML, and since they're just HTML/CSS
                  they're extremely modifiable (saves time instead of building
                  from scratch). They integrate well into most website designs. "
                </p>
                <div class="person">
                  <div class="mb-2">
                    <img
                      class="person__avatar"
                      src="https://i.imgur.com/0MUuU8l.png"
                    />
                  </div>
                  <div class="flex-grow-1 d-flex flex-column">
                    <span class="person__rating"
                      ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i></span
                    ><span class="person__name my-1">Satoshi Nakamoto</span>
                    <a href="" target="" class="person__info">@tuatarian</a>
                  </div>
                </div>
                <span class="testimonial-card-1__quote-symbol"
                  ><i class="fas fa-quote-left"></i
                ></span>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="testimonial-card-1 mb-5">
                <p class="testimonial-card-1__paragraph mb-3">
                  " Frontendor have developed one of the best copy-paste framework
                  with beautiful neat code! 99% on-time delivery record with all
                  the blocks on any existing codebase! Saves all the late nights,
                  build the landing page quickly and the design is always up to
                  date in the trend! "
                </p>
                <div class="person">
                  <div class="mb-2">
                    <img
                      class="person__avatar"
                      src="https://i.imgur.com/HKAewoz.jpg"
                    />
                  </div>
                  <div class="flex-grow-1 d-flex flex-column">
                    <span class="person__rating"
                      ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i></span
                    ><span class="person__name my-1">Fajar Siddiq</span>
                    <a
                      href="https://twitter.com/fajarsiddiqFS"
                      target="_blank"
                      class="person__info"
                      >@fajarsiddiqFS</a
                    >
                  </div>
                </div>
                <span class="testimonial-card-1__quote-symbol"
                  ><i class="fas fa-quote-left"></i
                ></span>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="testimonial-card-1 mb-5">
                <p class="testimonial-card-1__paragraph mb-3">
                  " Frontendor have developed one of the best copy-paste framework
                  with beautiful neat code! 99% on-time delivery record with all
                  the blocks on any existing codebase! Saves all the late nights,
                  build the landing page quickly and the design is always up to
                  date in the trend! "
                </p>
                <div class="person">
                  <div class="mb-2">
                    <img
                      class="person__avatar"
                      src="https://i.imgur.com/xabGxOb.png"
                    />
                  </div>
                  <div class="flex-grow-1 d-flex flex-column">
                    <span class="person__rating"
                      ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i></span
                    ><span class="person__name my-1">Aleksandar Balalovski</span>
                    <a
                      href="https://twitter.com/itsbalal"
                      target="_blank"
                      class="person__info"
                      >@itsbalal</a
                    >
                  </div>
                </div>
                <span class="testimonial-card-1__quote-symbol"
                  ><i class="fas fa-quote-left"></i
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MainPage;


