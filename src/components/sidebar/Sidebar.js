import React from 'react'
// css
import './Sidebar.css'
// static file
import { sidebarMenu } from 'static/sidebar/sidebarMenu'
import { NavLink } from 'react-router-dom'

function Sidebar({ children, isSidearVisible }) {
  return (
    <div className="sidebar-HOC">
      <aside className={`sidebar ${!isSidearVisible ? 'sidebar-inactive' : 'sidebar-active'}`}>
        {sidebarMenu.map(({ name, icon, link }) => <MenuItem
          key={name}
          name={name}
          icon={icon}
          link={link}
        />)}
      </aside>
      <div className='sidebar-RHS'>
        {children}
      </div>
    </div>
  )
}

const MenuItem = ({ name, icon, link }) => {
  const getActiveStyle = ({ isAvtive }) => ({
    fontWeight: isAvtive ? 700 : 400
  })
  return (
    <div className='sidebar-menuItem'>
      <NavLink style={getActiveStyle} to={link}>
        <div>
          <span>{icon}</span>
          <span>{name}</span>
        </div>
      </NavLink>
    </div>
  )
}

export { Sidebar }