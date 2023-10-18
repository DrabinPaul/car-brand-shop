// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJFLFmSEN_VcZ0EeMm1oIJ7UUgQj5m3-M",
  authDomain: "brandshop-client-side-3e9b0.firebaseapp.com",
  projectId: "brandshop-client-side-3e9b0",
  storageBucket: "brandshop-client-side-3e9b0.appspot.com",
  messagingSenderId: "91715023955",
  appId: "1:91715023955:web:2a5f0cfbb7e89c626b02a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app