import { useEffect } from 'react';

import { Box, Stack, Typography } from '@mui/material';

import { useAnimation } from "@/hooks/useAnimation";



export const StepCard = ({ icon: Icon, color, backgroundColor, title, description, index, allComplete, onIconVisible }) => {

  const { isVisible, sectionRef } = useAnimation({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (isVisible) {
      const delay = (index * 0.5 + 0.4) * 300;
      const timer = setTimeout(onIconVisible, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index, onIconVisible]);

  return (
    <Box
      ref={sectionRef}
      sx={{

        
        width: '100%',
        zIndex: 2,
        position: 'relative',
        
        display: 'flex',
        flexDirection: {xs: 'row' ,md: 'column'},
        alignItems: 'center',
        justifyContent: {xs: 'center', md: 'flex-start'},
        gap: 3,

        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translateY(0)'
          : 'translateY(28px)',

        transition: `
          opacity 0.6s ease ${index * 0.4}s,
          transform 0.6s ease ${index * 0.4}s
        `,
      }}
    >
      <Box 
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        {/* Step badge */}
        <Typography
          variant="overline"
          sx={{
            fontSize: '0.6875rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: 'text.disabled',
            lineHeight: 1,
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </Typography>

        {/* Icon */}
        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            backgroundColor: allComplete ? backgroundColor : '#C9DBEE',
            border:  `2px solid ${color}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,

            transition: `
              background-color 0.6s ease ${0.6 + index * 0.4}s
            `,
          }}
        >
          {Icon && (
            <Icon
              sx={{
                color: allComplete ? color : 'primary.light',
                fontSize: 28,

                transition: `
                  color 0.6s ease ${0.6 + index * 0.4}s
                `,
              }}
            />
          )}
        </Box>
      </Box>

      {/* Text */}
      <Stack
        sx={{
          
          maxWidth: 250,
          alignItems: {xs: 'flex-start', md: 'center'},
          justifyContent: 'flex-start',
          opacity: allComplete ? 1 : 0,
          transform: allComplete ? 'translateY(0)' : 'translateY(12px)',
          transition: `
            opacity 0.6s ease ${0.6 + index * 0.4}s, 
            transform 0.6s ease ${0.6 + index * 0.4}s`,
        }}
      >
        <Typography variant="subtitle1" sx={{ textAlign: {sm: 'left', md: 'center'}, fontWeight: 600, color: 'primary.main' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ textAlign: {sm: 'left', md: 'center'}, color: 'text.secondary' }}>
          {description}
        </Typography>
      </Stack>
    </Box>
  );
};