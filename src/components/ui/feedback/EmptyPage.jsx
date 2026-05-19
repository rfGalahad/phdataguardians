import { useNavigate } from 'react-router-dom';

import { keyframes } from '@mui/system';

import pdgBackground from '@/assets/pdg-background.png';

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
`;

export const EmptyPage = () => {

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage: `url(${pdgBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 2,
        px: 3,
      }}
    >

      {/* Pulsing dots */}
      <Box sx={{ display: 'flex', gap: 1, mb: 4 }}>
        {[0, 0.2, 0.4].map((delay, i) => (
          <Box
            key={i}
            sx={{
              width: 16,
              height: 16,
              borderRadius: '50%',
              backgroundColor: 'white',
              animation: `${pulse} 1.4s ease-in-out ${delay}s infinite`,
            }}
          />
        ))}
      </Box>

      {/* Heading */}
      <Typography variant="h5" sx={{ fontWeight: 600, color: '#F7CF13' }}>
        This page isn't ready yet
      </Typography>

      {/* Subtext */}
      <Typography
        variant="body2"
        sx={{ color: 'white', maxWidth: 380, lineHeight: 1.8 }}
      >
        We're still building this feature. Check back soon.
      </Typography>

      {/* Go Back */}
      <Button
        variant="text"
        startIcon={<ArrowBack />}
        onClick={() => navigate(-1)}
        sx={{
          mt: 2,
          textTransform: 'none',
          color: 'white',
          '&:hover': {
            backgroundColor: 'transparent',
            textDecoration: 'underline',
          },
        }}
      >
        Go Back
      </Button>
    </Box>
  );
};