var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

var config = {
  apiKey: "AIzaSyB_uYpiw2NoGJ0i-n3qbZhxeHIKT0Wu9nc",
  authDomain: "nbaclient.firebaseapp.com",
  databaseURL: "https://nbaclient.firebaseio.com",
  projectId: "nbaclient",
  storageBucket: "nbaclient.appspot.com",
  messagingSenderId: "500883093791"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
};

const auth = firebase.auth();
const db = firebase.database();

export {
  db,
  auth
};

