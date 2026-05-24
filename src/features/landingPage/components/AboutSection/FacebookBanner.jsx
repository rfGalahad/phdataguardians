import { Facebook as FacebookIcon } from '@mui/icons-material'
import {
  Box,
  Link,
  Typography,
} from '@mui/material';

import { PDG_BANNER } from '@/constants/cloudinaryConstants';
import { useAnimation } from '@/hooks/useAnimation';
import { getCloudinaryUrl } from "@/services/cloudinary";



export const FacebookBanner = () => {

  const { 
    animate,
    sectionRef
  } = useAnimation({ threshold: 0.1 });
  
  const pdgFacebookBanner = getCloudinaryUrl(PDG_BANNER);
  const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61578893785140';

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: 'relative',
        width: '100%',
        borderRadius: 2,
        overflow: 'hidden',
        ...animate(600),
      }}
    >
      <Box
        component='img'
        src={pdgFacebookBanner}
        sx={{ 
          width: '100%', 
          display: 'block', 
          borderRadius: 2 
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          borderRadius: 2,
        }}
      >
        <FacebookIcon sx={{ color: '#fff', fontSize: 40 }} />
        <Typography
          component={Link}
          href={FACEBOOK_URL}
          target='_blank'
          rel='noopener noreferrer'
          sx={{
            color: '#fff',
            fontWeight: 600,
            fontSize: '1rem',
            textDecoration: 'none',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          Visit our Facebook page
        </Typography>
      </Box>
    </Box>
  )
}