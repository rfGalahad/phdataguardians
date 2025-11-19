import { Person } from "@mui/icons-material";
import { Box, useMediaQuery } from "@mui/material";

import { Header } from "../Header";
import { CustomDropdown, CustomTextField } from "../../../../components/ui/FormFields";
import { FormButtons } from "../../../../components/ui/FormButtons";

import { useForm } from "../../hooks/useForm";
import { PI_REQUIRED_FIELDS, SUFFIX_OPTIONS } from "../../constants/form";



export const PersonalInfo = ({ handleNext }) => {

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

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
      <Header title={'Personal Information'} icon={<Person sx={{ color: '#053261' }}/>}/>
      
       {/* Form Content */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <CustomTextField
          label="First Name"
          placeholder="e.g. Juan"
          value={values.firstName}
          onChange={handleChange('firstName')}
          error={errors.firstName}
          required
        />
        <CustomTextField
          label="Middle Name"
          placeholder="e.g. Santos"
          value={values.middleName}
          onChange={handleChange('middleName')}
          error={errors.middleName}
        />
        <CustomTextField
          label={'Last Name'}
          placeholder={'e.g. Dela Cruz'}
          onChange={handleChange('lastName')}
          value={values.lastName}
          error={errors.lastName}
          required
        />
        <CustomDropdown
          label="Suffix"
          placeholder="e.g. Jr., Sr., III"
          onChange={(e, newValue) => handleChange('suffix')(e, newValue)}
          options={SUFFIX_OPTIONS}
          value={values.suffix}
          error={errors.suffix}
        />
        <CustomTextField
          label={'Email Address'}
          placeholder={'e.g. sample@email.com'}
          onChange={handleChange('emailAddress')}
          value={values.emailAddress}
          error={errors.emailAddress}
          required
        />
        <CustomTextField
          label={'Contact Number'}
          placeholder={'XXX-XXX-XXXX'}
          prefix={'+63'}
          onChange={handleChange('contactNumber')}
          value={values.contactNumber}
          error={errors.contactNumber}
        />
      </Box>

      {/* Form Buttons */}
      <FormButtons disabled handleNext={handleSubmit} />      
    </Box>
  )
}