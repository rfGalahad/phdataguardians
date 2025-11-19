import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";

import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";



export const DashboardLayout = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const containerStyle = isMobile 
  ? {
      display: 'grid',
      gridTemplateAreas: `
        'topbar'
        'main'
      `,
      gridTemplateRows: 'auto 1fr',
      gridTemplateColumns: '1fr',
      height: '100vh'
    }
  : {
      display: 'grid',
      gridTemplateAreas: `
        'sidebar topbar'
        'sidebar main'
      `,
      gridTemplateRows: 'auto 1fr',
      gridTemplateColumns: `auto 1fr`,
      height: '100vh'
    };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={containerStyle}>
      <Topbar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box 
        sx={{ 
          gridArea: 'main',
          background: '#F7F9FC'
        }}
      >
        <Outlet/>
      </Box>
    </Box>
  );
}
