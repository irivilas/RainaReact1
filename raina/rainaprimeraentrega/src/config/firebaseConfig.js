// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwl76RO49c8lCiweqt4Qa4v8n7pYnzwNQ",
  authDomain: "rainakidss.firebaseapp.com",
  projectId: "rainakidss",
  storageBucket: "rainakidss.appspot.com",
  messagingSenderId: "760809024556",
  appId: "1:760809024556:web:1d8524d1e1806ec5cf7589"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

