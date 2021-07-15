import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  
  let gameList = game.map(g => (
    <Link
      to={{
        pathname: '/holidays/'+ g.id,
        state: {
          id: g.id,
          homeTeam: g.login,
        }
      }}
    >
      <div key={g.id} className="game">
        <span className="game-visitor_team">
          <span className="n-font">{g.headding}</span>
        </span>
        <span className="game-status">{g.login}</span>
        <span className="game-home_team">
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

      const res = await axios.get(
        `http://localhost:3000/api/holidays/${day}.${month}.${year}`
      );
      console.log(res);
      setMonth(date.getMonth() + 1);
      setDay(date.getDate());
      setyear(date.getFullYear());
      setGame(res.data.rp);
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


      <div className="games-calendar">
        <Calendar className="react-calendar" value={d} onClickDay={onClickDay} />
      </div>

      <main className="games-list">{gameList}</main>
      
    </div>
    
  );
};

export default Games;
