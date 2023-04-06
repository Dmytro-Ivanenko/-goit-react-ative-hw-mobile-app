import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //   apiKey: 'AIzaSyAn5-MLk7dm-CSzLZ8rObqqlVQICvQUgcA',
  //   authDomain: 'rn-photo-app.firebaseapp.com',
  //   projectId: 'rn-photo-app',
  //   storageBucket: 'rn-photo-app.appspot.com',
  //   messagingSenderId: '133967455497',
  //   appId: '1:133967455497:web:966a8a7d83a4c4ca431fd8',
  //   measurementId: 'G-BM249GV8K8',
  //   storageBucket: 'gs://rn-photo-app.appspot.com',

  apiKey: 'AIzaSyAn5-MLk7dm-CSzLZ8rObqqlVQICvQUgcA',
  authDomain: 'rn-photo-app.firebaseapp.com',
  databaseURL:
    'https://rn-photo-app-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'rn-photo-app',
  storageBucket: 'rn-photo-app.appspot.com',
  messagingSenderId: '133967455497',
  appId: '1:133967455497:web:966a8a7d83a4c4ca431fd8',
  measurementId: 'G-BM249GV8K8',
};

// Initialize Firebase
export const db = initializeApp(firebaseConfig);
export const fireStore = getFirestore(db);
