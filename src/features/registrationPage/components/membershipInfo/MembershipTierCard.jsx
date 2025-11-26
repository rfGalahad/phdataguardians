import { Box, Typography } from '@mui/material'
import { 
  Check as CheckIcon, 
  School as SchoolIcon,
  Work as WorkIcon
} from '@mui/icons-material'

const TIERS = {
  'Student/Academe': {
    icon: SchoolIcon,
    color: '#F7CF13',
    accentColor: '#FFF8DC',
    benefits: [
      'Access to free training sessions',
      'Free certificates and CPD units',
      'Announcements on free events',
      'PDG T-shirt and Membership ID'
    ]
  },
  'Professionals': {
    icon: WorkIcon,
    color: '#F7CF13',
    accentColor: '#FFF8DC',
    benefits: [
      'All Student/Academic benefits',
      'Priority access to workshops',
      'Networking opportunities',
      'Professional development resources'
    ]
  }
};

export const MembershipTierCard = ({ tier, cost, isSelected, onSelect }) => {

  const tierData = TIERS[tier] || TIERS['Student/Academe'];
  const TierIcon = tierData.icon;
  const benefits = tierData.benefits;

  const handleClick = () => { onSelect(tier, cost) };

  return (
    <Box
      onClick={handleClick}
      sx={{
        width: '100%',
        border: isSelected ? `2px solid ${tierData.color}` : '2px solid #E8E8E8',
        borderRadius: 3,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          background: tierData.accentColor,
          border: `2px solid ${tierData.color}`,
          boxShadow: `0 8px 24px rgba(247, 207, 19, 0.15)`,
        }
      }}
    >
      {/* HEADER */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
        <Box sx={{ 
          background: tierData.accentColor, 
          p: 1.5, 
          borderRadius: '50%',
          mb: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <TierIcon sx={{ fontSize: 40, color: tierData.color }} />
        </Box>
        
        <Typography 
          variant="h6" 
          sx={{ fontWeight: 700, color: '#053261', mb: 1, textAlign: 'center' }}
        >
          {tier}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5, mb: 3 }}>
          <Typography 
            variant="h3" 
            sx={{ fontWeight: 800, color: tierData.color }}
          >
            ₱{cost}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ fontWeight: 600, color: '#8C8C8C' }}
          >
            /year
          </Typography>
        </Box>
      </Box>

      {/* DIVIDER */}
      <Box sx={{ 
        height: 2, 
        background: `linear-gradient(90deg, transparent, ${tierData.color}, transparent)`,
        mb: 2.5
      }} />

      {/* BENEFITS */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {benefits.map((benefit, index) => (
          <Box key={index} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
            <CheckIcon 
              sx={{ 
                color: tierData.color, 
                fontSize: 20,
                flexShrink: 0,
                mt: 0.3
              }}
            />
            <Typography 
              variant='body2' 
              sx={{ color: '#053261', lineHeight: 1.4, fontWeight: 500 }}
            >
              {benefit}
            </Typography>
          </Box>
        ))} 
      </Box>

      {/* CTA BUTTON */}
      <Box sx={{ mt: 'auto', pt: 2.5 }}>
        <Box
          sx={{
            width: '100%',
            py: 1.2,
            px: 2,
            background: isSelected 
              ? `linear-gradient(135deg, ${tierData.color}, #FFD700)` 
              : 'rgba(5, 50, 97, 0.08)',
            color: isSelected ? '#053261' : '#053261',
            
            borderRadius: 2,
            fontWeight: 600,
            fontSize: '0.95rem',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: `linear-gradient(135deg, ${tierData.color}, #FFD700)`,
              color: '#053261',
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 16px rgba(247, 207, 19, 0.25)'
            }
          }}
        >
          {isSelected ? '✓ Selected' : 'Select'}
        </Box>
      </Box>
    </Box>
  )
}