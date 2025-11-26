import { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box, useMediaQuery } from "@mui/material";
import { 
  Menu as MenuIcon, 
  ArrowDropDown as ArrowDropDownIcon
} from "@mui/icons-material";

import { supabase } from '../../services/supabaseClient';
import { useNavigate } from 'react-router-dom';



export const Topbar = ({ handleDrawerToggle }) => {

  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error.message);
    } else {
      navigate("/admin/login"); // redirect back to login
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    // Listen for auth changes
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.subscription.unsubscribe();
  }, []);

  

  return (
    <AppBar
      position='static'
      elevation={0}
      sx={{
        gridArea: 'topbar',
        height: 64,
        backgroundColor: '#F7F9FC', 
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #BFBFBF'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* TOGGLE SIDEBAR */}
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: '#0B2A4B' }}
        >
          <MenuIcon/>
        </IconButton>

        {/* USER INFO */}
        <Box sx={{ justifyContent: '', display: 'flex', gap: 2, alignItems: 'center '}}>
          {!isMobile && (
            <Box>
              <Typography variant='subtitle1' fontWeight={600} color='#0B2A4B' lineHeight={1.2}>
                Admin
              </Typography>
              <Typography variant='subtitle2' color='#404040'>
                {user?.email}
              </Typography>
            </Box>
          )}
          <IconButton
            onClick={(e) => setAnchorEl(e.currentTarget)}
            sx={{ color: '#404040' }}
          >
            <ArrowDropDownIcon/>
          </IconButton>
        </Box>

        {/* DROPDOWN MENU */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
