import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
        apiKey: "AIzaSyBDJnnH2y6nYSR2-_AcziZjpGBuh1UKC2g",
        authDomain: "pbf10-a160c.firebaseapp.com",
        projectId: "pbf10-a160c",
        storageBucket: "pbf10-a160c.appspot.com",
        messagingSenderId: "298472449553",
        appId: "1:298472449553:web:30ef101637fd0b25e073b0"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;