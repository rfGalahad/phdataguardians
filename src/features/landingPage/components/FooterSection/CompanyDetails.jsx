import { 
  Facebook, 
  LinkedIn,  
} from '@mui/icons-material';
import { 
  Box, 
  IconButton, 
  Stack, 
  Typography 
} from '@mui/material';

import { LOGO_PDG_1 } from '@/constants/cloudinaryConstants';
import { getCloudinaryUrl } from '@/services/cloudinary';


const SOCIAL_LINKS = [
  { 
    icon: <Facebook />, 
    url: 'https://www.facebook.com/profile.php?id=61578893785140',
    label: 'Facebook'
  },
  { 
    icon: <LinkedIn />, 
    url: 'https://www.linkedin.com/company/philippine-data-guardians/',
    label: 'LinkedIn'
  }
];

export const CompanyDetails = () => {

  const PDGLogo = getCloudinaryUrl(LOGO_PDG_1); 

  return (
    <Stack direction='column' spacing={2} sx={{ flex: 2 }}>
      {/* Company Info */}
      <Stack direction='row' spacing={1} alignItems='center'>
        <Box
          component='img'
          src={PDGLogo}
          alt='Logo'
          sx={{ height: 24 }}
        />
        <Typography
          variant='subtitle1'
          component='div'
          sx={{ fontWeight: 'bold', fontSize: { xs: '0.875rem', md: '1rem' } }}
        >
          PHILIPPINE DATA <span style={{ color: '#F7CF13' }}>GUARDIANS</span>
        </Typography>
      </Stack>

      {/* Tagline */}
      <Typography variant='body2' sx={{ textAlign: 'justify', lineHeight: 1.7 }}>
        Protecting your data, ensuring compliance, and empowering secure operations in the digital world.
      </Typography>
      
      {/* Social Media Icons */}
      <Stack direction='row' spacing={1} sx={{ mt: 1 }}>
        {SOCIAL_LINKS.map((social) => (
          <IconButton
            key={social.label}
            component='a'
            href={social.url}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={social.label}
            sx={{
              color: '#FFFFFF',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                backgroundColor: '#F7CF13',
                color: 'primary.main',
                transform: 'translateY(-3px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            {social.icon}
          </IconButton>
        ))}
      </Stack>
    </Stack>
  )
}