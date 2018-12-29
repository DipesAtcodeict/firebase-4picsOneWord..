import * as firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyD7d8C21Oqc_Spdn0-FINsrUbF5kSOQxdk",
  authDomain: "game-2bfa7.firebaseapp.com",
  databaseURL: "https://game-2bfa7.firebaseio.com",
  projectId: "game-2bfa7",
  storageBucket: "game-2bfa7.appspot.com",
  messagingSenderId: "186004805309"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();

export { firebase, firebaseDB };
