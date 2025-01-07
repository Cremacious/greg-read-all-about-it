// Import the functions you need from the SDKs you need
import { newId } from './id-generator.utils';
import { initializeApp } from 'firebase/app';
import {
  collection,
  getFirestore,
  getDocs,
  updateDoc,
  doc,
  setDoc,
  deleteDoc,
  getDoc
} from 'firebase/firestore';

import {
  signOut,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBuDOlmwUmeMsZ68UzqThOQ7vY9k6RCNeI',
  authDomain: 'greg-read-all-about-it.firebaseapp.com',
  projectId: 'greg-read-all-about-it',
  storageBucket: 'greg-read-all-about-it.firebasestorage.app',
  messagingSenderId: '519752582297',
  appId: '1:519752582297:web:55b6e5c0dc89b72528a408',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const createRestaurant = async function (initialDocumentData) {
  try {
    const documentId = newId();
    const docRef = doc(db, 'restaurants', documentId);
    await setDoc(docRef, { id: documentId, ...initialDocumentData });
    console.log(`Document '${documentId}' created in collection`);
  } catch (error) {
    console.error('Error creating document: ', error);
  }
};

export const readCollection = async function (collectionName) {
  try {
    const collectionRef = collection(db, collectionName);
    const snapshot = await getDocs(collectionRef);
    const collectionData = snapshot.docs.map((doc) => doc.data());
    return collectionData;
  } catch (error) {
    console.error('Error reading collection: ', error);
  }
};

export const editDocument = async function (documentId, updatedDocumentData) {
  try {
    const docRef = doc(db, 'restaurants', documentId);
    await updateDoc(docRef, updatedDocumentData);
    console.log(`Document '${documentId}' updated in collection`);
  } catch (error) {
    console.error('Error updating document: ', error);
  }
};

export const deleteDocument = async function (documentId) {
  try {
    const docRef = doc(db, 'restaurants', documentId);
    await deleteDoc(docRef);
    console.log(`Document '${documentId}' deleted from collection`);
  } catch (error) {
    console.error('Error deleting document: ', error);
  }
};

export const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing in user', error);
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log('User signed out');
  } catch (error) {
    console.error(error);
  }
};

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
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
      console.error('Error creating user document', error);
    }
  }

  return userDocRef;
};


// export const createUser = async function (username='gregread', password='Battery18!') {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       username,
//       password
//     );
//     const newUser = userCredential.user;
//     const userDocRef = doc(db, 'users', newUser.uid);
//     await setDoc(userDocRef, { email: newUser.email });
//   } catch (error) {
//     console.error('Error creating user: ', error);
//   }
// };
