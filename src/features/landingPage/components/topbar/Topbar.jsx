import { useEffect,useState } from 'react';

import { 
  Close as CloseIcon,
  Menu as MenuIcon 
} from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { CompanyLogo } from './CompanyLogo';


const NAV_ITEMS = [
  { label: 'Home', id: 'home', icon: '⌂' },
  { label: 'About', id: 'about', icon: '◎' },
  { label: 'Membership', id: 'membership', icon: '◈' },
  { label: 'Services', id: 'services', icon: '◇' },
  { label: 'Data Breach Report', id: 'data-breach', icon: '⚑' },
  { label: 'Contact', id: 'contact', icon: '✉' },
  { label: 'Articles', id: 'articles', icon: '⊞' },
  { label: 'Infographics', id: 'infographics', icon: '◉' },
];

export const Topbar = ({ isScrolled }) => {
  
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleNavClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveSection(section);
    setDrawerOpen(false);
  };

  // Close drawer on resize to desktop
  useEffect(() => {
    if (!isMobile) setDrawerOpen(false);
  }, [isMobile]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: isScrolled ? 'primary.main' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(247, 207, 19, 0.15)' : 'none',
          transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease',
        }}
      >
        <Container sx={{ py: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CompanyLogo />

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  sx={{
                    color: activeSection === item.id ? 'secondary.main' : '#c8c8c8',
                    textTransform: 'none',
                    fontSize: '13.5px',
                    fontWeight: activeSection === item.id ? 600 : 400,
                    letterSpacing: '0.02em',
                    position: 'relative',
                    px: 1.5,
                    py: 1,
                    borderRadius: '6px',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 4,
                      left: '50%',
                      transform: activeSection === item.id ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                      transformOrigin: 'center',
                      width: '60%',
                      height: '1.5px',
                      backgroundColor: 'secondary.main',
                      transition: 'transform 0.2s ease',
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(247, 207, 19, 0.06)',
                      color: 'secondary.main',
                      '&::after': {
                        transform: 'translateX(-50%) scaleX(1)',
                      },
                    },
                    transition: 'color 0.2s ease, background-color 0.2s ease',
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              sx={{
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                p: '6px',
                transition: 'border-color 0.2s, background 0.2s',
                '&:hover': {
                  borderColor: 'secondary.main',
                  backgroundColor: 'rgba(247, 207, 19, 0.08)',
                },
              }}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
          )}
        </Container>
      </AppBar>

      {/* Full-screen Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        disableScrollLock
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '100vw',
            backgroundColor: 'primary.dark',
            borderLeft: 'none',
            display: 'flex',
            flexDirection: 'column',
            overflowX: 'hidden',
          },
        }}
        SlideProps={{
          timeout: { enter: 320, exit: 240 },
        }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 3,
            py: 2,
            borderBottom: '1px solid rgba(247, 207, 19, 0.1)',
          }}
        >
          <CompanyLogo />
          <IconButton
            onClick={() => setDrawerOpen(false)}
            aria-label="Close navigation menu"
            sx={{
              color: '#aaa',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '8px',
              p: '6px',
              '&:hover': {
                color: 'secondary.main',
                borderColor: 'secondary.main',
                backgroundColor: 'rgba(247, 207, 19, 0.08)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Nav Items */}
        <List
          sx={{
            flex: 1,
            px: 2,
            py: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 0.5,
          }}
        >
          {NAV_ITEMS.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <ListItemButton
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                sx={{
                  borderRadius: '10px',
                  px: 2.5,
                  py: 1.75,
                  position: 'relative',
                  overflow: 'hidden',
                  animation: drawerOpen ? `slideIn 0.3s ease ${index * 0.04}s both` : 'none',
                  '@keyframes slideIn': {
                    from: { opacity: 0, transform: 'translateX(20px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                  },
                  transition: 'background-color 0.2s, border-color 0.2s',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                  <Typography
                    sx={{
                      fontSize: '15px',
                      color: isActive ? 'secondary.main' : 'rgba(160, 160, 180, 0.7)',
                      width: '20px',
                      textAlign: 'center',
                      lineHeight: 1,
                    }}
                  >
                    {item.icon}
                  </Typography>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      sx: {
                        fontSize: '15px',
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? 'secondary.main' : '#d0d0d8',
                        letterSpacing: '0.01em',
                      },
                    }}
                  />
                  {isActive && (
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: 'secondary.main',
                        ml: 'auto',
                        flexShrink: 0,
                      }}
                    />
                  )}
                </Box>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};