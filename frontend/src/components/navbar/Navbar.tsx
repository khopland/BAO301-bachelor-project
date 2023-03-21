import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/AccountCircle'

import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

export function NavBar(props: { children: React.ReactNode }) {
  const navigate = useNavigate()

  const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <>
      {isMobile ? (
        <>
          <div className=" bg-white">
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
          </div>
          <div className="grow">{props.children}</div>
        </>
      ) : (
        <div className="flex flex-row">
          <div className=" bg-white w-20 h-screen">
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
          </div>
          <div className="grow">{props.children}</div>
        </div>
      )}
    </>
  )
}
