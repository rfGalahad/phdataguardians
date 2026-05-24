import { Link, Stack, Typography } from '@mui/material';

const QUICK_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Membership', id: 'membership' },
  { label: 'Services', id: 'services' },
  { label: 'Data Breach Report', id: 'report' },
  { label: 'Contact', id: 'contact' }
];  

export const QuickLinks = () => {

  const handleNavClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Stack direction='column' spacing={2} sx={{ flex: 0.5 }}>
      {/* Header */}
      <Typography 
        variant='subtitle1' 
        fontWeight='bold' 
        sx={{ color: 'secondary.main' }}
      >
        Quick Links
      </Typography>

      {/* Links */}
      <Stack direction='column' spacing={1}>
        {QUICK_LINKS.map((link) => (
          <Link
            key={link.id}
            onClick={() => handleNavClick(link.id)}
            underline='hover'
            color='inherit'
            sx={{
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#F7CF13',
                paddingLeft: 1,
              }
            }}
          >
            <Typography variant='body2'>
              {link.label}
            </Typography>
          </Link>
        ))}
      </Stack>
    </Stack>
  )
}