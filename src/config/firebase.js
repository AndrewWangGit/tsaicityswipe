import * as firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBp9mBNKfMnPvNC1zCiMZj-3A0EZektG1k",
  authDomain: "tsaicityswipe.firebaseapp.com",
  projectId: "tsaicityswipe",
  storageBucket: "tsaicityswipe.appspot.com",
  messagingSenderId: "189195309063",
  appId: "1:189195309063:web:a4b0d8cfe36b65c0ad5aa2"
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();

export { db };
