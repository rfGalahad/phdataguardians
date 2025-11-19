import { Box, Button, CircularProgress } from "@mui/material"



export const FormButtons = ({ 
  submit = false, 
  disabled = false,
  loading = false,
  handleBack, 
  handleNext 
}) => {

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button 
        disabled={disabled}
        variant='outlined'
        onClick={handleBack}
        sx={{ 
          width: '100%',
          borderColor: '#053261', 
          color: '#053261', 
          '&:hover': { borderColor: '#042146', backgroundColor: 'rgba(4, 33, 70, 0.04)' } 
        }}
      >
        Back
      </Button>
      <Button 
        disabled={loading}
        variant='contained'
        onClick={handleNext} 
        sx={{
          width: '100%',
          backgroundColor: '#053261', 
          '&:hover': { backgroundColor: '#042146' } 
        }}
      >
        {loading ? (
          <>
            <CircularProgress size={20} sx={{ color: 'white', mr: 1 }} />
            {submit ? 'Submitting...' : 'Processing...'}
          </>
        ) : submit ? (
          'Submit'
        ) : (
          'Next'
        )}
      </Button>
    </Box>
  )
}