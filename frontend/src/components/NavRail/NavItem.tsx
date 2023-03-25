import React from 'react';
import { NavLink } from 'react-router-dom';
import 'beercss';

interface NavItemProps {
  icon: string;
  label: string;
  route: string;
}

export const NavItem: React.FC<NavItemProps> = ({ icon, label, route }) => {
  return (
    <>
    <NavLink
      to={route}
      className={({ isActive }) => `${ isActive ? 'active' : 'text-current'} relative group`}>
        <i className='text-transparent wave h-7'>{icon}</i>
        <i className='bg-transparent absolute top-[1px] left-50 transform transition-transform group-hover:scale-[105%]'>{icon}</i>
        <span className='font-medium'>{label}</span>
    </NavLink>
    </>
  );
};