import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000412',
    },
    secondary: {
      main: '#e1a903',
    },
    background: {
      default: '#02021a',
      main: '#060625'
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: 'white'
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: 'white'
    },
    h3: {
        fontSize: '1.5rem',
        fontWeight: 700,
        color: 'white'
      },
    h4: {
        fontSize: '1.5rem',
        fontWeight: 700,
        color: 'white'
      },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      color: 'white'
    },
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000412',
        },
      },
    },
  },
});

export default theme;
