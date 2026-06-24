import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "marc-ros-barber-b17bd.firebaseapp.com",
  projectId: "marc-ros-barber-b17bd",
  storageBucket: "marc-ros-barber-b17bd.firebasestorage.app",
  messagingSenderId: "402397544504",
  appId: "1:402397544504:web:066170cfbbee53d3bfa6cd"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);