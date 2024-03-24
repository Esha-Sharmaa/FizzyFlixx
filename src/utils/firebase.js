// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc8IHx5ey1sUgP5IKppcEn5vNYrE9d1AE",
  authDomain: "fizzyflix.firebaseapp.com",
  projectId: "fizzyflix",
  storageBucket: "fizzyflix.appspot.com",
  messagingSenderId: "128563860390",
  appId: "1:128563860390:web:cce563bc5a27fab972f567",
  measurementId: "G-D1G4RFEHC8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();


