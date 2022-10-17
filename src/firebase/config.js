import firebase from "firebase/app";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC70zHPW0dog25Ix9p68abQStgcGM6T6KE",
  authDomain: "vue-3-firebase-projects.firebaseapp.com",
  projectId: "vue-3-firebase-projects",
  storageBucket: "vue-3-firebase-projects.appspot.com",
  messagingSenderId: "70084697914",
  appId: "1:70084697914:web:4579d46b0ae8b8686ffa03",
  measurementId: "G-144Y3WPHXR",
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export {db};