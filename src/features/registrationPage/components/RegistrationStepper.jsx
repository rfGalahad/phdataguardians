import { 
  Box, 
  Stepper, 
  Step, 
  StepLabel,
  StepConnector,
  stepConnectorClasses,
  styled
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
}));

// Custom Step Icon
const CustomStepIconRoot = styled('div')(({ ownerState }) => ({
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
}));

function CustomStepIcon(props) {
  const { active, completed, className, icon } = props;

  const icons = {
    1: <PersonIcon />,
    2: <LocationOnIcon />,
    3: <CameraAltIcon />,
    4: <SchoolIcon />,
    5: <PaymentIcon />,
    6: <CheckCircleIcon />,
  };

  return (
    <CustomStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(icon)]}
    </CustomStepIconRoot>
  );
}

export const RegistrationStepper = ({ steps, activeStep, onStepClick }) => {
  return (
    <Box sx={{ width: '100%', mb: 4 }}>
      <Stepper 
        activeStep={activeStep} 
        alternativeLabel
        connector={<CustomConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel 
              StepIconComponent={CustomStepIcon}
              sx={{
                '& .MuiStepLabel-label': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: 500,
                  mt: 1,
                },
                '& .MuiStepLabel-label.Mui-active': {
                  color: '#F7CF13',
                  fontWeight: 600,
                },
                '& .MuiStepLabel-label.Mui-completed': {
                  color: '#F7CF13',
                  fontWeight: 600,
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}