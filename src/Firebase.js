// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJqHEkMznbddfCS4OdMyZ_TOJmKh90emU",
    authDomain: "netflix-clone-1c3a6.firebaseapp.com",
    projectId: "netflix-clone-1c3a6",
    storageBucket: "netflix-clone-1c3a6.appspot.com",
    messagingSenderId: "1091934662024",
    appId: "1:1091934662024:web:b79763fb2e4359a4e95e3d",
    measurementId: "G-6990VD6060"
  };



// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)