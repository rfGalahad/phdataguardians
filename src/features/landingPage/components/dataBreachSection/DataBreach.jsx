import { Link } from 'react-router-dom';

import { Box, Button, Container, Typography } from '@mui/material';

import { DATA_BREACH_DASHBOARD_PREVIEW } from '@/constants/cloudinaryConstants';
import { useAnimation } from '@/hooks/useAnimation';
import { getCloudinaryUrl } from '@/services/cloudinary';


export const DataBreach = ({ id, isMobile }) => {

  const {  
    animate,
    sectionRef 
  } = useAnimation({ threshold: 0.1 });

  const DashboardPreviewImage = getCloudinaryUrl(DATA_BREACH_DASHBOARD_PREVIEW)

  return (
    <Container
      id={id}
      maxWidth='lg'
      ref={sectionRef}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 6,
      }}
    >
      {/* HEADING */}
      <Box 
        sx={{ 
          width: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          color: 'white',
          ...animate(300)
        }}
      >
        <Typography
          variant= {isMobile ? 'h5' : 'h4'} 
          sx={{ fontWeight: 'bold', color: '#F7CF13', mb: 2, textAlign: 'center' }}
        >
          Report and Track Data Breaches
        </Typography>
        <Typography variant='subtitle2' sx={{ fontWeight: 'semi-bold', textAlign: {xs: 'center', md: 'justify'}, mb: 2 }}>
          A secure and transparent platform designed to help individuals and organizations report, monitor, 
          and resolve data breaches efficiently.
        </Typography>
        <Button 
          component={Link}
          to='/data-breach-report'
          variant='contained' 
          sx={{ 
            fontWeight: 600, 
            color: '#053261', 
            backgroundColor: '#F7CF13'
          }}
        >
          Report a Data Breach 
        </Button>
      </Box>

      {/* IMAGE */}
      <Box
        component='img'
        src={DashboardPreviewImage}
        sx={{ 
          height: '100%', 
          borderRadius: 2, 
          boxShadow: '0px 12px 32px rgba(0, 0, 0, 0.4)' ,
          ...animate(600)
        }}
      />
    </Container>
  );
};