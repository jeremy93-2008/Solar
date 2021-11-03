// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAC2s6hf0ndb0sv9B_kPjcwMhDRN1fuf2k",
    authDomain: "solar-2247a.firebaseapp.com",
    projectId: "solar-2247a",
    storageBucket: "solar-2247a.appspot.com",
    messagingSenderId: "1023216485819",
    appId: "1:1023216485819:web:0940a4fa91e2694a5e709e",
    measurementId: "G-MSQ3R3TKSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
