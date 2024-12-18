// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { collection, addDoc, getFirestore } from 'firebase/firestore';


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


export const createCollection = async function (collectionName, initialDocumentData) {
  try {
    const collectionRef = collection(db, collectionName);
    await addDoc(collectionRef, initialDocumentData);
    console.log(`Collection '${collectionName}' created with initial document`);
  } catch (error) {
    console.error('Error creating collection: ', error);
  }
};

// Example usage:
// createCollection('restaurants', { name: 'First Item', rating: 5 });
