import { Box, Divider, Typography } from '@mui/material';
import { School } from '@mui/icons-material';

import { Header } from '../Header';
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
      <Header title={'Membership Type'} icon={<School sx={{ color: '#053261' }}/>}/>
      
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
      </Box>

      {/* Form Buttons */}
      <FormButtons handleBack={handleBack} handleNext={handleSubmit} />      
    </Box>
  )
}