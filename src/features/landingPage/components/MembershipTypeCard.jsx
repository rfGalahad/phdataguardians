import { Box, Typography } from "@mui/material";
import { 
  Check as CheckIcon, 
} from '@mui/icons-material'

import GlareHover from "../../../components/animations/GlareHover";



export const MembershipTypeCard = () => {

  const MembershipType = [
    {
      title: 'Become a Member',
      description: 'Actively participates in our community to learn, share, and implement best practices in data privacy and cybersecurity.',
      benefits: [
        'Gain access to exclusive resources, toolkits, and learning materials.',
        'Receive updates on data privacy trends, news, and events.',
        'Join forums, discussions, and capacity-building sessions.'
      ]
    },
    {
      title: 'Become an Advocate',
      description: 'Go beyond membership by becoming a voice for data privacy and security in their organization or community.',
      benefits: [
        'Represent our cause in your professional network or local community.',
        'Lead initiatives that promote compliance and data protection.',
        'Collaborate with other advocates to drive change at a larger scale.'
      ]
    }
  ]

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        {MembershipType.map((type, index) => (
          <GlareHover
            key={index}
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

                display: 'flex', 
                flexDirection: 'column',
                p: 3
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: '600', color: '#F7CF13', mb: 1 }}>
                {type.title}
              </Typography>
              <Typography variant="body1" sx={{ color: 'white' }}>
                {type.description}
              </Typography>

              {/* BENEFITS LIST */}
              <Box sx={{ mt: 2 }}>
                {type.benefits.map((benefit, index) => (
                  <Box key={index} sx={{ display: 'flex', gap: 1, mb: 1 }}>
                    <CheckIcon sx={{ fontSize: 16,  color: '#F7CF13' }}/>
                    <Typography variant='body2' sx={{ color: 'white' }}>
                      {benefit}
                    </Typography>
                  </Box>
                ))} 
              </Box>
            </Box>
          </GlareHover>
        ))}
      
    </Box>
  )

}