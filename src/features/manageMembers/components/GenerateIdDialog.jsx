import { useRef } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  Box,
  Typography,
  IconButton
} from '@mui/material';
import { 
  Print as PrintIcon, 
  Download as DownloadIcon, 
  CreditCard, 
  Close 
} from '@mui/icons-material';

import { IDTemplate } from './IDTemplate';



export const GenerateIdDialog = ({ 
  selectedMemberID,
  close
}) => {

  const printRef = useRef(null);

  const handlePrint = () => {
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write(printRef.current.innerHTML);
    printWindow.document.close();
    printWindow.print();
  };

  const handleDownload = () => {
    alert('Download functionality - integrate with your backend to generate image');
  };



  return (
    <Dialog 
      open={true} 
      onClose={close} 
      fullWidth 
    >
      {/* DIALOG TITLE */}
      <DialogTitle sx={{ 
        bgcolor: '#053261 ', 
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        py: 2
      }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center'}}>
          <CreditCard/>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Print ID
          </Typography>
        </Box>
        
        <IconButton
          aria-label='close'
          onClick={close}
          sx={{
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.2)',
            }
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      {/* DIALOG CONTENT */}
      <Box sx={{ py: 4, display: 'flex', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
        <IDTemplate selectedMember={selectedMemberID}/>
      </Box>

      {/* DIALOG ACTIONS */}
      <DialogActions sx={{ p: 2, gap: 1 }}>
        <Button
          onClick={handleDownload}
          variant="outlined"
          startIcon={<DownloadIcon />}
        >
          Download
        </Button>
        <Button
          onClick={handlePrint}
          variant="contained"
          startIcon={<PrintIcon />}
        >
          Print
        </Button>
      </DialogActions>
    </Dialog>
  );
}