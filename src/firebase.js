import firebase from 'firebase'
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBmvtMbbw2zZ9pdVCTXG4kht4YwvVbcUlI",
    authDomain: "twitter-clone-4341d.firebaseapp.com",
    projectId: "twitter-clone-4341d",
    storageBucket: "twitter-clone-4341d.appspot.com",
    messagingSenderId: "895578145524",
    appId: "1:895578145524:web:42bd3ee77bbf33c06ad4a1",
    measurementId: "G-J6LT3G5QRW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db=firebase.firestore();
  export default db;