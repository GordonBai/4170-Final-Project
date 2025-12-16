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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
