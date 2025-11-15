import { useState } from 'react';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';

import { RegistrationStepper } from '../components/RegistrationStepper';
import { PersonalInfo } from '../components/registrationForm/PersonalInfo';
import { AddressDetails } from '../components/registrationForm/AddressDetails';
import { UploadPicture } from '../components/registrationForm/UploadPicture';
import { MembershipType } from '../components/registrationForm/MembershipType';
import { PaymentInfo } from '../components/registrationForm/PaymentInfo';
import { Review } from '../components/registrationForm/Review';

import { FormProvider } from '../../../context/FormContext';

import BackgroundImage from '../../../assets/pdgBG.png';



export const RegistrationPage = ({  }) => {

  const [ activeStep, setActiveStep ] = useState(0);
  const [ page, setPage ] = useState(1);

  const isMobile = useMediaQuery("(max-width:600px)");

  const steps = [
    'Personal Information',
    'Address Details',
    'Upload Picture',
    'Membership Type',
    'Payment',
    'Review & Submit'
  ];

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  const handleBack = () => {
    setPage((prev) => prev - 1);
    setActiveStep((prev) => Math.max(0, prev - 1));
  }

  const handleNext = () => {
    setPage((prev) => prev + 1);
    setActiveStep((prev) => Math.min(steps.length - 1, prev + 1));
  }

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
        color: 'white'
      }}>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        {/* Header */}
        <Box mb={6}>
          <Typography variant= {isMobile ? 'h6' : 'h4'} color="#F7CF13" fontWeight="bold" mb={2}>
            PDG Membership
          </Typography>
          <Typography variant="subtitle2">
            Complete the form below to register for your membership ID.
          </Typography>
        </Box>

        {/* Custom Stepper */}
        <RegistrationStepper 
          steps={steps} 
          activeStep={activeStep} 
          onStepClick={handleStepClick}
        />

        {/* Current Step Content */}
        <Box sx={{ background: 'white', p: {xs: 2, md: 4}, borderRadius: 2 }}>
          <FormProvider>
            { page === 1 && (<PersonalInfo handleNext={handleNext}/>)}
            { page === 2 && (<AddressDetails handleBack={handleBack} handleNext={handleNext}/>)}
            { page === 3 && (<UploadPicture handleBack={handleBack} handleNext={handleNext}/>)}
            { page === 4 && (<MembershipType handleBack={handleBack} handleNext={handleNext}/>)}
            { page === 5 && (<PaymentInfo handleBack={handleBack} handleNext={handleNext}/>)}
            { page === 6 && (<Review handleBack={handleBack} handleNext={handleNext}/>)}
          </FormProvider>
        </Box>
      </Container>
    </Box>
  );
};