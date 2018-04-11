import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import './Teams.css';
import TeamList from '../../components/TeamList/TeamList';

class Teams extends Component {

  state = {
    loading: true,
    teamsData: null,
    error: null
  }


  render() {
    return (
      <div className="teams-list">
        <TeamList teams={this.props.teams}
          onFavoriteTeam={this.props.onFavoriteTeam} 
          onUnfavoriteTeam={this.props.onUnfavoriteTeam} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teams.teams
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFavoriteTeam: (teamName, teams) => dispatch(actions.favoriteTeam(teamName, teams)),
    onUnfavoriteTeam: (teamName, teams) => dispatch(actions.unfavoriteTeam(teamName, teams))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams);