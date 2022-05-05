import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

export const provider = new GoogleAuthProvider();
const firebaseConfig = {
  apiKey: "AIzaSyB-YhjmPz6v2Qkb1G2T9YOQlOWLSE9XN3o",
  authDomain: "netflixclonecool.firebaseapp.com",
  projectId: "netflixclonecool",
  storageBucket: "netflixclonecool.appspot.com",
  messagingSenderId: "1050552468936",
  appId: "1:1050552468936:web:410baefc4ee2978610ecfd"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
