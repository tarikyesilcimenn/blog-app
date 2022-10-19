import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {serverTimestamp} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBEd3HfCha5f8kDUrPmrU4JVKg8rSVSJ5M",
  authDomain: "blog-app-b4d67.firebaseapp.com",
  projectId: "blog-app-b4d67",
  storageBucket: "blog-app-b4d67.appspot.com",
  messagingSenderId: "402581784871",
  appId: "1:402581784871:web:df6b4056fd362324b84102",
  measurementId: "G-J298QFT0Z7"
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const timeStamp = serverTimestamp();
export {db, timeStamp};