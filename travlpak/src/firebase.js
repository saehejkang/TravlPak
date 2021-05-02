import firebase from "firebase/app"
//require("firebase/firestore");
require("firebase/auth");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
   apiKey: "AIzaSyD9blbY5AZe2ymhDm3xpSN-0UUkcSvo1i4",
   authDomain: "travlpak-1cefc.firebaseapp.com",
   databaseURL: "https://travlpak-1cefc-default-rtdb.firebaseio.com",
   projectId: "travlpak-1cefc",
   storageBucket: "travlpak-1cefc.appspot.com",
   messagingSenderId: "88818827150",
   appId: "1:88818827150:web:b3c0faf7000f0a5f062edf",
   measurementId: "G-DKJ6GBC0Y1"
 };
console.log(firebaseConfig.apiKey)
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);

//var db = firebase.firestore();
//var users = db.collection("Users");

export default fire;