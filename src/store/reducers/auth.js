import * as actionTypes from '../actions/actionTypes';

const initialState = {
  currentUser: null,
  errorMessage: null,
  initialAuthCheck: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.LOGIN: return logIn(state, action.userId);
    case actionTypes.SIGNOUT: return signOut(state);
    case actionTypes.AUTH_ERROR: return authError(state, action.errorMessage);
    case actionTypes.REMOVE_ERROR: return removeError(state);
    case actionTypes.INITIAL_AUTH_CHECK: return initialAuthCheck(state);
    default: return state;
  }
}

function logIn(state, userId) {
  return { ...state,
    currentUser: userId,
    errorMessage: null,
    initialAuthCheck: true
  }
}

function signOut(state) {
  return { ...state,
    currentUser: null,
    errorMessage: null
  }
}

function authError(state, errorMessage) {
  return { ...state,
    errorMessage: errorMessage
  }
}

function removeError(state) {
  return { ...state,
    errorMessage: null
  }
}

function initialAuthCheck(state) {
  return { ...state,
    initialAuthCheck: true
  }
}

export default reducer;