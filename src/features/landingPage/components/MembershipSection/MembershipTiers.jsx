import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import { useAnimation } from "@/hooks/useAnimation";

import { TierCard } from "./TierCard";

const TIER_LIST = [
  { title: "Student/Academic", cost: "300" },
  { title: "Professionals", cost: "500" },
  { title: "Student Organization", cost: "1,000" },
  { title: "Institutional Organization", cost: "3,000" }
];


export const MembershipTiers = ({ id }) => {
  
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
        {/* HEADER */}
        <Stack direction='column' spacing={1} 
          sx={{ 
            color: 'common.white',
             textAlign: 'center', 
             ...animate(100)
          }}
        >
          {/* Heading  */}
          <Typography
            variant='h4'
            sx={{ 
              fontSize: { xs: '1.5rem', md: '2.125rem' },
              fontWeight: 600, 
              color: 'common.white',
            }}
          >
            Membership {' '}
            <Box component="span" sx={{ color: 'secondary.main' }}>
              Tiers
            </Box>
          </Typography>

          {/* Body */}
          <Typography 
            variant='body1' 
            sx={{ 
              fontSize: { xs: '0.875rem', md: '1rem' },
              color: 'common.white' 
            }}
          >
            Unlock exclusive features and member benefits.
          </Typography>
        </Stack>

        {/* TIER CARDS */}
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