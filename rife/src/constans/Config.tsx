import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDva8ULIv7OdynRdXRTKG5vusTheJayMCo",
  authDomain: "rife-1fb17.firebaseapp.com",
  databaseURL: "https://rife-1fb17.firebaseio.com",
  projectId: "rife-1fb17",
  storageBucket: "rife-1fb17.appspot.com",
  messagingSenderId: "647679836316",
  appId: "1:647679836316:web:e7ee52b6160c2edf372d59",
  measurementId: "G-DPHTFY1PNX",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
