import { Box, Button, Typography, Fade, useMediaQuery, Container } from '@mui/material';

import { useAnimation } from '../../hooks/useAnimation';

import DashboardPreviewImage from '../../../../assets/DashboardPreview.png';



export const DataBreach = () => {

  const { 
    isVisible, 
    sectionRef 
  } = useAnimation({ threshold: 0.1 });

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
  


  return (
    <Container
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
      <Fade in={isVisible} timeout={1000}>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
          <Typography 
            variant= {isMobile ? 'h4' : 'h3'} 
            sx={{ fontWeight: 'bold', color: '#F7CF13', mb: 2, textAlign: 'center' }}
          >
            Report and Track Data Breaches
          </Typography>
          <Typography variant='subtitle1' sx={{ fontWeight: 'semi-bold', textAlign: 'justify', mb: 2 }}>
            A secure and transparent platform designed to help individuals and organizations report, monitor, 
            and resolve data breaches efficiently.
          </Typography>
          <Button variant='contained' sx={{ fontWeight: 600, color: '#053261', backgroundColor: '#F7CF13'}}>
            Report a Data Breach 
          </Button>
        </Box>
      </Fade>

      {/* IMAGE */}
      <Fade in={isVisible} timeout={800}>
        <Box
          component='img'
          src={DashboardPreviewImage}
          sx={{ height: '100%', borderRadius: 2, boxShadow: '0px 12px 32px rgba(0, 0, 0, 0.4)', }}
        />
      </Fade>
    </Container>
  );
};