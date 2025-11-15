import { useRef } from 'react';
import { Box, Button, Container, Fade, Slide, Typography, useMediaQuery } from '@mui/material';

import backgroundMD from '../../../../assets/BackgroundV2.jpg';
import backgroundLG from '../../../../assets/BackgroundV4.png';
import { Link } from 'react-router-dom';



export const HeroSection = () => {

  const containerRef = useRef(null);

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
  
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: "100vh",
        backgroundImage: `url(${backgroundLG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',

        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Container 
        maxWidth='lg'
        sx={{ display: 'flex', overflow: 'hidden' }}
      >
        <Box
          sx={{
            maxWidth: { xs: '300px', lg: '600px'},
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <Fade in timeout={800}>
            <Typography variant={isMobile ? 'h5' : 'h3'} sx={{ fontWeight: 'bold', color: '#FFFFFF' }}>
              Protect Your Data with
            </Typography>
          </Fade>
          
          <Slide direction="right" in timeout={1000} container={containerRef.current} mountOnEnter>
            <Typography variant={isMobile ? 'h4' : 'h2'} sx={{ fontWeight: 'bold', color: '#F7CF13' }}>
              Philippine Data
            </Typography>
          </Slide>
          
          <Slide direction="right" in timeout={1200} container={containerRef.current} mountOnEnter>
            <Typography variant={isMobile ? 'h4' : 'h2'} sx={{ fontWeight: 'bold', color: '#F7CF13' }}>
              Guardians
            </Typography>
          </Slide>
          
          <Fade in timeout={1600}>
            <Typography 
              variant={isMobile ? 'subtitle2' : 'subtitle1'} 
              sx={{ color: '#FFFFFF', mt: 2 }}
            >
              Specialized data privacy and cybersecurity strategies for government agencies, SMEs, 
              and community organizations.
              Ensuring compliance, strengthening resilience, and building trust in the digital world.
            </Typography>
          </Fade>

          <Fade in timeout={1800}>
            <Box sx={{ display: 'flex', flexDirection: {xs: 'column', lg: 'row '}, gap: 2, mt: 4 }}>
              <Button 
                component={Link}
                to='/privacy-notice'
                variant='contained' 
                sx={{ 
                  backgroundColor: '#F7CF13', 
                  color: '#053261',
                  fontWeight: '600',
                  '&:hover': {
                    backgroundColor: '#e6c210'
                  }
                }}
              >
                Join Us Now
              </Button>
              <Button 
                variant='outlined' 
                sx={{ 
                  color: '#F7CF13',
                  borderColor: '#F7CF13',
                  fontWeight: '600',
                  '&:hover': {
                    borderColor: '#e6c210',
                    backgroundColor: 'rgba(247, 207, 19, 0.1)'
                  }
                }}
              >
                Report a Data Breach
              </Button>
            </Box>
          </Fade>


        </Box>
      </Container>
    </Box>
  )
}