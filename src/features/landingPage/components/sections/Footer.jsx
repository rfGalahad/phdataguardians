import { Box, Container, Divider, Link, Typography } from "@mui/material";
import { Email, Facebook, LinkedIn, LocationPin, Phone } from "@mui/icons-material";

import Logo from '../../../../assets/pdgLogo.png';




export const Footer = () => {

  const quickLinks = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'About Us', path: '/about' },
    { title: 'Testimonials', path: '/testimonials' },
    { title: 'Membership', path: '/membership' },
    { title: 'Contact', path: '/contact' },
  ];  

  const services = [
    { title: 'Privacy Impact Assessment', path: '/' },
    { title: 'Data Privacy Training', path: '/' },
    { title: 'Compliance Consulting', path: '/' },
    { title: 'Policy Development', path: '/' },
    { title: 'Data Breach Response', path: '/' },
  ];

  const contactInfo = [
    { icon: <LocationPin sx={{ fontSize: 18 }}/>, text: 'C5 Ext. Paranaque City, Metro Manila'},
    { icon: <Phone sx={{ fontSize: 18 }}/>, text: '(+63) 929 344 5296'},
    { icon: <Email sx={{ fontSize: 18 }}/>, text: 'members@phdataguardians.org'}
  ];



  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 4, color: '#FFFFFF' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row'}, gap: 4, mb: 4}}>
          {/* COMPANY LOGO & DESCRIPTION */}
          <Box sx={{ flex: 1.5, display: 'flex', flexDirection: 'column', gap: 2}}>
            {/* COMPANY LOGO */}
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1
              }}
            >
              <Box
                component="img"
                src={Logo}
                alt="Logo"
                sx={{ height: 24 }}
              />
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  fontWeight: 'bold',
                }}
              >
                PHILIPPINE DATA <span style={{ color: "#F7CF13" }}>GUARDIANS</span>
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ textAlign: 'justify' }}>
              Protecting your data, ensuring compliance, and empowering secure operations in the digital world.
            </Typography>
            <Box>
              <Facebook/>
              <LinkedIn/>
            </Box>
          </Box>

          {/* QUICK LINKS */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2}}>
            <Typography variant="subtitle1" fontWeight="bold">
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {quickLinks.map((link) => (
                <Box key={link.title}>
                  <Link href={link.path} underline="hover" color="inherit">
                    <Typography variant='body2'>
                      {link.title}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
            
          </Box>

          {/* SERVICES */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2}}>
            <Typography variant="subtitle1" fontWeight="bold">
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {services.map((link) => (
                <Box key={link.title}>
                  <Link href={link.path} underline="hover" color="inherit">
                    <Typography variant='body2'>
                      {link.title}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>

          {/* CONTACT US */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2}}>
            <Typography variant="subtitle1" fontWeight="bold">
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {contactInfo.map((link, index) => (
                <Box key={index} sx={{ display: 'flex', gap: 1 }}>
                  {link.icon}
                  <Typography variant='body2'>
                    {link.text}
                  </Typography>
                </Box>
              ))}
              <Typography variant='caption' sx={{ color: '#CCCCCC' }}>
                Emergency Data Breach Support: 24/7
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: '#CCCCCC', mb: 2 }}/>
        
        <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
          © 2025 Philippine Data Guardians. All rights reserved. | <span style={{ color: '#F7CF13' }}>Securing your digital future.</span>
        </Typography>
      </Container>
    </Box>
  )
}