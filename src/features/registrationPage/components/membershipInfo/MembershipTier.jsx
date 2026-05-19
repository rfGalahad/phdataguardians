import { School } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';

import { FormButtons } from '@/components/ui/buttons/FormButtons';

import { useMembership } from '../../hooks/useMembership';
import { Header } from '../Header';

import { MembershipTierCard } from './MembershipTierCard';



export const MembershipTier = ({ handleBack, handleNext }) => {

  const {
    selected,
    error,
    handleCardSelect,
    handleSubmit
  } = useMembership(handleNext);  

  return (
    <Box sx={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* HEADER */}
      <Header 
        title={'Membership Tier'} 
        icon={<School sx={{ color: '#053261' }}/>}
      />
      
      {/* FORM CONTENT */}
      <Stack spacing={2} px={3}>
        <Box sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, gap: 2 }}> 
          <MembershipTierCard 
            tier={'Student/Academe'} 
            cost={'300'}
            isSelected={selected === 'Student/Academe'}
            onSelect={handleCardSelect} 
          />
          <MembershipTierCard 
            tier={'Professionals'} 
            cost={'500'} 
            isSelected={selected === 'Professionals'}
            onSelect={handleCardSelect} 
          />
        </Box>

        {/* ERROR MESSAGE */}
        { error && (
          <Typography color='red'>
            Please choose a tier
          </Typography>
        )}
      </Stack>

      {/* FORM BUTTONS */}
      <FormButtons handleBack={handleBack} handleNext={handleSubmit} />      
    </Box>
  )
}