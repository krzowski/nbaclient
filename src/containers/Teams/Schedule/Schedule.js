import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import './Schedule.css'
import ScheduleGameLines from '../../../components/GameLine/ScheduleGameLines';
import Spinner from '../../../components/Spinner/Spinner';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';

class Schedule extends Component {

  state = {
    loading: true,
    error: false,
    nextEvents: null,
    prevEvents: null,
  }


  componentDidMount() {
    this.loadData();
  }


  loadData = () => {
    const teamId = this.props.teams[this.props.match.params.teamName].teamId;
    const nextEventsUrl = 'https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=' + teamId;
    const prevEventsUrl = 'https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=' + teamId;

    axios.all( [
      axios.get(nextEventsUrl),
      axios.get(prevEventsUrl)
    ] )
    .then( axios.spread( (nextEvents, prevEvents) => {
      this.setState({
        loading: false,
        error: false,
        nextEvents: nextEvents.data.events,
        prevEvents: prevEvents.data.results
      })
    } ) ).catch ( error => {
      this.setState({
        loading: false,
        error: true
      });
    } )
  }



  render() {

    if (this.state.loading) { 
      return <Spinner />
    }

    if (this.state.error) {
      return <ErrorMessage refresh={this.loadData} />
    }
    

    const espnScheduleLink = 'http://www.espn.com/nba/team/schedule/_/name/' + this.props.teams[this.props.match.params.teamName].espnSchedule;

    let nextGames = <div className='no-games'>There are no more announced events</div>
    let prevGames = <div className='no-games'>There are no past events</div>
    if (this.state.nextEvents) {
      nextGames = <ScheduleGameLines teams={this.props.teams} events={this.state.nextEvents} />
    }
    if (this.state.prevEvents) {
      prevGames = <ScheduleGameLines teams={this.props.teams} events={this.state.prevEvents} />
    }

    return (
      <div className="full-schedule">

        <h4>Upcoming Games</h4>
        <div className="games yet-to-play">
          { nextGames }
        </div>

        <h4>Last Games</h4>
        <div className="games last-events">
          { prevGames }
        </div>

        <a href={espnScheduleLink} className="espn-schedule">Full Schedule on ESPN</a>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    teams: state.teams.teams
  }
}

export default connect(mapStateToProps)(Schedule);