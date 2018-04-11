import { auth, db } from './firebase';

export const writeUserData = (teamsSettings) => {
  return db.ref('/users/' + auth.currentUser.uid).set({
    'teamsSettings': teamsSettings
  })
}

export const getUserData = (userId) => {
  return db.ref('/users/' + userId).once("value");
}

