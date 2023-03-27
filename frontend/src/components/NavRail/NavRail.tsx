import { ReactNode } from 'react'
import { ReactComponent as Logo } from '../assets/logo-small.svg'

interface NavRailProps {
  children: ReactNode
}

export const NavRail: React.FC<NavRailProps> = ({ children }) => (
  <>
    <nav className="left bg-transparent">
      <Logo className="w-7 my-5"></Logo>
      {children}
    </nav>
  </>
)
