import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDt_SXvSDsvWbPvYEDdvIqZs8nG8aJIOMk",
  authDomain: "netflix-clone-aec22.firebaseapp.com",
  projectId: "netflix-clone-aec22",
  storageBucket: "netflix-clone-aec22.appspot.com",
  messagingSenderId: "481117556175",
  appId: "1:481117556175:web:c9719f2c8e8a9c95fe96ba"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
