// Import the functions you need from the SDKs you need
import {getApp, getApps, initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1POYywK-g8dXwraCx7Sbg-n1rf2SnL-Y",
  authDomain: "chatgpt-clone-ff236.firebaseapp.com",
  projectId: "chatgpt-clone-ff236",
  storageBucket: "chatgpt-clone-ff236.appspot.com",
  messagingSenderId: "929708288",
  appId: "1:929708288:web:efc1b297fd3ef5bc065be5"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);