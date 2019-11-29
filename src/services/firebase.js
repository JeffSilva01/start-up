import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAdaaGlvNCyHrkMbMAGECsigBYMcUahc-U',
  authDomain: 'startup-1f1b4.firebaseapp.com',
  databaseURL: 'https://startup-1f1b4.firebaseio.com',
  projectId: 'startup-1f1b4',
  storageBucket: 'startup-1f1b4.appspot.com',
  messagingSenderId: '1054918480376',
  appId: '1:1054918480376:web:3f464bc04c619fe919860d',
  measurementId: 'G-MJB6FDE4E5',
});

export default firebaseApp;
