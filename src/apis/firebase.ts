import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLAiuODRcOHiamG6l4ZB5StZyyrnsG54g",
  authDomain: "ebuddy-test-9dd29.firebaseapp.com",
  projectId: "ebuddy-test-9dd29",
  storageBucket: "ebuddy-test-9dd29.firebasestorage.app",
  messagingSenderId: "14921678169",
  appId: "1:14921678169:web:097ebfd96cecff92fa6048",
  measurementId: "G-KZ1EJN7KST"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
