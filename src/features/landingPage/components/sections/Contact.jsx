import { EmailOutlined, Phone, LocationPin, AccessTime } from "@mui/icons-material"
import { Box, Container, Typography, Fade, Slide, Zoom } from "@mui/material"

import { useAnimation } from '../../hooks/useAnimation';




export const Contact = () => {

  const { isVisible, sectionRef } = useAnimation({ threshold: 0.1 });

  return (
    <Box ref={sectionRef} sx={{ backgroundColor: '#FFFFFF', py: 8, px: 4 }}>
      <Container 
        maxWidth="lg" 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: 3 
        }}
      >
        {/* Contact Us - Heading */}
        <Fade in={isVisible} timeout={800}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#053261' }}>
              Contact Us  
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'semi-bold', mb: 2 }}>
              Ready to secure your data and ensure compliance? Get in touch with our team for a consultation.
            </Typography>
          </Box>
        </Fade>

        {/* Contact Content */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3
          }}
        >
          {/* Send Message Form */}
          <Fade in={isVisible} timeout={1000}>
            <Box 
              sx={{ 
                flex: 1, 
                display: 'flex', 
                gap: 1, 
                borderLeft: '3px solid #F7CF13', 
                borderTop: '1px solid #cccc',
                borderBottom: '1px solid #cccc',
                borderRight: '1px solid #cccc',
                borderRadius: 2,
                p: 4
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: '600', color: '#053261' }}>
                  Send Us a Message
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#ccccc' }}>
                  Fill out the form below and we'll get back to you soon.
                </Typography>
              </Box>

              <Box>
                {/* Form fields can be added here */}
              </Box>
            </Box>
          </Fade>

          {/* Get in Touch Section */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* Get in Touch - Heading */}
            <Fade in={isVisible} timeout={1200}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: '600', color: '#053261' }}>
                  Get in Touch
                </Typography>  
                <Typography variant="body1" sx={{ color: '#ccccc', textAlign: 'justify' }}>
                  Whether you're a government agency, SME, or community organization, 
                  we're here to help you navigate the complex world of data privacy and cybersecurity.
                </Typography>
              </Box>
            </Fade>

            {/* Contact Details */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Fade in={isVisible} timeout={1400}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <EmailOutlined sx={{ color: '#F7CF13'}}/>
                    <Typography variant='subtitle1' sx={{ fontWeight: 600, color: '#053261' }}>
                      Email
                    </Typography>
                  </Box>
                  <Typography variant='subtitle1' sx={{ color: '#404040' }}>
                    members@phdataguardians.org
                  </Typography>
                </Box>
              </Fade>

              <Fade in={isVisible} timeout={1550}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Phone sx={{ color: '#F7CF13'}}/>
                    <Typography variant='subtitle1' sx={{ fontWeight: 600, color: '#053261' }}>
                      Phone
                    </Typography>
                  </Box>
                  <Typography variant='subtitle1' sx={{ color: '#404040' }}>
                    (+63) 929 344 5296
                  </Typography>
                </Box>
              </Fade>

              <Fade in={isVisible} timeout={1700}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationPin sx={{ color: '#F7CF13'}}/>
                    <Typography variant='subtitle1' sx={{ fontWeight: 600, color: '#053261' }}>
                      Office Address
                    </Typography>
                  </Box>
                  <Typography variant='subtitle1' sx={{ color: '#404040' }}>
                    C5 Ext. Paranaque City, Metro Manila
                  </Typography>
                </Box>
              </Fade>
            </Box>

            {/* Business Hours */}
            <Fade in={isVisible} timeout={1850}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: '600', color: '#053261' }}>
                  Business Hours
                </Typography>  

                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body1" sx={{ color: '#ccccc', textAlign: 'left' }}>
                    Monday - Friday :
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#ccccc', textAlign: 'right' }}>
                    8:00 AM - 5:00 PM
                  </Typography>
                </Box>

                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body1" sx={{ color: '#ccccc', textAlign: 'left' }}>
                    Saturday :
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#ccccc', textAlign: 'right' }}>
                    9:00 AM - 1:00 PM
                  </Typography>
                </Box>

                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body1" sx={{ color: '#ccccc', textAlign: 'left' }}>
                    Sunday :
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#ccccc', textAlign: 'right' }}>
                    Closed
                  </Typography>
                </Box>
              </Box>
            </Fade>

            {/* Support 24/7 */}
            <Zoom in={isVisible} timeout={2000}>
              <Box 
                sx={{ 
                  background: '#FEFCE8',
                  borderLeft: '3px solid #F7CF13', 
                  borderRadius: 2,
                  p: 2,
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1 
                }}
              >
                <AccessTime sx={{ color: '#F7CF13'}}/>
                <Typography variant="subtitle2" sx={{ color: '#404040' }}>
                  Emergency data breach support available 24/7
                </Typography>
              </Box>
            </Zoom>
          </Box>
        </Box>
        
      </Container>
    </Box>    
  )
}