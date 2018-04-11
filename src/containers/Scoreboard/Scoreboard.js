import React, { Component } from 'react';
import axios from 'axios';
import * as moment from 'moment';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux'

import './Scoreboard.css';
import Aux from '../../hoc/Aux/Aux';
import GameLines from '../../components/GameLine/GameLines';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Spinner from '../../components/Spinner/Spinner';

class Scoreboard extends Component {

  state = {
    loading: true,
    error: false,
    gameInfoArray: null,
    date: null,
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    let date = '';

    if (this.props.match.params.date) {
      date = this.props.match.params.date;
    } else {
      date = moment().format("YYYY-MM-DD");
    }

    const url = 'https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=' + date + '&l=NBA';
    
    axios.get(url)
      .then(response => {
        this.setState({
          loading: false,
          error: false,
          gameInfoArray: response.data.events,
          date: date
        })
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: true
        })
      });
  }


  render(){
    if (this.state.loading) {
      return <Spinner />
    }
    if (this.state.error) {
      return <ErrorMessage refresh={this.loadData} />
    }


    let espnInfo = null;
    let games = <div className="no-games">No games today</div>
    if (this.state.gameInfoArray !== null) {
      espnInfo = (
        <div className="scoreboard-info" key="uniquekey">
          <p>Clicking on games will direct to full ESPN's box scores.</p>
          <p className="scoreboard-flex"><span className="scoreboard-info-color team-favorite"></span> <span>indicates favorite teams</span></p>
        </div>
      )
      games = <GameLines teams={this.props.teams} events={this.state.gameInfoArray} />
    }

    const nextDayDate = '/scoreboard/' + moment(this.state.date).add(1, 'd').format("YYYY-MM-DD");
    const prevDayDate = '/scoreboard/' + moment(this.state.date).subtract(1, 'd').format("YYYY-MM-DD");

    return (
      <Aux>
        <div className="nav">
          <div className="nav-yesterday"><Link to={prevDayDate} component>&#8249;- Previous day</Link></div>
          <div className="nav-date">{this.state.date}</div>
          <div className="nav-tomorrow"><Link to={nextDayDate}>Next day -&#8250;</Link></div>
        </div>

        <div className="games">
          { espnInfo }
          { games }
        </div>

        <a href='http://www.espn.com/nba/standings' className="espn-standings">Standings on ESPN</a>
      </Aux>
    )
  }

}

const mapStateToProps = state => {
  return {
    teams: state.teams.teams
  }
}

export default connect(mapStateToProps)( withRouter(Scoreboard) );