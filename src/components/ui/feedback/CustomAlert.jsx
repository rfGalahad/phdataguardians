import { Box, Typography } from "@mui/material";

const VARIANTS = {
  info: {
    border: '#0288d1',
    borderAlpha: 'rgba(2,136,209,0.2)',
    bg: 'rgba(2,136,209,0.05)',
    text: '#01579b',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#0288d1" strokeWidth="1.8" />
        <path d="M12 8v4m0 4h.01" stroke="#0288d1" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  warning: {
    border: '#f59e0b',
    borderAlpha: 'rgba(245,158,11,0.2)',
    bg: 'rgba(245,158,11,0.05)',
    text: '#92400e',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 9v4m0 4h.01" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  error: {
    border: '#d32f2f',
    borderAlpha: 'rgba(211,47,47,0.2)',
    bg: 'rgba(211,47,47,0.05)',
    text: '#7f1d1d',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#d32f2f" strokeWidth="1.8" />
        <path d="M15 9l-6 6M9 9l6 6" stroke="#d32f2f" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  success: {
    border: '#2e7d32',
    borderAlpha: 'rgba(46,125,50,0.2)',
    bg: 'rgba(46,125,50,0.05)',
    text: '#14532d',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#2e7d32" strokeWidth="1.8" />
        <path d="M8 12l3 3 5-5" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
};

export const CustomAlert = ({ severity = 'info', children, sx }) => {
  const v = VARIANTS[severity];

  return (
    <Box
      sx={{
        px: 2.5,
        py: 2,
        borderRadius: 2.5,
        border: `1px solid ${v.borderAlpha}`,
        borderLeft: `4px solid ${v.border}`,
        backgroundColor: v.bg,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1.5,
        ...sx,
      }}
    >
      <Box sx={{ flexShrink: 0, mt: 0.2 }}>
        {v.icon}
      </Box>
      <Typography variant="body2" sx={{ color: v.text, fontWeight: 500, lineHeight: 1.6 }}>
        {children}
      </Typography>
    </Box>
  );
};