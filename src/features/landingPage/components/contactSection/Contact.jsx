import { EmailOutlined, Phone, LocationPin, AccessTime } from "@mui/icons-material"
import { Box, Container, Typography, Fade, Zoom, useMediaQuery } from "@mui/material"

import { useAnimation } from '../../hooks/useAnimation';
import { ContactDetailsItem } from "./ContactDetailsItem";
import { SendMessageForm } from "./SendMessageForm";


const contactItem = [
  {
    icon: EmailOutlined,
    title: 'Email',
    description: 'members@phdataguardians.org'
  },
  {
    icon: Phone,
    title: 'Phone',
    description: '(+63) 929 344 5296'
  },
  {
    icon: LocationPin,
    title: 'Office Address',
    description: 'C5 Ext. Paranaque City, Metro Manila'
  }
]

export const Contact = () => {

  const { 
    isVisible, 
    sectionRef 
  } = useAnimation({ threshold: 0.1 });

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));


  return (
    <Container 
      maxWidth='lg' 
      ref={sectionRef} 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: 3,
        color: 'white',
      }}
    >
      {/* HEADING */}
      <Fade in={isVisible} timeout={800}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: '#F7CF13' }}>
            Contact Us  
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 'semi-bold', mb: 2, textAlign: 'center' }}>
            Ready to secure your data and ensure compliance? Get in touch with our team for a consultation.
          </Typography>
        </Box>
      </Fade>

      {/* FORM & CONTACT DETAILS */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3
        }}
      >
        {/* SEND MESSAGE FORM */}
        <Fade in={isVisible} timeout={1000}>
          <div><SendMessageForm/></div>
        </Fade>

        {/* CONTACT DETAILS */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* CONTACTS */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {contactItem.map((item, index) => (
              <ContactDetailsItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </Box>

          {/* BUSINESS HOURS */}
          <Fade in={isVisible} timeout={1850}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: '600', color: '#F7CF13' }}>
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

          {/* SUPPORT 24/7 */}
          <Zoom in={isVisible} timeout={1000}>
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
  )
}