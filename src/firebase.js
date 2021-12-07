// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgPWCvq5t-Cappkt6W2rtHMEGiaF4YWks",
  authDomain: "adv3-b6c17.firebaseapp.com",
  databaseURL: "https://adv3-b6c17.firebaseio.com",
  projectId: "adv3-b6c17",
  storageBucket: "adv3-b6c17.appspot.com",
  messagingSenderId: "800153946377",
  appId: "1:800153946377:web:45a1b38c0e214e7517ebd8",
  measurementId: "G-RBTB2G5WZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);