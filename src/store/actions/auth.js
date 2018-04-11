import * as actionTypes from './actionTypes';
import { auth, db } from '../../firebase/index';

export const sendSignIn = (userId) => {
  return {
    type: actionTypes.LOGIN,
    userId: userId
  }
}

export const sendSignOut = () => {
  return {
    type: actionTypes.SIGNOUT
  }
}

export const sendError = (errorMessage) => {
  return {
    type: actionTypes.AUTH_ERROR,
    errorMessage: errorMessage
  }
}

export const removeError = () => {
  return {
    type: actionTypes.REMOVE_ERROR
  }
}

export const initialAuthCheck = () => {
  return {
    type: actionTypes.INITIAL_AUTH_CHECK
  }
}

export const setTeams = (data) => {
  return {
    type: actionTypes.SET_TEAMS,
    teamsArr: data
  }
}

export const noTeamData = () => {
  return {
    type: actionTypes.NO_TEAMS_DATA
  }
}

export const sendGetTeamsData = () => {
  return {
    type: actionTypes.BEGIN_GETTING_TEAMS_DATA
  }
}

export const logIn = (email, password) => {
  return dispatch => {
    auth.signInUser(email, password)
      .then( authUser => {
        dispatch( sendGetTeamsData() )
        db.getUserData(authUser.uid).then( data => {
          const teamsInfo = data.val();
          dispatch( setTeams(teamsInfo) ) 
        } ).catch( error => {
          dispatch( noTeamData() )
        } )
        dispatch( sendSignIn(authUser.uid) );
      } )
      .catch( error => {
        dispatch( sendError(error.message) );
      } );
  }
}

export const signUp = (email, password) => {
  return dispatch => {
    auth.createUser(email, password)
      .then( authUser => {
        dispatch( sendSignIn(authUser.uid) );
      } )
      .catch( error => {
        dispatch( sendError(error.message) );
      } );
  }
}

export const signOut = () => {
  return dispatch => {
    auth.signOutUser()
      .then( () => {
        dispatch( sendSignOut() );
      } )
      .catch( error => {
        dispatch( sendError(error.message) );
      } );
  }
}

export const checkAuthenticated = () => {
  return dispatch => {
    auth.checkAuthenticated( authUser => {
      if (authUser) {
        dispatch( sendGetTeamsData() )
        db.getUserData(authUser.uid).then( data => {
          const teamsInfo = data.val();
          dispatch( setTeams(teamsInfo) ) 
        } ).catch( error => {
          dispatch( noTeamData() )
        } )
        dispatch( sendSignIn(authUser.uid) );
      } else {
        dispatch( initialAuthCheck() );
        dispatch( noTeamData() )
      }
    })
  }
}
