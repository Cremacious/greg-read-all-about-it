import { useState, createContext } from "react";

export const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser}
    return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}