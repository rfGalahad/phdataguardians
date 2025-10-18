import { useState } from "react";
import { Box, Typography, Collapse } from "@mui/material"
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Info as InfoIcon
} from '@mui/icons-material';



export const FullPrivacyPolicy = () => {

  const [ expanded, setExpanded ] = useState(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, px: 2 }}>
      {/* Header */}
      <Box 
        onClick={() => setExpanded(!expanded)}
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            opacity: 0.7,
          }
        }}
      >
        <Typography variant='body1' fontWeight='600' textAlign='left'>
          Full Privacy Policy
        </Typography>
        <Box sx={{ 
          transition: 'transform 0.3s ease',
          transform: expanded ? 'rotate(0deg)' : 'rotate(0deg)'
        }}>
          {expanded ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
        </Box>
      </Box>

      <Collapse in={expanded} timeout={600}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Data We Collect */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant='body1' fontWeight='600' textAlign='left'>
              Data We Collect
            </Typography>
            <Typography variant='body2' sx={{ textAlign: 'justify' }}>
              During registration we collect:
            </Typography>
            <Box component='ul' pl={3}>
              <Typography component='li' variant='body2' sx={{ textAlign: 'justify' }}>
                Personal identification information (name, email address)
              </Typography>
              <Typography component='li' variant='body2' sx={{ textAlign: 'justify' }}>
                Contact information
              </Typography>
              <Typography component='li' variant='body2' sx={{ textAlign: 'justify' }}>
                Account credentials
              </Typography>     
            </Box>
          </Box>

          {/* How We Use Your Information */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant='body1' fontWeight='600' textAlign='left'>
              How We Use Your Information
            </Typography>
            <Typography variant='body2' sx={{ textAlign: 'justify' }}>
              Your information is used to:
            </Typography>
            <Box component='ul' pl={3}>
              <Typography component='li' variant='body2' sx={{ textAlign: 'justify' }}>
                Create and manage your account
              </Typography>
              <Typography component='li' variant='body2' sx={{ textAlign: 'justify' }}>
                Provide customer support
              </Typography>
              <Typography component='li' variant='body2' sx={{ textAlign: 'justify' }}>
                Send important updates about our services
              </Typography>     
            </Box>
          </Box>

          {/* Data Protection */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant='body1' fontWeight='600' textAlign='left'>
              Data Protection
            </Typography>
            <Typography variant='body2' sx={{ textAlign: 'justify' }}>
              We implement industry-standard security measures including encryption, 
              secure servers, and regular security audits to protect your personal information from 
              unauthorized access or disclosure.
            </Typography>
          </Box>

          {/* Your Rights */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant='body1' fontWeight='600' textAlign='left'>
              Your Rights
            </Typography>
            <Typography variant='body2' sx={{ textAlign: 'justify' }}>
              You have the right to:
            </Typography>
            <Box component='ul' pl={3}>
              <Typography component='li' variant='body2' sx={{ textAlign: 'justify' }}>
                Access your personal data
              </Typography>
              <Typography component='li' variant='body2' sx={{ textAlign: 'justify' }}>
                Request correction of inaccurate data
              </Typography>
              <Typography component='li' variant='body2' sx={{ textAlign: 'justify' }}>
                Request deletion of your data
              </Typography>     
              <Typography component='li' variant='body2' sx={{ textAlign: 'justify' }}>
                Withdraw consent at any time
              </Typography>  
            </Box>
          </Box>

          {/* Contact Us */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant='body1' fontWeight='600' textAlign='left'>
              Contact Us
            </Typography>
            <Typography variant='body2' sx={{ textAlign: 'justify' }}>
              For privacy-related questions or requests, contact us at members@phdataguardians.org
            </Typography>
          </Box>

          {/* Last Updated */}
          <Box 
            sx={{ 
              mt: 2,
              display: 'flex', 
              gap: 1, 
              alignItems: 'center', 
              backgroundColor: '#fffbeb', 
              p: 2, 
              borderRadius: 2,
              border: '1px solid #d98722ff'
            }}
          >
            <InfoIcon sx={{ fontSize: '16px', color: '#d98722ff'}}/>
            <Typography variant='body2' fontWeight={600} color='#d98722ff' sx={{ textAlign: 'justify' }}>
              Last Updated:
            </Typography>
            <Typography component='span' variant='body2' color='#494949ff' sx={{ textAlign: 'justify' }}>
              October 2025. We may update this policy periodically. Continued use of our services 
              constitutes acceptance of any changes.
            </Typography>
          </Box>
        </Box>
      </Collapse>
    </Box>
  )
}