import { Box, Typography } from '@mui/material';

import { LOGO_PDG_1 } from '@/constants/cloudinaryConstants';
import { getCloudinaryUrl } from '@/services/cloudinary';


export const CompanyLogo = () => {

  const Logo = getCloudinaryUrl(LOGO_PDG_1);
  
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 2
      }}
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