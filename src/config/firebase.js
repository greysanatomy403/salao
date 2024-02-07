import firebase from 'firebase/compat/app';
import'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAtV5NB6t1P4V62JMM6t5kyJl7uAQ2C92I",
    authDomain: "new-look-9c93f.firebaseapp.com",
    projectId: "new-look-9c93f",
    storageBucket: "new-look-9c93f.appspot.com",
    messagingSenderId: "541799999291",
    appId: "1:541799999291:web:a1494a6a03b7ace2b0391e"
  };
  
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);