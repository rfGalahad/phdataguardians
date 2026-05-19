import { useNavigate } from 'react-router-dom';

import { ArrowBack } from '@mui/icons-material';
import { Box, Button, Container, Typography } from '@mui/material';

import piaBG from '@/assets/services_images/pia-service.png';
import { fadeUp } from '@/styles/animation';


export const HeroSection = ({ isMobile }) => {
  
  const navigate = useNavigate();

  return (
    <Box
        sx={{
          position: 'relative',
          height: { xs: 320, md: 460 },
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <Box
          component="img"
          src={piaBG}
          alt="Privacy Impact Assessment"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />

        {/* Dark overlay — gradient so text stays readable */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, rgba(5,50,97,0.85) 0%, rgba(5,50,97,0.55) 60%, rgba(5,50,97,0.25) 100%)',
          }}
        />

        {/* Hero text */}
        <Container
          maxWidth="lg"
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          {/* Back button */}
          <Box sx={{ animation: `${fadeUp} 0.7s ease both` }}>
            <Button
              startIcon={<ArrowBack/>}
              onClick={() => navigate(-1)}
              sx={{
                color: 'rgba(255,255,255,0.85)',
                textTransform: 'none',
                fontWeight: 500,
                px: 0,
                '&:hover': {
                  color: '#fff',
                  background: 'transparent',
                  '& .MuiButton-startIcon': {
                    transform: 'translateX(-3px)',
                  },
                },
                '& .MuiButton-startIcon': {
                  transition: 'transform 0.2s ease',
                },
              }}
            >
              Back
            </Button>
          </Box>

          <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{
              fontWeight: 700,
              color: '#fff',
              maxWidth: 560,
              lineHeight: 1.2,
              animation: `${fadeUp} 0.7s ease 0.1s both`,
            }}
          >
            Privacy Impact{' '}
            <Box component="span" sx={{ color: 'secondary.main' }}>
              Assessment
            </Box>{' '}
            (PIA)
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              color: 'rgba(255,255,255,0.80)',
              maxWidth: 480,
              lineHeight: 1.7,
              animation: `${fadeUp} 0.7s ease 0.25s both`,
            }}
          >
            Assess organizational processes and systems for privacy risks.
          </Typography>
        </Container>
      </Box>
  )
}