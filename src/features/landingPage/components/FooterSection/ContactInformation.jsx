import { Email, LocationOn, Phone } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';


const CONTACT_INFO = [
  { icon: <LocationOn sx={{ fontSize: 18 }}/>, text: 'C5 Ext. Paranaque City, Metro Manila'},
  { icon: <Phone sx={{ fontSize: 18 }}/>, text: '(+63) 929 344 5296'},
  { icon: <Email sx={{ fontSize: 18 }}/>, text: 'members@phdataguardians.org'}
];


export const ContactInformation = () => {

  return (
    <Stack direction='column' spacing={2} sx={{ flex: 1 }}>
      {/* Header */}
      <Typography variant='subtitle1' fontWeight='bold' sx={{ color: 'secondary.main' }}>
        Contact Us
      </Typography>

      {/* Contact Details */}
      <Stack direction='column' spacing={1}>
        {CONTACT_INFO.map((info, index) => (
          <Stack key={index} direction='row' spacing={1} alignItems='start'>
            <Box sx={{ color: 'secondary.main' }}>
              {info.icon}
            </Box>
            <Typography variant='body2'>
              {info.text}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}