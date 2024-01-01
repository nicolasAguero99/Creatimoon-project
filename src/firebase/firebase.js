import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBtVtnyFGWlz1InhTHbW_bm_cRjR5n8f8g',
  authDomain: 'parcial-firebase-40022.firebaseapp.com',
  projectId: 'parcial-firebase-40022',
  storageBucket: 'parcial-firebase-40022.appspot.com',
  messagingSenderId: '591699807432',
  appId: '1:591699807432:web:1f2f98787c98fc90e2a9fd'
};

// Tu configuración de Firebase aquí

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Accede a Firestore
const db = getFirestore(app);

export { db, app };
