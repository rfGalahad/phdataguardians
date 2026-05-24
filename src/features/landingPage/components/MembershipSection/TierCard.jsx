import { useState } from 'react';
import { Link } from 'react-router-dom';

import { 
  Business, 
  Check as CheckIcon, 
  Groups, 
  School, 
  Work 
} from '@mui/icons-material';
import { 
  Box, 
  Button, 
  Typography 
} from '@mui/material';

import { LOGO_PDG_1 } from '@/constants/cloudinaryConstants';
import { getCloudinaryUrl } from '@/services/cloudinary';


const getIcon = (tier) => {
  switch (tier) {
    case 'Student/Academic':
      return <School sx={{ fontSize: 24, color: '#053261' }}/>;
    case 'Professionals':
      return <Work sx={{ fontSize: 24, color: '#053261' }}/>;;
    case 'Student Organization':
      return <Groups sx={{ fontSize: 24, color: '#053261' }}/>;;
    case 'Institutional Organization':
      return <Business sx={{ fontSize: 24, color: '#053261' }}/>;;
    default:
      return <School sx={{ fontSize: 24, color: '#053261' }}/>;;
  }
};

const getInitialBenefits = (tier) => {

    const studentBenefits = [
      'Access to free training sessions',
      'Free certificates and CPD units',
      'Announcements on free events',
      'PDG T-shirt and Membership ID'
    ];
    const professionalBenefits = [
      'All Student/Academic benefits',
      'Priority access to workshops',
      'Networking opportunities',
      'Professional development resources'
    ];
    const studentOrgBenefits = [
      'Group training sessions',
      'Bulk certificates',
      'Organization recognition',
      'Special group discounts'
    ];
    const institutionalOrgBenefits = [
      'Enterprise-level access',
      'Dedicated support',
      'Institutional partnerships'
    ];

    switch (tier) {
      case 'Student/Academic':
        return studentBenefits;
      case 'Professionals':
        return professionalBenefits;
      case 'Student Organization':
        return studentOrgBenefits;
      case 'Institutional Organization':
        return institutionalOrgBenefits;
      default:
        return [];
    }
}


export const TierCard = ({ tier, cost }) => {

  const [isHovered, setIsHovered] = useState(false);

  const PDGLogo = getCloudinaryUrl(LOGO_PDG_1);

  const benefits = getInitialBenefits(tier);
  const TierIcon  = getIcon(tier);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        background: '#FFFFFF',
        borderRadius: 2,
        p: 3,
        transition: 'all 0.3s ease-in-out',
        boxShadow: isHovered ? '0 8px 24px rgba(5, 50, 97, 0.15)' : '0 2px 8px rgba(0, 0, 0, 0.1)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        
      }}
    >
      {/* TIER HEADER */}
      <Box sx={{ display: 'flex', flexDirection: 'column', mb: 3 }}>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, background: '#BCD3EB', borderRadius: 2, mb: 2 }}>
          {TierIcon}
        </Box>

        <Typography 
          variant="body2" 
          sx={{ fontWeight: 600, color: '#053261', mb: 1 }}
        >
          {tier}
        </Typography>

        {/* PRICING */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
          <Typography 
            variant="h4" 
            component="span"
            sx={{ 
              fontWeight: 700, 
              color: '#053261',
              lineHeight: 1
            }}
          >
            ₱{cost}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              fontWeight: 500, 
              color: '#8C8C8C',
            }}
          >
            /Annual
          </Typography>
        </Box>
      </Box>

      {/* DIVIDER */}
      <Box 
        sx={{ 
          width: '100%', 
          height: '1px', 
          background: 'linear-gradient(90deg, transparent, #E0E0E0, transparent)',
          mb: 3
        }} 
      />

      <Box sx={{ zIndex: 1, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {/* BENEFITS LIST */}
        <Box>
          {benefits.map((benefit, index) => (
            <Box 
              key={index} 
              sx={{ 
                display: 'flex', 
                gap: 1, 
                mb: 1,
                alignItems: 'flex-start'
              }}
            >
              <CheckIcon 
                sx={{ 
                  fontSize: 16,
                  color: '#F7CF13',
                  mt: 0.2
                }}
              />
              <Typography 
                variant='body2'
                sx={{
                  color: '#424242',
                  lineHeight: 1.6
                }}
              >
                {benefit}
              </Typography>
            </Box>
          ))} 
        </Box>

        {/* REGISTER BUTTON */}
        <Button
          component={Link}
          to='/privacy-notice'
          variant='contained'
          fullWidth
          sx={{ 
            zIndex: 1,
            mt: 2,
            backgroundColor: 'white', 
            color: '#053261',
            border: '1px solid #053261',
            fontWeight: 600,
            py: 1.5,
            textTransform: 'none',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#053261',
              color: '#F7CF13',
            },
          }}
        >
          Register Now
        </Button>
      </Box>

      {/* PDG LOGO */}
      <Box
        component={'img'}
        src={PDGLogo}
        height={'60%'}
        width={'auto'}
        sx={{ 
          zIndex: 0,
          position: 'absolute', 
          bottom: '-80px', 
          right: {xs: 5, lg: '-40px' }, 
          opacity: 0.1
        }}
      />
    </Box>
  )
}