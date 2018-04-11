import { auth } from './firebase';

export const createUser = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
}

export const signInUser = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
}

export const signOutUser = () => {
  return auth.signOut();
}

export const checkAuthenticated = (authUser) => {
  return auth.onAuthStateChanged( authUser );
}