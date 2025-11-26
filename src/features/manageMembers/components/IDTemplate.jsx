import QRCode from 'react-qr-code';

import { Box, Typography } from "@mui/material";
import { School, Work } from "@mui/icons-material";

import Logo from '../../../assets/pdgLogo.png';



export const IDTemplate = ({ selectedMember }) => {

  return (
    <Box 
      sx={{ 
        position: 'relative',
        background: `linear-gradient(to bottom, #0A4787 0%, #053261 100%)`,
        display: 'flex', 
        flexDirection: 'column',
        gap: 6,
        p: 3,
        width: '500px', 
        height:'315px', 
        borderRadius: 2,
        overflow: 'hidden',
        color: 'white'
      }}
    >
      {/* HEADER */}
      <Box sx={{ width: '100%', display: 'flex' }}>
        {/* PDG Logo */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            cursor: 'pointer',
            gap: 1,
            mt: 1
          }}
          onClick={() => handleNavClick('home')}
        >
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{ height: 24 }}
          />
          <Typography
            variant="subtitle2"
            component="div"
            sx={{
              fontWeight: '600',
            }}
          >
            PHILIPPINE DATA <span style={{ color: "#F7CF13" }}>GUARDIANS</span>
          </Typography>
        </Box>

        {/* Membership ID */}
        <Box 
          sx={{ 
            borderTop: '1px solid white',
            background: `linear-gradient(to right, #FFCC00 0%, #D4AF37 50%, #B8860B 100%)`, 
            borderRadius: '8px 0 0 8px', 
            px: 1.5, 
            py: 0.5, 
            position: 'absolute', 
            right: 0,
          }}
        >
            <Typography variant='subtitle1' color='#053261' fontWeight={600}>
              MEMBERSHIP ID
            </Typography>
        </Box>
      </Box>
      
      {/* DETAILS */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Box
          component={'img'}
          src={selectedMember.photo}
          sx={{
            width: '180px',
            height: '180px',
            borderRadius: 1,  
            border: '2px solid white'
          }}
        />
        <Box sx={{ zIndex: 1, display: 'flex', flexDirection: 'column', justifyItems: 'left' }}>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Typography variant='subtitle2' color='#EAC30B' fontWeight={600}>
              {selectedMember.tier}
            </Typography>
            { selectedMember.tier === 'Student/Academe' 
              ? <School sx={{ fontSize: '16px', color: '#EAC30B' }}/>
              : <Work sx={{ fontSize: '16px', color: '#EAC30B' }}/>
            }
          </Box>
          <Typography variant='subtitle1' fontWeight={600} textAlign='left'>
            {selectedMember.name}
          </Typography>
          <Typography variant='caption' textAlign='left' >
            {selectedMember.address}
          </Typography>
          <Box style={{ position: 'absolute', bottom: 26, height: "auto", maxWidth: 64, width: "100%" }}>
            <QRCode
              size={180}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={selectedMember.id}
              viewBox={`0 0 256 256`}
            />
          </Box>
        </Box>
      </Box>

      {/* LOGO BACKGROUND */}
      <Box 
        component={'img'}
        src={Logo}
        sx={{
          position: 'absolute',
          bottom: '-80px',
          right: '5px',
          width: 'auto',
          height: '300px',
          opacity: 0.1,
        }}
      />
      
    </Box>
  )
}