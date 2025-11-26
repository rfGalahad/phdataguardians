import { 
  Box, 
  Stepper, 
  Step, 
  StepLabel,
  StepConnector,
  stepConnectorClasses,
  styled,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  Person as PersonIcon, 
  LocationOn as LocationOnIcon,
  CameraAlt as CameraAltIcon, 
  School as SchoolIcon,
  CheckCircle as CheckCircleIcon,
  Payment as PaymentIcon
} from '@mui/icons-material';

// Custom Connector
const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#F7CF13',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#F7CF13',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: 'rgba(255, 255, 255)',
    borderRadius: 1,
  },
  [theme.breakpoints.down('sm')]: {
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 18,
    },
  },
}));

// Custom Step Icon
const CustomStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: ownerState.active || ownerState.completed ? '#F7CF13' : 'rgba(255, 255, 255)',
  zIndex: 1,
  color: '#053261',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 0.3s ease',
  boxShadow: ownerState.active || ownerState.completed ? '0 4px 10px rgba(247, 207, 19, 0.3)' : 'none',
  [theme.breakpoints.down('md')]: {
    width: 44,
    height: 44,
  },
  [theme.breakpoints.down('sm')]: {
    width: 36,
    height: 36,
  },
  [theme.breakpoints.down(380)]: {
    width: 32,
    height: 32,
  },
}));

function CustomStepIcon(props) {
  const { active, completed, className, icon } = props;
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isTiny = useMediaQuery(theme.breakpoints.down(380));

  const icons = {
    1: <PersonIcon sx={{ fontSize: isTiny ? 16 : isSmall ? 18 : 24 }} />,
    2: <LocationOnIcon sx={{ fontSize: isTiny ? 16 : isSmall ? 18 : 24 }} />,
    3: <CameraAltIcon sx={{ fontSize: isTiny ? 16 : isSmall ? 18 : 24 }} />,
    4: <SchoolIcon sx={{ fontSize: isTiny ? 16 : isSmall ? 18 : 24 }} />,
    5: <PaymentIcon sx={{ fontSize: isTiny ? 16 : isSmall ? 18 : 24 }} />,
    6: <CheckCircleIcon sx={{ fontSize: isTiny ? 16 : isSmall ? 18 : 24 }} />,
  };

  return (
    <CustomStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(icon)]}
    </CustomStepIconRoot>
  );
}

export const RegistrationStepper = ({ steps = [
  'Personal',
  'Location',
  'Photo',
  'Education',
  'Payment',
  'Complete'
], activeStep = 0 }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobile = useMediaQuery(theme.breakpoints.down(600));

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 4 }}>
      <Stepper 
        activeStep={activeStep} 
        alternativeLabel={!isMobile}
        orientation='horizontal'
        connector={!isMobile ? <CustomConnector /> : null}
        sx={{
          [`&.MuiStepper-root`]: {
            padding: isMobile ? '0' : '24px 0',
          }
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel 
              StepIconComponent={CustomStepIcon}
              sx={{
                '& .MuiStepLabel-label': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: 500,
                  mt: 1,
                  fontSize: isMobile ? '0.75rem' : isSmall ? '0.875rem' : '1rem',
                  display: isMobile ? 'inline-block' : 'block',
                  whiteSpace: isMobile ? 'nowrap' : 'normal',
                  overflow: isMobile ? 'hidden' : 'visible',
                  textOverflow: isMobile ? 'ellipsis' : 'clip',
                },
                '& .MuiStepLabel-label.Mui-active': {
                  color: '#F7CF13',
                  fontWeight: 600,
                },
                '& .MuiStepLabel-label.Mui-completed': {
                  color: '#F7CF13',
                  fontWeight: 600,
                },
                '& .MuiStepLabel-iconContainer': {
                  paddingRight: isSmall ? 1 : 2,
                },
              }}
            >
              {isMobile ? '' : label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}