import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMlIaU69Kk0LzhnASjLOtP8dLKpEjrL9k",
  authDomain: "netflix-56a31.firebaseapp.com",
  projectId: "netflix-56a31",
  storageBucket: "netflix-56a31.appspot.com",
  messagingSenderId: "28787079791",
  appId: "1:28787079791:web:c8afaeb5cf0727f42d2b9a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
