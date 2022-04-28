import React from 'react'
// css
import './Sidebar.css'
// static file
import { sidebarMenu } from 'static/sidebar/sidebarMenu'
import { NavLink } from 'react-router-dom'

function Sidebar({ children, isSidearVisible }) {
  const getActiveStyle = ({ isAvtive }) => ({
    fontWeight: isAvtive ? 700 : 400
  })
  return (
    <div className="sidebar-HOC">
      <aside className={`sidebar ${!isSidearVisible ? 'sidebar-inactive' : 'sidebar-active'}`}>
        <div className='sidebar-container'>
          {sidebarMenu.map(({ name, icon, link }) => <NavLink style={getActiveStyle} to={link}>
            <MenuItem
              key={name}
              name={name}
              icon={icon}
            />
          </NavLink>)}
        </div>
      </aside>
      <div className='sidebar-RHS'>
        {children}
      </div>
    </div>
  )
}

const MenuItem = ({ name, icon }) => {
  return (
    <div className='sidebar-menuItem'>
      <span>{icon}</span>
      <span>{name}</span>
    </div>
  )
}

export { Sidebar }