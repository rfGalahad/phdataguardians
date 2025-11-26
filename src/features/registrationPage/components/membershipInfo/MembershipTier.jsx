import { Box, Typography } from '@mui/material';
import { School } from '@mui/icons-material';

import { Header } from '../Header';
import { MembershipTierCard } from './MembershipTierCard';
import { FormButtons } from '../../../../components/ui/FormButtons';

import { useMembership } from '../../hooks/useMembership';



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
      <Header title={'Membership Tier'} icon={<School sx={{ color: '#053261' }}/>}/>
      
      {/* FORM CONTENT */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: {xs: 'column',md: 'row'}, gap: 2 }}> 
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
      </Box>

      {/* FORM BUTTONS */}
      <FormButtons handleBack={handleBack} handleNext={handleSubmit} />      
    </Box>
  )
}