import { Box, Typography } from '@mui/material';

import { LOGO_BPI, LOGO_GCASH, QR_BPI, QR_GCASH } from '@/constants/cloudinaryConstants';
import { getCloudinaryUrl } from '@/services/cloudinary';



export const QRDetails = () => {

  const BankQR = getCloudinaryUrl(QR_BPI);
  const GCashQR = getCloudinaryUrl(QR_GCASH);
  const BankLogo = getCloudinaryUrl(LOGO_BPI);
  const GCashLogo = getCloudinaryUrl(LOGO_GCASH);

  return (
    <Box sx={{ px: 3, width: '100%', display: 'flex', flexDirection: {xs: 'column', md: 'row'}, gap: 4 }}>
      {/* GCash Details */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #1550CF', borderRadius: 2, overflow: 'hidden' }}>
        {/* Header */}
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 2, backgroundColor: '#1550CF', py: 1, px: 2 }}>
          <Box
            component={'img'}
            src={GCashLogo}
            height={24} 
          />
          <Typography variant='subtitle1' sx={{ fontWeight: '600' }}>
            GCash Details
          </Typography>
        </Box>

        {/* GCash Info */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2}}>
          <Typography variant='subtitle1' color='#6395FF'>
            GCash Number
          </Typography>
          <Typography variant='subtitle1' color='#1550CF' fontWeight={600}>
            0929 344 5296
          </Typography>
        </Box>

        {/* QR Code */}
        <Box
          component={'img'}
          src={GCashQR}
          height={250} 
        /> 

        {/* GCash Info */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2}}>
          <Typography variant='subtitle1' color='#1550CF' fontWeight={600}>
            PDG-Member
          </Typography>
          <Typography variant='subtitle1' color='#6395FF'>
            RA**L O.
          </Typography>
        </Box>
      </Box>

      {/* Bank Details */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #E92B2B', borderRadius: 2, overflow: 'hidden' }}>
        {/* Header */}
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 2, backgroundColor: '#E92B2B', py: 1, px: 2 }}>
          <Box
            component={'img'}
            src={BankLogo}
            height={24} 
          />
          <Typography variant='subtitle1' sx={{ fontWeight: '600' }}>
            Bank Details
          </Typography>
        </Box>

        {/* Bank Info */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2}}>
          <Typography variant='subtitle1' color='#FF8080'>
            Account Number
          </Typography>
          <Typography variant='subtitle1' color='#E92B2B' fontWeight={600}>
            3629272908
          </Typography>
        </Box>

        {/* QR Code */}
        <Box
          component={'img'}
          src={BankQR}
          height={250} 
        /> 

        <Typography variant='subtitle1' color='#E92B2B' textAlign='center' fontWeight={600}>
          PDG
        </Typography>
      </Box>
    </Box>
   
  )
}