import React from 'react'
// css
import './Sidebar.css'
// static file
import { sidebarMenu } from 'static/sidebar/sidebarMenu'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className='sidebar'>
      {sidebarMenu.map(menu => <MenuItem
        key={menu.name}
        name={menu.name}
        icon={menu.icon}
        link={menu.link}
      />)}
    </aside>
  )
}

const MenuItem = ({ name, icon, link }) => {
  const getActiveStyle = ({ isAvtive }) => ({
    fontWeight: isAvtive ? 500 : 400
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