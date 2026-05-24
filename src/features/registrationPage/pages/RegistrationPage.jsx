import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Container, Stack, Typography, useMediaQuery } from '@mui/material';

import BackgroundImage from '@/assets/pdg-background.png';
import { FormProvider } from '@/context/FormContext';

import { AddressDetails } from '../components/addressDetails/AddressDetails';
import { MembershipTier } from '../components/membershipInfo/MembershipTier';
import { PaymentInfo } from '../components/paymentInfo/PaymentInfo';
import { PersonalInfo } from '../components/personalInfo/PersonalInfo';
import { RegistrationStepper } from '../components/RegistrationStepper';
import { Review } from '../components/reviewDetails/Review';
import { UploadPicture } from '../components/uploadPicture/UploadPicture';

const STEPS = [
  'Personal Information',
  'Address Details',
  'Upload Picture',
  'Membership Type',
  'Payment',
  'Review & Submit',
];

export const RegistrationPage = () => {

  const [activeStep, setActiveStep] = useState(0);
  const [page, setPage] = useState(1);

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const navigate = useNavigate();

  const handleStepClick = (index) => {
    if (index < activeStep) {
      setActiveStep(index);
      setPage(index + 1);
    }
  };

  const handleBack = () => navigate(-1);

  const handleNext = () => {
    setPage((prev) => prev + 1);
    setActiveStep((prev) => Math.min(STEPS.length - 1, prev + 1));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        py: { xs: 4, md: 7 },
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        color: 'white',
        position: 'relative',
      }}
    >
      {/* Dark overlay */}
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
        sx={{ 
          position: 'relative', 
          zIndex: 1, 
          px: { xs: 2, sm: 3, md: 4 } 
        }}
      >
        {/* PAGE HEADER */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mb: { xs: 4, md: 6 },
            position: 'relative',
          }}
        >
          <Button
            startIcon={<ArrowBackIcon/>}
            onClick={handleBack}
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
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            sx={{ fontWeight: 800, mb: 1 }}
          >
            PDG{' '}
            <Box component="span" sx={{ color: '#F7CF13' }}>
              Membership
            </Box>
          </Typography>

          <Typography
            variant={isMobile ? 'body2' : 'body1'}
            sx={{ color: 'rgba(255,255,255,0.55)', textAlign: 'center', maxWidth: 420 }}
          >
            Complete the form below to register for your membership ID.
          </Typography>
        </Box>

        {/* STEPPER */}
        <RegistrationStepper
          steps={STEPS}
          activeStep={activeStep}
          onStepClick={handleStepClick}
        />

        {/* FORM CARD */}
        <Box
          sx={{ bgcolor: 'background.paper', borderRadius: 2 }}
        >
          <Stack>
            <FormProvider>
              {page === 1 && <PersonalInfo handleNext={handleNext} />}
              {page === 2 && <AddressDetails handleBack={handleBack} handleNext={handleNext} />}
              {page === 3 && <UploadPicture handleBack={handleBack} handleNext={handleNext} />}
              {page === 4 && <MembershipTier handleBack={handleBack} handleNext={handleNext} />}
              {page === 5 && <PaymentInfo handleBack={handleBack} handleNext={handleNext} />}
              {page === 6 && <Review handleBack={handleBack} handleNext={handleNext} />}
            </FormProvider>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};