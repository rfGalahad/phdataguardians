import { useEffect,useState } from "react"

import { KeyboardArrowUp } from "@mui/icons-material";
import { Box, Fab, Zoom } from "@mui/material";

import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { DataBreachSection } from "../components/DataBreachSection";
import { FooterSection } from "../components/FooterSection";
import { HeroSection } from "../components/HeroSection";
import { JoinCommunity } from "../components/MembershipSection/JoinCommunity";
import { MembershipTiers } from "../components/MembershipSection/MembershipTiers";
import { ServiceSection } from "../components/ServiceSection";
import { Topbar } from "../components/Topbar";



export const LandingPage = () => {  

  const [isScrolled, setIsScrolled] = useState(false);

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
      <HeroSection id='home'/>
      <AboutSection id='about'/>  
      <JoinCommunity id='membership'/>
      <MembershipTiers id='membership-tiers'/>
      <ServiceSection id='services'/>
      <DataBreachSection id='data-breach'/>
      <ContactSection id='contact'/>
      <FooterSection/>

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