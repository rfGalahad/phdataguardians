import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ArrowBack, CheckCircleOutlined } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';

const keyframes = `
  @keyframes ripple {
    0%   { transform: scale(0.85); opacity: 0.5; }
    100% { transform: scale(1.9);  opacity: 0;   }
  }
  @keyframes popIn {
    0%   { transform: scale(0);   opacity: 0; }
    100% { transform: scale(1);   opacity: 1; }
  }
  @keyframes fadeUp {
    0%   { transform: translateY(10px); opacity: 0; }
    100% { transform: translateY(0);    opacity: 1; }
  }
  @keyframes fadeIn {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }
`;

export const PaymentSuccess = () => {

  const [verified, setVerified] = useState(false);
  const [checkoutData, setCheckoutData] = useState(null);

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));
  const hasRun = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const email = sessionStorage.getItem('checkout_email');
    const price = sessionStorage.getItem('checkout_price');
    const name = sessionStorage.getItem('checkout_name');

    if (!email || !price || !name) {
      navigate('/');
      return;
    }

    setCheckoutData({ email, price, name });
    setVerified(true);

    sessionStorage.removeItem('checkout_email');
    sessionStorage.removeItem('checkout_price');
    sessionStorage.removeItem('checkout_name');

  }, [navigate]);

  if (!verified) return null;

  return (
    <>
      <style>{keyframes}</style>

      <Container
        maxWidth='sm'
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 4
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {/* Animated check icon */}
          <Box
            sx={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: 72, md: 88 },
              height: { xs: 72, md: 88 },
              mb: { xs: 2.5, md: 3.5 },
            }}
          >
            {[{ delay: '0.35s' }, { delay: '0.85s' }].map((r, i) => (
              <Box
                key={i}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  border: '1.5px solid rgba(34,197,94,0.4)',
                  opacity: 0,
                  animation: `ripple 1.6s ease-out ${r.delay} forwards`,
                }}
              />
            ))}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: 'rgba(34,197,94,0.1)',
                border: '1.5px solid rgba(34,197,94,0.28)',
                animation: 'popIn 0.4s cubic-bezier(0.175,0.885,0.32,1.275) both',
              }}
            >
              <CheckCircleOutlined
                sx={{ fontSize: { xs: 36, md: 46 }, color: '#22c55e' }}
              />
            </Box>
          </Box>

          {/* Pill badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.75,
              px: 1.5,
              py: 0.5,
              borderRadius: '999px',
              border: '1px solid rgba(34,197,94,0.22)',
              bgcolor: 'rgba(34,197,94,0.07)',
              mb: 2,
              animation: 'fadeUp 0.4s ease 0.2s both',
            }}
          >
            <Box
              sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#22c55e' }}
            />
            <Typography
              sx={{
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.13em',
                textTransform: 'uppercase',
                color: '#22c55e',
              }}
            >
              Payment confirmed
            </Typography>
          </Box>

          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            sx={{
              fontWeight: 800,
              color: 'text.primary',
              mb: 1,
              letterSpacing: '-0.02em',
              animation: 'fadeUp 0.4s ease 0.3s both',
            }}
          >
            You&apos;re officially in!
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              animation: 'fadeUp 0.4s ease 0.4s both',
            }}
          >
            Your subscription is now active. We’ve sent a <strong>link</strong> to {checkoutData.email} so you can change your password. Please check your inbox and spam folder for an email from Philippine Data Guardians.
          </Typography>
        </Box>

        <Button
          component={Link}
          to="/"
          startIcon={<ArrowBack sx={{ fontSize: 15 }} />}
          sx={{
            mt: 3,
            textTransform: 'none',
            fontWeight: 600,
            color: 'text.secondary',
            animation: 'fadeUp 0.4s ease 0.55s both',
            '&:hover': { bgcolor: 'transparent', color: 'text.primary' },
          }}
        >
          Back to Homepage
        </Button>

        {/* CTA row */}
        <Typography
          variant="caption"
          sx={{ 
            color: 'text.disabled', 
            textAlign: 'center',
            animation: 'fadeUp 0.4s ease 0.75s both', }}
        >
          Didn&apos;t get the email? Check your spam folder.
        </Typography>
      </Container>
    </>
  );
};