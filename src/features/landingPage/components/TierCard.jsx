import { Box,  Button,  Typography } from '@mui/material'
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


export const TierCard = ({ tier, cost }) => {

  const benefits = getInitialBenefits(tier);
  const TierIcon  = getIcon(tier);

  const isPopular = tier === 'Professionals';

  return (
    <Box
      sx={{
        position: 'relative',
        background: '#FFFFFF',
        border: isPopular ? '3px solid #F7CF13' : 'none',
        borderRadius: 2,
        p: 3,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      { isPopular ? (<Box sx={{
        position: 'absolute',
        top: -10,
        left: '50%', 
        transform: 'translateX(-50%)',

        backgroundColor: '#F7CF13', 
        borderRadius: 1,
        width: 'auto',
        px: 1,
        py: 0.5,
      }}>
        <Typography variant='body2' sx={{ color: '#053261', fontWeight: '600', textAlign: 'center' }}>
          POPULAR
        </Typography>
      </Box>) : null }

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {TierIcon}
        <Typography variant="subtitle1" sx={{ fontWeight: '600', color: '#053261', mb: 2 }}>
          {tier}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: '700', color: '#053261', mb: 1 }}>
            ₱{cost}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'semi-bold', color: '#8C8C8C', textAlign: 'center' }}>
            /Annual
          </Typography>
        </Box>
      </Box>

      <Box 
        sx={{
          minHeight: 150,
        }}
      >
        {benefits.map((benefit, index) => (
          <Box key={index} sx={{ display: 'flex', gap: 1, mb: 1 }}>
            <CheckIcon sx={{ fontSize: 16,  color: '#F7CF13' }}/>
            <Typography variant='caption'>
              {benefit}
            </Typography>
          </Box>
        ))} 
      </Box>

      <Button 
        variant='contained' 
        sx={{ 
          backgroundColor:  isPopular ? '#F7CF13' : '#053261', 
          color: isPopular ? '#053261' : '#F7CF13',
          fontWeight: isPopular ? '600' : '500',
        }}>
        Register
      </Button>
    </Box>
    
  )
}