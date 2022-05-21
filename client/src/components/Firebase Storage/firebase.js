// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-WwSlrk4KgnEKBiGqsvO6MqJetj5AWl8",
  authDomain: "ddrs-community.firebaseapp.com",
  projectId: "ddrs-community",
  storageBucket: "ddrs-community.appspot.com",
  messagingSenderId: "381223741949",
  appId: "1:381223741949:web:cdbb4c7c6404853d015194",
  measurementId: "G-Q3J9S73663"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
