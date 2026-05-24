import { Box, Container, Typography } from '@mui/material';

import { useAnimation } from '@/hooks/useAnimation';

import { FacebookBanner } from './FacebookBanner';
import { FeatureCards } from './FeatureCards';



export const AboutSection = ({ id }) => {

  const {
    sectionRef,
    animate
  } = useAnimation({ threshold: 0.1 });

  return (
    <Container
      id={id}
      maxWidth='lg'
      ref={sectionRef}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
        mt: '100vh',
        scrollMarginTop: '64px',
      }}
    >
      {/* About Us */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          color: 'common.white',
          position: 'relative',
        }}
      >
        {/* Heading */}
        <Box sx={{ ...animate(300) }}>
          {/* Eyebrow label */}
          <Typography
            variant='overline'
            sx={{
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'secondary.main',
              mb: 1,
            }}
          >
            About Us
          </Typography>

          {/* Main heading */}
          <Typography
            variant='h4'
            sx={{
              fontSize: { xs: '1.5rem', md: '2.125rem' },
              fontWeight: 700,
              color: 'common.white',
              mb: 2.5,
            }}
          >
            Philippine Data Guardians
          </Typography>

          {/* Body 1 */}
          <Typography 
            variant='body1'
            sx={{ 
              fontSize: { xs: '0.875rem', md: '1rem' },
              textAlign: 'justify', mb: 2 
            }}
          >
            We specialize in delivering tailored{' '}
            <Box component='span' sx={{ color: 'secondary.main', fontWeight: 600 }}>
              data privacy and cybersecurity
            </Box>{' '}
            strategies designed to meet the unique needs of government agencies,
            SMEs, and community organizations.
          </Typography>

          {/* Body 2 */}
          <Typography 
            variant='body1'
            sx={{ 
              fontSize: { xs: '0.875rem', md: '1rem' },
              textAlign: 'justify' 
            }}
          >
            Leveraging deep expertise in local regulations and global best practices,
            we help organizations achieve compliance, strengthen resilience, and build
            trust in an increasingly digital world.
          </Typography>
        </Box>

        {/* Image */}
        <FacebookBanner animate={animate}/>
      </Box>

      {/* Feature cards */}
      <FeatureCards animate={animate}/>
    </Container>
  );
};