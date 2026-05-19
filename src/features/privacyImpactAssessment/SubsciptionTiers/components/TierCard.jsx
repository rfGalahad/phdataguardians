import { useEffect, useState } from 'react';

import { CheckCircleOutline } from '@mui/icons-material';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';

import { LOGO_PDG_1 } from '@/constants/cloudinaryConstants';
import { useAnimation } from '@/hooks/useAnimation';
import { getCloudinaryUrl } from '@/services/cloudinary';

import { EmailDialog } from './EmailDialog';
import { cardStyles, subscribeButtonStyles, watermarkStyles } from './TierCard.styles';



export const TierCard = ({ 
  name, 
  price, 
  description, 
  features, 
  index 
}) => {

  const { 
    isVisible, 
    sectionRef 
  } = useAnimation({ threshold: 0.3, triggerOnce: true });

  const pdgLogo = getCloudinaryUrl(LOGO_PDG_1);

  const [entered, setEntered] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => setEntered(true), index * 500 + 600);
    return () => clearTimeout(timer);
  }, [isVisible, index]);

  const handleSubscribeClick = () => { setDialogOpen(true) };


  return (
    <>
      <Box
        ref={sectionRef}
        sx={cardStyles({ isVisible, entered, index })}
      >
        {/* Tier Details */}
        <Box>
          {/* Tier */}
          <Typography 
            variant="overline" 
            sx={{ color: 'text.disabled', letterSpacing: 2 }}
          >
            {name}
          </Typography>

          {/* Price */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'baseline', 
              gap: 1, mt: 0.5 
            }}
          >
            <Typography 
              variant="h4" 
              sx={{ fontWeight: 700, color: 'primary.main' }}
            >
              ₱{price}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
              /month
            </Typography>
          </Box>

          {/* Description */}
          <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
            {description}
          </Typography>
        </Box>

        <Divider sx={{ borderColor: 'divider' }} />

        {/* Features */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 1.5, 
            flex: 1 
          }}
        >
          {features.map((feature) => (
            <Stack key={feature} spacing={1.5} direction='row' alignItems='center'>
              <CheckCircleOutline sx={{ fontSize: 18, color: 'secondary.dark', flexShrink: 0 }} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {feature}
              </Typography>
            </Stack>
          ))}
        </Box>

        {/* CTA - Subscribe */}
        <Button
          variant="outlined"
          fullWidth
          onClick={handleSubscribeClick}
          sx={subscribeButtonStyles}
        >
          Subscribe
        </Button>

        {/* PDG Watermark */}
        <Box
          component="img"
          src={pdgLogo}
          height="60%"
          width="auto"
          sx={watermarkStyles}
        />
      </Box>

      <EmailDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        tierName={name}
        tierPrice={price}
      />
    </>
  );
};