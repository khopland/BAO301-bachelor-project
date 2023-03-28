import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavRail } from './components/NavRail/NavRail'
import { NavItem } from './components/NavRail/NavItem'
import { HomePage } from './pages/HomePage'
import { DiscoverPage } from './pages/DiscoverPage'
import { ProfilePage } from './pages/ProfilePage'
import CoursePage from './pages/CoursePage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

const App: React.FC = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools/>
    </QueryClientProvider>
  </BrowserRouter>
)

export default App
