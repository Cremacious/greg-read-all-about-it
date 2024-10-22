// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBuDOlmwUmeMsZ68UzqThOQ7vY9k6RCNeI',
  authDomain: 'greg-read-all-about-it.firebaseapp.com',
  projectId: 'greg-read-all-about-it',
  storageBucket: 'greg-read-all-about-it.appspot.com',
  messagingSenderId: '519752582297',
  appId: '1:519752582297:web:55b6e5c0dc89b72528a408',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();

export const createUserDocFromAuth = async (userAuth) => {
    if(!userAuth) return;
    
}

export const createAuthUserEmailPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
