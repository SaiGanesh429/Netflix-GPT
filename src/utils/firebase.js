// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3RH_KejO1rzPx3k9-wUUpwE94kSzGTXE",
    authDomain: "netflixgpt-bb1f4.firebaseapp.com",
    projectId: "netflixgpt-bb1f4",
    storageBucket: "netflixgpt-bb1f4.firebasestorage.app",
    messagingSenderId: "254473455678",
    appId: "1:254473455678:web:7593632f410fc443a4e96f",
    measurementId: "G-33CLQ0SEW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

