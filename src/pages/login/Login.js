import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
// css 
import './Login.css';
// context
import { useAuth } from 'context/authContext';

function Login() {
    const { updateLoginState } = useAuth();
    const [error, setError] = useState({
        userName: null,
        password: null
    })
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const updateUserName = event => {
        setUserName(event.target.value)
    }
    const updatePassword = event => {
        setPassword(event.target.value)
    }
    const loginUser = (e) => {
        e.preventDefault()
        if (userName !== '' && password !== '') {
            updateLoginState()
            navigate(location?.state?.from?.pathname)
            
        }
    }
    return (
        <main className="login-page">
            <div className="form-container">
                <h2 className="form-heading">Login</h2>
                <form className="form">
                    <div className="mb-1 input-container">
                        <label for="name">Enter name </label>
                        <input onChange={event => updateUserName(event)} required className="input" id="name" name="name" type="text" placeholder="e.g., Oliver" />
                        {error.userName && <span className='login-error'>Enter your name</span>}
                    </div>
                    <div className="mb-1 input-container">
                        <label for="password">Enter password </label>
                        <input onChange={event => updatePassword(event)} required className="input" id="password" name="password" type="password" placeholder="e.g., Oliver123" />
                    </div>
                    <div className="form-extrafeild">
                        <div className="mb-1 checkbox input-container ">
                            <input id="checkbox-input" name="checkbox-input" type="checkbox" /><label
                                for="checkbox-input">Remember
                                me</label>
                        </div>
                        <div>Forgot password?</div>
                    </div>
                    <button onClick={loginUser} type="submit" className="btn btn-primary-contained btn-extra">login</button>
                </form>
                <Link to="/signup" className="form-link">New user? Register here <i className='fas fa-angle-right'></i></Link>
            </div>
        </main>
    )
}

export { Login }