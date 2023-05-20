import { ThemeProvider } from '@material-tailwind/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserProvider } from './UserContext'
import { NavBar } from './components/NavBar/NavBar'
import { NavItem } from './components/NavRail/NavItem'
import { NavRail } from './components/NavRail/NavRail'
import CoursePage from './pages/CoursePage'
import { DiscoverPage } from './pages/DiscoverPage'
import { HomePage } from './pages/Home/HomePage'
import { NewCourse } from './pages/NewCoursePage'
import { ProfilePage } from './pages/ProfilePage'

const queryClient = new QueryClient()

const App: React.FC = () => (
  <ThemeProvider>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <NavBar />
          <NavRail>
            <NavItem icon="home" label="Home" route="/" />
            <NavItem icon="search" label="Discover" route="/discover" />
            <NavItem icon="account_circle" label="Profile" route="/profile" />
            <NavItem icon="admin_panel_settings" label="Admin" route="/course" />

          </NavRail>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/course" element={<NewCourse />} />
            <Route path="/course/:courseId" element={<CoursePage />} />
          </Routes>
        </UserProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </ThemeProvider>
)

export default App
