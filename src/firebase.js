
  import firebase from "firebase";
  var firebaseConfig = {
    apiKey: "AIzaSyClI9qkHyj-7NYJyDEpx1PkOEIRzYfucis",
    authDomain: "spy-traffic.firebaseapp.com",
    projectId: "spy-traffic",
    storageBucket: "spy-traffic.appspot.com",
    messagingSenderId: "751949862193",
    appId: "1:751949862193:web:4ef30250bd060bce574c10",
    measurementId: "G-9QMJ1C1MNV"
  };
  // Initialize Firebase
 const firebaseApp= firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebaseApp.auth();
 const storage =firebaseApp.storage();

 export {db, auth, storage }
