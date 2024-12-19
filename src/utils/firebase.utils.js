// Import the functions you need from the SDKs you need
import { newId } from './id-generator.utils';
import { initializeApp } from 'firebase/app';
import {
  collection,
  addDoc,
  where,
  getFirestore,
  getDocs,
  updateDoc,
  doc,
  getDoc,
  query,
  setDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBuDOlmwUmeMsZ68UzqThOQ7vY9k6RCNeI',
  authDomain: 'greg-read-all-about-it.firebaseapp.com',
  projectId: 'greg-read-all-about-it',
  storageBucket: 'greg-read-all-about-it.firebasestorage.app',
  messagingSenderId: '519752582297',
  appId: '1:519752582297:web:55b6e5c0dc89b72528a408',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

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
