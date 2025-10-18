import { LocationOn } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";

import { CustomDropdownField, CustomTextField } from "../../../../components/FormFields";
import { FormButtons } from "../../../../components/FormButtons";

import { useForm } from '../../hooks/useForm';
import { useAddressOptions } from "../../hooks/useAddressOptions";
import { AD_REQUIRED_FIELDS } from "../../constants/form";



export const AddressDetails = ({ handleBack, handleNext }) => {

  const { 
    values, 
    errors, 
    handleChange, 
    handleSubmit 
  } = useForm (
    handleNext,
    AD_REQUIRED_FIELDS,
    'addressDetails'
  );

  const {
    showMunicipality,
    showBarangay,
    showStreet,
    PROVINCE_OPTIONS,
    FILTERED_MUNICIPALITY_OPTIONS,
    FILTERED_BARANGAY_OPTIONS,
  } = useAddressOptions(values);

  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LocationOn sx={{ color: '#053261' }}/>
          <Typography variant='h5' fontWeight='600' color='#053261'>
            Address Details
          </Typography>
        </Box>
        <Divider sx={{ borderColor: '#053261', borderBottomWidth: 2 }}/>
      </Box>
      
       {/* Form Content */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <CustomDropdownField
          label={'Province'}
          onChange={(e, newValue) => handleChange('province')(e, newValue)}
          options={PROVINCE_OPTIONS}
          placeholder={'e.g. Rizal'}
          helperText={errors.province}
          value={values.province}
          error={errors.province}
          required
        />
        { showMunicipality && (
          <CustomDropdownField
            label={'City / Municipality'}
            onChange={(e, newValue) => handleChange('municipality')(e, newValue)}
            options={FILTERED_MUNICIPALITY_OPTIONS}
            placeholder={'e.g. Taytay'}
            helperText={''}
            value={values.municipality}
            error={errors.municipality}
            required
          />
        )}

        { showBarangay && (
          <CustomDropdownField
            label={'Barangay'}
            onChange={(e, newValue) => handleChange('barangay')(e, newValue)}
            options={FILTERED_BARANGAY_OPTIONS}
            placeholder={'Enter your barangay'}
            helperText={'e.g. '}
            value={values.barangay}
            error={errors.barangay}
            required
          />
        )}

        { showStreet && (
          <>
            <CustomTextField
              label={'Street / Sitio / Purok / Subdivision'}
              onChange={handleChange('street')}
              placeholder={'e.g. 123 '}
              helperText={'e.g. Santos'}
              value={values.street}
              error={errors.street}
            />
            <CustomTextField
              label={'House / Unit / Building Number'}
              onChange={handleChange('houseNumber')}
              placeholder={'e.g. '}
              helperText={'e.g. Juan'}
              value={values.houseNumber}
              error={errors.houseNumber}
              required
            />
          </>
        )}
      
        {/* Form Buttons */}
        <FormButtons handleBack={handleBack} handleNext={handleSubmit} />
      </Box>      
    </Box>
  )
}