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
    return gameLine;
  } )

  return games;
}

export default gameLines