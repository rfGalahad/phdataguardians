import { Box, Container, Typography } from '@mui/material';

import { DATA_BREACH_DASHBOARD_PREVIEW } from '@/constants/cloudinaryConstants';
import { useAnimation } from '@/hooks/useAnimation';
import { getCloudinaryUrl } from '@/services/cloudinary';


export const DataBreachSection = ({ id }) => {

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
        gap: 3,
        mt: 12
      }}
    >
      {/* HEADING */}
      <Box 
        sx={{ 
          width: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: 1,
          color: 'white',
          ...animate(300)
        }}
      >
        {/* Main heading */}
        <Typography
          variant= 'h4' 
          sx={{ 
            fontsize: { xs: '1.5rem', md: '2.125rem' },
            fontWeight: 'bold', 
            color: 'secondary.main',  
            textAlign: 'center' 
          }}
        >
          Report and {' '}
          <Box component="span" sx={{ color: 'secondary.main' }}>
            Track Data Breaches
          </Box>
        </Typography>

        {/* Sub heading */}
        <Typography 
          variant='body1' 
          sx={{ 
            fontSize: { xs: '0.875rem', md: '1rem' }, 
            textAlign: 'center' 
          }}
        >
          A secure and transparent platform designed to help individuals and organizations report, monitor, 
          and resolve data breaches efficiently.
        </Typography>
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