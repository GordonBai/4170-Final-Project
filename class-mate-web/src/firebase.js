// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

// Your web app's Firebase configuration (TODO)
const firebaseConfig = {
    // Your config details
    apiKey: "AIzaSyDjO_R8mmfkFeLD2EzdvGX-iRX2DRJ0-H4",
    authDomain: "in-class-example-4170.firebaseapp.com",
    projectId: "in-class-example-4170",
    storageBucket: "in-class-example-4170.firebasestorage.app",
    messagingSenderId: "268642938534",
    appId: "1:268642938534:web:80d185c36b5bec84e1ce67"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app }
export { db }