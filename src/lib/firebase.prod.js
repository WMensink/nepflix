import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBTniefAzvmFHSa8pLx2K6H-uTQ0-4AF8s",
  authDomain: "nepflix-91788.firebaseapp.com",
  projectId: "nepflix-91788",
  storageBucket: "nepflix-91788.appspot.com",
  messagingSenderId: "545800619895",
  appId: "1:545800619895:web:9a031c4e7ceacf75944372",
  measurementId: "G-GJZ3XZP8E7"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
