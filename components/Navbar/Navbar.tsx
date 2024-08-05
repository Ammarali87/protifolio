'use client';

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const drawerWidth = 240;
const navItems = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
];

function Navbar(props: { window?: () => Window }) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Amar Ali
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link href={item.path} key={item.name} className={pathname === item.path ? 'active' : ''}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', backgroundColor: "#1A202C" ,paddingTop:"8px" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#003888', height: '70px' }}>
        <Toolbar sx={{ minHeight: '70px', px: { xs: 1, sm: 2 }, justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' }, mx: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/" passHref>
              <img src="amar.png" alt="Logo" style={{ height: '50px', cursor: 'pointer' }} />
            </Link>
          </Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
           <span className='ms-8 lg:ms-[76px] lg:text-3xl '>  Amar Ali</span>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'right' }}>
            {navItems.map((item) => (
              <Link href={item.path} key={item.name} className={pathname === item.path ? 'active p-3 rounded-md' : ''}>
                <Button sx={{ color: '#fff' }}>{item.name}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
