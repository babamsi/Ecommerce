import firebase from 'firebase/compat/app'
import 'firebase/auth';
import 'firebase/firestore'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const config = {
    apiKey: "AIzaSyBhKP30vtDRkMqI6c2yVvMt7zgcmqeQLNU",
    authDomain: "ecommerce-8f115.firebaseapp.com",
    projectId: "ecommerce-8f115",
    storageBucket: "ecommerce-8f115.appspot.com",
    messagingSenderId: "632580460575",
    appId: "1:632580460575:web:2eb1732f8fa2b492da852a"
  };
  firebase.initializeApp(config)
  
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });
export const auth = getAuth();
export const firestore = firebase.firestore;
export const signInWithGoogle = () => signInWithPopup(auth, provider);
