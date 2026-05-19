import { useEffect,useState } from "react"

import { KeyboardArrowUp } from "@mui/icons-material";
import { Box, Fab, useMediaQuery, Zoom } from "@mui/material";

import { About } from "../components/aboutSection/About";
import { Contact } from "../components/contactSection/Contact";
import { DataBreach } from "../components/dataBreachSection/DataBreach";
import { Footer } from "../components/footerSection/Footer";
import { HeroSection } from "../components/heroSection/HeroSection";
import { Membership } from "../components/membershipSection/Membership";
import { Services } from "../components/serviceSection/Services";
import { Topbar } from "../components/topbar/Topbar";



export const LandingPage = () => {  

  const [isScrolled, setIsScrolled] = useState(false);

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 50;
          setIsScrolled(prev => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
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

      <HeroSection id='home' isMobile={isMobile}/>

      <About id='about' isMobile={isMobile}/>
     
      <Membership id='membership' isMobile={isMobile}/>
      
      <Box id="services" sx={{ scrollMarginTop: '64px', mt: 12 }}>
        <Services/>
      </Box>
      <Box id="report" sx={{ scrollMarginTop: '64px', mt: 12 }}>
        <DataBreach/>
      </Box>
      <Box id="contact" sx={{ scrollMarginTop: '64px', mt: 12, background: 'white' }}>
        <Contact/>
      </Box>

      <Footer/>

      {/* Floating Scroll-to-Top Button */}
      <Zoom in={isScrolled}>
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
            <KeyboardArrowUp />
          </Fab>
        </Box>
      </Zoom>
    </Box>
  )
}