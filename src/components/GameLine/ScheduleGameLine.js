import React from 'react';

import './GameLine.css';

const scheduleGameLine = (props) => {

  
  let homeFavClass = "team team-home";
  let visitingFavClass = "team team-away"
 
  if (props.gamePlayed) {
    if ( parseInt(props.visitingTeamScore, 10) > parseInt(props.homeTeamScore, 10) ) {
      visitingFavClass += ' winner'
    } else {
      homeFavClass += ' winner' 
    }
  }
 
  return (
    <div className="game"> 
      <ul>
        <li className={visitingFavClass}>
          <span className="schedule-team-name">{props.visitingTeam}</span>
        </li>
        <li className="score">{props.visitingTeamScore || '---'}</li>
        <li className="schedule-info">
          <span className="schedule-date">{props.date}</span>
          <span className="schedule-time">{props.gameTime}</span>
        </li>
        <li className="score">{props.homeTeamScore || '---'}</li>
        <li className={homeFavClass}>
          <span className="schedule-team-name">{props.homeTeam}</span>
        </li>
      </ul> 
    </div>
  )

}

export default scheduleGameLine;