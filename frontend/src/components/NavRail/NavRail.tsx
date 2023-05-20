import { ReactNode } from 'react'
import { ReactComponent as Logo } from '../assets/logo-small.svg'
import { List } from '@material-tailwind/react'

interface NavRailProps {
  children: ReactNode
}

export const NavRail: React.FC<NavRailProps> = ({ children }) => (
  <List className="fixed h-[calc(100vh-2rem)] min-w-[5rem] p-4 text-center gap-6 hidden md:flex z-50">
    <Logo className="relative top-0 left-2.5 h-6"></Logo>
    {children}
  </List>
)
