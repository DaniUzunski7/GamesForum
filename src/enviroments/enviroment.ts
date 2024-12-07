// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDpkxhbDHgg8K7H6vwj5VcWA6CsGdDYCT8",
  authDomain: "gameforum-a7568.firebaseapp.com",
  databaseURL: "https://gameforum-a7568-default-rtdb.firebaseio.com",
  projectId: "gameforum-a7568",
  storageBucket: "gameforum-a7568.firebasestorage.app",
  messagingSenderId: "443762424219",
  appId: "1:443762424219:web:09c0cd04030f3d0510893e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);