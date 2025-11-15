import { useState } from 'react';
import { Box, Typography, Checkbox } from "@mui/material"



export const AgreeCheckbox = ({ agree }) => {

  const [checkedItems, setCheckedItems] = useState({
    0: false,
    1: false,
    2: false,
    3: false
  });

  const items = [
    'Consent to the collection and processing of my personal data for membership-related purposes.',
    'Acknowledge that I may access, update, or request the deletion of my personal data by contacting PDG.',
    'Understand that I may withdraw my consent anytime, subject to applicable laws and PDG policies.',
    'hereby certify that the information I provided is true and correct to the best of my knowledge.'
  ]

  const handleChange = (index) => (event) => {
    const newCheckedItems = {
      ...checkedItems,
      [index]: event.target.checked
    };
    setCheckedItems(newCheckedItems);
    
    // Check if all items are checked
    const allChecked = Object.values(newCheckedItems).every(value => value === true);
    agree(allChecked);
  };

  const allChecked = !Object.values(checkedItems).every(value => value === true);


  return (
    <Box>
      <Typography variant='h6' sx={{ textAlign: 'left', mb: 2, fontWeight: '600' }}>
        By signing this form, I:
      </Typography>
    
      {items.map((item, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: {xs: 'flex-start', md: 'center'}, textAlign: 'left', mb: 2 }}>
          <Checkbox checked={checkedItems[index]} onChange={handleChange(index)}/>
          <Typography variant='subtitle1'>
            {item}
          </Typography>
        </Box>
      ))}

      {allChecked && (
        <Typography variant='subtitle2' textAlign={'left'} sx={{ mt: 2, fontStyle: 'italic', color: 'red' }}>
          Please check all the box to proceed.
        </Typography>
      )}
    </Box>
  )
}