import { Box, Container, Grid, Typography } from "@mui/material";

import GlareHover from "@/components/animations/GlareHover";
import { MEMBERSHIP_ID_CARD } from "@/constants/cloudinaryConstants";
import { useAnimation } from "@/hooks/useAnimation";
import { getCloudinaryUrl } from "@/services/cloudinary";

import { MembershipTypeCard } from "./MembershipTypeCard";
import { TierCard } from "./TierCard";



const TIER_LIST = [
  { title: "Student/Academic", cost: "300" },
  { title: "Professionals", cost: "500" },
  { title: "Student Organization", cost: "1,000" },
  { title: "Institutional Organization", cost: "3,000" }
];

export const Membership = ({ id, isMobile }) => {

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
        gap: 6, mt: 12,
        scrollMarginTop: '64px'
      }}
    >
      {/* HEADER & MEMBERSHIP ID  */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          alignItems: 'start',
        }}
      >
        {/* Become a Member - Heading */}
        <Box sx={{ 
          flex: 2,
          display: 'flex', 
          flexDirection: 'column', 
          gap: 2, 
          color: 'white',
          ...animate(100)
        }}>
          <Typography variant={isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: '#F7CF13', mb: {xs: 2, md: 0}, textAlign: {xs: 'center', md: 'justify'} }}>
            Join Our Community
          </Typography>
          <Typography variant='subtitle1' sx={{ fontWeight: 'semi-bold', textAlign: 'justify' }}>
            Be part of a community that champions data privacy and cybersecurity in the Philippines. At Philippine Data Guardians, 
            we believe that protecting personal data and promoting responsible digital practices is a shared responsibility. 
            By joining us, you take an active role in shaping a safer, more secure digital environment for everyone.
          </Typography>
          <Typography variant='subtitle1' sx={{ fontWeight: 'semi-bold', textAlign: 'justify' }}>
            We welcome individuals, professionals, organizations, and advocates who share our mission of advancing data protection and compliance.
          </Typography>
        </Box>

        {/* Membership ID Card Image */}
        <Box sx={{ 
          flex: 1,
          ...animate(300)
        }}>
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
                borderRadius: 2, 
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
              }}
            />
          </GlareHover>
        </Box>
      </Box>

      {/* MEMBERSHIP TYPE CARD */}
      <MembershipTypeCard />

      {/* MEMBERSHIP TIER LIST */}
      <Grid container spacing={2}>
        {TIER_LIST.map((item, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }} sx={{ ...animate(1000 + index * 300) }}>
            <TierCard
              tier={item.title} 
              cost={item.cost} 
            />
          </Grid>
        ))}
      </Grid>      
    </Container>
  );
};