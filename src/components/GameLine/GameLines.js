import React from 'react';

import GameLine from './GameLine';

const gameLines = props => {
  const games = props.events.map( gameInfo => {

    const gameLine = (
      <GameLine
        key={gameInfo.idEvent}
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

export default gameLines