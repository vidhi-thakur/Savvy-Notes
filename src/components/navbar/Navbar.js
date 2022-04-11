import React from 'react'
// css
import './Navbar.css'
// icon
import { TiThMenu } from 'react-icons/ti'
import { Link } from 'react-router-dom'

function Navbar(props) {
    const updateSidebarState = () => {
        props.setIsSidearVisible(val => !val)
    }
    return (
        <nav className='nav nav-notes'>
            <div onClick={updateSidebarState} className='nav-menu'>
                <TiThMenu size={24} />
            </div>
            <h1 className='nav-title'>
                <Link to="/">
                    notes savvy
                </Link>
            </h1>
        </nav>
    )
}

export { Navbar }