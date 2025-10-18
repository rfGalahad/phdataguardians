import { Box, Container, Divider, Fade } from '@mui/material';

import { PrivacyCards } from '../components/PrivacyCards';
import { FullPrivacyPolicy } from '../components/FullPrivacyPolicy';

import { Buttons } from '../components/Buttons';
import { AgreeCheckbox } from '../components/AgreeCheckbox';
import { Header } from '../components/Header';

import { usePrivacyNotice } from '../hooks/usePrivacyNotice';
import BackgroundImage from '../../../assets/pdgBG.png';



export const PrivacyNoticePage = () => {

  const {
    agree,
    showHeader,
    showDetails,
    handleChange,
    handleNext
  } = usePrivacyNotice()


  
  return (
    <Box 
      sx={{ 
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
            {/* Privacy Cards */}
            <PrivacyCards/>

            <Divider/>

            {/* Full Privacy Policy */}
            <FullPrivacyPolicy/>

            <Divider/>

            {/* Checkbox */}
            <AgreeCheckbox agree={agree} handleChange={handleChange}/>

            {/* Buttons */}
            <Buttons agree={agree} handleNext={handleNext}/>
          </Box>
          </div>
        </Fade>
      </Container> 
    </Box>
  )
}