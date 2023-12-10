// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider}from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8bPUhEnVOoq77CTnLyRuRH5YpwOyQg70",
  authDomain: "expense-tracker-9abd5.firebaseapp.com",
  projectId: "expense-tracker-9abd5",
  storageBucket: "expense-tracker-9abd5.appspot.com",
  messagingSenderId: "35340932361",
  appId: "1:35340932361:web:62cb2184ae68eb2be7afd8",
  measurementId: "G-DYPBM727LF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const provider= new GoogleAuthProvider()
//firebase login
//firebase init
//firebase deploy
