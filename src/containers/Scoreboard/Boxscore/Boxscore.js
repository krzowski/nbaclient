import React, { Component } from 'react';

import './Boxscore.css';
import BoxscoreTable from '../../../components/BoxscoreTable/BoxscoreTable';

class Boxscore extends Component {

  render() {
    return(
      <div className="boxscore">

        <div className="game">
          <ul>
            <li className="team team-away team-favorite">San Antonio
          </li>
            <li className="score">106</li>
            <li className="game-at">@</li>
            <li className="score">116</li>
            <li className="team team-home">Washington</li>
          </ul>
        </div>

        <h3>Thunder</h3>
        <BoxscoreTable />

        
        <h3>Washington</h3>
        <BoxscoreTable />
      </div>
    )
  }
}

export default Boxscore;