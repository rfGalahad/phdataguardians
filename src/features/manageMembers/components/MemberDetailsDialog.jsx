import { useState } from 'react';
import { Close, Check, Person } from '@mui/icons-material';
import { Dialog, Box, Typography, Paper, Chip, Button, DialogTitle, IconButton, CircularProgress, Badge, Alert } from '@mui/material';

import picture1 from '../../../assets/pdgLogo.png';



export const MemberDetailsDialog = ({ 
  selectedMember, 
  close, 
  updatePaymentStatus,
  rejectLoading,
  confirmLoading,
}) => {
  
  const [imgLoading, setImgLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  const rejected = selectedMember.paymentStatus === 'Rejected';
  const pending = selectedMember.paymentStatus === 'Pending';
  const confirmed = selectedMember.paymentStatus === 'Confirmed';

  const isActive = selectedMember.membershipStatus === 'Active';

  const title = confirmed 
    ? `${selectedMember.id}` 
    : `Pending Member's Information`

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
          <Person/>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {title}
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
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2, p: 2 }}>
        {/* SELECTED MEMBER DETAILS */}
        <Box sx={{ display: 'flex', width: '100%', gap: 3 }}>
          {/* SELECTED MEMBER'S PHOTO ID & TIER */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2}}>
            <Paper sx={{ p: 0.5, borderRadius: 2}} >
              <Box sx={{ position: 'relative', height: 160, width: 160 }}>
                {/* Loading Spinner */}
                {imgLoading && !imgError && (
                  <Box 
                    sx={{ 
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <CircularProgress size={28} />
                  </Box>
                )}

                {/* Error / Fallback Image */}
                {imgError && (
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#999'
                    }}
                  >
                    <Typography>Image not available</Typography>
                  </Box>
                )}

                {/* Actual Image */}
                <Box
                  component='img'
                  src={selectedMember.photo || picture1}
                  onLoad={() => setImgLoading(false)}
                  onError={() => { setImgLoading(false); setImgError(true); }}
                  height={160}
                  width={160}
                  sx={{
                    borderRadius: 1.5,
                    display: imgError ? 'none' : 'block',
                    backgroundColor: "#f5f5f5",
                    objectFit: "contain"
                  }}
                />
              </Box>
            </Paper>
            <Chip label={selectedMember.tier} variant="outlined"  />
          </Box>

          {/* SELECTED MEMBER DETAILS */}
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'} }>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="caption" color="text.secondary" textTransform='uppercase' fontWeight={500}>
                Name
              </Typography>
              <Typography>
                {selectedMember.name}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="caption" color="text.secondary" textTransform='uppercase' fontWeight={500}>
                Email
              </Typography>
              <Typography>
                {selectedMember.email}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="caption" color="text.secondary" textTransform='uppercase' fontWeight={500}>
                Contact Number
              </Typography>
              <Typography>
                {selectedMember.contact || 'N/A'}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="caption" color="text.secondary" textTransform='uppercase' fontWeight={500}>
                Address
              </Typography>
              <Typography>
                {selectedMember.address || 'N/A'}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* PAYMENT REFERENCE */}
        <Box 
          sx={{ 
            mt: 1,
            position: 'relative',
            background: rejected ? '#FFE5E5' : pending ? '#FFF2DD' : '#D7FFD8', 
            border: rejected ? '1px solid #FF3A3A' : pending ? '1px solid #FFA000' : '1px solid #388E3C', 
            borderRadius: 1, 
            p: 2, 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography color={rejected ? 'error' : pending ? 'warning' : 'success'}>
            PAYMENT REFERENCE NUMBER
          </Typography>
          <Typography color={rejected ? 'error' : pending ? 'warning' : 'success'} fontWeight={600}>
            {selectedMember.paymentRef}
          </Typography>
          <Chip 
            label={selectedMember.paymentStatus} 
            color={ rejected ? 'error' : pending ? 'warning' : 'success'} 
            sx={{ position: 'absolute', top: -15, right: 20 }}
          />
        </Box>

        {/* MEMBERSHIP VALIDITY */}
        { confirmed && (
          <Box 
            sx={{ 
              mt: 1,
              position: 'relative',
              background: isActive ? '#D7FFD8' :'#FFE5E5', 
              border: isActive ? '1px solid #388E3C' : '1px solid #FF3A3A', 
              borderRadius: 1, 
              p: 2, 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Typography color={isActive ? 'success' : 'error'}>
              MEMBERSHIP VALIDITY
            </Typography>
            <Typography color={isActive ? 'success' : 'error'} fontWeight={600}>
              {selectedMember.confirmedDate} - {selectedMember.expirationDate} 
            </Typography>
            <Chip 
              label={selectedMember.membershipStatus} 
              color={isActive ? 'success' : 'error'} 
              sx={{ position: 'absolute', top: -15, right: 20 }}
            />
          </Box>
        )}

        { rejected && (
          <Alert 
            severity='info' 
            sx={{ 
              backgroundColor: '#e3f2fd',
              color: '#053261',
              '& .MuiAlert-icon': {
                color: '#053261'
              }
            }}
          >
            <Typography variant='body2'>
              Contact the email/number to confirm the payment reference number.
            </Typography>
          </Alert>
        )}
      </Box>

      {/* DIALOG ACTIONS */}
      { !confirmed && (
        <Box sx={{ p: 2, display: 'flex', gap: 2 }}>
          <Button 
            variant='contained' 
            color='error' 
            startIcon={rejectLoading ? '' : <Close />}
            disabled={selectedMember.paymentStatus === 'Rejected' || rejectLoading} 
            onClick={() => updatePaymentStatus(selectedMember.id, 'Rejected')}
            sx={{ width: '100%'}}
          >
            {rejectLoading ? (
              <>
                <CircularProgress size={20} sx={{ mr: 1 }} />
                Rejecting Payment... 
              </>
            ) : (
              'Reject Payment'
            )}
          </Button>

          <Button 
            variant='contained' 
            color='success' 
            startIcon={confirmLoading ? '' : <Check />} 
            disabled={selectedMember.paymentStatus === 'Confirmed' || confirmLoading}
            onClick={() => updatePaymentStatus(selectedMember.id, 'Confirmed')}
            sx={{ width: '100%'}}
          >
            {confirmLoading ? (
              <>
                <CircularProgress size={20} sx={{ mr: 1 }} />
                Confirming Payment... 
              </>
            ) : (
              'Confirm Payment'
            )}
          </Button>
        </Box>
      )}
    </Dialog>
  );
}