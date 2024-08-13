// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwOd21WUvSL0vQ6zXdsmhlWTF448fKJn8",
  authDomain: "class-50-dd8c1.firebaseapp.com",
  projectId: "class-50-dd8c1",
  storageBucket: "class-50-dd8c1.appspot.com",
  messagingSenderId: "375246395152",
  appId: "1:375246395152:web:82d0a36213b06cd07db795"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;