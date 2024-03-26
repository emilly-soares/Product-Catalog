import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyC4jdX9i-Fs5C5HdikgxhKLYIuiFWQ4x4Q",
  authDomain: "product-catalog-720c2.firebaseapp.com",
  projectId: "product-catalog-720c2",
  storageBucket: "product-catalog-720c2.appspot.com",
  messagingSenderId: "443849306748",
  appId: "1:443849306748:web:20d62a9848ceefd159cff9"
};

//emilly@admin.com.br 123456

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);


export {auth, db} 