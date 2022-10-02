import { createContext, useContext, useState } from "react";

const authContext = createContext();

export const useAuth = () => useContext(authContext)

export const AuthProvider = ({ children }) => {
    const [isUserLoggedIn, setisUserLoggedIn] = useState(!!localStorage.getItem("authToknes"))
    const updateLoginState = ({name, password}) => {
        const currTime = new Date();
        localStorage.setItem("authToknes", "kjfvb2323kjfbvkergbjrehfv54321", currTime.getTime() + 1)
        localStorage.setItem("userName", name) 
        setisUserLoggedIn(!isUserLoggedIn)
    }
    return (
        <authContext.Provider value={{ isUserLoggedIn, updateLoginState }}>
            {children}
        </authContext.Provider>
    )
}