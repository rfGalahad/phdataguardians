import {
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';

import { Footer } from '../landingPage/components/footerSection/Footer';

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
      <Footer/>

    </Box>
  );
};