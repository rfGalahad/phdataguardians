import { EmailOutlined, LocationPin, Phone } from "@mui/icons-material"
import { Box, Container,  Stack, Typography } from "@mui/material";

import { useAnimation } from '@/hooks/useAnimation';

import { ContactDetailsItem } from "./ContactDetailsItem";
import { SendMessageForm } from "./SendMessageForm";


const CONTACT_ITEM = [
  { icon: EmailOutlined, title: 'Email', description: 'members@phdataguardians.org' },
  { icon: Phone, title: 'Phone', description: '(+63) 929 344 5296' },
  { icon: LocationPin, title: 'Office Address', description: 'C5 Ext. Paranaque City, Metro Manila' }
]

export const ContactSection = ({ id }) => {

  const { 
    animate, 
    sectionRef 
  } = useAnimation({ threshold: 0.1 });

  return (
    <Box sx={{ backgroundColor: 'background.paper', mt: 12 }}>
      <Container 
        id={id}
        maxWidth='lg' 
        ref={sectionRef} 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          alignItems: 'center', 
          gap: 4,
          color: 'common.white',
          p: 4
        }}
      >
        {/* CONTACT DETAILS */}
        <Box
          sx={{
            flex: 1.5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            gap: 3
          }}
        >
          {/* HEADING */}
          <Stack spacing={1} sx={{ ...animate(300) }}>
            <Typography 
              variant='h4' 
              sx={{ 
                fontSize: { xs: '1.5rem', md: '2.125rem' },
                fontWeight: 'bold', 
                color: 'primary.main' 
              }}
            >
              Protect your{' '}
              <Box component='span' sx={{ color: 'secondary.dark' }}>data</Box>. Secure your business.
            </Typography>
            <Typography 
              variant='body1' 
              sx={{ 
                fontSize: { xs: '0.875rem', md: '1rem' },
                color: 'text.secondary', 
                textAlign: 'justify' 
              }}
            >
              {`Have questions about data privacy or cybersecurity? We're here to help you protect what matters most. Let's talk.`}
            </Typography>
          </Stack>

          {/* CONTACT DETAILS */}
          <Stack spacing={2} sx={{ ...animate(600) }}>
            {CONTACT_ITEM.map((item) => (
              <ContactDetailsItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </Stack>

          {/* BUSINESS HOURS */}
          <Stack spacing={1} width='100%' sx={{ ...animate(900) }}>
            <Typography 
              variant="subtitle1" 
              sx={{ fontWeight: '600', color: 'primary.main' }}
            >
              Business Hours
            </Typography>  
            {[
              { label: 'Monday - Friday :', value: '8:00 AM - 5:00 PM' },
              { label: 'Saturday :', value: '9:00 AM - 1:00 PM' },
              { label: 'Sunday :', value: 'Closed' },
            ].map(({ label, value }) => (
              <Box key={label} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{label}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{value}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* SEND MESSAGE FORM */}
        <Box 
          sx={{ 
            flex: 1, 
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            alignSelf: 'stretch',
            ...animate(1200)
          }}
        >
          <SendMessageForm/>   
        </Box>
      </Container>
    </Box>
  )
}