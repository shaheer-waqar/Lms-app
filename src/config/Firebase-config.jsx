// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDafnAhXwUCR_U_I_yWIb37Rp4S8Pt0hho",
  authDomain: "lms-software-shah.firebaseapp.com",
  projectId: "lms-software-shah",
  storageBucket: "lms-software-shah.appspot.com",
  messagingSenderId: "648715445938",
  appId: "1:648715445938:web:96d623359e8bbf9c198bab"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


export {db,auth,storage} 