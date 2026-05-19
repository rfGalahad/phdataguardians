import { useState } from 'react';

import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useAnimation } from '@/hooks/useAnimation';




export const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  image, 
  imageLabel, 
  index, 
  link 
}) => {

  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const { sectionRef, animate } = useAnimation({ threshold: 0.1, triggerOnce: true });

  return (
    <Box
      ref={sectionRef}
      onClick={() => navigate(link)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRadius: 2,
        backgroundColor: '#FFFFFF',

        ...animate(index * 100),

        transform: isHovered 
          ? 'translateY(-6px)' 
          : 'translateY(0)',
        transition: `
          transform 0.3s ease, 
          box-shadow 0.3s ease`,
        
        boxShadow: isHovered
          ? '0px 12px 32px rgba(0,0,0,0.13)'
          : '0px 2px 8px rgba(0,0,0,0.08)',

        cursor: 'pointer'
      }}
    >
      {/* ── TOP: IMAGE SECTION ── */}
      <Box sx={{ position: 'relative', height: 150, overflow: 'visible' }}>
        {/* Image */}
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'filter 0.4s ease, transform 0.4s ease',
            filter: isHovered ? 'brightness(1)' : 'brightness(0.5)',
            transform: isHovered ? 'scale(1)' : 'scale(1.04)',
          }}
        />

        {/* Dark overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(5, 50, 97, 0.35)',
            transition: 'opacity 0.4s ease',
            opacity: isHovered ? 0 : 1,
            pointerEvents: 'none',
          }}
        />

        {/* Optional label badge — top left */}
        {imageLabel && (
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              backgroundColor: '#F7CF13',
              color: '#053261',
              fontSize: 11,
              fontWeight: 600,
              px: 1.5,
              py: 0.4,
              borderRadius: 10,
              letterSpacing: 0.5,
              textTransform: 'uppercase',
            }}
          >
            {imageLabel}
          </Box>
        )}

        {/* ── ICON BADGE — bottom left, overlapping the border ── */}
        <Box
          sx={{
            position: 'absolute',
            bottom: -24,
            left: 24,
            zIndex: 2,
            width: 48,
            height: 48,
            borderRadius: '10px',
            backgroundColor: isHovered ? '#053261' : '#F7CF13',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.35s ease, transform 0.35s ease',
            transform: isHovered ? 'scale(1.12)' : 'scale(1)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
        >
          {Icon &&
            <Icon
              sx={{
                fontSize: 24,
                color: isHovered ? '#F7CF13' : '#053261',
                transition: 'color 0.3s ease',
              }}
            />
          }
        </Box>
      </Box>

      {/* ── BOTTOM: CONTENT SECTION ── */}
      <Box
        sx={{
          pt: 5,
          px: 3,
          pb: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
          flex: 1,
          borderTop: isHovered ? '3px solid #053261' : '3px solid #F7CF13',
          transition: 'border-color 0.35s ease',
        }}
      >
        {/* Title */}
        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#053261' }}>
          {title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: '#404040',
            wordWrap: 'break-word',
            whiteSpace: 'normal',
            flex: 1,
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>

        {/* Learn More Button */}
        <Button
          sx={{
            justifyContent: 'flex-start',
            color: '#053261',
            p: 0,
            textTransform: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease',
            minWidth: 0,
          }}
        >
          Learn More
          <ArrowForward
            sx={{
              ml: isHovered ? 2 : 1,
              transition: 'margin-left 0.3s ease',
              fontSize: 16,
              color: '#053261',
            }}
          />
        </Button>
      </Box>
    </Box>
  );
};