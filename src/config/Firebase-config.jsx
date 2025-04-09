// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyC68EK3qQEOqoRyaGy3za7eqTJ188GCxmc",
  authDomain: "project-lms-18ceb.firebaseapp.com",
  projectId: "project-lms-18ceb",
  storageBucket: "project-lms-18ceb.firebasestorage.app",
  messagingSenderId: "322033812931",
  appId: "1:322033812931:web:2d95d2778c5692422c2976",
  measurementId: "G-26KEQLL25S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


export {db,auth,storage} 
