import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavRail } from './components/NavRail/NavRail'
import { NavItem } from './components/NavRail/NavItem'
import { NavBar } from './components/NavBar/NavBar'
import { HomePage } from './pages/Home/HomePage'
import { DiscoverPage } from './pages/DiscoverPage'
import { ProfilePage } from './pages/Profile/ProfilePage'
import CoursePage from './pages/CoursePage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { UserProvider } from './UserContext'
import { NewCourse } from './pages/NewCoursePage'
import { ThemeProvider } from '@material-tailwind/react'
import Footer from './components/Common/Footer'

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
          </NavRail>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/course/:courseId" element={<CoursePage />} />
          </Routes>
          <Footer />
        </UserProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </ThemeProvider>
)

export default App
