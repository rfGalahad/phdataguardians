import { Box, Divider, Typography } from '@mui/material';
import { School } from '@mui/icons-material';

import { MembershipTypeCard } from '../MembershipTypeCard';

import { FormButtons } from '../../../../components/FormButtons';
import { useMembership } from '../../hooks/useMembership';



export const MembershipType = ({ handleBack, handleNext }) => {

  const {
    selected,
    error,
    handleCardSelect,
    handleSubmit
  } = useMembership(handleNext);

  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <School sx={{ color: '#053261' }}/>
          <Typography variant='h5' fontWeight='600' color='#053261'>
            Membership Type
          </Typography>
        </Box>
        <Divider sx={{ borderColor: '#053261', borderBottomWidth: 2 }}/>
      </Box>
      
       {/* Form Content */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', gap: 2 }}> 
          <MembershipTypeCard 
            type={'Student/Academe'} 
            cost={'300'}
            isSelected={selected === 'Student/Academe'}
            onSelect={handleCardSelect} 
          />
          <MembershipTypeCard 
            type={'Professionals'} 
            cost={'500'} 
            isSelected={selected === 'Professionals'}
            onSelect={handleCardSelect} 
          />
        </Box>

        { error && (
          <Typography color='red'>
            Please choose a membership type
          </Typography>
        )}
        

        {/* Form Buttons */}
        <FormButtons handleBack={handleBack} handleNext={handleSubmit} />
      </Box>      
    </Box>
  )
}