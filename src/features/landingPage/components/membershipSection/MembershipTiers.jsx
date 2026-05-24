import { Box, Container, Grid, Typography } from "@mui/material";

import { useAnimation } from "@/hooks/useAnimation";

import { TierCard } from "./TierCard";

const TIER_LIST = [
  { title: "Student/Academic", cost: "300" },
  { title: "Professionals", cost: "500" },
  { title: "Student Organization", cost: "1,000" },
  { title: "Institutional Organization", cost: "3,000" }
];


export const MembershipTiers = ({ id, isMobile }) => {
  
  const { 
    sectionRef,
    animate,
  } = useAnimation({ threshold: 0.1 });

  return (
      <Container
        id={id}
        maxwidth="lg"
        ref={sectionRef}
        sx={{ mt: 12 }}
      >
        {/* HEADER & MEMBERSHIP ID  */}
        <Box sx={{ textAlign: 'center', color: 'white', ...animate(100) }}>
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            sx={{ fontWeight: 600, color: 'white' }}
          >
            Membership {' '}
            <Box component="span" sx={{ color: 'secondary.main' }}>
              Tiers
            </Box>
          </Typography>
        </Box>

      <Grid container spacing={2} mt={3}>
        {TIER_LIST.map((item, index) => (
          <Grid 
            key={index} 
            size={{ xs: 12, sm: 6, lg: 3 }} 
            sx={{ ...animate(1000 + index * 300) }}
          >
            <TierCard
              tier={item.title} 
              cost={item.cost} 
            />
          </Grid>
        ))}
      </Grid>   
      </Container> 
  )
}