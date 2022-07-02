
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyASDXUgGaTpW6uFMo-JNB_FSNOvML0s8Jw",
  authDomain: "user-206ca.firebaseapp.com",
  projectId: "user-206ca",
  storageBucket: "user-206ca.appspot.com",
  messagingSenderId: "646520644257",
  appId: "1:646520644257:web:7604c13c57729669b006e0",
  measurementId: "G-WNWC997Q08"
};


const app = initializeApp(firebaseConfig)
export const storage = getStorage(app);
export const db = getFirestore(app)
export const auth = getAuth()
