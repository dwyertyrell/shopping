import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA1vWZKnkddD5n1N88_mta_Rf4gPiDmFI",
  authDomain: "chat-app-d1777.firebaseapp.com",
  projectId: "chat-app-d1777",
  storageBucket: "chat-app-d1777.firebasestorage.app",
  messagingSenderId: "915890104856",
  appId: "1:915890104856:web:2d29a82b446e4ae830b16d",
  measurementId: "G-7FW2XLWSZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);

// Create a function to get auth instance (lazy initialization)
const getAuthInstance = () => {
  try {
    return getAuth(app);
  } catch (error) {
    console.error('Error initializing Firebase Auth:', error);
    return null;
  }
};

export { db, getAuthInstance };
