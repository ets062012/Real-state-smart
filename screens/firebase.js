// Import the functions you need from the SDKs you need
// import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyBPoCNPIaTNJX6ngpL6kDqXhz2roPS2tR4",
  authDomain: "home-login-84078.firebaseapp.com",
  projectId: "home-login-84078",
  storageBucket: "home-login-84078.appspot.com",
  messagingSenderId: "333440995703",
  appId: "1:333440995703:web:0049a6e0eb9c80ce9d1172"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth=getAuth(app)
 export {auth};