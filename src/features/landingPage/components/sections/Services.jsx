import { Box, Grid, Typography, Fade, Container } from "@mui/material"
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

import { ServiceCard } from "../ServiceCard";
import { useAnimation } from "../../hooks/useAnimation";


const servicesItem = [
  { 
    title: 'Privacy Impact Assesment (PIA)', 
    description: `Assess organizational processes and systems for privacy risk.`, 
    icon: SecurityIcon
  },
  { 
    title: 'Data Privacy & Cybersecurity Trainings', 
    description: 'Conduct CPU-accredited workshops, webinars, and seminars.', 
    icon: SchoolIcon
  },
  { 
    title: 'Compliance Consulting', 
    description: 'Assistance with compliance to the Data Privacy Act (RA 10173) and other regulations.', 
    icon: GavelIcon
  },
  { 
    title: 'Policy & Framework Development', 
    description: 'Drafting privacy manuals, data sharing agreements, and security policies.', 
    icon: DescriptionIcon
  },
  { 
    title: 'Data Breach Response & Management', 
    description: 'Incident handling, reporting, and mitigation support.', 
    icon: ReportProblemIcon
  },
  { 
    title: 'Audits & Risk Assessment', 
    description: 'Evaluate systems, networks, and organizational processes for vulnerabilities.', 
    icon: AssessmentIcon
  },
  { 
    title: 'Research & Advocacy', 
    description: 'Collaborations on studies, projects, and policy development.', 
    icon: PublicIcon
  },
  { 
    title: 'Technology Solutions', 
    description: 'Privacy-by-design tools and secure information systems.', 
    icon: ComputerIcon
  }
];

export const Services = () => {

  const { 
    isVisible, 
    sectionRef 
  } = useAnimation({ threshold: 0.1 });  


  return (
    <Container 
      maxWidth='lg'
      ref={sectionRef}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 6
      }}
    >
      {/* SERVICES - HEADING */}
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
    
      {/* SERVICES */}
      <Grid container spacing={2}>
        {servicesItem.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 6, lg: 3 }} >
            <ServiceCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
              isVisible={isVisible}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}