import { Box, Button, CircularProgress } from "@mui/material"


export const FormButtons = ({ 
  submit = false, 
  disabled = false,
  loading = false,
  handleBack, 
  handleNext 
}) => {

  return (
    <Box sx={{ backgroundColor: 'rgba(5,50,97,0.04)', p:3, display: 'flex', flexDirection: { xs: 'column', md: 'row'}, gap: 1.5 }}>
      <Button 
        fullWidth
        disabled={disabled}
        variant='outlined'
        onClick={handleBack}
        sx={{ 
          px: { xs: 2, sm: 3 },
          py: 1.4,
          borderColor: 'rgba(5,50,97,0.3)',
          color: '#053261',
          fontWeight: 600,
          borderRadius: 1,
          textTransform: 'none',
          fontSize: '0.9rem',
          transition: 'all 0.2s ease',
          '&:hover': {
            borderColor: '#053261',
            bgcolor: 'rgba(5,50,97,0.04)',
          }, 
        }}
      >
        Back
      </Button>
      <Button 
        fullWidth
        disabled={loading}
        variant='contained'
        onClick={handleNext} 
        sx={{
          py: 1.45,
          fontWeight: 700,
          borderRadius: 1,
          textTransform: 'none',
          fontSize: '0.95rem',
          background: !disabled
            ? 'linear-gradient(135deg, #053261 0%, #1a6db5 100%)'
            : undefined,
          transition: 'all 0.2s ease',
          '&:not(:disabled):hover': {
            background: 'linear-gradient(135deg, #042a52 0%, #155fa0 100%)',
            transform: 'translateY(-1px)',
          },
          '&:not(:disabled):active': {
            transform: 'translateY(0)',
          },
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