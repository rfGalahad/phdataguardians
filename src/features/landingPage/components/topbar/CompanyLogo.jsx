import { Box, Typography } from "@mui/material"

import Logo from '../../../../assets/pdgLogo.png';


export const CompanyLogo = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        cursor: 'pointer',
        gap: 2
      }}
      onClick={() => handleNavClick('home')}
    >
      <Box
        component="img"
        src={Logo}
        alt="Logo"
        sx={{ height: 32 }}
      />
      <Typography
        variant="h7"
        component="div"
        sx={{
          fontWeight: 'bold',
        }}
      >
        PHILIPPINE DATA <span style={{ color: "#F7CF13" }}>GUARDIANS</span>
      </Typography>
    </Box>
  )
}