import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBhRD77hIoFrGLa4S0fmcIZj8zGrBuqVeo",
    authDomain: "starbuy-ecommerce.firebaseapp.com",
    projectId: "starbuy-ecommerce",
    storageBucket: "starbuy-ecommerce.appspot.com",
    messagingSenderId: "771205567421",
    appId: "1:771205567421:web:be2ea9ccbd6e967326b8d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
