import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBjPEds4nMVJ-gS60_PKrawaobyFTnT-Ls",
  authDomain: "crud-app-45c8f.firebaseapp.com",
  projectId: "crud-app-45c8f",
  storageBucket: "crud-app-45c8f.appspot.com",
  messagingSenderId: "839680630806",
  appId: "1:839680630806:web:30f28ded93ccb569d99537",
  measurementId: "G-E1JC3527E6"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);