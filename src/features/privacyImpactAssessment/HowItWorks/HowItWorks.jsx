import { Box, Container, Stack, Typography } from '@mui/material';

import { STEPS } from '../constants';

import { StepCard } from './components/StepCard';
import { StepLine } from './components/StepLine';
import { useStepAnimation } from './useStepAnimation';



export const HowItWorks = ({ isMobile }) => {

  const { allComplete, onStepVisible } = useStepAnimation(STEPS.length);

  return (
    <Box sx={{ backgroundColor: '#F7F9FC', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* HEADING */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography
            variant={isMobile ? "h5" :"h4"}
            sx={{ fontWeight: 600, color: '#053261' }}
          >
            How It {' '}
            <Box component="span" sx={{ color: '#FFA000' }}>
              Works
            </Box>
          </Typography>
          <Typography
            variant={isMobile ? "subtitle2" : "subtitle1"}
            sx={{ color: 'text.secondary' }}
          >
            A streamlined, automated workflow to achieve full DPA compliance in three steps.
          </Typography>
        </Box>

        {/* STEPS */}
        <Stack 
          position="relative"
          direction={isMobile ? 'column' : 'row'} 
          alignItems={'center'}
        >
          {/* ANIMATED LINE */}
          {!isMobile && (
            <>
              <StepLine
                left={'calc(16.66% + 32px)'}
                width={'calc(33.33% - 32px)'}
                delay={0 * 0.5 + 0.3 + 0.6}
                active={allComplete}
              />
              <StepLine
                left={'calc(50% + 32px)'}
                width={'calc(33.33% - 32px)'}
                delay={1 * 0.5 + 0.3 + 0.6}
                active={allComplete}
              />
            </>
          )}

          {/* STEP CARDS */}
          <Box 
            sx={{ 
              width: '100%',
              display: 'flex', 
              flexDirection: {xs: 'column', md: 'row'}, 
              alignItems: {xs: 'center', md: 'stretch'},
              gap: {xs: 3, md: 0} 
            }}
          >
          {STEPS.map((step, index) => (
            <StepCard
              key={index}
              {...step}
              index={index}
              allComplete={allComplete}
              onIconVisible={onStepVisible}
              isMobile={isMobile}
            />
          ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}