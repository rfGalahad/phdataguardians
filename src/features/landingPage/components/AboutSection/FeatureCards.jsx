import {
  BusinessCenterRounded,
  DesignServicesRounded,
  GavelRounded,
  SchoolRounded,
  SecurityRounded
} from '@mui/icons-material'
import {
  Box,
  Card,
  CardContent,
  Typography,
} from '@mui/material';

import { useAnimation } from '@/hooks/useAnimation';

const ITEMS = [
  {
    label: 'Local & global regulation expertise',
    icon: <GavelRounded sx={{ color: 'secondary.main', flexShrink: 0 }} />,
  },
  {
    label: 'Gov, SME & community focus',
    icon: <BusinessCenterRounded sx={{ color: 'secondary.main', flexShrink: 0 }} />,
  },
  {
    label: 'CPU-accredited training',
    icon: <SchoolRounded sx={{ color: 'secondary.main', flexShrink: 0 }} />,
  },
  {
    label: 'Data breach response',
    icon: <SecurityRounded sx={{ color: 'secondary.main', flexShrink: 0 }} />,
  },
  {
    label: 'Privacy-by-design technology',
    icon: <DesignServicesRounded sx={{ color: 'secondary.main', flexShrink: 0 }} />,
  },
];

export const FeatureCards = () => {

  const { 
    animate, 
    sectionRef 
  } = useAnimation({ threshold: 0.1 });
  
  return (
    <Box
      ref={sectionRef}
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: '1fr' },
        gap: 1,
        alignContent: 'end',
      }}
    >
      {ITEMS.map((item, index) => (
        <Card
          key={index}
          elevation={0}
          sx={{
            gridColumn: {
              xs: index === ITEMS.length - 1 && ITEMS.length % 2 !== 0
                ? '1 / -1'
                : 'auto',
              md: 'auto',
            },
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(247,207,19,0.15)',
            borderRadius: 2,
            transition: 'transform 0.2s ease, border-color 0.2s ease, background 0.2s ease',
            '&:hover': {
              transform: 'translateY(-3px)',
              borderColor: 'rgba(247,207,19,0.45)',
              background: 'rgba(247,207,19,0.06)',
            },
            ...animate(800 + index * 100),
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              gap: 1,
              width: '100%',
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                flexShrink: 0,
                background: 'rgba(247,207,19,0.12)',
                border: '1px solid rgba(247,207,19,0.25)',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {item.icon}
            </Box>
            <Typography
              variant='caption'
              sx={{
                color: '#d8e8f4',
              }}
            >
              {item.label}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}