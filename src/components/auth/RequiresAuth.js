import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
// context
import { useAuth } from 'context/authContext'

function RequiresAuth({ children }) {
    const { isUserLoggedIn } = useAuth()
    const location = useLocation();

    return isUserLoggedIn ? children : <Navigate state={{ from: location }} to="/login" replace />
}

export { RequiresAuth }