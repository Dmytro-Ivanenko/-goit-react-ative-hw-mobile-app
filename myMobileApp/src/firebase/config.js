import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAn5-MLk7dm-CSzLZ8rObqqlVQICvQUgcA',
  authDomain: 'rn-photo-app.firebaseapp.com',
  projectId: 'rn-photo-app',
  storageBucket: 'rn-photo-app.appspot.com',
  messagingSenderId: '133967455497',
  appId: '1:133967455497:web:966a8a7d83a4c4ca431fd8',
  measurementId: 'G-BM249GV8K8',
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);
export default db;
