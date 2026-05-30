import { 
  Assessment as AssessmentIcon,
  Computer as ComputerIcon,
  Description as DescriptionIcon,
  Gavel as GavelIcon,
  Public as PublicIcon,
  ReportProblem as ReportProblemIcon,
  School as SchoolIcon,
  Security as SecurityIcon
} from "@mui/icons-material"
import { Box, Container, Grid, Stack, Typography } from "@mui/material"

import auditAssessment from '@/assets/services_images/audit-assessment.png';
import breachResponse from '@/assets/services_images/breach-response.png';
import complianceConsulting from '@/assets/services_images/compliance-consulting.png';
import piaService from '@/assets/services_images/pia-service.png';
import policyDevelopment from '@/assets/services_images/policy-development.png';
import privacyTraining from '@/assets/services_images/privacy-training.png';
import researchAdvocacy from '@/assets/services_images/research-advocacy.png';
import techSolutions from '@/assets/services_images/tech-solutions.png';
import { useAnimation } from "@/hooks/useAnimation";

import { ServiceCard } from "./ServiceCard";


const SERVICES_ITEM = [
  { 
    title: 'Privacy Impact Assesment (PIA)', 
    description: `Assess organizational processes and systems for privacy risk.`, 
    icon: SecurityIcon,
    image: piaService,
    link: '/services/privacy-impact-assessment'
  },
  { 
    title: 'Data Privacy & Cybersecurity Trainings', 
    description: 'Conduct workshops, webinars, and seminars.', 
    icon: SchoolIcon,
    image: privacyTraining,
    link: '/services/privacy-training'
  },
  { 
    title: 'Compliance Consulting', 
    description: 'Assistance with compliance to the Data Privacy Act (RA 10173) and other regulations.', 
    icon: GavelIcon,
    image: complianceConsulting,
    link: '/services/compliance-consulting'
  },
  { 
    title: 'Policy & Framework Development', 
    description: 'Drafting privacy manuals, data sharing agreements, and security policies.', 
    icon: DescriptionIcon,
    image: policyDevelopment,
    link: '/services/policy-development'
  },
  { 
    title: 'Data Breach Response & Management', 
    description: 'Incident handling, reporting, and mitigation support.', 
    icon: ReportProblemIcon,
    image: breachResponse,
    link: '/services/data-breach-response'
  },
  { 
    title: 'Audits & Risk Assessment', 
    description: 'Evaluate systems, networks, and organizational processes for vulnerabilities.', 
    icon: AssessmentIcon,
    image: auditAssessment,
    link: '/services/audit-risk-assessment'
  },
  { 
    title: 'Research & Advocacy', 
    description: 'Collaborations on studies, projects, and policy development.', 
    icon: PublicIcon,
    image: researchAdvocacy,
    link: '/services/research-advocacy'
  },
  { 
    title: 'Technology Solutions', 
    description: 'Privacy-by-design tools and secure information systems.', 
    icon: ComputerIcon,
    image: techSolutions,
    link: '/services/technology-solutions'
  }
];

export const ServiceSection = ({ id }) => {

  const { 
    isVisible,
    sectionRef,
    animate 
  } = useAnimation({ threshold: 0.1 });  

 
  return (
    <Container 
      id={id}
      maxWidth='lg'
      ref={sectionRef}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 6, mt: 12
      }}
    >
      {/* SERVICES - HEADING */}
      <Stack direction='column' spacing={1} sx={{ textAlign: 'center', ...animate(100) }}>
        {/* Heading */}
        <Typography 
          variant='h4' 
          sx={{ 
            fontSize: { xs: '1.5rem', md: '2.125rem' },
            fontWeight: 'bold', 
            color: 'common.white'
          }}
        >
          Our{' '} 
          <Box component='span' sx={{ color: 'secondary.main' }}>
            Services
          </Box>
        </Typography>

        {/* Body */}
        <Typography 
          variant='body1' 
          sx={{ 
            fontSize: { xs: '0.875rem', md: '1rem' },
            color: 'common.white', 
            textAlign: 'center' 
          }}
        >
          We deliver tailored data privacy and cybersecurity strategies designed to meet 
          the unique needs of government agencies, SMEs, and community organizations.
        </Typography>
      </Stack>
    
      {/* SERVICES */}
      <Grid container spacing={2}>
        {SERVICES_ITEM.map((item, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }} >
            <ServiceCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
              index={index}
              isVisible={isVisible}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}