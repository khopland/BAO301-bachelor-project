import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavRail } from './components/NavRail/NavRail';
import { NavItem } from './components/NavRail/NavItem';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { ProfilePage } from './pages/ProfilePage';
import CoursePage from './pages/CoursePage';

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
      <Route path="/course" element={<CoursePage />} />
    </Routes>
  </BrowserRouter>
);

export default App
