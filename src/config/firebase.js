import firebase from 'firebase/compat/app';
import'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

 
const firebaseConfig = {
  apiKey: "AIzaSyAcPJBYNrz6f1RDybmRGk2ya06gjVY-rag",
  authDomain: "salao-new-look.firebaseapp.com",
  projectId: "salao-new-look",
  databaseURL: "//salao-new-look-default-rtdb.firebaseio.com/",
  storageBucket: "salao-new-look.appspot.com",
  messagingSenderId: "79050567409",
  appId: "1:79050567409:web:c4ba9c23838a77b5b4c350",
  measurementId: "G-NWWZ6XXMGB"
};

  
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);
 