import firebase from "firebase/app"
import 'firebase/storage'
require("firebase/firestore");
require("firebase/auth");
require('dotenv').config()

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
   apiKey: process.env.REACT_APP_API_KEY,
   authDomain: process.env.REACT_APP_AUTHDOMAIN,
   databaseURL: process.env.REACT_APP_BASEURL,
   projectId: process.env.REACT_APP_PROJECT_ID,
   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
   appId: process.env.REACT_APP_APP_ID,
   measurementId: process.env.REACT_APP_MEASUREMENT_ID
 };

// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);

export default fire;