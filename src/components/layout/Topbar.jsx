import { AppBar, Toolbar, IconButton, Typography, Avatar, Box, useMediaQuery } from "@mui/material";
import { Menu, ArrowDropDown } from "@mui/icons-material";



export const Topbar = ({ handleDrawerToggle }) => {

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

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
      <Toolbar sx={{ justifyContent: {xs: 'space-between', md: 'flex-end'} }}>
        {/* MENU - Mobile */}
        { isMobile && (
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ color: '#0B2A4B' }}
          >
            <Menu/>
          </IconButton>
        )}

        {/* USER INFO */}
        <Box sx={{ justifyContent: '', display: 'flex', gap: 2, alignItems: 'center '}}>
          {!isMobile && (
            <Box>
              <Typography variant='subtitle1' fontWeight={600} color='#0B2A4B' lineHeight={1.2}>
                Ruther Solloso
              </Typography>
              <Typography variant='subtitle2' color='#404040'>
                company@email.com
              </Typography>
            </Box>
          )}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ color: '#404040' }}
          >
            <ArrowDropDown/>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
