import { CheckCircle } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";

import { useSubmit } from "../../hooks/useSubmit";
import { FormButtons } from "../../../../components/FormButtons";

import { IDTemplate } from "../IDTemplate";




export const Review = ({ handleBack }) => {

  const { handleSubmit } = useSubmit();
  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CheckCircle sx={{ color: '#053261' }}/>
          <Typography variant='h5' fontWeight='600' color='#053261'>
            Review & Submit
          </Typography>
        </Box>
        <Divider sx={{ borderColor: '#053261', borderBottomWidth: 2 }}/>
      </Box>

      <Box>
        <Typography variant='body1' color='#053261'>
          Please review your information before submitting your registration. Make sure all details are correct.
        </Typography>
      </Box>

      <IDTemplate/>
       
      {/* Form Buttons */}
      <FormButtons submit handleBack={handleBack} handleNext={handleSubmit} />    
    </Box>
  )
}