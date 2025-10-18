import { useRef } from 'react';
import { Box, Container, Fade, Slide, Typography } from '@mui/material';
import BackgroundImage from '../../../../assets/heroSectionBG2.jpg';



export const HeroSection = () => {

  const containerRef = useRef(null);
  
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: "100vh",
        backgroundImage: `url(${BackgroundImage})`,
        
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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <Fade in timeout={800}>
            <Typography variant='h3' sx={{ fontWeight: 'bold', color: '#FFFFFF' }}>
              Protect Your Data with
            </Typography>
          </Fade>
          
          <Slide direction="right" in timeout={1000} container={containerRef.current} mountOnEnter>
            <Typography variant='h2' sx={{ fontWeight: 'bold', color: '#F7CF13' }}>
              Philippine Data
            </Typography>
          </Slide>
          
          <Slide direction="right" in timeout={1200} container={containerRef.current} mountOnEnter>
            <Typography variant='h2' sx={{ fontWeight: 'bold', color: '#F7CF13' }}>
              Guardians
            </Typography>
          </Slide>
          
          <Fade in timeout={1600}>
            <Typography variant='subtitle1' sx={{ color: '#FFFFFF', mt: 2, maxWidth: 600 }}>
              Specialized data privacy and cybersecurity strategies for government agencies, SMEs, and community organizations.
              Ensuring compliance, strengthening resilience, and building trust in the digital world.
            </Typography>
          </Fade>
        </Box>
      </Container>
    </Box>
  )
}