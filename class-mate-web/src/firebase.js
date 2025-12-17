import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHVSQkasqsaKWOQ5SzYtsEkFkWwsUyyyM",
  authDomain: "final-project-71655.firebaseapp.com",
  projectId: "final-project-71655",
  storageBucket: "final-project-71655.firebasestorage.app",
  messagingSenderId: "481154186390",
  appId: "1:481154186390:web:7dac99ba50f7cc0bb996b7"
};

let app;
let db;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (error) {
  console.error("Firebase initialization error:", error);
  throw error;
}

export { app };
export { db };
