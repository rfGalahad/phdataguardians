import { useState } from "react";
import { CheckCircle } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";

import { IDTemplate } from "../IDTemplate";
import { FormButtons } from "../../../../components/ui/FormButtons";

import { useSubmit } from "../../hooks/useSubmit";
import { ResultModal } from "../ResultModal";




export const Review = ({ handleBack }) => { 

  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const { submitForm } = useSubmit();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await submitForm();
      setModalType('success');
      setModalOpen(true);
    } catch (error) {
      console.error('Submit error:', error);
      setModalType('error');
      setModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
    if (modalType === 'success') {
      handleBack(); // or navigate to success page
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* HEADER */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CheckCircle sx={{ color: '#053261' }}/>
          <Typography variant='h5' fontWeight='600' color='#053261'>
            Review & Submit
          </Typography>
        </Box>
        <Divider sx={{ borderColor: '#053261', borderBottomWidth: 2 }}/>
      </Box>

      {/* INFO */}
      <Box>
        <Typography variant='body1' color='#053261'>
          Please review your information before submitting your registration. Make sure all details are correct.
        </Typography>
      </Box>

      {/* ID TEMPLATE */}
      <IDTemplate/>
       
      {/* FORM BUTTONS */}
      <FormButtons submit handleBack={handleBack} handleNext={handleSubmit} />    

      {/* RESULT MODAL */}
      <ResultModal open={modalOpen} type={modalType} onClose={handleModalClose} />
    </Box>
  )
}