import { Person } from '@mui/icons-material';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';

import { FormButtons } from '@/components/ui/buttons/FormButtons';
import { CustomDropdown, CustomTextField } from '@/components/ui/inputs';

import { PI_REQUIRED_FIELDS, SUFFIX_OPTIONS } from '../../constants/form';
import { useForm } from '../../hooks/useForm';
import { Header } from '../Header';

export const PersonalInfo = ({ handleNext }) => {

  const { 
    values, 
    errors, 
    handleChange, 
    handleSubmit 
  } = useForm(
    handleNext,
    PI_REQUIRED_FIELDS,
    'personalInfo'
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 } }}>
      {/* HEADER */}
      <Header 
        title="Personal Information" 
        icon={<Person sx={{ color: '#053261' }} />} 
      />

      {/* FORM CONTENT */}
      <Stack px={3}>
        {/* Name group */}
        <Box sx={{ mb: 1 }}>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              fontWeight: 700,
              color: 'rgba(5,50,97,0.45)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontSize: '0.65rem',
              mb: 1.5,
            }}
          >
            Full Name
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CustomTextField
                label="First Name"
                placeholder="e.g. Juan"
                value={values.firstName}
                onChange={handleChange('firstName')}
                error={errors.firstName}
                required
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CustomTextField
                label="Middle Name"
                placeholder="e.g. Santos"
                value={values.middleName}
                onChange={handleChange('middleName')}
                error={errors.middleName}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CustomTextField
                label="Last Name"
                placeholder="e.g. Dela Cruz"
                value={values.lastName}
                onChange={handleChange('lastName')}
                error={errors.lastName}
                required
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CustomDropdown
                label="Suffix"
                placeholder="e.g. Jr."
                onChange={(e, newValue) => handleChange('suffix')(e, newValue)}
                options={SUFFIX_OPTIONS}
                value={values.suffix}
                error={errors.suffix}
              />
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ borderColor: 'rgba(5,50,97,0.08)', my: 2.5 }} />

        {/* Contact group */}
        <Box>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              fontWeight: 700,
              color: 'rgba(5,50,97,0.45)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontSize: '0.65rem',
              mb: 1.5,
            }}
          >
            Contact Details
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CustomTextField
                label="Email Address"
                placeholder="e.g. sample@email.com"
                value={values.emailAddress}
                onChange={handleChange('emailAddress')}
                error={errors.emailAddress}
                required
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <CustomTextField
                label="Contact Number"
                placeholder="923-456-7890"
                prefix="+63"
                value={values.contactNumber}
                onChange={handleChange('contactNumber')}
                error={errors.contactNumber}
              />
            </Grid>
          </Grid>
        </Box>
      </Stack>

      {/* FORM BUTTONS */}
      <FormButtons disabled handleNext={handleSubmit} />
    </Box>
  );
};