import { createContext, useContext, useState } from "react";

const authContext = createContext();

export const useAuth = () => useContext(authContext)

export const AuthProvider = ({ children }) => {
    const [isUserLoggenIn, setIsUserLoggenIn] = useState(false)
    const updateLoginState = () => {
        setIsUserLoggenIn(!isUserLoggenIn)
    }
    return (
        <authContext.Provider value={{isUserLoggenIn, updateLoginState}}>
            {children}
        </authContext.Provider>
    )
}