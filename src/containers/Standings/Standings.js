import React, { Component } from 'react';

import './Standings.css';
import StandingsTable from '../../components/StandingsTable/StandingsTable';

class Standings extends Component {

  render() {
    return (
      <div className="standings">
        <h4>Standings</h4>
        <div className="conferences">
          <div className="west">
            <h5>Western Conference</h5>
            <StandingsTable />
          </div>
          <div className="east">
            <h5>Eastern Conference</h5>
            <StandingsTable />
          </div>
        </div>
      </div>
    )
  }
}

export default Standings;