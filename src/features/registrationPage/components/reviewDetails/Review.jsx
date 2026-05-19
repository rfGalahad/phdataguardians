import { CheckCircle } from '@mui/icons-material';
import { Box } from '@mui/material';

import { FormButtons } from '@/components/ui/buttons/FormButtons';

import { useSubmit } from '../../hooks/useSubmit';
import { Header } from '../Header';

import { ResultModal } from './ResultModal';
import { ReviewDetails } from './ReviewDetails';


export const Review = ({ handleBack }) => { 

  const { ui, handlers } = useSubmit(); 

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* HEADER */}
      <Header 
        title={'Review & Submit'} 
        icon={<CheckCircle sx={{ color: '#053261' }}/>}
      />

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