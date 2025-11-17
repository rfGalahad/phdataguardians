import { useState, useEffect } from "react"
import { Box, Fab, Zoom } from "@mui/material"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { Topbar } from "../components/topbar/Topbar"
import { HeroSection } from "../components/heroSection/HeroSection"
import { Services } from "../components/serviceSection/Services"
import { About } from "../components/aboutSection/About"
import { Membership } from "../components/membershipSection/Membership"
import { Contact } from "../components/contactSection/Contact"
import { Footer } from "../components/footerSection/Footer"
import { DataBreach } from "../components/dataBreachSection/DataBreach"





export const LandingPage = () => {  

  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetSection = document.getElementById('about');
      const scrollPosition = window.scrollY;

      if (targetSection) {
        const sectionTop = targetSection.offsetTop;
        setIsScrolled(scrollPosition >= sectionTop - 50);
      }

      setShowScrollButton(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box 
      sx={{ 
        position: 'relative', 
        background: `linear-gradient(90deg, #053261 2%, #1E3A8A 50%, #371C87 100%)`
      }}
    >
      <Topbar isScrolled={isScrolled}/>
      <Box id="home" sx={{ scrollMarginTop: '64px' }}>
        <HeroSection/>
      </Box>
      <Box id="about" sx={{ scrollMarginTop: '64px', mt: 12 }}>
        <About/>
      </Box>
      <Box id="membership" sx={{ scrollMarginTop: '64px', mt: 12 }}>
        <Membership/>
      </Box>
      <Box id="services" sx={{ scrollMarginTop: '64px', mt: 12 }}>
        <Services/>
      </Box>
      <Box id="report" sx={{ scrollMarginTop: '64px', mt: 12 }}>
        <DataBreach/>
      </Box>
      <Box id="contact" sx={{ scrollMarginTop: '64px', mt: 12 }}>
        <Contact/>
      </Box>
      <Footer/>

      {/* Floating Scroll-to-Top Button */}
      <Zoom in={showScrollButton}>
        <Box
          sx={{
            position: "fixed",
            bottom: { xs: 16, sm: 24 },
            right: { xs: 16, sm: 24 },
            zIndex: 1000,
          }}
        >
          <Fab
            color="primary"
            size="medium"
            aria-label="scroll back to top"
            onClick={scrollToTop}
            sx={{
              backgroundColor: "#2563eb",
              "&:hover": { backgroundColor: "#1d4ed8" },
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Box>
      </Zoom>
    </Box>
  )
}