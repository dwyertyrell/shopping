import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

// Mock auth object for development
const mockAuth = {
  currentUser: null,
  signInWithEmailAndPassword: async (email, password) => {
    console.log('Mock sign in:', email);
    return { user: { uid: 'mock-user-id', email } };
  },
  createUserWithEmailAndPassword: async (email, password) => {
    console.log('Mock create user:', email);
    return { user: { uid: 'mock-user-id', email } };
  },
  signInAnonymously: async () => {
    console.log('Mock anonymous sign in');
    return { user: { uid: 'mock-anonymous-user-id', isAnonymous: true } };
  },
  signOut: async () => {
    console.log('Mock sign out');
    return true;
  }
};

// Try to get real Firebase Auth, fallback to mock
const getAuthInstance = () => {
  try {
    const { getAuth } = require("firebase/auth");
    const auth = getAuth(app);
    console.log('Firebase Auth initialized successfully');
    return auth;
  } catch (error) {
    console.warn('Firebase Auth failed, using mock auth:', error.message);
    return mockAuth;
  }
};

export { db, getAuthInstance };
