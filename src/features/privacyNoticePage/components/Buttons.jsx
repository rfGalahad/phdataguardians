import { Link } from 'react-router-dom';

import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Tooltip } from '@mui/material';

export const Buttons = ({ proceed, handleNext }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        flexDirection: { xs: 'column-reverse', sm: 'row' },
      }}
    >
      <Button
        variant="outlined"
        component={Link}
        to="/"
        sx={{
          flex: { sm: '0 0 auto' },
          px: { xs: 2, sm: 3 },
          py: 1.4,
          borderColor: 'rgba(5,50,97,0.3)',
          color: '#053261',
          fontWeight: 600,
          borderRadius: 2,
          textTransform: 'none',
          fontSize: '0.9rem',
          transition: 'all 0.2s ease',
          '&:hover': {
            borderColor: '#053261',
            bgcolor: 'rgba(5,50,97,0.04)',
          },
        }}
      >
        Cancel
      </Button>

      <Tooltip
        title={!proceed ? 'Please confirm all items above to continue' : ''}
        placement="top"
        arrow
      >
        {/* Span needed so Tooltip works on disabled button */}
        <span style={{ flex: 1 }}>
          <Button
            fullWidth
            variant="contained"
            endIcon={<ArrowForward sx={{ fontSize: 17 }} />}
            onClick={handleNext}
            disabled={!proceed}
            sx={{
              py: 1.45,
              fontWeight: 700,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '0.95rem',
              background: proceed
                ? 'linear-gradient(135deg, #053261 0%, #1a6db5 100%)'
                : undefined,
              boxShadow: proceed ? '0 4px 18px -2px rgba(5,50,97,0.38)' : 'none',
              transition: 'all 0.2s ease',
              '&:not(:disabled):hover': {
                background: 'linear-gradient(135deg, #042a52 0%, #155fa0 100%)',
                boxShadow: '0 8px 28px -4px rgba(5,50,97,0.45)',
                transform: 'translateY(-1px)',
              },
              '&:not(:disabled):active': {
                transform: 'translateY(0)',
              },
            }}
          >
            Continue to Registration
          </Button>
        </span>
      </Tooltip>
    </Box>
  );
};