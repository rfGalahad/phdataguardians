import { Box, Container, Divider, Grid, Link, Typography, useMediaQuery, IconButton } from "@mui/material";
import { Email, Facebook, LinkedIn, LocationOn, Phone } from "@mui/icons-material";

import Logo from '../../../../assets/pdgLogo.png';

const quickLinks = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Membership', path: '/membership' },
  { title: 'Services', path: '/services' },
  { title: 'Data Breach Report', path: '/' },
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
  { icon: <LocationOn sx={{ fontSize: 18 }}/>, text: 'C5 Ext. Paranaque City, Metro Manila'},
  { icon: <Phone sx={{ fontSize: 18 }}/>, text: '(+63) 929 344 5296'},
  { icon: <Email sx={{ fontSize: 18 }}/>, text: 'members@phdataguardians.org'}
];

const socialLinks = [
  { 
    icon: <Facebook />, 
    url: 'https://www.facebook.com/profile.php?id=61578893785140',
    label: 'Facebook'
  },
  { 
    icon: <LinkedIn />, 
    url: 'https://www.linkedin.com/company/philippine-data-guardians/',
    label: 'LinkedIn'
  }
];

export const Footer = () => {

  return (
    <Box sx={{ background: '#053261' }}>
      <Container 
        maxWidth="lg" 
        sx={{ 
          mt: 12,
          py: 4, 
          color: '#FFFFFF'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, gap: 4 }}>
          {/* COMPANY LOGO & DESCRIPTION */}
          <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                component="img"
                src={Logo}
                alt="Logo"
                sx={{ height: 24 }}
              />
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ fontWeight: 'bold', fontSize: { xs: '0.875rem', md: '1rem' } }}
              >
                PHILIPPINE DATA <span style={{ color: "#F7CF13" }}>GUARDIANS</span>
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ textAlign: 'justify', lineHeight: 1.7 }}>
              Protecting your data, ensuring compliance, and empowering secure operations in the digital world.
            </Typography>
            
            {/* Social Media Icons */}
            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    color: '#FFFFFF',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      backgroundColor: '#F7CF13',
                      color: '#053261',
                      transform: 'translateY(-3px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* QUICK LINKS */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ color: '#F7CF13' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {quickLinks.map((link) => (
                <Link 
                  key={link.title}
                  href={link.path} 
                  underline="hover" 
                  color="inherit"
                  sx={{
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#F7CF13',
                      paddingLeft: 1,
                    }
                  }}
                >
                  <Typography variant='body2'>
                    {link.title}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Box>

          {/* CONTACT INFO */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ color: '#F7CF13' }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {contactInfo.map((info, index) => (
                <Box 
                  key={index} 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: 1.5 
                  }}
                >
                  <Box sx={{ color: '#F7CF13', mt: 0.3 }}>
                    {info.icon}
                  </Box>
                  <Typography variant='body2' sx={{ lineHeight: 1.6 }}>
                    {info.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', my: 3 }}/>
        
        {/* BOTTOM SECTION */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2
        }}>
          <Typography variant='body2' sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            © {new Date().getFullYear()} Philippine Data Guardians. All rights reserved.
          </Typography>
          <Typography variant='body2' sx={{ color: '#F7CF13', textAlign: { xs: 'center', sm: 'right' } }}>
            Securing your digital future.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}