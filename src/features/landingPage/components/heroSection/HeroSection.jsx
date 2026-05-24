import { Link } from 'react-router-dom';

import { Box, Button, Container, Stack, Typography } from '@mui/material';

import { HERO_BACKGROUND } from '@/constants/cloudinaryConstants';
import { useAnimation } from '@/hooks/useAnimation';
import { getCloudinaryUrl } from '@/services/cloudinary';

export const HeroSection = ({ id, isMobile }) => {

  const {  
    sectionRef,
    animate
  } = useAnimation({ threshold: 0.3, triggerOnce: true });

  const backgroundImage = getCloudinaryUrl(HERO_BACKGROUND)

  return (
    <Box
      id={id}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        scrollMarginTop: '64px',
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ display: 'flex', ...animate(300) }}
      >
        <Box
          ref={sectionRef}
          sx={{
            maxWidth: '550px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant='h4'
            sx={{ fontWeight: 'bold', color: 'background.paper' }}
          >
            Protect Your Data with
          </Typography>

          <Typography
            variant={isMobile ? 'h3' : 'h2'}
            sx={{
              fontWeight: 'bold',
              color: 'secondary.main',
            }}
          >
            Philippine Data
          </Typography>

          <Typography
            variant={isMobile ? 'h3' : 'h2'}
            sx={{
              fontWeight: 'bold',
              color: 'secondary.main',
            }}
          >
            Guardians
          </Typography>

          <Typography
            variant={isMobile ? 'subtitle2' : 'subtitle1'}
            sx={{
              color: 'background.paper',
              mt: 2,
              textAlign: 'justify',
            }}
          >
            Specialized data privacy and cybersecurity strategies for government agencies, SMEs,
            and community organizations. Ensuring compliance, strengthening resilience, and
            building trust in the digital world.
          </Typography>

          <Stack
            gap={2} mt={4}
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Button
              component={Link}
              to="/privacy-notice"
              variant="contained"
              sx={{
                backgroundColor: 'secondary.main',
                color: 'primary.main',
                fontWeight: '600',
              }}
            >
              Join Us Now
            </Button>
            <Button
              component={Link}
              to="/data-breach-report"
              variant="outlined"
              sx={{
                color: 'secondary.main',
                borderColor: 'secondary.main',
              }}
            >
              Report a Data Breach
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};