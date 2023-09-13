// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC571qeCB7N9p1QCNZpIazsHJ0N9FaMg2s",
  authDomain: "linkdine-clone-6d7a9.firebaseapp.com",
  projectId: "linkdine-clone-6d7a9",
  storageBucket: "linkdine-clone-6d7a9.appspot.com",
  messagingSenderId: "885679633770",
  appId: "1:885679633770:web:82dbb5848f3d96c450a113",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Authentication Session
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
