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
          {/* <span className="n-font score">{g.date}</span> */}
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
    let i = 0;
    const getGames = async () => {
      setMonth(date.getMonth() + 1);
      setDay(date.getDate());
      setyear(date.getFullYear());
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
      setMonth(date.getMonth() + 1);
      setDay(date.getDate());
      setyear(date.getFullYear());
      setGame(res.data.rp);
      
    
      //setGame(res.data.rp);
    };
    getGames();
  };

  return (



    
    <div className="all-games">

{/* шапка */}
<div class="container">
        <h1 class="hidden-print">Календарь выходных и праздников</h1>
        <div class="nav-carousel hidden-print">
        </div>
        </div>
{/* шапка */}


{/* ближайший праздничный день */}
        {/* <div class="card hidden-print">
            <div class="article-header article-header-wide">
                <h2 class="text-muted">Ближайший праздничный день</h2>
                <h1 class="text-magenta add-bottom-xs">1 мая</h1>
               
                    
                    <h2 class="h1 add-top holiday-header-no-height">День труда 2021</h2>
               

            </div>
        </div> */}
{/* ближайший праздничный день */}

      <div className="games-calendar">
        <Calendar className="react-calendar" value={d} onClickDay={onClickDay} />
      </div>

      <main className="games-list">{gameList}</main>
      
    </div>
    
  );
};

export default Games;
