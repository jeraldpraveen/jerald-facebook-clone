import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

const firebaseApp = {
  apiKey: "AIzaSyDrwtFr04xlXPvqfge5FXhWMttvxDBDY1M",
  authDomain: "facebook-clone-b3a5a.firebaseapp.com",
  projectId: "facebook-clone-b3a5a",
  storageBucket: "facebook-clone-b3a5a.appspot.com",
  messagingSenderId: "99762585372",
  appId: "1:99762585372:web:00d7399645232b425544d9",
};

const app = initializeApp(firebaseApp);

const auth = getAuth(app);
const db = getFirestore(app);
const userCollection = collection(db, "users");

export { auth, db, userCollection };
