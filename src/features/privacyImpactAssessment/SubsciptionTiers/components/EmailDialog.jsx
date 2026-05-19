import {
  ArrowForward,
  Close,
  EmailOutlined,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';

import { dialogCloseButton } from '@/styles/token';

import { useEmailDialog } from '../hooks/useEmailDialog';


const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <path
        d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
        fill="#4285F4"
      />
      <path
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
        fill="#34A853"
      />
      <path
        d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
        fill="#FBBC05"
      />
      <path
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
        fill="#EA4335"
      />
    </g>
  </svg>
);

export const EmailDialog = ({
  open,
  onClose,   
  tierName,
  tierPrice, 
}) => {

  const { 
    email,
    error,
    loading,
    googleLoading,
    isAnyLoading,
    handleChange,
    handleProceed,   
    handleGoogleLogin,
    handleClose,
  } = useEmailDialog({ tierName, tierPrice });

  const handleDialogClose = () => {
    handleClose();
    onClose?.();
  };

  return (
    <Dialog
      open={open}
      onClose={handleDialogClose}
      PaperProps={{
        sx: {
          borderRadius: 3,
          p: 0,
          maxWidth: 420,
          width: '100%',
          overflow: 'hidden',
          boxShadow: '0 24px 64px -12px rgba(5,50,97,0.22), 0 4px 16px -4px rgba(5,50,97,0.12)',
        },
      }}
    >
      {/* Accent bar */}
      <Box sx={{ height: 4, background: 'linear-gradient(90deg, #053261 0%, #1a6db5 100%)' }} />

      <DialogContent sx={{ p: 4 }}>
        {/* Close button */}
        <IconButton 
          size="small" 
          sx={dialogCloseButton}
          onClick={handleDialogClose}
        >
          <Close fontSize="small" />
        </IconButton>

        {/* Header */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', letterSpacing: 2, fontWeight: 700 }}
          >
            {tierName} Plan
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5, lineHeight: 1.3 }}>
            Enter your email to continue
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.75 }}>
            {`We'll use this to create your account and send your receipt.`}
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Price reminder */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 3,
            px: 2,
            py: 1.5,
            borderRadius: 2,
            backgroundColor: 'rgba(5,50,97,0.04)',
            border: '1px solid',
            borderColor: 'rgba(5,50,97,0.1)',
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Subscription total
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main' }}>
            {tierPrice}
            <Typography component="span" variant="caption" sx={{ color: 'text.disabled', ml: 0.5 }}>
              /month
            </Typography>
          </Typography>
        </Box>

        {/* Google login */}
        <Button
          fullWidth
          variant="outlined"
          disabled={isAnyLoading}
          onClick={handleGoogleLogin}
          startIcon={!googleLoading && <GoogleIcon />}
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 1.5,
            py: 1.25,
            mb: 2,
            borderColor: 'rgba(0,0,0,0.23)',
            color: 'text.primary',
            backgroundColor: '#fff',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.03)',
              borderColor: 'rgba(0,0,0,0.4)',
            },
            '&:disabled': { opacity: 0.65 },
          }}
        >
          {googleLoading ? 'Redirecting…' : 'Continue with Google'}
        </Button>

        {/* Divider with "or" */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <Divider sx={{ flex: 1 }} />
          <Typography variant="caption" sx={{ color: 'text.disabled', whiteSpace: 'nowrap' }}>
            or continue with email
          </Typography>
          <Divider sx={{ flex: 1 }} />
        </Box>

        {/* Email field */}
        <TextField
          fullWidth
          type="email"
          label="Email address"
          placeholder="you@example.com"
          value={email}
          onChange={handleChange}
          onKeyDown={(e) => e.key === 'Enter' && handleProceed()}  // ✅ from hook
          error={Boolean(error)}
          helperText={error}
          disabled={isAnyLoading}
          autoFocus
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlined sx={{ fontSize: 18, color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 2.5,
            '& .MuiOutlinedInput-root': {
              borderRadius: 1.5,
              '&.Mui-focused fieldset': { borderColor: 'primary.main' },
            },
          }}
        />

        {/* CTA */}
        <Button
          fullWidth
          variant="contained"
          disabled={isAnyLoading}
          onClick={handleProceed}   // ✅ from hook
          endIcon={!loading && <ArrowForward sx={{ fontSize: 16 }} />}
          sx={{
            textTransform: 'none',
            fontWeight: 700,
            borderRadius: 1.5,
            py: 1.35,
            background: 'linear-gradient(135deg, #053261 0%, #1a6db5 100%)',
            boxShadow: '0 4px 12px -2px rgba(5,50,97,0.35)',
            '&:hover': {
              background: 'linear-gradient(135deg, #042a52 0%, #155fa0 100%)',
              boxShadow: '0 6px 18px -2px rgba(5,50,97,0.4)',
            },
            '&:disabled': { opacity: 0.65 },
          }}
        >
          {loading ? 'Redirecting to payment…' : 'Proceed to Payment'}
        </Button>

        {/* Reminder: Info Safe */}
        <Typography
          variant="caption"
          sx={{ display: 'block', textAlign: 'center', color: 'text.disabled', mt: 2 }}
        >
          Your info is safe. We never share your email with third parties.
        </Typography>
      </DialogContent>
    </Dialog>
  );
};