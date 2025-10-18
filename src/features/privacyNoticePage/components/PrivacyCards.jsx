import { Box, Typography, Fade } from '@mui/material'
import {
  Lock as LockIcon,
  Visibility as VisibilityIcon,
  Storage as StorageIcon,
  VerifiedUser as VerifiedUserIcon
} from '@mui/icons-material';



export const PrivacyCards = () => {

  const privacyCards = [
    {
      icon: <StorageIcon sx={{ fontSize: 16, color: '#1976d2' }} />,
      title: 'Data Collection',
      description: 'We collect only essential information needed for registration',
      color: '#e3f2fd'
    },
    {
      icon: <LockIcon sx={{ fontSize: 16, color: '#2e7d32' }} />,
      title: 'Data Security',
      description: 'Your data is encrypted and stored securely',
      color: '#e8f5e9'
    },
    {
      icon: <VisibilityIcon sx={{ fontSize: 16, color: '#7b1fa2' }} />,
      title: 'Data Usage',
      description: 'Used solely for providing our services to you',
      color: '#f3e5f5'
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 16, color: '#d84315' }} />,
      title: 'Your Rights',
      description: 'Access, update, or delete your data anytime',
      color: '#fbe9e7'
    }
  ];

  return (
    <Box 
      sx={{
        display: 'flex', 
        flexDirection: 'column', 
        gap: 2, 
        py: 1,
        borderRadius: 2,
      }}
    >
      {privacyCards.map((detail, index) => (
        <Box
          key={index}
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 1, 
            p: 2,
            backgroundColor: `${detail.color}`, 
            borderRadius: 2,
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          }}
        >
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {detail.icon}
            <Typography variant='body1' fontWeight='600' color={`${detail.borderColor}`} textAlign='left'>
              {detail.title}
            </Typography>
          </Box>
          
          <Typography variant='body2' sx={{ textAlign: 'justify' }}>
            {detail.description}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}