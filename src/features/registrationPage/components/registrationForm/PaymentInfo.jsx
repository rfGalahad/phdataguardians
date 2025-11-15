import { Info, Payment as PaymentIcon } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

import { Header } from "../Header";
import { QRDetails } from "../QRDetails";
import { CustomTextField } from "../../../../components/FormFields";
import { FormButtons } from "../../../../components/FormButtons";

import { useForm } from "../../hooks/useForm";
import { PAYMENT_REQUIRED_FIELDS } from "../../constants/form";



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
      {/* Header */}
      <Header title={'Payment Information'} icon={<PaymentIcon sx={{ color: '#053261' }}/>}/>

      {/* QR Details */}
      <QRDetails/>
      
       {/* Form Content */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', backgroundColor: '#FFF3CD', border: '1px solid #FFEEBA', borderRadius: 2, p: 2 }}>
          <Info sx={{ color: '#856404' }}/>
          <Typography variant='body2' color='#856404'>
            Save your reference number or screenshot of transaction for future references.
          </Typography>
        </Box>
        <CustomTextField
          label={'Reference Number'}
          placeholder={'e.g. 1234-5678-9012'}
          onChange={handleChange('referenceNumber')}
          value={values.referenceNumber}
          error={errors.referenceNumber}
          required
        />
      </Box>

      {/* Form Buttons */}
      <FormButtons handleBack={handleBack} handleNext={handleSubmit} />      
    </Box>
  )
}