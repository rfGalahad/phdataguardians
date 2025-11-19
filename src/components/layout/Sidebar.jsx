import { Link, useLocation } from 'react-router-dom';

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  IconButton,
} from '@mui/material';

import { 
  Dashboard, 
  PrivacyTip, 
  Assignment,
  Settings, 
  Person,
  Badge
} from '@mui/icons-material';

import pdgLogo from '../../assets/pdgLogo-Dashboard.png';


const navItems = [
  { text: 'Dashboard', icon: <Dashboard />, path: '/dashboard' },
  { text: 'ID Generator', icon: <Badge />, path: '/dashboard/settings' },
  { text: 'Manage Reports', icon: <Assignment />, path: '/dashboard/settings' },
  { text: 'Manage Accounts', icon: <Person />, path: '/dashboard/settings' },
  { text: 'Manage Settings', icon: <Settings />, path: '/dashboard/settings' },
  { text: 'Data Breach Report', icon: <PrivacyTip />, path: '/dashboard/analytics' },
  { text: 'Reports', icon: <Assignment />, path: '/dashboard/settings' },
];



export const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {

  const { pathname } = useLocation(); 

  const drawerContent = (
    <Box>
      <Toolbar sx={{ justifyContent: 'space-between', p: 2 }}>
        <Box
          component="img"
          src={pdgLogo}
          alt="PDG Logo"
          height={64}
        />
      </Toolbar>


      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              selected={pathname === item.path}
              sx={{
                "&:hover": {
                  backgroundColor: "#133B65",
                },
                "&.Mui-selected": {
                  borderLeft: '5px solid #F7CF13',
                  backgroundColor: "#0A4179",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#133B65",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: pathname === item.path ? "#F7CF13" : "white"
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText primary={item.text}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* MOBILE & TABLET */}
      <Drawer
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          gridArea: 'sidebar',
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            width: 256,
            backgroundColor: '#0B2A4B', 
            color: 'white'
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* DESKTOP */}
      <Drawer
        variant='permanent'
        sx={{
          gridArea: 'sidebar',
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { 
            position: 'relative',
            width: 256, 
            boxSizing: 'border-box',
            backgroundColor: '#0B2A4B', 
            color: 'white'
          }
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
