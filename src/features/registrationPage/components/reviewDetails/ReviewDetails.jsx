import { Box, Typography, Paper, Divider, Grid } from "@mui/material"
import { useSubmit } from "../../hooks/useSubmit";



export const ReviewDetails = () => {
  const { 
    firstName, middleName, lastName, suffix,
    emailAddress, contactNumber,
    houseNumber, street, barangay, municipality, province,
    membershipTier, referenceNumber,
    picture 
  } = useSubmit();

  const InformationField = ({ label, value }) => (
    <Box>
      <Typography variant="caption" sx={{ 
        color: 'text.secondary',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        fontWeight: 600
      }}>
        {label}
      </Typography>
      <Typography variant="body1" sx={{ 
        fontWeight: 500,
        color: 'text.primary',
        wordBreak: 'break-word'
      }}>
        {value || 'N/A'}
      </Typography>
    </Box>
  );

  const personalInfo = [
    {
      label: 'FULL NAME',
      value: `${firstName} ${middleName || ''} ${lastName} ${suffix || ''}`.trim()
    },
    {
      label: 'EMAIL ADDRESS',
      value: emailAddress
    },
    {
      label: 'CONTACT INFORMATION',
      value: contactNumber ? `(+63) ${contactNumber}` : null
    },
    {
      label: 'MEMBERSHIP TIER',
      value: membershipTier
    }
  ]

  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
        {/* ID PICTURE */}
        <Paper elevation={1} sx={{ p: 0.5, borderRadius: 2 }}>
          <Box
            component={'img'}
            src={picture}
            sx={{
              width: '160px',
              height: '160px',
              borderRadius: 1.5,
              display: 'block',
              backgroundColor: '#f5f5f5'
            }}
            alt="Profile picture"
          />
        </Paper>
        
        {/* PERSONAL INFORMATION */}
        <Grid container spacing={2}>
          {personalInfo.map((item, index) => (
            <Grid key={index} size={{ xs: 12, md: 6}}>
              <InformationField 
                label={item.label}
                value={item.value}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* ADDRESS */}
      <Box>
        <InformationField 
          label="Complete Address" 
          value={`${houseNumber || ''} ${street || ''} ${barangay}, ${municipality}, ${province}`.trim()}
        />
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* REFERENCE NUMBER - PAYMENT */}
      <Box sx={{ 
        p: 2, 
        backgroundColor: '#f5f5f5',
        borderRadius: 2,
        border: '1px solid #e0e0e0'
      }}>
        <InformationField 
          label="Payment Reference Number" 
          value={referenceNumber}
        />
      </Box>
    </Box>
  )
}