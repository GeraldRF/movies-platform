// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUlNEr2JRtXt08kUI7Sg_myVspHlTLwbY",
  authDomain: "movietoon-ed391.firebaseapp.com",
  projectId: "movietoon-ed391",
  storageBucket: "movietoon-ed391.appspot.com",
  messagingSenderId: "226907341090",
  appId: "1:226907341090:web:68c88260669cfc9e98657b",
  measurementId: "G-C7TMVRYFFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);