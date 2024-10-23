import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBuDOlmwUmeMsZ68UzqThOQ7vY9k6RCNeI',
  authDomain: 'greg-read-all-about-it.firebaseapp.com',
  projectId: 'greg-read-all-about-it',
  storageBucket: 'greg-read-all-about-it.appspot.com',
  messagingSenderId: '519752582297',
  appId: '1:519752582297:web:55b6e5c0dc89b72528a408',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// import { initializeApp } from 'firebase/app';
// import {
//   getAuth,
//   signInWithPopup,
//   signInWithRedirect,
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from 'firebase/auth';
// import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyBuDOlmwUmeMsZ68UzqThOQ7vY9k6RCNeI',
//   authDomain: 'greg-read-all-about-it.firebaseapp.com',
//   projectId: 'greg-read-all-about-it',
//   storageBucket: 'greg-read-all-about-it.appspot.com',
//   messagingSenderId: '519752582297',
//   appId: '1:519752582297:web:55b6e5c0dc89b72528a408',
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);

// const googleProvider = new GoogleAuthProvider();
// googleProvider.setCustomParameters({
//   prompt: 'select_account',
// });
// export const auth = getAuth();

// export const signInWithGooglePopup = () => {
//   signInWithPopup(auth, googleProvider);
// };

// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

// const db = getFirestore();

// export const createUserDocFromAuth = async (
//   userAuth,
//   additionalInformation = {}
// ) => {
//   if (!userAuth) return;
//   const userDocRef = doc(db, 'users', userAuth.uid);
//   const userSnapshot = await getDoc(userDocRef);
//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();
//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt,
//         ...additionalInformation,
//       });
//     } catch (error) {}
//   }
//   return userDocRef;
// };

// export const createAuthUserEmailPassword = async (email, password) => {
//   if (!email || !password) return;
//   return await createUserWithEmailAndPassword(auth, email, password);
// };

// export const signInAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;
//   return await signInWithEmailAndPassword(auth, email, password);
// };
