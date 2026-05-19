import { useState } from 'react';

import { 
  BusinessCenterRounded,
  DesignServicesRounded,
  Facebook as FacebookIcon,
  GavelRounded,
  SchoolRounded,
  SecurityRounded
} from '@mui/icons-material'
import { 
  Box,
  Card,
  CardContent,
  Container, 
  Link, 
  Stack, 
  Typography, 
} from '@mui/material';

import image1 from '@/assets/pdg-banner.png';
import { useAnimation } from '@/hooks/useAnimation';

const ITEMS = [
  {
    label: 'Deep expertise in local regulations and global best practices',
    icon: <GavelRounded sx={{ color: '#F7CF13', flexShrink: 0 }} />,
  },
  {
    label: 'Specialized in government, SME, and community organization needs',
    icon: <BusinessCenterRounded sx={{ color: '#F7CF13', flexShrink: 0 }} />,
  },
  {
    label: 'CPU-accredited training programs and certifications',
    icon: <SchoolRounded sx={{ color: '#F7CF13', flexShrink: 0 }} />,
  },
  {
    label: 'Comprehensive data breach response and management',
    icon: <SecurityRounded sx={{ color: '#F7CF13', flexShrink: 0 }} />,
  },
  {
    label: 'Privacy-by-design technology solutions',
    icon: <DesignServicesRounded sx={{ color: '#F7CF13', flexShrink: 0 }} />,
  },
];


export const About = ({ id, isMobile }) => {

  const [hovered, setHovered] = useState(false);

  const { 
    sectionRef,
    animate
  } = useAnimation({ threshold: 0.3 });

  return (
    <Container
      id={id}
      maxWidth='lg'
      ref={sectionRef}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: {xs: 'column', md: 'row'},
        gap: 4, mt: '100vh',
        scrollMarginTop: '64px',
      }}
    >
      {/* About Us */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          color: 'white',
          position: 'relative',
        }}
      >
        {/* Heading */}
        <Box sx={{ ...animate(300) }}>
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            sx={{
              fontWeight: 700,
              color: '#F7CF13',
              lineHeight: 1.2,
              mb: 2.5,
            }}
          >
            About Us
          </Typography>

          <Typography variant='body1' sx={{ textAlign: 'justify', mb: 2 }}>
            At <span style={{ color: '#F7CF13', fontWeight: '600' }}>Philippine Data Guardians</span>, we specialize in delivering tailored data privacy and cybersecurity 
            strategies designed to meet the unique needs of government agencies, SMEs, and community organizations.
          </Typography>
          <Typography variant='body1' sx={{ textAlign: 'justify' }}>
            Leveraging deep expertise in local regulations and global best practices, we help organizations achieve 
            compliance, strengthen resilience, and build trust in an increasingly digital world. Our mission is simple: 
            to protect your data, ensure regulatory compliance, and empower you to operate securely and confidently.
          </Typography>
        </Box>

        {/* Image */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            borderRadius: 2,
            overflow: 'hidden',
            ...animate(600),
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Box
            component='img'
            src={image1}
            sx={{ width: '100%', display: 'block', borderRadius: 2 }}
          />

          {/* Hover Overlay */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              bgcolor: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.3s ease',
              borderRadius: 2,
            }}
          >
            <FacebookIcon sx={{ color: '#fff', fontSize: 40 }} />
            <Typography
              component={Link}
              href="https://www.facebook.com/profile.php?id=61578893785140"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#fff',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Visit our Facebook page
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Feature cards */}
      <Stack spacing={2}>
        {ITEMS.map((item, index) => (
          <Card
            key={index}
            elevation={0}
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(247,207,19,0.15)',
              borderRadius: 2,
              transition: 'transform 0.2s ease, border-color 0.2s ease, background 0.2s ease',
              '&:hover': {
                transform: 'translateY(-3px)',
                borderColor: 'rgba(247,207,19,0.45)',
                background: 'rgba(247,207,19,0.06)',
              },
              ...animate(1000 + index * 300),
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 44, height: 44,
                  background: 'rgba(247,207,19,0.12)',
                  border: '1px solid rgba(247,207,19,0.25)',
                  borderRadius: 2.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </Box>
              <Typography variant="caption" sx={{ color: '#90a8be', lineHeight: 1.5, fontSize: '0.8rem' }}>
                {item.label}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};