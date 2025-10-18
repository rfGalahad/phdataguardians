import { Person } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";

import { CustomDropdownField, CustomTextField } from "../../../../components/FormFields";
import { FormButtons } from "../../../../components/FormButtons";
import { useFormContext } from "../../../../context/FormContext";

import { useForm } from "../../hooks/useForm";
import { PI_REQUIRED_FIELDS, SUFFIX_OPTIONS } from "../../constants/form";



export const PersonalInfo = ({ handleNext }) => {

  const { 
    values, 
    errors, 
    handleChange, 
    handleSubmit 
  } = useForm (
    handleNext,
    PI_REQUIRED_FIELDS,
    'personalInfo'
  );

  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Person sx={{ color: '#053261' }}/>
          <Typography variant='h5' fontWeight='600' color='#053261'>
            Personal Information
          </Typography>
        </Box>
        <Divider sx={{ borderColor: '#053261', borderBottomWidth: 2 }}/>
      </Box>
      
       {/* Form Content */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <CustomTextField
          label={'First Name'}
          onChange={handleChange('firstName')}
          placeholder={'Enter your first name'}
          helperText={errors.firstName}
          value={values.firstName}
          error={errors.firstName}
          required
        />
        <CustomTextField
          label={'Middle Name'}
          onChange={handleChange('middleName')}
          placeholder={'Enter your first name'}
          helperText={errors.middleName}
          value={values.middleName}
          error={errors.middleName}
        />
        <CustomTextField
          label={'Last Name'}
          onChange={handleChange('lastName')}
          placeholder={'Enter your first name'}
          helperText={errors.lastName}
          value={values.lastName}
          error={errors.lastName}
          required
        />
        <CustomDropdownField
          label={'Suffix'}
          onChange={(e, newValue) => handleChange('suffix')(e, newValue)}
          options={SUFFIX_OPTIONS}
          placeholder={'Enter your suffix'}
          helperText={errors.suffix}
          value={values.suffix}
          error={errors.suffix}
        />

        {/* Form Buttons */}
        <FormButtons disabled handleNext={handleSubmit} />
      </Box>      
    </Box>
  )
}