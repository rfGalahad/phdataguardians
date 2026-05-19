import { Payment } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";

import { FormButtons } from "@/components/ui/buttons/FormButtons";
import { CustomAlert } from "@/components/ui/feedback/CustomAlert";
import { CustomTextField } from "@/components/ui/inputs";

import { PAYMENT_REQUIRED_FIELDS } from "../../constants/form";
import { useForm } from "../../hooks/useForm";
import { Header } from "../Header";

import { QRDetails } from "./QRDetails";




export const PaymentInfo = ({ handleBack, handleNext }) => {

  const { 
    values, 
    errors, 
    handleChange, 
    handleSubmit 
  } = useForm (
    handleNext,
    PAYMENT_REQUIRED_FIELDS,
    'paymentInfo'
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* HEADER */}
      <Header 
        title={'Payment Information'} 
        icon={<Payment sx={{ color: '#053261' }}/>}
      />

      {/* PAYMENT QR DETAILS */}
      <QRDetails/>
      
      {/* FORM CONTENT */}
      <Stack spacing={2} px={3}>
        <CustomAlert severity="warning" sx={{ mb: 4 }}>
          Save your reference number or screenshot of transaction for future references.
        </CustomAlert>
        <CustomTextField
          label={'Reference Number'}
          placeholder={'e.g. 1234-5678-9012'}
          onChange={handleChange('referenceNumber')}
          value={values.referenceNumber}
          error={errors.referenceNumber}
          required
        />
      </Stack>

      {/* FORM BUTTONS */}
      <FormButtons handleBack={handleBack} handleNext={handleSubmit} />      
    </Box>
  )
}