import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ВАЖНО: вставьте сюда свои ключи из консоли Firebase
// (Project settings → General → Your apps → SDK setup and configuration)
// Этот же набор ключей нужно вставить и в bikeflow-vind/lib/firebase.ts —
// оба приложения должны смотреть в ОДИН и тот же проект Firebase, чтобы обмениваться данными.
const firebaseConfig = {
  apiKey: "AIzaSyBB3LF8xBkCIaUKbVwMDI7-kFD9aGS099s",
  authDomain: "bikeflow-sync.firebaseapp.com",
  projectId: "bikeflow-sync",
  storageBucket: "bikeflow-sync.firebasestorage.app",
  messagingSenderId: "861405463841",
  appId: "1:861405463841:web:d0f95cabd74a01e3cb2a60"
};


const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
