import React from 'react';
import { Link } from 'react-router-dom';

import './TeamList.css';

const teamList = (props) => {
  const list = Object.keys(props.teams).map( team => {
    const scheduleLink = '/schedule/' + team
    let cssClass, favoriteButton;
    if ( props.teams[team].favorite ) {
      cssClass = "team-list team-favorite";
      favoriteButton = <button onClick={() => props.onUnfavoriteTeam(team, props.teams)}>Remove from Favorites</button>
    } else {
      cssClass = "team-list";
      favoriteButton = <button onClick={() => props.onFavoriteTeam(team, props.teams)}>Add to Favorites</button>
    }

    return (
      <div key={props.teams[team].teamId} className={cssClass}>
        <div className="team-list-name">
          { team }
        </div>
        <div className="team-list-favorite">
          { favoriteButton }
        </div>
        <div className="team-list-schedule">
          <Link to={scheduleLink}>Schedule</Link>
        </div>
      </div>
    )
  } );

  return list;
}

export default teamList;