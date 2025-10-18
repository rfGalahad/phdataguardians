import { Box, Typography } from '@mui/material'
import { 
  Check as CheckIcon, 
  School as SchoolIcon,
  Work as WorkIcon
} from '@mui/icons-material'
import { useState } from 'react';

const getIcon = (type) => {
  switch (type) {
    case 'Student/Academe':
      return <SchoolIcon sx={{ fontSize: 48, color: '#F7CF13', mb: 1 }}/>;
    case 'Professionals':
      return <WorkIcon sx={{ fontSize: 48, color: '#F7CF13', mb: 1 }}/>;;
    default:
      return <SchoolIcon sx={{ fontSize: 48, color: '#F7CF13', mb: 1 }}/>;;
  }
};

const getInitialBenefits = (type) => {
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

    switch (type) {
      case 'Student/Academe':
        return studentBenefits;
      case 'Professionals':
        return professionalBenefits;
      default:
        return [];
    }
}


export const MembershipTypeCard = ({ type, cost, isSelected, onSelect }) => {

  const benefits = getInitialBenefits(type);
  const TypeIcon  = getIcon(type);

  const handleClick = () => {
    onSelect(type, cost);
  };


  return (
    <Box
      onClick={handleClick}
      sx={{
        width: '100%',
        position: 'relative',
        background: '#FFFFFF',
        border: isSelected ? '3px solid #F7CF13' : '1px solid #053261',
        borderRadius: 2,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          cursor: 'pointer',
          background: 'rgba(5, 50, 97, 0.1)'
        }
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {TypeIcon}
        <Typography variant="subtitle1" sx={{ fontWeight: '600', color: '#053261', mb: 2 }}>
          {type}
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
            <CheckIcon sx={{ color: '#F7CF13' }}/>
            <Typography variant='body1' sx={{ color: '#053261'}}>
              {benefit}
            </Typography>
          </Box>
        ))} 
      </Box>
    </Box>
  )
}