import { Check as CheckIcon } from "@mui/icons-material"
import { Box, Divider, Typography } from "@mui/material"

const MEMBERSHIP_TYPE = [
  {
    title: 'Become a Member',
    description: 'Actively participates in our community to learn, share, and implement best practices in data privacy and cybersecurity.',
    benefits: [
      'Exclusive resources, toolkits, and learning materials',
      'Updates on data privacy trends, news, and events',
      'Access to forums, discussions, and capacity-building sessions',
    ],
    elevated: false,
    cta: 'Join as Member',
  },
  {
    title: 'Become an Advocate',
    description: 'Go beyond membership by becoming a voice for data privacy and security in your organization or community.',
    benefits: [
      'Represent our cause in your professional or local network',
      'Lead initiatives that promote compliance and data protection',
      'Collaborate with advocates to drive change at a larger scale',
    ],
    elevated: false,
    cta: 'Become an Advocate',
  },
]

export const MembershipTypeCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 2,
      }}
    >
      {MEMBERSHIP_TYPE.map((type, index) => (
        <Box
          key={index}
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            p: 3,
            height: '100%',
            border: type.elevated
              ? '1px solid rgba(247,207,19,0.4)'
              : '1px solid rgba(255,255,255,0.1)',
            borderRadius: 2,
            background: type.elevated
              ? 'rgba(247,207,19,0.06)'
              : 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            transition: 'border-color 0.2s ease',
            '&:hover': {
              borderColor: type.elevated
                ? 'rgba(247,207,19,0.65)'
                : 'rgba(255,255,255,0.2)',
            },
          }}
        >
          {/* Elevated badge */}
          {type.elevated && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: 16,
                bgcolor: '#F7CF13',
                color: '#0f1923',
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                px: 1.5,
                py: 0.25,
                borderRadius: '0 0 6px 6px',
              }}
            >
              Elevated
            </Box>
          )}

          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: type.elevated ? '#F7CF13' : '#fff',
              mb: 1,
              lineHeight: 1.3,
            }}
          >
            {type.title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            sx={{
              color: '#90a8be',
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            {type.description}
          </Typography>

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 2 }} />

          {/* Benefits */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, flex: 1 }}>
            {type.benefits.map((benefit, i) => (
              <Box key={i} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                <CheckIcon
                  sx={{
                    fontSize: 15,
                    color: '#F7CF13',
                    flexShrink: 0,
                    mt: '3px',
                  }}
                />
                <Typography variant="body2" sx={{ color: '#d8e8f4', lineHeight: 1.5 }}>
                  {benefit}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  )
}