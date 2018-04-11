import React from 'react';

import './GameLine.css'

const gameLine = (props) => {
 
  let infoLi = <li className="game-at">@</li>
  if (!props.gamePlayed) {
    infoLi = <li className="game-or-date">{props.gameTime}</li>
  }

  let homeFavClass = "team team-home";
  let visitingFavClass = "team team-away"
  if (props.homeFavorite)     { homeFavClass += ' team-favorite' }
  if (props.visitingFavorite) { visitingFavClass += ' team-favorite' }

  return (
    <div className="game"> 
      <ul>
        <li className={visitingFavClass}>
          <span className="schedule-team-name">{props.visitingTeam}</span>
        </li>
        <li className="score">{props.visitingTeamScore || '---'}</li>
        { infoLi }
        <li className="score">{props.homeTeamScore || '---'}</li>
        <li className={homeFavClass}>
          <span className="schedule-team-name">{props.homeTeam}</span>
        </li>
      </ul> 
    </div>
  )
}

export default gameLine;