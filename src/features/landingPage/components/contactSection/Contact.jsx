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

export const Contact = () => {

  const { 
    animate, 
    sectionRef 
  } = useAnimation({ threshold: 0.1 });

  return (
    <Container 
      maxWidth='lg' 
      ref={sectionRef} 
      sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        alignItems: 'center', 
        gap: 4,
        color: 'white',
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
          <Typography variant='h4' sx={{ fontWeight: 'bold', color: '#053261' }}>
            Protect your{' '}
            <Box component='span' sx={{ color: '#FFA000' }}>data</Box>. Secure your business.
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 'semi-bold' }}>
            {`Have questions about data privacy or cybersecurity? We're here to help you protect what matters most. Let's talk.`}
          </Typography>
        </Stack>

        {/* CONTACT DETAILS */}
        <Stack spacing={2} sx={{ ...animate(600) }}>
          {CONTACT_ITEM.map((item, index) => (
            <Box key={index}>
              <ContactDetailsItem
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </Box>
          ))}
        </Stack>

        {/* BUSINESS HOURS */}
        <Stack spacing={1} width='100%' sx={{ ...animate(900) }}>
          <Typography variant="subtitle1" sx={{ fontWeight: '600', color: '#053261' }}>
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
          border: '1px solid #E0E0E0',
          alignSelf: 'stretch',
          ...animate(1200)
        }}
      >
        <SendMessageForm/>   
      </Box>
    </Container>
  )
}