import { Box, Grid, Typography, Fade, Grow } from "@mui/material"
import { 
  Security as SecurityIcon,
  School as SchoolIcon,
  Gavel as GavelIcon,
  Description as DescriptionIcon,
  ReportProblem as ReportProblemIcon,
  Assessment as AssessmentIcon,
  Public as PublicIcon,
  Computer as ComputerIcon
} from "@mui/icons-material"

import { useAnimation } from "../../hooks/useAnimation";



export const Services = () => {

  const { isVisible, sectionRef } = useAnimation({ threshold: 0.1 });

  const servicesItem = [
    { 
      title: 'Privacy Impact Assesment (PIA)', 
      description: `Assess organizational processes and systems for privacy risk.`, 
      icon: <SecurityIcon sx={{ fontSize: 32, color: '#F7CF13'}}/> 
    },
    { 
      title: 'Data Privacy & Cybersecurity Trainings', 
      description: 'Conduct CPU-accredited workshops, webinars, and seminars.', 
      icon: <SchoolIcon sx={{ fontSize: 32, color: '#F7CF13'}}/> 
    },
    { 
      title: 'Compliance Consulting', 
      description: 'Assistance with compliance to the Data Privacy Act (RA 10173) and other regulations.', 
      icon: <GavelIcon sx={{ fontSize: 32, color: '#F7CF13'}}/> 
    },
    { 
      title: 'Policy & Framework Development', 
      description: 'Drafting privacy manuals, data sharing agreements, and security policies.', 
      icon: <DescriptionIcon sx={{ fontSize: 32, color: '#F7CF13'}}/> 
    },
    { 
      title: 'Data Breach Response & Management', 
      description: 'Incident handling, reporting, and mitigation support.', 
      icon: <ReportProblemIcon sx={{ fontSize: 32, color: '#F7CF13'}}/> 
    },
    { 
      title: 'Audits & Risk Assessment', 
      description: 'Evaluate systems, networks, and organizational processes for vulnerabilities.', 
      icon: <AssessmentIcon sx={{ fontSize: 32, color: '#F7CF13'}}/> 
    },
    { 
      title: 'Research & Advocacy', 
      description: 'Collaborations on studies, projects, and policy development.', 
      icon: <PublicIcon sx={{ fontSize: 32, color: '#F7CF13'}}/> 
    },
    { 
      title: 'Technology Solutions', 
      description: 'Privacy-by-design tools and secure information systems.', 
      icon: <ComputerIcon sx={{ fontSize: 32, color: '#F7CF13'}}/> 
    }
  ];
  


  return (
    <Box
      ref={sectionRef}
      sx={{
        mt: '100vh',
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
        {/* Services - Heading */}
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
              Our Services
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'semi-bold', color: '#FFFFFF', textAlign: 'center' }}>
              We deliver tailored data privacy and cybersecurity strategies designed to meet 
              the unique needs of government agencies, SMEs, and community organizations.
            </Typography>
          </Box>
        </Fade>
      
        {/* Services Item */}
        <Grid container spacing={2} sx={{ width: '100%'}}>
          {servicesItem.map((item, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
              <Grow
                in={isVisible}
                timeout={2000 + (index * 150)}
                style={{ transformOrigin: '0 0 0' }}
              >
                <Box
                  sx={{
                    background: '#FFFFFF',
                    borderRadius: 2,
                    p: 3,
                    borderLeft: `5px solid #F7CF13`,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                  }}
                >
                  <Box sx={{ background: '#053261', borderRadius: 1, width: 48, p: 1, display: 'flex', alignItems: 'center' }}>
                    {item.icon}
                  </Box>
                  <Typography variant='h6' sx={{ fontWeight: '600', color: '#053261'}}>
                    {item.title}
                  </Typography>
                  <Typography variant='subtitle1' sx={{ color: '#404040', wordWrap: 'break-word', whiteSpace: 'normal', flex: 1}}>
                    {item.description}
                  </Typography>
                </Box>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}