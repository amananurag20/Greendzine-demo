// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAweo71IqXhFzAuSGml0kXrd_R6iJsqgVI",
  authDomain: "greendzine-6e414.firebaseapp.com",
  projectId: "greendzine-6e414",
  storageBucket: "greendzine-6e414.appspot.com",
  messagingSenderId: "348075332706",
  appId: "1:348075332706:web:6f7e6b32d44c6901216d3b",
  measurementId: "G-LGH9RVN25R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();