import * as actionTypes from './actionTypes';
import { db } from '../../firebase/index';

export const favoriteTeam = (teamName, teams) => {
  const teamList = setTeamList(teams, teamName, 'favorite')
  db.writeUserData(teamList);

  return {
    type: actionTypes.FAVORITE_TEAM,
    teamName: teamName
  }
}

export const unfavoriteTeam = (teamName, teams) => {
  const teamList = setTeamList(teams, teamName, 'unfavorite')
  db.writeUserData(teamList);

  return {
    type: actionTypes.UNFAVORITE_TEAM,
    teamName: teamName
  }
}




function setTeamList(teams, teamName, option) {
  const teamList = {}
  Object.keys(teams).forEach ( team => {
    teamList[team] = { favorite: teams[team].favorite }
  } )

  if        (option === 'favorite') {
    teamList[teamName] = { favorite: true };
  } else if (option === 'unfavorite') {
    teamList[teamName] = { favorite: false };
  }

  return teamList
}