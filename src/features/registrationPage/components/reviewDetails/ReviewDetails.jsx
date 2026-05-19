import { Box, Divider, Grid, Stack, Typography } from "@mui/material";

import { useSubmit } from "../../hooks/useSubmit";
import { CustomAlert } from "@/components/ui/feedback/CustomAlert";


const SectionLabel = ({ children }) => (
  <Typography
    variant="overline"
    sx={{
      fontSize: '0.65rem',
      fontWeight: 700,
      letterSpacing: 1.5,
      color: '#053261',
      opacity: 0.5,
      display: 'block',
      mb: 1.5,
    }}
  >
    {children}
  </Typography>
);

const InformationField = ({ label, value }) => (
  <Box>
    <Typography
      variant="caption"
      sx={{
        display: 'block',
        color: 'text.disabled',
        fontSize: '0.7rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: 0.8,
        mb: 0.4,
      }}
    >
      {label}
    </Typography>
    <Typography
      variant="body2"
      sx={{
        fontWeight: 500,
        color: value ? 'text.primary' : 'text.disabled',
        wordBreak: 'break-word',
        fontSize: '0.9rem',
      }}
    >
      {value || '—'}
    </Typography>
  </Box>
);


export const ReviewDetails = () => {

  const {
    firstName, middleName, lastName, suffix,
    emailAddress, contactNumber,
    houseNumber, street, barangay, municipality, province,
    membershipTier, referenceNumber,
    picture
  } = useSubmit();

  const fullName = `${firstName} ${middleName || ''} ${lastName} ${suffix || ''}`.trim();
  const fullAddress = `${houseNumber || ''} ${street || ''} ${barangay}, ${municipality}, ${province}`.trim();

  return (
    <Stack spacing={3} px={3}>

      {/* INFO ALERT */}
      <CustomAlert severity="info" sx={{ mb: 4 }}>
        Please review your information before submitting. Make sure all details are correct.
      </CustomAlert>

      {/* PROFILE PICTURE + NAME HERO */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2.5,
          p: 2.5,
          borderRadius: 3,
          background: 'linear-gradient(135deg, #f0f4f9 0%, #e8eef6 100%)',
          border: '1px solid rgba(5,50,97,0.08)',
        }}
      >
        <Box
          component="img"
          src={picture}
          alt="Profile picture"
          sx={{
            width: 80,
            height: 80,
            borderRadius: 2.5,
            objectFit: 'cover',
            backgroundColor: '#dce4ee',
            flexShrink: 0,
            border: '3px solid #fff',
            boxShadow: '0 4px 12px rgba(5,50,97,0.15)',
          }}
        />
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: '#053261', lineHeight: 1.2, mb: 0.5 }}
          >
            {fullName || '—'}
          </Typography>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              px: 1.5,
              py: 0.4,
              borderRadius: 10,
              backgroundColor: 'rgba(5,50,97,0.08)',
            }}
          >
            <Typography
              variant="caption"
              sx={{ fontWeight: 600, color: '#053261', fontSize: '0.72rem', letterSpacing: 0.5 }}
            >
              {membershipTier || 'No tier selected'}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* PERSONAL INFO */}
      <Box>
        <SectionLabel>Personal Information</SectionLabel>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <InformationField label="Email Address" value={emailAddress} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <InformationField
              label="Contact Number"
              value={contactNumber ? `(+63) ${contactNumber}` : null}
            />
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ borderColor: 'rgba(5,50,97,0.08)' }} />

      {/* ADDRESS */}
      <Box>
        <SectionLabel>Address</SectionLabel>
        <InformationField label="Complete Address" value={fullAddress} />
      </Box>

      <Divider sx={{ borderColor: 'rgba(5,50,97,0.08)' }} />

      {/* PAYMENT REFERENCE */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          px: 2.5,
          py: 2,
          borderRadius: 2.5,
          border: '1.5px dashed rgba(5,50,97,0.2)',
          backgroundColor: 'rgba(5,50,97,0.02)',
        }}
      >
        <Box>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              color: 'text.disabled',
              fontSize: '0.7rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: 0.8,
              mb: 0.4,
            }}
          >
            Payment Reference Number
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 700,
              color: '#053261',
              letterSpacing: 1,
              fontSize: '1rem',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {referenceNumber || '—'}
          </Typography>
        </Box>
      </Box>

    </Stack>
  );
};