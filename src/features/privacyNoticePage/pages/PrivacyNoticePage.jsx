import { useEffect } from 'react';
import { Box, Container, Divider, Fade } from '@mui/material';

import { Header } from '../components/Header';
import { Buttons } from '../components/Buttons';
import { AgreeCheckbox } from '../components/AgreeCheckbox';
import { PrivacyPolicyNotice } from '../components/PrivacyPolicyNotice';

import { usePrivacyNotice } from '../hooks/usePrivacyNotice';

import BackgroundImage from '../../../assets/pdgBG.png';



export const PrivacyNoticePage = () => {

  const {
    proceed,
    showHeader,
    showDetails,
    setProceed,
    handleNext
  } = usePrivacyNotice()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        backgroundImage: `url(${BackgroundImage})`, 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        
        py: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Container maxWidth='lg' sx={{ textAlign: 'center' }}>
        {/* Header */}
        <Fade in={showHeader} timeout={800}>
          <div>
          <Header/>
          </div>
        </Fade>

        {/* Privacy Details */}
        <Fade in={showDetails} timeout={800}>
          <div>
          <Box 
            sx={{ 
              background: 'white', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 4, 
              p: 4, 
              borderRadius: 2 
            }}
          >
            
            {/* Privacy Application Notice */}
            <PrivacyPolicyNotice/>

            {/* Checkbox */}
            <AgreeCheckbox agree={setProceed}/>

            <Divider/>

            {/* Buttons */}
            <Buttons proceed={proceed} handleNext={handleNext}/>
          </Box>
          </div>
        </Fade>
      </Container> 
    </Box>
  )
}