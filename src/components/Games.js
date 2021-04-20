import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Logos from "./logos";
import { MiniLogos } from "./logos";
import Calendar from "react-calendar";
import "./Games.css";
import axios from 'axios';




const Games = () => {
  let d = new Date();

  const [game, setGame] = useState([]);
  const [year, setyear] = useState([d.getFullYear()]);
  const [month, setMonth] = useState([d.getMonth() + 1]);
  const [day, setDay] = useState([d.getDate()]);
  // const [date, setDate] = useState(new Date());

  // useEffect(() => {
  //   const getGames = async () => {
  //     const res = await axios.get(
  //       `hhttp://localhost:3000/api/holidays/18.04.21`
  //     );
  //     //const data = await res.json();
  //     console.log(res);
      
  //     // const ress = await axios.get("http://localhost:3000/api/holidays/18.04.21")
  //     // console.log(ress.data);

  //     setGame(data.data);
  //   };

  //   getGames();
  // }, []);


  // const loadData = async () => { //Функция с запросом на сервер

  //   axios.defaults.baseURL = 'http://localhost:3000/api';


  //   const res = await axios.get("http://localhost:3000/api/categories")

  //   setDataFromServer(res.data.rp)


  // }


  let gameList = game.map(g => (
    <Link
      to={{
        pathname: '/holidays/'+ g.id,
        state: {
          id: g.id,
          homeTeam: g.login,
          //homeScore: g.home_team_score,
         // status: g.status,
          //visitorTeam: g.visitor_team.abbreviation,
          //visitorScore: g.visitor_team_score
        }
      }}
    >
      <div key={g.id} className="game">
        <span className="game-visitor_team">
          {/* <MiniLogos className="logo" logo={g.visitor_team.abbreviation} /> */}
          <span className="n-font score">{g.date}</span>
          <span className="n-font">{g.headding}</span>
        </span>
        <span className="game-status">{g.login}</span>
        <span className="game-home_team">
          {/* <span className="n-font score">{g.home_team_score}</span> */}
          {/* <span className="n-font">{g.login}</span> */}
          {/* <MiniLogos className="logo" logo={g.home_team.abbreviation} /> */}
        </span>
      </div>
    </Link>
  ));

  const onClickDay = date => {
    setMonth(date.getMonth() + 1);
    setDay(date.getDate());
    setyear(date.getFullYear());
    const getGames = async () => {
      // const res = await fetch(
      //   ` https://www.balldontlie.io/api/v1/games?dates[]=${year}-${month}-${day}`
      // );
      // const data = await res.json();
      // console.log(data);
      // setGame(data.data);


      const res = await axios.get(
        `http://localhost:3000/api/holidays/${day}.${month}.${year}`
      );
      console.log(res);
      setGame(res.data.rp);
    };
    getGames();
  };

  return (



    
    <div className="all-games">

{/* шапка */}
<div class="container">
        <p class="hidden-print link-back">
            <a href="/ru/jobseeker/resources/"><span class="glyphicon glyphicon-chevron-left"></span><span>Ресурсы</span></a>
        </p>
        <h1 class="hidden-print">Календарь выходных и праздников</h1>
        <div class="nav-carousel hidden-print">
            <ul class="nav nav-tabs nav-white">
                <li class="active"><a href="/ru/holidays/public-2021/">Официальные выходные</a></li>
                <li>
                    <a href="/ru/holidays/professional/">
                        Профессиональные праздники
                                            </a>
                </li>
            </ul>
        </div>
        </div>
{/* шапка */}


{/* ближайший праздничный день */}
        <div class="card hidden-print">
            <div class="article-header article-header-wide">
                <h2 class="text-muted">Ближайший праздничный день</h2>
                <h1 class="text-magenta add-bottom-xs">1 мая</h1>
                <div class="text-muted add-bottom">Суббота</div>
                <a href="/ru/holidays/labor-day-2021/" class="article-item add-top">
                    
                    <h2 class="h1 add-top holiday-header-no-height">День труда 2021</h2>
                </a>

            </div>
        </div>
{/* ближайший праздничный день */}





{/* parasha */}

{/* parasha */}



















<div>
<h1>CSS Calendar</h1>

<div class="month">      
  <ul>
    <li class="prev">❮</li>
    <li class="next">❯</li>
    <li>
    August
      {/* <span style="font-size:18px">2017</span> */}
    </li>
   
  </ul>
</div>

<ul class="weekdays">
  <li>Mo</li>
  <li>Tu</li>
  <li>We</li>
  <li>Th</li>
  <li>Fr</li>
  <li>Sa</li>
  <li>Su</li>
</ul>

<ul class="days">  
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li><span class="active">10</span></li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
</ul>


</div>



      {/* <span className="game-visitor_team">
        visit()
        <span>{game.visitor_team.abbreviation}</span>
        <span>{game.visitor_team_score}</span>
      </span> 
      <span>{game.status}</span>
      <span className="game-home_team">
        <span>{game.home_team_score}</span>
        <span>{game.home_team.abbreviation}</span>
      </span> */}
      <div className="games-calendar">
        <Calendar className="react-calendar" value={d} onClickDay={onClickDay} />
      </div>




     
      <main className="games-list">{gameList}</main>
      
    </div>
    
  );
};

export default Games;
