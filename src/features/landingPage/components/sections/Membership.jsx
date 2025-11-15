import { Link } from "react-router-dom";
import { Box, Grid, Typography, Fade, Button, useMediaQuery } from "@mui/material";

import { TierCard } from "../TierCard";
import { useAnimation } from "../../hooks/useAnimation";

import MembershipCardImage1 from '../../../../assets/MembershipCard.png';



export const Membership = () => {

  const { isVisible, sectionRef } = useAnimation({ threshold: 0.1 });

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));


  return (
    <Box
      ref={sectionRef}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        py: 8,
        px: 4
      }}
    >
      <Box 
        sx={{
          width: '100%',
          maxWidth: '1200px',
          display: 'flex',
          flexDirection: 'column',
          gap: 6
        }}
      >
        {/* Become a Member & Membership ID  */}
        <Box
          sx={{
            maxHeight: {xs: 'auto', md: '350px'},
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 6,
          }}
        >
          {/* Become a Member - Heading */}
          <Fade in={isVisible} timeout={1000}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, color: 'white' }}>
              <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography variant= {isMobile ? 'h4' : 'h3'} sx={{ fontWeight: 'bold', color: '#F7CF13', mb: {xs: 2, md: 0} }}>
                    Become a Member
                  </Typography>
                  <Box>
                    <Typography variant='subtitle1' sx={{ fontWeight: 'semi-bold', textAlign: 'justify', mb: 2 }}>
                      Be part of a community that champions data privacy and cybersecurity in the Philippines. At Philippine Data Guardians, 
                      we believe that protecting personal data and promoting responsible digital practices is a shared responsibility. 
                      By joining us, you take an active role in shaping a safer, more secure digital environment for everyone.
                    </Typography>
                    <Typography variant='subtitle1' sx={{ fontWeight: 'semi-bold', textAlign: 'justify' }}>
                      Become a verified PDG Member and get your personalized Digital ID. This grants you access to members-only 
                      events, resources, discounts, and e-certificates.
                    </Typography>
                  </Box>
                <Button 
                  component={Link}
                  to='/privacy-notice'
                  variant='outlined' 
                  sx={{ color: '#F7CF13', borderColor: '#F7CF13', mt: {xs: 2, md: 0}}}
                >
                  Register 
                </Button>
              </Box>
            </Box>
          </Fade>

          {/* Images */}
          <Fade in={isVisible} timeout={800}>
            <Box
              component='img'
              src={MembershipCardImage1}
              sx={{ width: '100%', height: '100%', borderRadius: 2, boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.4)' }}
            />
          </Fade>
        </Box>

        {/* Membership Tier List */}
        <Box>
          <Typography variant='h5' sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold', color: '#F7CF13' }}>
            Membership Tiers
          </Typography>

          <Grid container spacing={2} sx={{ width: '100%' }}>
            <Grid size={{ xs: 12, md: 3 }}>
              <TierCard tier="Student/Academic" cost="300" isVisible={isVisible}/>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <TierCard tier="Professionals" cost="500" isVisible={isVisible}/>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <TierCard tier="Student Organization" cost="1,000" isVisible={isVisible}/>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <TierCard tier="Institutional Organization" cost="3,000" isVisible={isVisible}/>
            </Grid>
          </Grid>
        </Box>
      
      </Box>
    </Box>
  )
}