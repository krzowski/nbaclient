import React from 'react';

import ScheduleGameLine from './ScheduleGameLine';

const scheduleGameLines = props => {
  const games = props.events.map( gameInfo => {
    const gameLine = (
      <ScheduleGameLine
        key={gameInfo.idEvent}
        date={gameInfo.dateEvent}
        gamePlayed={gameInfo.intAwayScore ? true : false}
        gameTime={gameInfo.strTime}
        visitingTeam={gameInfo.strAwayTeam}
        visitingTeamScore={gameInfo.intAwayScore}
        visitingFavorite={ props.teams[gameInfo.strAwayTeam].favorite }
        homeTeam={gameInfo.strHomeTeam}
        homeTeamScore={gameInfo.intHomeScore}
        homeFavorite={ props.teams[gameInfo.strHomeTeam].favorite }
      />
    )
    const espnBoxScoreLink = 'http://www.espn.com/nba/boxscore?gameId=' + (parseInt(gameInfo.idEvent, 10) + 400436618);
    return (
      <a href={espnBoxScoreLink} key={gameInfo.idEvent}>
        { gameLine }
      </a>
    ) 
  } )

  return games;
}

export default scheduleGameLines;