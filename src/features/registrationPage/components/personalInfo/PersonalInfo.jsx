import { Person } from "@mui/icons-material";
import { Box, useMediaQuery } from "@mui/material";

import { Header } from "../Header";
import { CustomDropdown, CustomTextField } from "../../../../components/ui/FormFields";
import { FormButtons } from "../../../../components/ui/FormButtons";

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
      {/* HEADER */}
      <Header title={'Personal Information'} icon={<Person sx={{ color: '#053261' }}/>}/>
      
       {/* FORM CONTENT */}
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
          placeholder={'923-456-7890'}
          prefix={'+63'}
          onChange={handleChange('contactNumber')}
          value={values.contactNumber}
          error={errors.contactNumber}
        />
      </Box>

      {/* FORM BUTTONS */}
      <FormButtons disabled handleNext={handleSubmit} />      
    </Box>
  )
}