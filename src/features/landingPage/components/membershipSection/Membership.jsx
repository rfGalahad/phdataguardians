import { Box, Grid, Typography, Fade, useMediaQuery, Container } from "@mui/material";

import { TierCard } from "./TierCard";
import { MembershipTypeCard } from "./MembershipTypeCard";

import { useAnimation } from "../../hooks/useAnimation";

import MembershipIDCard from '../../../../assets/MembershipCard.png';
import GlareHover from "../../../../components/animations/GlareHover";


const tierList = [
  { title: "Student/Academic", cost: "300" },
  { title: "Professionals", cost: "500" },
  { title: "Student Organization", cost: "1,000" },
  { title: "Institutional Organization", cost: "3,000" }
];


export const Membership = () => {

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
        justifyContent: 'center',
        gap: 6
      }}
    >
      {/* HEADER & MEMBERSHIP ID  */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          alignItems: 'end',
        }}
      >
        {/* Become a Member - Heading */}
        <Fade in={isVisible} timeout={1000}>
          <Box sx={{ 
            flex: 2,
            display: 'flex', 
            flexDirection: 'column', 
            gap: 2, 
            color: 'white'
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
        </Fade>

        {/* Membership ID Card Image */}
        <Fade in={isVisible} timeout={1000}>
          <Box sx={{ flex: 1, }}>
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
        </Fade>
      </Box>

      {/* MEMBERSHIP TYPE CARD */}
      <MembershipTypeCard />

      {/* MEMBERSHIP TIER LIST */}
      <Grid container spacing={2}>
        {tierList.map((item, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }} >
            <TierCard 
              tier={item.title} 
              cost={item.cost} 
              isVisible={isVisible}
            />
          </Grid>
        ))}
      </Grid>      
    </Container>
  )
}