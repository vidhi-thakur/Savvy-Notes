import { createContext, useContext, useState } from "react";

const authContext = createContext();

export const useAuth = () => useContext(authContext)

export const AuthProvider = ({ children }) => {
    const [isUserLoggedIn, setisUserLoggedIn] = useState(false)
    const updateLoginState = () => {
        setisUserLoggedIn(!isUserLoggedIn)
    }
    return (
        <authContext.Provider value={{isUserLoggedIn, updateLoginState}}>
            {children}
        </authContext.Provider>
    )
}