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
    isAnyLoading,
    handleChange,
    handleProceed,   
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