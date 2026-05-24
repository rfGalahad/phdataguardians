import { 
  CheckCircle as CheckCircleIcon, 
  Close as CloseIcon 
} from "@mui/icons-material";
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  IconButton,
  Typography 
} from "@mui/material";



export const SuccessDialog = ({ openSuccess, setOpenSuccess }) => {

  const handleClose = () => setOpenSuccess(false);

  return (
    <Dialog
      open={openSuccess}
      onClose={handleClose}
      maxWidth='sm'
      fullWidth
      aria-labelledby='success-dialog-title'
    >
      <IconButton
        aria-label='close'
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon/>
      </IconButton>

      <DialogTitle 
        id='success-dialog-title'
        sx={{ 
          fontWeight: 600, 
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          pt: 3,
          color: '#388E3C'
        }}
      >
        <CheckCircleIcon color='success' sx={{ fontSize: 24 }} />
        Message Sent!
      </DialogTitle>

      <DialogContent sx={{ px: 3 }}>
        <Typography variant='subtitle1' textAlign='center'>
          Thank you for reaching out. We will get back to you shortly.
        </Typography>
      </DialogContent>
    </Dialog>
  );
};