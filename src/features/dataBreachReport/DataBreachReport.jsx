import { Box, Typography } from '@mui/material';
import { Construction } from '@mui/icons-material';

import BackgroundImage from '../../assets/pdgBG.png';



export const DataBreachReport = () => {
  
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: { xs: "scroll", md: "fixed" },

        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Construction sx={{ fontSize: 80, mb: 2, color: '#F7CF13' }} />
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: 'white' }}>
        This page is under development
      </Typography>
      <Typography variant="body1" color='gray'>
        We're working hard to bring this feature to you soon.
      </Typography>
    </Box>
  );
};
