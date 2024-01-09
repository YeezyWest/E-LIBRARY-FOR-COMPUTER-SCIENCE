// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyANC8GD0SX5KIEinoJp8t7XwBjtQEg_F5s",
  authDomain: "school-library-35643.firebaseapp.com",
  projectId: "school-library-35643",
  storageBucket: "school-library-35643.appspot.com",
  messagingSenderId: "512923243586",
  appId: "1:512923243586:web:e30aa8cd35073b2dfb09db",
  measurementId: "G-050CQJ4ZTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);