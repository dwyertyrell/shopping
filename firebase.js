import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA1vWZKnkddD5n1N88_mta_Rf4gPiDmFI",
  authDomain: "chat-app-d1777.firebaseapp.com",
  projectId: "chat-app-d1777",
  storageBucket: "chat-app-d1777.firebasestorage.app",
  messagingSenderId: "915890104856",
  appId: "1:915890104856:web:9c39eed7ec47446f30b16d",
  measurementId: "G-NV6RR5LYTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);

    const { getAuth } = require("firebase/auth");
    const auth = getAuth(app);


export { db, auth };
