import { CheckCircle, ReportProblem } from '@mui/icons-material';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Divider,
} from '@mui/material';

// MODAL COMPONENT
export const ResultModal = ({ open, type, onClose }) => {

  const isSuccess = type === 'success';

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ textAlign: 'center', pb: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
          {isSuccess ? (
            <CheckCircle sx={{ fontSize: 48, color: '#10b981' }} />
          ) : (
            <ReportProblem sx={{ fontSize: 48, color: '#ef4444' }} />
          )}
        </Box>
        <Typography variant="h6" fontWeight="600">
          {isSuccess ? 'Submission Successful!' : 'Submission Failed'}
        </Typography>
      </DialogTitle>
      <Divider />
      <DialogContent sx={{ pt: 2 }}>
        <Typography color="textSecondary">
          {isSuccess
            ? 'Your registration has been submitted successfully. You will receive a confirmation email shortly.'
            : 'An error occurred while submitting your registration. Please try again or contact support.'}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button
          variant="contained"
          onClick={onClose}
          sx={{
            width: '100%',
            backgroundColor: isSuccess ? '#10b981' : '#ef4444',
            '&:hover': {
              backgroundColor: isSuccess ? '#059669' : '#dc2626',
            },
          }}
        >
          {isSuccess ? 'Done' : 'Close'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};