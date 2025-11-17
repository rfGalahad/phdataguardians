import { Box, Typography } from '@mui/material'
import GlareHover from '../../../../components/animations/GlareHover'



export const ContactDetailsItem = ({ icon: Icon, title, description }) => {
  return (
    <GlareHover
      glareColor="#ffffff"
      glareOpacity={0.3}
      glareAngle={-30}
      glareSize={200}
      transitionDuration={800}
      playOnce={false}
    >
    <Box 
      sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white
        backdropFilter: 'blur(10px)', // Glass blur effect
        WebkitBackdropFilter: 'blur(10px)', // Safari support
        border: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border
        borderRadius: 2, // Optional: rounded corners
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)', // Soft shadow

        width: '100%',
        display: 'flex', 
        flexDirection: 'column',
        px: 2, py: 1
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Icon sx={{ color: '#F7CF13'}}/>
        <Typography variant='subtitle1' sx={{ fontWeight: 600, color: '#F7CF13' }}>
          {title}
        </Typography>
      </Box>
      <Typography variant='subtitle1'>
        {description}
      </Typography>
    </Box>
    </GlareHover>
  )
}