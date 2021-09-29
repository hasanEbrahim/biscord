import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
const config = {
  apiKey: "AIzaSyBu7POPqnXJZWLzsslkZN3Mt5H_LxzJTYI",
  authDomain: "biscord-3e12a.firebaseapp.com",
  databaseURL: "https://biscord-3e12a-default-rtdb.europe-west1.firebasedatabase.app/"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
