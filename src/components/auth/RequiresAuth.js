import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
// context
import { useAuth } from 'context/authContext'

function RequiresAuth({ children }) {
    const { isUserLoggenIn } = useAuth()
    const location = useLocation();

    return isUserLoggenIn ? children : <Navigate state={{ from: location }} to="/login" replace />
}

export { RequiresAuth }