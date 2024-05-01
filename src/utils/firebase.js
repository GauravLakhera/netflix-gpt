// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApFwRCoNQVFamJKSvLBt5t5NJx3_qYHdY",
  authDomain: "netflix-gpt-617b2.firebaseapp.com",
  projectId: "netflix-gpt-617b2",
  storageBucket: "netflix-gpt-617b2.appspot.com",
  messagingSenderId: "142946068207",
  appId: "1:142946068207:web:041141172af599d6ea9d1a",
  measurementId: "G-LX19TWZ0CK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth  = getAuth(); 