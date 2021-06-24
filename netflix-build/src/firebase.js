import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6TLAjGGF5INeAqGbs8wxSxObNmH39qAg",
  authDomain: "netflix-build-b829a.firebaseapp.com",
  projectId: "netflix-build-b829a",
  storageBucket: "netflix-build-b829a.appspot.com",
  messagingSenderId: "799957304484",
  appId: "1:799957304484:web:b7ef341434ada64a781231",
  measurementId: "G-N8PR0W7KTL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// firetore is the database that we are going to use;
const db = firebaseApp.firestore(); 

//Authentication
const auth = firebase.auth();

export {auth}
export default db;