import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import 'firebase/auth';

import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {

    apiKey: "AIzaSyC2khAO67Qm3LX8r-yror3yiJRcT-mX_3g",
  
    authDomain: "loginpage-5d106.firebaseapp.com",
  
    projectId: "loginpage-5d106",
  
    storageBucket: "loginpage-5d106.appspot.com",
  
    messagingSenderId: "612862000710",
  
    appId: "1:612862000710:web:be38f794329be3080ed447",
  
    measurementId: "G-NR30MEB487"
  
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Firestore = getFirestore(app);


