import { Launch, TaskAlt as TaskAltIcon } from '@mui/icons-material';
import { Box, Button, Typography, Pagination, Fade, Slide, Grow, Container, useMediaQuery } from '@mui/material';

import { useAbout } from '../../hooks/useAbout';
import { useAnimation } from '../../hooks/useAnimation';

import image1 from '../../../../assets/image1.jpeg';
import image2 from '../../../../assets/image2.jpeg';




export const About = () => {

  const images = [image1, image2];

  const { 
    isVisible, 
    sectionRef 
  } = useAnimation({ threshold: 0.1 });

  const { 
    currentIndex, 
    items, 
    handlePageChange 
  } = useAbout(images);

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('xs'));

  

  return (
    <Container
      maxWidth='lg'
      ref={sectionRef}
      sx={{
        mt: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4
      }}
    >
      {/* Images */}
      <Slide direction='right' in={isVisible} timeout={800}>
        <Box sx={{ flex: 1, position: 'relative' }}>
          <Box
            component='img'
            src={images[currentIndex]}
            sx={{ width: '100%', borderRadius: 2 }}
          />

          {/* Pagination Dots */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 2,
            }}
          >
            <Pagination
              count={images.length}
              page={currentIndex + 1}
              onChange={handlePageChange}
              size='small'
              color='primary'
              sx={{ '& .MuiPaginationItem-root': { color: 'white' } }}
            />
          </Box>
        </Box>
      </Slide>

      {/* About Us */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4, color: 'white' }}>
        <Fade in={isVisible} timeout={1000}>
          <Box>
            <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: '#F7CF13', mb: 3, textAlign: {xs: 'center', sm: 'left'} }}>
              About Us
            </Typography>
            <Typography variant='subtitle1' sx={{ fontWeight: 'semi-bold', textAlign: 'justify', mb: 2 }}>
              At <span style={{ color: '#F7CF13', fontWeight: '600'}}>Philippine Data Guardians</span>, we specialize in delivering tailored data privacy and cybersecurity 
              strategies designed to meet the unique needs of government agencies, SMEs, and community organizations.
            </Typography>
            <Typography variant='subtitle1' sx={{ fontWeight: 'semi-bold', textAlign: 'justify' }}>
              Leveraging deep expertise in local regulations and global best practices, we help organizations achieve 
              compliance, strengthen resilience, and build trust in an increasingly digital world. Our mission is simple: 
              to protect your data, ensure regulatory compliance, and empower you to operate securely and confidently.
            </Typography>
          </Box>
        </Fade>

        <Box>
          {items.map((item, index) => (
            <Grow
              key={index}
              in={isVisible}
              timeout={1200 + (index * 150)}
              style={{ transformOrigin: '0 0 0' }}
            >
              <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                <TaskAltIcon sx={{ color: '#F7CF13'}}/>
                <Typography>
                  {item}
                </Typography>
              </Box>
            </Grow>
          ))}
        </Box>
        
        <Fade in={isVisible} timeout={2000}>
          <Button 
            variant='outlined' 
            sx={{ color: '#F7CF13', borderColor: '#F7CF13'}}
            onClick={() => window.open('https://www.facebook.com/profile.php?id=61578893785140', '_blank')}
          >
            Visit our Facebook Page 
            <Launch sx={{ ml: 1, fontSize: 16, color: '#F7CF13' }}/>
          </Button>
        </Fade>
      </Box>
    </Container>
  );
};