// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpJA2-iGp74OBjpzWFRWdbPadF1R_Df1k",
  authDomain: "toys-client-site.firebaseapp.com",
  projectId: "toys-client-site",
  storageBucket: "toys-client-site.appspot.com",
  messagingSenderId: "172875097770",
  appId: "1:172875097770:web:d3fa2e9656413c03bdd2d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app