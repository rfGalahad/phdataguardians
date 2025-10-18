import { useState, useEffect } from "react"
import { Box } from "@mui/material"

import { Topbar } from "../components/Topbar"
import { HeroSection } from "../components/sections/HeroSection"
import { Services } from "../components/sections/Services"
import { About } from "../components/sections/About"
import { Membership } from "../components/sections/Membership"
import { Contact } from "../components/sections/Contact"
import { Footer } from "../components/sections/Footer"





export const LandingPage = () => {  

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetSection = document.getElementById('services');
      if (targetSection) {
        const sectionTop = targetSection.offsetTop;
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition >= sectionTop - 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);  

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
      <Box id="services" sx={{ scrollMarginTop: '64px' }}>
        <Services/>
      </Box>
      <Box id="about" sx={{ scrollMarginTop: '64px' }}>
        <About/>
      </Box>
      <Box id="membership" sx={{ scrollMarginTop: '64px' }}>
        <Membership/>
      </Box>
      <Box id="contact" sx={{ scrollMarginTop: '64px' }}>
        <Contact/>
      </Box>

      <Footer/>
    </Box>
  )
}