import { Box, Typography } from '@mui/material';

export const Header = () => {
  return (
    <Box mb={5} sx={{ textAlign: 'center' }}>
      <Typography
        variant='h4'
        sx={{
          fontSize: { xs: '1.5rem', md: '2.125rem' },
          color: 'common.white',
          fontWeight: 800,
          mb: 1.5,
        }}
      >
        Privacy Notice &amp;{' '}
        <Box component="span" sx={{ color: 'secondary.main' }}>
          Consent Form
        </Box>
      </Typography>

      <Typography
        variant='body1'
        sx={{ 
          fontSize: { xs: '0.875rem', md: '1rem' },
          color: 'rgba(255,255,255,0.65)' }}
      >
        Please read the following notice carefully before continuing with your membership application.
      </Typography>
    </Box>
  );
};