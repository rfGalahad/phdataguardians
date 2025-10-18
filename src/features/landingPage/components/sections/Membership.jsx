import { Box, Grid, Typography, Fade, Grow } from "@mui/material";
import { TaskAlt as TaskAltIcon } from "@mui/icons-material";

import { TierCard } from "../TierCard";
import { useAnimation } from "../../hooks/useAnimation";



export const Membership = () => {

  const { isVisible, sectionRef } = useAnimation({ threshold: 0.1 });

  const membershipBenefits = [
    'Access to Free training sessions, webinars, and workshops (Free Certificate and CPD units).',
    'Be the first to receive announcements on free events, conferences.',
    'Opportunities to join projects, research initiatives.',
    'PDG T-shirt and Membership ID'
  ];

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
          maxWidth: '1200px',
          display: 'flex',
          flexDirection: 'column',
          gap: 6
        }}
      >
        {/* Join Us Heading */}
        <Fade in={isVisible} timeout={800}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#F7CF13' }}>
              Join Us
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'semi-bold', color: '#FFFFFF', textAlign: 'center' }}>
              Become a member of Philippine Data Guardians and gain access to exclusive training, resources, 
              and networking opportunities.
            </Typography>
          </Box>
        </Fade>

        {/* Membership Benefits */}
        <Fade in={isVisible} timeout={1000}>
          <Box
            sx={{
              border: '1px solid white',
              borderRadius: 2,
              background: 'rgba(255, 255, 255, 0.1)',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: '600', color: '#FFFFFF', mb: 2 }}>
              MEMBERSHIP BENEFITS
            </Typography>

            {membershipBenefits.map((benefit, index) => (
              <Grow
                key={index}
                in={isVisible}
                timeout={1200 + (index * 150)}
                style={{ transformOrigin: '0 0 0' }}
              >
                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                  <TaskAltIcon sx={{ color: '#F7CF13'}}/>
                  <Typography variant="body1" sx={{ fontWeight: 'semi-bold', color: '#FFFFFF', textAlign: 'justify' }}>
                    {benefit}
                  </Typography>
                </Box>
              </Grow>
            ))}
          </Box>
        </Fade>

        {/* Tier List */}
        <Grid container spacing={2} sx={{ width: '100%' }}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Grow in={isVisible} timeout={1400} style={{ transformOrigin: '0 0 0' }}>
              <Box>
                <TierCard tier="Student/Academic" cost="300"/>
              </Box>
            </Grow>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Grow in={isVisible} timeout={1550} style={{ transformOrigin: '0 0 0' }}>
              <Box>
                <TierCard tier="Professionals" cost="500"/>
              </Box>
            </Grow>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Grow in={isVisible} timeout={1700} style={{ transformOrigin: '0 0 0' }}>
              <Box>
                <TierCard tier="Student Organization" cost="1,000"/>
              </Box>
            </Grow>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Grow in={isVisible} timeout={1850} style={{ transformOrigin: '0 0 0' }}>
              <Box>
                <TierCard tier="Institutional Organization" cost="3,000"/>
              </Box>
            </Grow>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}