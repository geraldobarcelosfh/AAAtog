// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDataConnect } from "firebase/data-connect";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4bnJdXQGq_96VHYJ-0zExw0lUnVC5tbo",
  authDomain: "tog-final-10.firebaseapp.com",
  projectId: "tog-final-10",
  storageBucket: "tog-final-10.firebasestorage.app",
  messagingSenderId: "784563386003",
  appId: "1:784563386003:web:540f1c47852fa0c65bff66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Data Connect
const dataConnect = getDataConnect(app);

export { app, dataConnect };