import { useState } from 'react';
import { Link } from "react-router-dom";
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
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Membership', id: 'membership' },
    { label: 'Contact', id: 'contact' }
  ];
  
  return (
    <AppBar 
      position='sticky' 
      elevation={isScrolled ? 2 : 0}
      sx={{ 
        backgroundColor: isScrolled ? '#053261' :'transparent',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
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
                      borderRadius: 0
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
              
              {/* Get Started Button */}
              <Button
                variant='contained'
                component={Link}
                to='/privacy-notice'
                sx={{
                  borderRadius: 1,
                  backgroundColor: '#F7CF13',
                  color: '#053261',
                  fontWeight: 600,
                  ml: 2
                }}
              >
                Get Started
              </Button>
            </Box>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <>
              <IconButton
                size="large"
                edge="end"
                onClick={handleMenuOpen}
                sx={{ color: '#333' }}
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
                
                <MenuItem
                  onClick={() => handleNavClick('get-started')}
                  sx={{
                    py: 1.5,
                    px: 3,
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#1976d2',
                    '&:hover': {
                      backgroundColor: '#e3f2fd'
                    }
                  }}
                >
                  Get Started
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
