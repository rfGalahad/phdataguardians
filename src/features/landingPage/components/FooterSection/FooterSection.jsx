import { 
  Box, 
  Container, 
  Divider,  
  Link, 
  Typography 
} from '@mui/material';

import { CompanyDetails } from './CompanyDetails';
import { ContactInformation } from './ContactInformation';
import { QuickLinks } from './QuickLinks';


export const FooterSection = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.main' }}>
      <Container maxWidth='lg' sx={{ py: 4, color: 'background.paper' }}>
        {/* TOP SECTION */}
        <Box sx={{ display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, gap: 4 }}>
          {/* COMPANY DETAILS */}
          <CompanyDetails />
          
          {/* QUICK LINKS */}
          <QuickLinks />

          {/* CONTACT INFO */}
          <ContactInformation />
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', my: 3 }}/>
        
        {/* BOTTOM SECTION */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2
        }}>
          {/* COPYRIGHT NOTICE */}
          <Typography 
            variant='body2' 
            sx={{ textAlign: { xs: 'center', sm: 'left' } }}
          >
            © 2026 Philippine Data Guardians. All rights reserved.
          </Typography>

          {/* ADMIN LOGIN LINK */}
          <Link
            href='/admin/login'
            underline='hover'
            sx={{
              cursor: 'pointer',
              color: 'secondary.main',
              fontSize: '0.875rem',
              transition: 'all 0.3s ease',
              '&:hover': {
                opacity: 0.8,
              }
            }}
          >
            ®
          </Link>

          {/* TAGLINE */}
          <Typography 
            variant='body2' 
            sx={{ 
              color: 'secondary.main', 
              textAlign: { xs: 'center', sm: 'right' } 
            }}
          >
            Securing your digital future.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}