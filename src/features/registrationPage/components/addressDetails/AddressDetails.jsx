import { LocationOn } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";

import { FormButtons } from "@/components/ui/buttons/FormButtons";
import { CustomDropdown, CustomTextField } from "@/components/ui/inputs";

import { AD_REQUIRED_FIELDS } from "../../constants/form";
import { useAddressOptions } from "../../hooks/useAddressOptions";
import { useForm } from '../../hooks/useForm';
import { Header } from "../Header";

export const AddressDetails = ({ handleBack, handleNext }) => {

  const { 
    values, 
    errors, 
    handleChange, 
    handleSubmit 
  } = useForm(
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
      {/* HEADER */}
      <Header 
        title={'Address Details'} 
        icon={<LocationOn sx={{ color: '#053261' }}/>} 
      />
      
      {/* FORM CONTENT */}
      <Stack spacing={2} px={3}>
        <CustomDropdown
          label='Province'
          placeholder='e.g. Rizal'
          onChange={(e, newValue) => handleChange('province')(e, newValue)}
          options={PROVINCE_OPTIONS}
          value={values.province}
          error={errors.province}
          required
        />

        <CustomDropdown
          label='City / Municipality'
          placeholder='e.g. Taytay'
          onChange={(e, newValue) => handleChange('municipality')(e, newValue)}
          options={FILTERED_MUNICIPALITY_OPTIONS}
          value={values.municipality}
          error={errors.municipality}
          disabled={!showMunicipality}
          required
        />

        <CustomDropdown
          label='Barangay'
          placeholder='e.g. Sta Ana'
          onChange={(e, newValue) => handleChange('barangay')(e, newValue)}
          options={FILTERED_BARANGAY_OPTIONS}
          value={values.barangay}
          error={errors.barangay}
          disabled={!showBarangay}
          required
        />

        <CustomTextField
          label='Street / Sitio / Purok / Subdivision'
          placeholder='e.g. 123 St.'
          onChange={handleChange('street')}
          value={values.street}
          error={errors.street}
          disabled={!showStreet}
        />

        <CustomTextField
          label='House / Unit / Building Number'
          placeholder='e.g. Blk 5 Lot 12'
          onChange={handleChange('houseNumber')}
          value={values.houseNumber}
          error={errors.houseNumber}
          disabled={!showStreet}
        />
      </Stack>

      {/* FORM BUTTONS */}
      <FormButtons handleBack={handleBack} handleNext={handleSubmit} />      
    </Box>
  );
};