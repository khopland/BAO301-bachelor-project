import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Hero } from './components/Hero/Hero'
import { NavRail } from './components/NavRail/NavRail';
import { NavItem } from './components/NavRail/NavItem';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { ProfilePage } from './pages/ProfilePage';

const App: React.FC = () => (    
  <BrowserRouter>
    <NavRail>
      <NavItem icon="home" label="Home" route="/" />
      <NavItem icon="search" label="Explore" route="/explore" />
      <NavItem icon="account_circle" label="Profile" route="/profile" />
    </NavRail>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  </BrowserRouter>
);

export default App
