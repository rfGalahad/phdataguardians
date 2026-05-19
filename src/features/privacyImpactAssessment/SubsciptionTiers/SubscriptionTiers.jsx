import { Box, Container, Stack, Typography } from '@mui/material';

import { TIERS } from '../constants';

import { TierCard } from './components/TierCard';



export const SubscriptionTiers = ({ isMobile }) => {

  return (
    <Box sx={{ backgroundColor: '#fff', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, color: '#053261' }}
            >
              Subscription {' '}
              <Box component="span" sx={{ color: '#FFA000' }}>
                Tiers
              </Box>
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: 'text.secondary' }}
            >
              {`Choose the plan that best fits your organization's size and compliance needs.`}
            </Typography>
          </Box>

          <Stack direction={isMobile ? 'column' : 'row'} spacing={4}  sx={{ mb: 4 }}>
            {TIERS.map((tier, i) => (
              <TierCard key={i} {...tier} index={i} />
            ))}
          </Stack>
        </Container>
      </Box>
  )
}