import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBK5B0hA28_if_cCRCuRAxYiLERLnbMgkI",
  authDomain: "fopy-1ec6f.firebaseapp.com",
  projectId: "fopy-1ec6f",
  storageBucket: "fopy-1ec6f.appspot.com",
  messagingSenderId: "1007135469460",
  appId: "1:1007135469460:web:353ba5dbb8618710906981"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service

export const db = getFirestore(app);



