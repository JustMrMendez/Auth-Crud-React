// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_Wy_1sgwRhBc3qxN6Hz6wBig_jdv1fls",
  authDomain: "fetchygeek.firebaseapp.com",
  projectId: "fetchygeek",
  storageBucket: "fetchygeek.appspot.com",
  messagingSenderId: "111100029238",
  appId: "1:111100029238:web:f54b12a3aaa0f04b472b97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
