import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';



export const Buttons = ({ proceed, handleNext }) => {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button 
        variant='outlined'
        component={Link} 
        to='/'
        sx={{ flex: 1, borderColor: '#053261', color: '#053261' }}
      >
        Cancel
      </Button>

      <Button 
        variant='contained' 
        endIcon={<ArrowForwardIcon/>}
        onClick={handleNext}
        disabled={!proceed}
        sx={{ flex: 3, backgroundColor: '#053261' }}
      >
        Continue to Registration
      </Button>
    </Box>
  )
}