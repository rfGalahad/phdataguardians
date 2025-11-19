import { Box, Container, Typography } from '@mui/material';
import { Construction, Warning } from '@mui/icons-material';

import BackgroundImage from '../../assets/pdgBG.png';




export const DataBreachReport = () => {

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: { xs: "scroll", md: "fixed" }, // better mobile support
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* ICON */}
        <Box
          sx={{
            width: { xs: 120, sm: 150, md: 180 },
            height: { xs: 120, sm: 150, md: 180 },
            borderRadius: "50%",
            background: "#e6eaef",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: { xs: 3, md: 4 },
          }}
        >
          <Construction
            sx={{
              fontSize: { xs: 70, sm: 90, md: 110 },
              color: "#053261",
            }}
          />
        </Box>

        {/* TITLE */}
        <Typography
          variant="h2"
          color="white"
          fontWeight={700}
          sx={{
            mb: 2,
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
          }}
        >
          We're Building Something Great
        </Typography>

        {/* WARNING ROW */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            mb: 2,
            flexDirection: { xs: "column", sm: "row" }, // stack on mobile
          }}
        >
          <Warning
            sx={{ fontSize: { xs: 20, md: 28 }, color: "#F7CF13" }}
          />

          <Typography
            color="#F7CF13"
            fontWeight={500}
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.3rem" },
              textAlign: "center",
            }}
          >
            Data Breach Reporting App is currently under construction.
          </Typography>
        </Box>

        {/* SUBTITLE */}
        <Typography
          color="#ccc"
          sx={{
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
            maxWidth: 600,
          }}
        >
          We're working hard to bring you a secure and reliable platform for
          reporting and tracking data breaches.
        </Typography>
      </Container>
    </Box>

  )
}