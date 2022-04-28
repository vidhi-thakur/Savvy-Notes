import React from 'react'
import { Navigate } from 'react-router-dom'
// context
import { useAuth } from 'context/authContext'

function RequiresAuth({ children }) {
    const { isUserLoggenIn } = useAuth()

    return isUserLoggenIn ? children : <Navigate to="/login" replace />
}

export { RequiresAuth }