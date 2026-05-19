export const cardStyles = ({ isVisible, entered, index }) => ({
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 2.5,
  p: 4,
  borderRadius: 3,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: '#fff',
  color: 'inherit',

  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
  boxShadow:
    '0 4px 16px -4px rgba(5,50,97,0.12), 0 1px 4px -1px rgba(5,50,97,0.08)',

  transition: entered
    ? `
        border-color 0.25s ease,
        box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1),
        transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
        background-color 0.25s ease
      `
    : `
        opacity 0.6s ease ${index * 0.5}s,
        transform 0.6s ease ${index * 0.5}s,
        border-color 0.25s ease,
        box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1),
        background-color 0.25s ease
      `,

  '&:hover': {
    transform: 'translateY(-5px) scale(1.015)',
    borderColor: 'primary.main',
    boxShadow:
      '0 16px 40px -8px rgba(5,50,97,0.18), 0 2px 8px -2px rgba(5,50,97,0.10)',
  },
});

export const subscribeButtonStyles = {
  zIndex: 2,
  mt: 1,
  textTransform: 'none',
  fontWeight: 600,
  borderRadius: 1,
  border: '0.5px solid',
  borderColor: 'primary.main',
  color: 'primary.main',
  '&:hover': { 
    backgroundColor: 'primary.main', 
    color: 'background.paper' },
};

export const watermarkStyles = {
  zIndex: 1,
  position: 'absolute',
  bottom: '-80px',
  right: { xs: 5, lg: '-40px' },
  opacity: 0.1,
};