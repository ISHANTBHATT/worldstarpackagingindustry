// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  setPersistence,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPoBR7_8eP3MFwKUbw8k3Y_mauArUFBHE",
  authDomain: "food-app-94627.firebaseapp.com",
  projectId: "food-app-94627",
  storageBucket: "food-app-94627.appspot.com",
  messagingSenderId: "563251630961",
  appId: "1:563251630961:web:dd91cfa037d892ff575cd0",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch(() => {
  // ignore persistence failures in demo environments
});
export const googleProvider = new GoogleAuthProvider();
export { app, firestore, storage };
