import { CheckCircle } from '@mui/icons-material';
import { Alert, Box, Typography } from '@mui/material';

import { ResultModal } from './ResultModal';
import { ReviewDetails } from './ReviewDetails';
import { Header} from '../Header';
import { FormButtons } from '../../../../components/ui/FormButtons';

import { useSubmit } from '../../hooks/useSubmit';




export const Review = ({ handleBack }) => { 

  const { ui, handlers } = useSubmit(); 

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* HEADER */}
      <Header title={'Review & Submit'} icon={<CheckCircle sx={{ color: '#053261' }}/>}/>

      {/* INFO ALERT */}
      <Alert 
        severity='info' 
        sx={{ 
          mb: 4,
          backgroundColor: '#e3f2fd',
          color: '#053261',
          '& .MuiAlert-icon': {
            color: '#053261'
          }
        }}
      >
        <Typography variant='body1'>
          Please review your information before submitting your registration. Make sure all details are correct.
        </Typography>
      </Alert>

      {/* REVIEW DETAILS */}
      <ReviewDetails/>
       
      {/* FORM BUTTONS */}
      <FormButtons 
        submit 
        loading={ui.loading}
        handleBack={handleBack}
        handleNext={handlers.submitForm} 
      />    

      {/* RESULT MODAL */}
      <ResultModal 
        open={ui.modalOpen} 
        type={ui.modalType} 
        onClose={handlers.handleModalClose} 
      />
    </Box>
  )
}