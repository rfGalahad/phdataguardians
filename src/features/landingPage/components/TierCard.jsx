import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box,  Button,  Typography, Grow } from '@mui/material'
import { 
  Check as CheckIcon, 
  School as SchoolIcon,
  Work as WorkIcon,
  Groups as GroupsIcon,
  Business as BusinessIcon
} from '@mui/icons-material'


const getIcon = (tier) => {
  switch (tier) {
    case 'Student/Academic':
      return <SchoolIcon sx={{ fontSize: 48, color: '#F7CF13', mb: 1 }}/>;
    case 'Professionals':
      return <WorkIcon sx={{ fontSize: 48, color: '#F7CF13', mb: 1 }}/>;;
    case 'Student Organization':
      return <GroupsIcon sx={{ fontSize: 48, color: '#F7CF13', mb: 1 }}/>;;
    case 'Institutional Organization':
      return <BusinessIcon sx={{ fontSize: 48, color: '#F7CF13', mb: 1 }}/>;;
    default:
      return <SchoolIcon sx={{ fontSize: 48, color: '#F7CF13', mb: 1 }}/>;;
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


export const TierCard = ({ tier, cost, isVisible }) => {

  const [isHovered, setIsHovered] = useState(false);

  const benefits = getInitialBenefits(tier);
  const TierIcon  = getIcon(tier);

  return (
    <Grow in={isVisible} timeout={1400} style={{ transformOrigin: '0 0 0' }}>
      <Box
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          height: '100%',
          position: 'relative',
          background: '#FFFFFF',
          borderRadius: 2,
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          border: '5px solid transparent',
          transition: 'all 0.3s ease-in-out',
          boxShadow: isHovered ? '0 8px 24px rgba(5, 50, 97, 0.15)' : '0 2px 8px rgba(0, 0, 0, 0.1)',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          '&:hover': {
            borderColor: '#F7CF13',
          },
        }}
      >
        {/* TIER HEADER */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
          {TierIcon}
          <Typography 
            variant="subtitle2" 
            sx={{ 
              fontWeight: 600, 
              color: '#053261', 
              mb: 2,
              textTransform: 'uppercase',
            }}
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

        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {/* BENEFITS LIST */}
          <Box>
            {benefits.map((benefit, index) => (
              <Box 
                key={index} 
                sx={{ 
                  display: 'flex', 
                  gap: 1.5, 
                  mb: 1.5,
                  alignItems: 'flex-start'
                }}
              >
                <CheckIcon 
                  sx={{ 
                    fontSize: 20,
                    color: '#F7CF13',
                    flexShrink: 0,
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
        
      </Box>
    </Grow>
  )
}