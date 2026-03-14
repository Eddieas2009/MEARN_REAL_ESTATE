// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-88825.firebaseapp.com",
  projectId: "mern-estate-88825",
  storageBucket: "mern-estate-88825.firebasestorage.app",
  messagingSenderId: "675727870712",
  appId: "1:675727870712:web:274d43078e8c0e4873490d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);