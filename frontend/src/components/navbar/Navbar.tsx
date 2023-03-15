import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/AccountCircle'
import Drawer from '@mui/material/Drawer'
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export function NavBar(props: {}) {
  const navigate = useNavigate()

  return (
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
            <ListItemText>home</ListItemText>
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
  )
}
