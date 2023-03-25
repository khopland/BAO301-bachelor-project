import { ReactNode } from 'react';
import { ReactComponent as Logo } from '../common/logo-small.svg';

interface NavRailProps {
  children: ReactNode;
}

export const NavRail: React.FC<NavRailProps> = ({ children }) => (
  <>
    <nav className='left'>
      <Logo className='p-4'></Logo>
      {children}
    </nav>
  </>
);