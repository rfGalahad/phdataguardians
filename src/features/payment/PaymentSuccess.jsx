import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  CheckCircleOutlined,
  EmailOutlined,
  Launch,
  LockOutlined,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Typography,
} from '@mui/material';


const STEPS = [
  {
    icon: <EmailOutlined sx={{ fontSize: 18, color: '#fff' }} />,
    label: 'Check your email',
    body: (
      <>
        We&apos;ve sent a <strong>temporary password</strong> to your email address.
        Check your inbox (and spam folder) for an email from PIA.
      </>
    ),
    delay: '0.45s',
  },
  {
    icon: <Launch sx={{ fontSize: 18, color: '#fff' }} />,
    label: 'Log in to PIA',
    body: (
      <>
        Click the button below to open the PIA app. Use your email and the
        temporary password to sign in.
      </>
    ),
    delay: '0.55s',
  },
  {
    icon: <LockOutlined sx={{ fontSize: 18, color: '#fff' }} />,
    label: 'Set a new password',
    body: (
      <>
        Once logged in, go to your profile settings and choose a permanent password.
        The temporary password expires in <strong>24 hours</strong>.
      </>
    ),
    delay: '0.65s',
  },
];

export const PaymentSuccess = () => {

  const navigate = useNavigate();
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const verify = async () => {
      const email = sessionStorage.getItem('checkout_email');
      const price = sessionStorage.getItem('checkout_price');
      const name  = sessionStorage.getItem('checkout_name');

      console.log('checkout data:', { email, price, name }); // debug

      if (!email || !price || !name) { navigate('/'); return; }

      setVerified(true);
      
      sessionStorage.removeItem('checkout_email');
      sessionStorage.removeItem('checkout_price');
      sessionStorage.removeItem('checkout_name');
    };
    verify();
  }, []);

  if (!verified) return null;

  return (
    <Box
      sx={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(160deg, #f0f5ff 0%, #e8f5e9 100%)',
        px: { xs: 2, md: 4 },
        py: { xs: 5, md: 6 },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: 440, md: 880 },
          bgcolor: '#fff',
          borderRadius: { xs: 3, md: 4 },
          boxShadow: '0 8px 48px -8px rgba(5,50,97,0.14), 0 2px 12px -2px rgba(5,50,97,0.08)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >

        <Box
          sx={{
            flex: { md: '0 0 42%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            background: 'linear-gradient(160deg, #053261 0%, #1a6db5 100%)',
            px: { xs: 3, md: 5 },
            py: { xs: 4, md: 6 },
          }}
        >
          {/* Icon with ripple */}
          <Box
            sx={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: 72, md: 96 },
              height: { xs: 72, md: 96 },
              mb: 3,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.6)',
                opacity: 0,
                animation: 'ripple 1.4s ease-out 0.35s forwards',
                '@keyframes ripple': {
                  '0%':   { transform: 'scale(0.85)', opacity: 0.6 },
                  '100%': { transform: 'scale(1.8)',  opacity: 0 },
                },
              }}
            />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                border: '2px solid rgba(255,255,255,0.25)',
                animation: 'popIn 0.45s cubic-bezier(0.175,0.885,0.32,1.275) both',
                '@keyframes popIn': {
                  '0%':   { transform: 'scale(0)', opacity: 0 },
                  '100%': { transform: 'scale(1)', opacity: 1 },
                },
              }}
            >
              <CheckCircleOutlined sx={{ fontSize: { xs: 38, md: 52 }, color: '#fff' }} />
            </Box>
          </Box>

          <Typography
            component="span"
            sx={{
              display: 'block',
              color: 'rgba(255,255,255,0.65)',
              fontWeight: 800,
              letterSpacing: 2.5,
              fontSize: '0.6rem',
              textTransform: 'uppercase',
              mb: 1,
              animation: 'fadeUp 0.4s ease 0.2s both',
              '@keyframes fadeUp': {
                '0%':   { transform: 'translateY(8px)', opacity: 0 },
                '100%': { transform: 'translateY(0)',   opacity: 1 },
              },
            }}
          >
            Payment Successful
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              lineHeight: 1.2,
              fontSize: { xs: '1.5rem', md: '2rem' },
              color: '#fff',
              mb: 1.5,
              animation: 'fadeUp 0.4s ease 0.3s both',
            }}
          >
            You&apos;re officially in! 🎉
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.7,
              maxWidth: 260,
              animation: 'fadeUp 0.4s ease 0.4s both',
            }}
          >
            Your subscription is now active. Follow the steps on the right to get started.
          </Typography>
        </Box>

        {/* ── RIGHT: Steps panel ───────────────────────────────────── */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            px: { xs: 3, sm: 4, md: 5 },
            py: { xs: 4, md: 5 },
          }}
        >
          {/* Steps */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2.5, md: 3 }, mb: { xs: 3.5, md: 4 } }}>
            {STEPS.map((step, i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'flex-start',
                  animation: `fadeUp 0.4s ease ${step.delay} both`,
                }}
              >
                <Box
                  sx={{
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #053261 0%, #1a6db5 100%)',
                    boxShadow: '0 4px 12px -2px rgba(5,50,97,0.28)',
                  }}
                >
                  {step.icon}
                </Box>

                <Box sx={{ pt: 0.25 }}>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 700, color: 'primary.main', mb: 0.35 }}
                  >
                    Step {i + 1} — {step.label}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.65 }}>
                    {step.body}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Divider */}
          <Box sx={{ height: '1px', bgcolor: 'grey.100', mb: { xs: 3, md: 3.5 } }} />

          {/* CTA */}
          <Button
            fullWidth
            variant="contained"
            size="large"
            href="https://app.pia.ph"
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<Launch sx={{ fontSize: 16 }} />}
            sx={{
              textTransform: 'none',
              fontWeight: 700,
              borderRadius: 2,
              py: 1.5,
              fontSize: '0.975rem',
              background: 'linear-gradient(135deg, #053261 0%, #1a6db5 100%)',
              boxShadow: '0 4px 18px -2px rgba(5,50,97,0.38)',
              animation: 'fadeUp 0.4s ease 0.7s both',
              transition: 'all 0.2s ease',
              '&:hover': {
                background: 'linear-gradient(135deg, #042a52 0%, #155fa0 100%)',
                boxShadow: '0 8px 28px -4px rgba(5,50,97,0.45)',
                transform: 'translateY(-1px)',
              },
              '&:active': { transform: 'translateY(0)' },
            }}
          >
            Go to PIA App
          </Button>

          {/* Footer note */}
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              textAlign: 'center',
              color: 'text.disabled',
              mt: 2,
              lineHeight: 1.6,
              animation: 'fadeUp 0.4s ease 0.8s both',
            }}
          >
            Need help?{' '}
            <Box
              component="a"
              href="mailto:support@pia.ph"
              sx={{
                color: 'primary.main',
                textDecoration: 'none',
                fontWeight: 600,
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Contact support
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};