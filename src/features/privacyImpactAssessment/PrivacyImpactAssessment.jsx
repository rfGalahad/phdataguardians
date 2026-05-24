import {
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';

import { FooterSection } from '../landingPage/components/FooterSection';

import { HeroSection } from './HeroSection';
import { HowItWorks } from './HowItWorks';
import { SubscriptionTiers } from './SubsciptionTiers';



export const PrivacyImpactAssessment = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      {/* ── HERO ── */}
      <HeroSection isMobile={isMobile}/>

      {/* ── HOW IT WORKS ── */}
      <HowItWorks isMobile={isMobile}/>

      {/* ── SUBSCRIPTION TIERS ── */}
      <SubscriptionTiers isMobile={isMobile}/>

      {/* ── FOOTER ── */}
      <FooterSection/>

    </Box>
  );
};