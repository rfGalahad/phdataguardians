import { LocationOn } from "@mui/icons-material";
import { Box } from "@mui/material";

import { Header } from "../Header";
import { CustomDropdown, CustomTextField } from "../../../../components/FormFields";
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
      <Header title={'Address Details'} icon={<LocationOn sx={{ color: '#053261' }}/>} />
      
       {/* Form Content */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <CustomDropdown
          label='Province'
          placeholder='e.g. Rizal'
          onChange={(e, newValue) => handleChange('province')(e, newValue)}
          options={PROVINCE_OPTIONS}
          value={values.province}
          error={errors.province}
          required
        />
        { showMunicipality && (
          <CustomDropdown
            label={'City / Municipality'}
            placeholder={'e.g. Taytay'}
            onChange={(e, newValue) => handleChange('municipality')(e, newValue)}
            options={FILTERED_MUNICIPALITY_OPTIONS}
            value={values.municipality}
            error={errors.municipality}
            required
          />
        )}

        { showBarangay && (
          <CustomDropdown
            label={'Barangay'}
            placeholder={'e.g. Sta Ana'}
            onChange={(e, newValue) => handleChange('barangay')(e, newValue)}
            options={FILTERED_BARANGAY_OPTIONS}
            value={values.barangay}
            error={errors.barangay}
            required
          />
        )}

        { showStreet && (
          <>
            <CustomTextField
              label={'Street / Sitio / Purok / Subdivision'}
              placeholder={'e.g. 123 St. '}
              onChange={handleChange('street')}
              value={values.street}
              error={errors.street}
            />
            <CustomTextField
              label={'House / Unit / Building Number'}
              placeholder={'e.g. Blk 5 Lot 12'}
              onChange={handleChange('houseNumber')}
              value={values.houseNumber}
              error={errors.houseNumber}
            />
          </>
        )}
      </Box>
      {/* Form Buttons */}
      <FormButtons handleBack={handleBack} handleNext={handleSubmit} />      
    </Box>
  )
}