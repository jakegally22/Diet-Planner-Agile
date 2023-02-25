import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC4X9gckO36pymk-bWmlDj4ddk6gwKPmHo",
  authDomain: "diet-tracker-eefec.firebaseapp.com",
  projectId: "diet-tracker-eefec",
  storageBucket: "diet-tracker-eefec.appspot.com",
  messagingSenderId: "204525973055",
  appId: "1:204525973055:web:a9b477708d0f863a4ad28a",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
