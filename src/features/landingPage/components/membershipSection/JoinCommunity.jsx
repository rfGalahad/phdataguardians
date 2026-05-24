import { Box, Container, Typography } from "@mui/material";

import GlareHover from "@/components/animations/GlareHover";
import { MEMBERSHIP_ID_CARD } from "@/constants/cloudinaryConstants";
import { useAnimation } from "@/hooks/useAnimation";
import { getCloudinaryUrl } from "@/services/cloudinary";

import { MembershipTypeCard } from "./MembershipTypeCard";





export const JoinCommunity = ({ id, isMobile }) => {

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
        {/* Text column */}
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
            variant={isMobile ? 'h5' : 'h4'}
            sx={{
              fontWeight: 700,
              color: '#fff',
            }}
          >
            Join Our Community
          </Typography>

          {/* Body — left-aligned on mobile, justified on desktop */}
          <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ textAlign: 'justify', color: '#d8e8f4' }}>
            Be part of a community that champions{' '}
            <Box component='span' sx={{ color: '#F7CF13', fontWeight: 600 }}>
              data privacy and cybersecurity
            </Box>{' '}
            in the Philippines and take an active role in shaping a safer digital
            environment for everyone.
          </Typography>

          <Typography variant={isMobile ? 'body2' : 'body1'} sx={{ textAlign: 'justify', color: '#d8e8f4' }}>
            We welcome individuals, professionals, organizations, and advocates who
            share our mission of advancing data protection and compliance.
          </Typography>
        </Box>

        {/* Membership ID Card */}
        <Box
          sx={{
            flex: 1,
            minWidth: 0,        // prevents flex child overflow
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