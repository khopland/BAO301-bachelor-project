import React from 'react'
import { NavLink, useMatch } from 'react-router-dom'
import { ListItem, ListItemPrefix } from '@material-tailwind/react'
interface NavItemProps {
  icon: string
  label: string
  route: string
}

export const NavItem: React.FC<NavItemProps> = ({ icon, label, route }) => {
  const isActive = useMatch(route)
  return (
    <NavLink to={route}>
      <ListItem
        className={`flex flex-col w-14 rounded-3xl py-1.5
        hover:bg-gray-200 hover:bg-opacity-80 hover:bg-surface-variant
        focus:bg-secondary-container focus:text-blue-gray-900
        active:bg-secondary-container active:bg-opacity-100 active:text-on-surface-variant
        ${isActive ? 'bg-secondary-container text-on-surface-variant' : ''}`}
      >
        <ListItemPrefix className="m-0">
          <span className="material-icons-round">{icon}</span>
        </ListItemPrefix>
      </ListItem>
      <p className={`text-xs mt-1 ${isActive ? 'text-inverse-variant' : ''}`}>
        {label}
      </p>
    </NavLink>
  )
}
