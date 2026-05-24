import { Box, Typography } from '@mui/material';

export const Header = ({ isMobile }) => {
  return (
    <Box mb={5} sx={{ textAlign: 'center' }}>
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        sx={{
          color: '#fff',
          fontWeight: 800,
          mb: 1.5,
        }}
      >
        Privacy Notice &amp;{' '}
        <Box component="span" sx={{ color: '#F7CF13' }}>
          Consent Form
        </Box>
      </Typography>

      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        sx={{ color: 'rgba(255,255,255,0.65)' }}
      >
        Please read the following notice carefully before continuing with your membership application.
      </Typography>
    </Box>
  );
};