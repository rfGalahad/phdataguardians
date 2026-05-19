import { useEffect, useState } from 'react';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box, CircularProgress, Typography } from '@mui/material';

import { supabase } from '../../services/supabaseClient';
import { useCheckout } from '../privacyImpactAssessment/SubsciptionTiers/hooks/useCheckout';

const STEPS = [
  { key: 'signing-in',     label: 'Signing you in' },
  { key: 'creating-order', label: 'Creating your order' },
  { key: 'redirecting',    label: 'Redirecting to payment' },
];
const ORDER = ['signing-in', 'creating-order', 'redirecting'];

export const AuthCallback = () => {

  const [status, setStatus] = useState('signing-in');
  const { initiateCheckout } = useCheckout();

  useEffect(() => {
    const handleCallback = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        window.location.href = '/';
        return;
      }

      setStatus('creating-order');

      const params = new URLSearchParams(window.location.search);
      const price = params.get('price');
      const name = params.get('name');

      if (price && name) {
        setStatus('redirecting');
        await initiateCheckout({
          email: session.user.email,
          price,
          name,
        });
      } else {
        window.location.href = '/';
      }
    };

    handleCallback();
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, px: 4 }}>
      <CircularProgress size={48} thickness={4} />
      <Typography variant="h6" fontWeight={500}>Preparing your checkout</Typography>
      <Typography variant="body2" color="text.secondary" textAlign="center" maxWidth={280}>
        {`Please wait while we set things up. You'll be redirected shortly.`}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2, width: 220 }}>
        {STEPS.map(({ key, label }) => {
          const isDone   = ORDER.indexOf(status) > ORDER.indexOf(key);
          const isActive = status === key;
          return (
            <Box key={key} sx={{ display: 'flex', alignItems: 'center', gap: 1, color: isDone ? 'success.main' : isActive ? 'text.primary' : 'text.disabled' }}>
              {isDone   ? <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main' }} /> :
               isActive ? <FiberManualRecordIcon sx={{ fontSize: 12, color: 'primary.main', '@keyframes pulse': { '0%,100%': { opacity: 0.4 }, '50%': { opacity: 1 } }, animation: 'pulse 1.2s ease infinite' }} /> :
                          <RadioButtonUncheckedIcon sx={{ fontSize: 14 }} />}
              <Typography variant="body2">{label}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};