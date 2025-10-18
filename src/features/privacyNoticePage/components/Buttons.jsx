import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';



export const Buttons = ({ agree, handleNext }) => {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button 
        variant='outlined'
        component={Link} 
        to='/'
        sx={{ flex: 1 }}
      >
        Cancel
      </Button>

      <Button 
        variant='contained' 
        endIcon={<ArrowForwardIcon/>}
        onClick={handleNext}
        disabled={!agree}
        sx={{ flex: 3 }}
      >
        Continue to Registration
      </Button>
    </Box>
  )
}