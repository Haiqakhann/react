// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyA6oymbetRlj_qtrdvfJVFp7mRjhg2QaM0",
  authDomain: "hk-codegirls.firebaseapp.com",
  projectId: "hk-codegirls",
  storageBucket: "hk-codegirls.appspot.com",
  messagingSenderId: "952852452855",
  appId: "1:952852452855:web:c76252db20d8e11ce54af2",
  measurementId: "G-MTZ32Y3Q36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore()
const storage = getStorage(app);
const realtime = getDatabase(app)

export {auth,db,storage,realtime}