import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

// Tu configuración de Firebase aquí

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Accede a Firestore
const db = getFirestore(app);

export { db, app };
