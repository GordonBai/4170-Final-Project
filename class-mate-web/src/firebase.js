// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

// Your web app's Firebase configuration (TODO)
const firebaseConfig = {
    // Your config details
    // class-mate web project firebase config
    apiKey: "AIzaSyBHVSQkasqsaKWOQ5SzYtsEkFkWwsUyyyM",
    authDomain: "final-project-71655.firebaseapp.com",
    projectId: "final-project-71655",
    storageBucket: "final-project-71655.firebasestorage.app",
    messagingSenderId: "481154186390",
    appId: "1:481154186390:web:7dac99ba50f7cc0bb996b7"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app }
export { db }