import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/AccountCircle'
import Drawer from '@mui/material/Drawer'

import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

export function NavBar(props: {}) {
  const navigate = useNavigate()

  const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <>
      {isMobile ? (
        <>
          <Drawer variant="permanent" anchor="top">
            <List className="w-screen flex justify-between h-16">
              <ListItem>
                <ListItemButton className="flex flex-col">
                  <MenuIcon
                  // When I click on the menu icon, I want the menu to open
                  />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  className="flex flex-col"
                  onClick={(_) => navigate('/')}
                >
                  <HomeIcon />
               
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  className="flex flex-col"
                  onClick={(_) => navigate('/hi')}
                >
                  <SearchIcon />
                  <ListItemText></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  className="flex flex-col"
                  onClick={(_) => navigate('/hi2')}
                >
                  <PersonIcon />
                  
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
        </>
      ) : (
        <Drawer variant="permanent">
          <List className="w-20">
            <ListItem>
              <ListItemButton className="flex flex-col">
                <MenuIcon />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                className="flex flex-col"
                onClick={(_) => navigate('/')}
              >
                <HomeIcon />
                
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                className="flex flex-col"
                onClick={(_) => navigate('/hi')}
              >
                <SearchIcon />
                <ListItemText>discover</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                className="flex flex-col"
                onClick={(_) => navigate('/hi2')}
              >
                <PersonIcon />
                <ListItemText>profile</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      )}
    </>
  )
}
