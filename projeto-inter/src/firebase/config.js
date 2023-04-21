import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import app from "@/App.vue";

const firebaseConfig = {
    apiKey: "AIzaSyAP2pPZ6wmOwtx5JnSZuV4JkEDpzpEoIgE",
    authDomain: "inter-devbank.firebaseapp.com",
    projectId: "inter-devbank",
    storageBucket: "inter-devbank.appspot.com",
    messagingSenderId: "270966646252",
    appId: "1:270966646252:web:9d29ad88007d1c33728cc9",
    measurementId: "G-MWXZK8G62S"
};

initializeApp(firebaseConfig);

const auth = getAuth()
const db = getFirestore(initializeApp(firebaseConfig))
window.db = db

export { auth, db }