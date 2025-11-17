import { useState } from 'react';
import { Box, Typography, Button, Grow } from '@mui/material';
import { ArrowForward } from '@mui/icons-material'



export const ServiceCard = ({ icon: Icon, title, description, index, isVisible }) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Grow
      in={isVisible}
      timeout={2000 + index * 150}
      style={{ transformOrigin: '0 0 0' }}
    >
      <Box
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          borderRadius: 2,
          p: 3,
          borderLeft: '5px solid #F7CF13',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          height: '100%',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: isHovered
            ? '0px 6px 18px rgba(0,0,0,0.12)'
            : '0px 2px 8px rgba(0,0,0,0.08)',
          cursor: 'pointer',
        }}
      >
        {/* BORDER ANIMATION */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '4px',
            background: 'linear-gradient(90deg, #F7CF13, #FFD54F)',
            transform: `scaleX(${isHovered ? 1 : 0})`,
            transformOrigin: 'left',
            transition: 'transform 0.4s ease'
          }}
        />

        {/* SERVICE ICON */}
        <Box
          sx={{
            backgroundColor: isHovered ? '#053261' : '#F0F4F8',
            borderRadius: 1,
            width: 48,
            p: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 0.35s ease',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        >
          <Icon
            sx={{
              fontSize: 24,
              color: isHovered ? '#F7CF13' : '#053261',
              transition: 'color 0.3s ease',
            }}
          />
        </Box>

        {/* SERVICE TITLE */}
        <Typography variant='h6' sx={{ fontWeight: 600, color: '#053261' }}>
          {title}
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          variant='subtitle1'
          sx={{
            color: '#404040',
            wordWrap: 'break-word',
            whiteSpace: 'normal',
            flex: 1,
            lineHeight: 1.5,
          }}
        >
          {description}
        </Typography>

        {/* LEARN MORE BUTTON */}
        <Button
          sx={{
            justifyContent: 'flex-start',
            color: '#053261',
            p: 0,
            textTransform: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease',
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
    </Grow>
    
  )
}