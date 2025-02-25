// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYbNsCLl_3iFGdR6JJlQGY9sfNew73oXg",
  authDomain: "watchnet-7e6c7.firebaseapp.com",
  projectId: "watchnet-7e6c7",
  storageBucket: "watchnet-7e6c7.firebasestorage.app",
  messagingSenderId: "330521583610",
  appId: "1:330521583610:web:5c93cbaf4dadd0e89fce43",
  measurementId: "G-9FRZ8YTRY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();