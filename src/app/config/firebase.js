import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCGjPqu-nXAa90LAX_08RuYeIpPSAvy7Ig",
  authDomain: "enert-festival.firebaseapp.com",
  projectId: "enert-festival",
  storageBucket: "enert-festival.appspot.com",
  messagingSenderId: "919863076797",
  appId: "1:919863076797:web:3a85acc61b1bec8d0154d4",
  measurementId: "G-LFYSDQ3FZ2"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;