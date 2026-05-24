import { Box, Container, Divider, useMediaQuery } from '@mui/material';

import BackgroundImage from '@/assets/pdg-background.png';

import { AgreeCheckbox } from '../components/AgreeCheckbox';
import { Buttons } from '../components/Buttons';
import { Header } from '../components/Header';
import { PrivacyPolicyNotice } from '../components/PrivacyPolicyNotice';
import { usePrivacyNotice } from '../hooks/usePrivacyNotice';

export const PrivacyNoticePage = () => {
  
  const { 
    proceed, 
    setProceed, 
    handleNext 
  } = usePrivacyNotice();

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        py: { xs: 5, md: 7 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Subtle dark overlay for legibility */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          bgcolor: 'rgba(3,18,40,0.55)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 3, md: 4 } }}
      >
        {/* Header */}
        <Header isMobile={isMobile} />

        {/* Card */}
        <Box
          sx={{
            bgcolor: '#fff',
            borderRadius: { xs: 3, md: 3.5 },
            boxShadow: '0 24px 80px -12px rgba(3,18,40,0.45), 0 4px 20px -4px rgba(3,18,40,0.25)',
            overflow: 'hidden',
          }}
        >
          <Box sx={{ p: { xs: 3, sm: 4, md: 5 }, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* Privacy notices */}
            <PrivacyPolicyNotice />

            {/* Checkboxes */}
            <AgreeCheckbox agree={setProceed} />

            {/* Divider */}
            <Divider sx={{ borderColor: 'rgba(5,50,97,0.08)' }} />

            {/* Action buttons */}
            <Buttons proceed={proceed} handleNext={handleNext} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};