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
  Tooltip
} from '@mui/material';
import { 
  Dashboard, 
  Person,
  HourglassEmpty
} from '@mui/icons-material';

import pdgLogo from '../../assets/pdgLogo-Dashboard.png';
import collapsedLogo from '../../assets/pdgLogo.png';

const navItems = [
  { text: 'Dashboard', icon: <Dashboard />, path: '/admin/dashboard' },
  { text: 'Pending Members', icon: <HourglassEmpty />, path: '/admin/managePendingMembers' },
  { text: 'PDG Members', icon: <Person />, path: '/admin/manageMembers' }
];

export const Sidebar = ({ mobileOpen, handleDrawerToggle, isMobile }) => {

  const { pathname } = useLocation(); 

  const collapsed = mobileOpen && !isMobile;


  const drawerContent = (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
        <Box
          component="img"
          src={collapsed ? collapsedLogo : pdgLogo}
          alt="PDG Logo"
          height={collapsed ? 32 : 64}
        />
      </Box>

      <List>
        {navItems.map((item) => (
          <Tooltip key={item.text} title={item.text}>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                selected={pathname === item.path}
                sx={{
                  "&:hover": {
                    backgroundColor: "#133B65",
                  },
                  "&.Mui-selected": {
                    borderLeft: collapsed ? 'none' : '5px solid #F7CF13',
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

                {!collapsed && <ListItemText primary={item.text}/>}
              </ListItemButton>
            </ListItem>
          </Tooltip>
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
            width: collapsed ? 60 : 256, 
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
