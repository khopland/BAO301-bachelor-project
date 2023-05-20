import { ReactNode, useState } from 'react'
import { ReactComponent as Logo } from '../assets/logo-small.svg'
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  Navbar,
} from '@material-tailwind/react'
import { Link } from 'react-router-dom'

export const NavBar: React.FC = () => {
  const [openNav, setOpenNav] = useState(false)
  const openNavLeft = () => setOpenNav(true)
  const closeNavLeft = () => setOpenNav(false)
  return (
    <>
      <Navbar
        className="sticky inset-0 h-max max-w-full rounded-none p-2 md:hidden bg-background z-50"
        shadow={false}
      >
        <div className="flex items-center text-blue-gray-900">
          <IconButton
            className="md:hidden flex items-center gap-4 shadow-none bg-transparent hover:shadow-none text-on-primary-container hover:bg-gray-500 hover:bg-opacity-20 rounded-full"
            onClick={openNavLeft}
          >
            <i className="material-icons-round">menu</i>
          </IconButton>
          <Link to="/">
            <Logo className="h-5 ml-4 mb-2"></Logo>
          </Link>
        </div>
      </Navbar>
      <Drawer
        placement="left"
        open={openNav}
        onClose={closeNavLeft}
        className="md:hidden bg-surface overflow-y-auto rounded-tr-2xl rounded-br-2xl w-fit"
        overlayProps={{ className: 'md:hidden fixed' }}
      >
        <IconButton
          className="bg-transparent shadow-none text-on-primary-container p-3
          hover:shadow-none hover:bg-gray-500 hover:bg-opacity-20 rounded-full ml-3 mt-2.5"
          onClick={closeNavLeft}
        >
          <i className="material-icons-round text-2xl">menu_open</i>
        </IconButton>

        <List>
          <Link to="/" onClick={closeNavLeft}>
            <ListItem
              ripple={true}
              className="py-1 pr-1 pl-1 rounded-3xl text-on-primary-container font-semibold hover:bg-surface-variant active:bg-surface-variant"
            >
              <ListItemPrefix>
                <IconButton
                  variant="text"
                  className="text-on-primary-container hover:bg-transparent"
                >
                  <i className="material-icons-round">home</i>
                </IconButton>
              </ListItemPrefix>
              Home
            </ListItem>
          </Link>
          <Link to="/discover" onClick={closeNavLeft}>
            <ListItem
              ripple={true}
              className="py-1 pr-1 pl-1 rounded-3xl text-on-primary-container font-semibold hover:bg-surface-variant active:bg-surface-variant"
            >
              <ListItemPrefix>
                <IconButton
                  variant="text"
                  className="text-on-primary-container hover:bg-transparent"
                >
                  <i className="material-icons-round">search</i>
                </IconButton>
              </ListItemPrefix>
              Discover
            </ListItem>
          </Link>
          <Link to="/profile" onClick={closeNavLeft}>
            <ListItem
              ripple={true}
              className="py-1 pr-1 pl-1 rounded-3xl text-on-primary-container font-semibold hover:bg-surface-variant active:bg-surface-variant"
            >
              <ListItemPrefix>
                <IconButton
                  variant="text"
                  className="text-on-primary-container hover:bg-transparent"
                >
                  <i className="material-icons-round">account_circle</i>
                </IconButton>
              </ListItemPrefix>
              Profile
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </>
  )
}
