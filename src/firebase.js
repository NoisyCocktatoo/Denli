// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH4bB2C2LdnkSRivkoBCGkfpMg0QVCRRU",
  authDomain: "denli-1ba8d.firebaseapp.com",
  projectId: "denli-1ba8d",
  storageBucket: "denli-1ba8d.appspot.com",
  messagingSenderId: "388311942328",
  appId: "1:388311942328:web:0b814d7f1ca821451de04d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app