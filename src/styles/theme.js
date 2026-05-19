import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
  },

  palette: {
    primary: {
      main: '#053161',
      dark: '#04244A',
      light: '#C9DBEE',
    },
    
    secondary: {
      main: '#F7CF13',
      dark: '#FFA000',
      light: '#FFF8E1',
    },
  },
});

export default theme;
