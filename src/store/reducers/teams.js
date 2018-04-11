import * as actionTypes from '../actions/actionTypes';


const initialState = {
  loadedTeamData: false,
  teams: {
    "Atlanta Hawks": {
      "favorite": false,
      "teamId": "134880",
      "espnSchedule": 'atl/atlanta-hawks'
    },
    "Boston Celtics": {
      "favorite": false,
      "teamId": "134860",
      "espnSchedule": 'bos/boston-celtics'
    },
    "Brooklyn Nets": {
      "favorite": false,
      "teamId": "134861",
      "espnSchedule": 'bkn/brooklyn-nets'
    },
    "Charlotte Hornets": {
      "favorite": false,
      "teamId": "134881",
      "espnSchedule": 'cha/charlotte-hornets'
    },
    "Chicago Bulls": {
      "favorite": false,
      "teamId": "134870",
      "espnSchedule": 'chi/chicago-bulls'
    },
    "Cleveland Cavaliers": {
      "favorite": false,
      "teamId": "134871",
      "espnSchedule": 'cle/cleveland-cavaliers'
    },
    "Dallas Mavericks": {
      "favorite": false,
      "teamId": "134875",
      "espnSchedule": 'dal/dallas-mavericks'
    },
    "Denver Nuggets": {
      "favorite": false,
      "teamId": "134885",
      "espnSchedule": 'den/denver-nuggets'
    },
    "Detroit Pistons": {
      "favorite": false,
      "teamId": "134872",
      "espnSchedule": 'det/detroit-pistons'
    },
    "Golden State Warriors": {
      "favorite": false,
      "teamId": "134865",
      "espnSchedule": 'gs/golden-state-warriors'
    },
    "Houston Rockets": {
      "favorite": false,
      "teamId": "134876",
      "espnSchedule": 'hou/houston-rockets'
    },
    "Indiana Pacers": {
      "favorite": false,
      "teamId": "134873",
      "espnSchedule": 'ind/indiana-pacers'
    },
    "Los Angeles Clippers": {
      "favorite": false,
      "teamId": "134866",
      "espnSchedule": 'lac/la-clippers'
    },
    "Los Angeles Lakers": {
      "favorite": false,
      "teamId": "134867",
      "espnSchedule": 'lal/los-angeles-lakers'
    },
    "Memphis Grizzlies": {
      "favorite": false,
      "teamId": "134877",
      "espnSchedule": 'mem/memphis-grizzlies'
    },
    "Miami Heat": {
      "favorite": false,
      "teamId": "134882",
      "espnSchedule": 'mia/miami-heat'
    },
    "Milwaukee Bucks": {
      "favorite": false,
      "teamId": "134874",
      "espnSchedule": 'mil/milwaukee-bucks'
    },
    "Minnesota Timberwolves": {
      "favorite": false,
      "teamId": "134886",
      "espnSchedule": 'min/minnesota-timberwolves'
    },
    "New Orleans Pelicans": {
      "favorite": false,
      "teamId": "134878",
      "espnSchedule": 'no/new-orleans-pelicans'
    },
    "New York Knicks": {
      "favorite": false,
      "teamId": "134862",
      "espnSchedule": 'ny/new-york-knicks'
    },
    "Oklahoma City Thunder": {
      "favorite": false,
      "teamId": "134887",
      "espnSchedule": 'okc/oklahoma-city-thunder'
    },
    "Orlando Magic": {
      "favorite": false,
      "teamId": "134883",
      "espnSchedule": 'orl/orlando-magic'
    },
    "Philadelphia 76ers": {
      "favorite": false,
      "teamId": "134863",
      "espnSchedule": 'phi/philadelphia-76ers'
    },
    "Phoenix Suns": {
      "favorite": false,
      "teamId": "134868",
      "espnSchedule": 'phx/phoenix-suns'
    },
    "Portland Trail Blazers": {
      "favorite": false,
      "teamId": "134888",
      "espnSchedule": 'por/portland-trail-blazers'
    },
    "Sacramento Kings": {
      "favorite": false,
      "teamId": "134869",
      "espnSchedule": 'sac/sacramento-kings'
    },
    "San Antonio Spurs": {
      "favorite": false,
      "teamId": "134879",
      "espnSchedule": 'sa/san-antonio-spurs'
    },
    "Toronto Raptors": {
      "favorite": false,
      "teamId": "134864",
      "espnSchedule": 'tor/toronto-raptors'
    },
    "Utah Jazz": {
      "favorite": false,
      "teamId": "134889",
      "espnSchedule": 'utah/utah-jazz'
    },
    "Washington Wizards": {
      "favorite": false,
      "teamId": "134884",
      "espnSchedule": 'wsh/washington-wizards'
    }
  }
}


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FAVORITE_TEAM: return favoriteTeam(state, action.teamName);
    case actionTypes.UNFAVORITE_TEAM: return unfavoriteTeam(state, action.teamName);
    case actionTypes.SET_TEAMS: return setTeams(state, action.teamsArr);
    case actionTypes.BEGIN_GETTING_TEAMS_DATA: return beginGettingTeamsData(state);
    case actionTypes.NO_TEAMS_DATA: return noTeamsData(state);
    case actionTypes.SIGNOUT: return resetTeamData(state);
    default: return state;
  }
}



function favoriteTeam(state, teamName) {
  return { ...state,
    teams: { ...state.teams,
      [teamName]: {
        ...state.teams[teamName],
        favorite: true
      }
    }
  }
}

function unfavoriteTeam(state, teamName) {
  return { ...state,
    teams: { ...state.teams,
      [teamName]: {
        ...state.teams[teamName],
        favorite: false
      }
    }
  }
}

function setTeams(state, teamsArr) {
  let newState = { ...state, loadedTeamData: true };

  Object.keys(teamsArr.teamsSettings).forEach( teamName => {
    newState.teams[teamName] = {
      ...newState.teams[teamName],
      favorite: teamsArr.teamsSettings[teamName].favorite
    }
  } );

  return newState
}

function beginGettingTeamsData(state) {
  return { ...state,
    loadedTeamData: false
  }
}

function noTeamsData(state) {
  return { ...state,
    loadedTeamData: true
  }
}

function resetTeamData(state) {
  let newState = { ...state };

  Object.keys(newState.teams).forEach( teamName => {
    newState.teams[teamName] = {
      ...newState.teams[teamName],
      favorite: false
    }
  } );

  return newState;
}


export default reducer;