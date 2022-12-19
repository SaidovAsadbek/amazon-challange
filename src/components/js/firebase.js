import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Import the functions you need from the SDKs you need

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoQFOy2-DCGaVDB31nABZbJq9Tc7QoghI",
    authDomain: "fir-9230e.firebaseapp.com",
    databaseURL: "https://fir-9230e-default-rtdb.firebaseio.com",
    projectId: "fir-9230e",
    storageBucket: "fir-9230e.appspot.com",
    messagingSenderId: "751888710678",
    appId: "1:751888710678:web:19f643d50658d531590937",
    measurementId: "G-VWKTE8SR97",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, googleProvider };
