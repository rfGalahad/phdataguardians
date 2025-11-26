import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Container
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

import { CompanyLogo } from './CompanyLogo';


export const Topbar = ({ isScrolled }) => {

  const [anchorEl, setAnchorEl] = useState(null);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const handleNavClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    handleMenuClose();
  };
  
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Membership', id: 'membership' },
    { label: 'Services', id: 'services' },
    { label: 'Data Breach Report', id: 'report' },
    { label: 'Contact', id: 'contact' }
  ];
  
  return (
    <AppBar 
      position='sticky' 
      elevation={isScrolled ? 2 : 0}
      sx={{ 
        backgroundColor: isScrolled ? '#053261' : 'transparent',
        backdropFilter: isScrolled ? 'blur(6px)' : 'none',
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
        boxShadow: isScrolled ? 2 : 'none',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Company Logo */}
          <CompanyLogo />

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  sx={{
                    color: '#e0e0e0',
                    fontWeight: 500,
                    textTransform: 'none',
                    fontSize: '14px',
                    '&:hover': { 
                      borderBottom: '2px solid #F7CF13',
                      backgroundColor: 'transparent',
                      borderRadius: 0,
                      color: '#F7CF13'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <>
              <IconButton
                size="large"
                edge="end"
                onClick={handleMenuOpen}
                sx={{ color: '#ffffff' }}
              >
                <MenuIcon />
              </IconButton>
              
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{
                  '& .MuiPaper-root': {
                    borderRadius: 2,
                    mt: 1,
                    minWidth: 200,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }
                }}
              >
                {navItems.map((item) => (
                  <MenuItem
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    sx={{
                      py: 1.5,
                      px: 3,
                      fontSize: '16px',
                      '&:hover': {
                        backgroundColor: '#f5f5f5',
                        color: '#1976d2'
                      }
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
