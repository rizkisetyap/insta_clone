// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4EkcjSDGB-HLOzS1LQHciPYWvRFoHlE0",
  authDomain: "instaclone-2-cf621.firebaseapp.com",
  projectId: "instaclone-2-cf621",
  storageBucket: "instaclone-2-cf621.appspot.com",
  messagingSenderId: "218082001223",
  appId: "1:218082001223:web:190456f42360e512248c62",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
