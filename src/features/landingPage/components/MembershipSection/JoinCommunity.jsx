import { Box, Container, Typography } from "@mui/material";

import GlareHover from "@/components/animations/GlareHover";
import { MEMBERSHIP_ID_CARD } from "@/constants/cloudinaryConstants";
import { useAnimation } from "@/hooks/useAnimation";
import { getCloudinaryUrl } from "@/services/cloudinary";

import { MembershipTypeCard } from "./MembershipTypeCard";





export const JoinCommunity = ({ id }) => {

  const { 
    sectionRef,
    animate,
  } = useAnimation({ threshold: 0.1 });

  const MembershipIDCard = getCloudinaryUrl(MEMBERSHIP_ID_CARD)


  return (
    <Container 
      id={id}
      maxWidth='lg'
      ref={sectionRef}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 3, mt: 12,
        scrollMarginTop: '64px'
      }}
    >
      {/* HEADER & MEMBERSHIP ID  */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          alignItems: { xs: 'stretch', md: 'center' },
        }}
      >
        {/* Heading */}
        <Box
          sx={{
            flex: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            color: 'white',
            ...animate(100),
          }}
        >
          {/* Eyebrow */}
          <Typography
            sx={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#F7CF13',
            }}
          >
            Get involved
          </Typography>

          {/* Main heading */}
          <Typography
            variant='h4'
            sx={{
              fontSize: { xs: '1.5rem', md: '2.125rem' },
              fontWeight: 700,
              color: 'common.white',
            }}
          >
            Join Our Community
          </Typography>

          {/* Body 1 */}
          <Typography 
            variant='body1' 
            sx={{ 
              fontSize: { xs: '0.875rem', md: '1rem' },
              textAlign: 'justify', 
              color: 'common.white' 
            }}
          >
            Be part of a community that champions{' '}
            <Box component='span' sx={{ color: 'secondary.main', fontWeight: 600 }}>
              data privacy and cybersecurity
            </Box>{' '}
            in the Philippines and take an active role in shaping a safer digital
            environment for everyone.
          </Typography>

          {/* Body 2 */}
          <Typography 
            variant='body1' 
            sx={{ 
              fontSize: { xs: '0.875rem', md: '1rem' },
              textAlign: 'justify', 
              color: 'common.white' 
            }}
          >
            We welcome individuals, professionals, organizations, and advocates who
            share our mission of advancing data protection and compliance.
          </Typography>
        </Box>

        {/* Membership ID Card */}
        <Box
          sx={{
            flex: 1,
            minWidth: 0,    
            ...animate(300),
          }}
        >
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={200}
            transitionDuration={800}
            playOnce={false}
          >
            <Box
              component='img'
              src={MembershipIDCard}
              sx={{
                width: '100%',
                display: 'block',       // removes inline-block gap below image
                borderRadius: 2,
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
              }}
            />
          </GlareHover>
        </Box>
      </Box>

      {/* MEMBERSHIP TYPE CARD */}
      <MembershipTypeCard />  
    </Container>
  );
};