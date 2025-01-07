import { createContext, useState, useEffect } from 'react';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  signOutUser,
} from '../utils/firebase.utils';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
  signOut: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const signOut = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  const value = { currentUser, setCurrentUser, signOut };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};