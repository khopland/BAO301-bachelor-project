import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Components from './Components'
import { NavBar } from './components/navbar/Navbar'

const theme = createTheme({
  palette: {
    primary: {
      main: '#7500c0',
      light: '#a100ff',
      dark: '#460073',
    },
    secondary: {
      main: '#a055f5',
      light: '#be82ff',
      dark: '#b455aa',
    },
    error: {
      main: '#ff3246',
    },
    warning: {
      main: '#ff7800',
    },
    info: {
      main: '#0041f0',
    },
    success: {
      main: '#64ff50',
    },
  },
})

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route
            path="/hi"
            element={
              <div className="flex items-center justify-center h-screen">
                {' '}
                hello
              </div>
            }
          />
          <Route path="/hi2" element={<Components />} />
          <Route
            path="/"
            element={
              <div className="flex items-center justify-center h-screen">
                main page
              </div>
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
