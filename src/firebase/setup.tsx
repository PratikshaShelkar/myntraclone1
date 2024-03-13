
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCxCeLqS-4SKvyZ_C8EsVK_URcDJhZI4_E",
  authDomain: "myntra-clone-46819.firebaseapp.com",
  projectId: "myntra-clone-46819",
  storageBucket: "myntra-clone-46819.appspot.com",
  messagingSenderId: "881000172592",
  appId: "1:881000172592:web:172eb77983f356f68d31f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app)
