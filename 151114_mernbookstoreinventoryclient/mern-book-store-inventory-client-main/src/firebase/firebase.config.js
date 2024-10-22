// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5bW9X5xCA6RaCOh7__qKQ6cjp9ky_twE",
  authDomain: "web-bookstore-inventory.firebaseapp.com",
  projectId: "web-bookstore-inventory",
  storageBucket: "web-bookstore-inventory.appspot.com",
  messagingSenderId: "404357257169",
  appId: "1:404357257169:web:e016fb2e3147ea593132f0",
  measurementId: "G-T510YHEX31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;